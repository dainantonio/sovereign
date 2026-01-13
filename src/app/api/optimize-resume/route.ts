import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI with your API key
// Ideally, use process.env.OPENAI_API_KEY for security
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'sk-placeholder', 
});

export async function POST(request: Request) {
  try {
    const { resumeText, targetRole } = await request.json();

    if (!resumeText || !targetRole) {
      return NextResponse.json(
        { error: 'Missing resume text or target role' },
        { status: 400 }
      );
    }

    // This is the prompt we send to GPT
    const systemPrompt = `You are an expert technical recruiter and career coach specializing in AI pivots. 
    Your task is to rewrite resume bullet points to highlight transferable skills for a "${targetRole}" role.
    
    Rules:
    1. Do NOT invent new facts. Use the user's existing experience.
    2. Reframe "soft skills" into "technical/logic-based" language suitable for AI roles.
    3. Highlight keywords like "Iterative testing", "Data validation", "Process optimization".
    4. Return the result as a JSON object with two fields: "analysis" (a short paragraph explaining the changes) and "optimizedContent" (the rewritten resume text).`;

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Here is the resume content:\n${resumeText}` },
      ],
      model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access and budget
      response_format: { type: "json_object" }, // Ensures strictly JSON response
    });

    const result = JSON.parse(completion.choices[0].message.content || '{}');

    return NextResponse.json(result);

  } catch (error) {
    console.error('OpenAI Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate optimization' },
      { status: 500 }
    );
  }
}