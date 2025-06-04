import { Handler } from '@netlify/functions';
import { z } from 'zod';

// In-memory storage for contact submissions
const contactSubmissions: Array<{
  id: number;
  name: string;
  email: string;
  projectType?: string;
  message: string;
  createdAt: Date;
}> = [];

let currentId = 1;

// Schema for contact submission validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  projectType: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
});

export const handler: Handler = async (event) => {
  if (event.httpMethod === 'POST') {
    try {
      const body = JSON.parse(event.body || '{}');
      const validatedData = contactSchema.parse(body);
      const submission = {
        id: currentId++,
        ...validatedData,
        createdAt: new Date(),
      };
      contactSubmissions.push(submission);
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, id: submission.id }),
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            success: false,
            error: 'Invalid form data',
            details: error.errors,
          }),
        };
      }
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: 'Internal server error',
        }),
      };
    }
  } else if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify(contactSubmissions),
    };
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }
}; 