const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
  // CORS headers so the browser can call this from your site
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  // Basic validation
  if (!email || !email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const clean = email.trim().toLowerCase();

  const { error } = await supabase
    .from('waitlist')
    .insert([{ email: clean }]);

  if (error) {
    // Duplicate email — treat as success so we don't leak who's on the list
    if (error.code === '23505') {
      return res.status(200).json({ message: "You're already on the list!" });
    }
    console.error('Supabase error:', error);
    return res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }

  return res.status(200).json({ message: "You're on the list! We'll be in touch soon." });
};
