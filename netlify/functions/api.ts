import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { storage } from "../../server/storage";
import { insertContactSubmissionSchema } from "../../shared/schema";
import { z } from "zod";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Enable CORS
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  const path = event.path.replace("/.netlify/functions/api", "");

  try {
    if (path === "/contact" && event.httpMethod === "POST") {
      const body = JSON.parse(event.body || "{}");
      const validatedData = insertContactSubmissionSchema.parse(body);
      const submission = await storage.createContactSubmission(validatedData);
      
      return {
        statusCode: 200,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ success: true, id: submission.id }),
      };
    }

    if (path === "/contact" && event.httpMethod === "GET") {
      const submissions = await storage.getContactSubmissions();
      
      return {
        statusCode: 200,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissions),
      };
    }

    return {
      statusCode: 404,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Not found" }),
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          error: "Invalid form data",
          details: error.errors,
        }),
      };
    }

    console.error("API Error:", error);
    return {
      statusCode: 500,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        error: "Internal server error",
      }),
    };
  }
};

export { handler }; 