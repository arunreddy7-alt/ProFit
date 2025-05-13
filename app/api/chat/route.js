
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

    // Example response - replace with your actual AI integration
    const response = {
      message: `This is a response to: "${message}". In a real implementation, this would come from your AI service.`
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

