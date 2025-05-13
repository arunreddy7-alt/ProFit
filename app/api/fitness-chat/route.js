import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Simple response for testing
    return NextResponse.json({ 
      message: `Received your message: ${body.message || 'No message provided'}`,
      success: true 
    });
  } catch (error) {
    console.error('Error in fitness-chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
