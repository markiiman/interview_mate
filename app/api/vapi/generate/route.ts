// Importing necessary modules and utilities
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';

import { db } from '@/firebase/admin';
import { getRandomInterviewCover } from '@/lib/utils';

// POST handler to generate interview questions and save them to the firestore database
export async function POST(request: Request) {
  // Extracting parameters from the request body
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    // Generating interview questions using Gemini AI model
    const { text: questions } = await generateText({
      model: google('gemini-2.0-flash-001'), // Specifying the AI model
      prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3
    `,
    });

    // Creating an interview object to store in the database
    const interview: Interview = {
      role: role,
      type: type,
      level: level,
      techstack: techstack.split(','),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    // Saving the interview object to the database
    await db.collection('interviews').add(interview);

    // Returning a success response with the interview data
    return Response.json({ success: true, data: interview }, { status: 200 });
  } catch (error) {
    // Logging and returning an error response in case of failure
    console.error('Error:', error);
    return Response.json({ success: false, error: error }, { status: 500 });
  }
}

// GET handler to return a simple success message
export async function GET() {
  return Response.json({ success: true, data: 'Thank you!' }, { status: 200 });
}
