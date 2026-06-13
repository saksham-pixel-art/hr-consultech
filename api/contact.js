import { google } from "googleapis";

const REQUIRED_FIELDS = ["name", "email", "message"];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const missingField = REQUIRED_FIELDS.find((field) => !body?.[field]);

    if (missingField) {
      return res.status(400).json({ ok: false, error: `${missingField} is required` });
    }

    const sheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || process.env.client_email;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!sheetId || !clientEmail || !privateKey) {
      return res.status(500).json({ ok: false, error: "Google Sheets API is not configured" });
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:I",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          body.submittedAt || new Date().toISOString(),
          body.name || "",
          body.email || "",
          body.phone || "",
          body.company || "",
          body.role || "",
          body.interest || "",
          body.message || "",
          body.source || "",
        ]],
      },
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form submission failed", error);
    return res.status(500).json({ 
      ok: false, 
      error: "Could not save contact submission",
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
