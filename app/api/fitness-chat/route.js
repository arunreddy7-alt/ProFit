import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    // Validate the input
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid input message' },
        { status: 400 }
      );
    }

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
      return NextResponse.json(
        { error: 'Invalid response from AI' },
        { status: 500 }
      );
    }

    // Send the AI response back to the frontend
    return NextResponse.json({ message: data.message });
  } catch (error) {
    console.error('Error during API call:', error);
    return NextResponse.json(
      { error: 'Server error, please try again later.' },
      { status: 500 }
    );
  }
}
