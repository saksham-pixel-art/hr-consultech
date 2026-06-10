# HR Consultech

React + Vite landing page for EdGro Tech recruitment services.

## Run locally

```bash
npm install
npm run dev
```

## Contact form spreadsheet setup

The "Get In Touch" popup submits form data to `VITE_SHEETS_WEBHOOK_URL`.

1. Copy `.env.example` to `.env`.
2. Create a Google Sheet with columns:

```text
Submitted At, Name, Email, Phone, Company, Role, Interest, Message, Source
```

3. Open `Extensions > Apps Script` in that sheet and deploy this as a web app:

```js
const SHEET_NAME = "Sheet1";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.company || "",
    data.role || "",
    data.interest || "",
    data.message || "",
    data.source || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Set the deployed web app URL in `.env`:

```text
VITE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

5. Restart the Vite server after changing `.env`.
