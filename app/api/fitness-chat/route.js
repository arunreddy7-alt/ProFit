// /pages/api/fitness-chat.js

export default async function handler(req, res) {
  // Only handle POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { message } = req.body;

  // Validate the input
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid input message' });
  }

  try {
    // Make a request to your Gemini AI or any fitness API
    const response = await fetch('YOUR_GEMINI_API_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`, // Make sure to use your correct API key
      },
      body: JSON.stringify({
        prompt: `You are a fitness coach. Answer the following question: ${message}`,
      }),
    });

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`Failed to fetch response from Gemini: ${response.statusText}`);
    }

    const data = await response.json();

    // Check if response data contains the expected message
    if (!data || !data.message) {
      return res.status(500).json({ error: 'Invalid response from AI' });
    }

    // Send the AI response back to the frontend
    res.status(200).json({ message: data.message });
  } catch (error) {
    console.error('Error during API call:', error);
    res.status(500).json({ error: 'Server error, please try again later.' });
  }
}