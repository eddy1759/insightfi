// api/subscribe.js (not TypeScript)
const axios = require('axios');

module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX;

    await axios.post(
      `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        email_address: email,
        status: 'subscribed'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `apikey ${MAILCHIMP_API_KEY}`
        }
      }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Mailchimp error:', error.response?.data || error.message);
    
    // Handle case where subscriber already exists
    if (error.response?.data?.title?.includes('already a list member')) {
      return res.status(200).json({ success: true, message: 'already subscribed' });
    }
    
    return res.status(500).json({ 
      error: error.response?.data?.title || 'Failed to subscribe' 
    });
  }
};