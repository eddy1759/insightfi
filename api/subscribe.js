import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Decode the Base64 service account key
    const serviceAccountKey = Buffer.from(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64,
      'base64'
    ).toString();
    
    const credentials = JSON.parse(serviceAccountKey);
    
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = 'Waitlist';

    // Rest of your code remains the same
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:A`,
    });

    const existingEmails = response.data.values || [];
    const emailExists = existingEmails.flat().includes(email);

    if (emailExists) {
      return res.status(200).json({ 
        success: true, 
        message: 'already subscribed' 
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:B`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [[
          email, 
          new Date().toISOString()
        ]]
      }
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Google Sheets error:', error);
    
    return res.status(500).json({ 
      error: 'Failed to add email to waitlist' 
    });
  }
}