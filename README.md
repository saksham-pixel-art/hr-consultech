# HR Consultech

React + Vite landing page for EdGro Tech recruitment services.

## Run locally

```bash
npm install
npm run dev
```

## Contact Form Google Sheets API Setup

The "Get In Touch" popup submits to `/api/contact`. That serverless endpoint writes each submission to this Google Sheet:

```text
https://docs.google.com/spreadsheets/d/1SRdUUUxTI0EGqSC4JbMXJB0dF46fN0006u0T4iFzuck/edit
```

The Sheet ID is:

```text
1SRdUUUxTI0EGqSC4JbMXJB0dF46fN0006u0T4iFzuck
```

Create these columns in row 1:

```text
Submitted At, Name, Email, Phone, Company, Role, Interest, Message, Source
```

### Required Environment Variables

Copy `.env.example` to `.env` for local/serverless testing, and add the same variables to your hosting provider:

```text
VITE_CONTACT_API_URL=/api/contact
GOOGLE_SHEET_ID=1SRdUUUxTI0EGqSC4JbMXJB0dF46fN0006u0T4iFzuck
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"
```

Do not put `GOOGLE_CLIENT_EMAIL` or `GOOGLE_PRIVATE_KEY` in frontend code. They must stay server-side only.

### Google Cloud Steps

1. Create a Google Cloud project.
2. Enable the Google Sheets API.
3. Create a service account.
4. Create a JSON key for that service account.
5. Copy `client_email` into `GOOGLE_CLIENT_EMAIL`.
6. Copy `private_key` into `GOOGLE_PRIVATE_KEY`.
7. Share the Google Sheet with the service account email as an editor.
8. Restart/redeploy the app after adding env variables.

For Vercel, add these in `Project Settings > Environment Variables`.
