
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const SYSTEM_PROMPT = `You are ProFit AI, a knowledgeable fitness coach. Your expertise includes:
- Workout routines and exercise techniques
- Nutrition and diet planning
- Weight loss and muscle gain strategies
- General fitness and wellness advice

Provide concise, practical answers. If asked about medical conditions, remind users to consult healthcare professionals.`;

export async function POST(request) {
  if (!process.env.GOOGLE_API_KEY) {
    console.error('GOOGLE_API_KEY is not set');
    return Response.json(
      { error: 'API key configuration error' },
      { status: 500 }
    );
  }

  try {
    const { message } = await request.json();
    
    if (!message) {
      return Response.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I'll act as ProFit AI, your fitness coach." }],
        }
      ],
    });

    const result = await chat.sendMessage([{ text: message }]);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error('Empty response from AI');
    }

    return Response.json({ message: text });
  } catch (error) {
    console.error('Gemini API error:', error);
    return Response.json(
      { error: error.message || 'Failed to get response from AI' },
      { status: 500 }
    );
  }
}

