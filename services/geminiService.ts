import { GoogleGenAI } from "@google/genai";
import { Question } from "../types";

const API_KEY = process.env.API_KEY || "";

export const getAIExplanation = async (question: Question): Promise<string> => {
  if (!API_KEY) {
    return "AI explanation unavailable. Please configure the API Key.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const model = "gemini-3-flash-preview";

    const prompt = `
    You are an expert AI Tutor. Explain why the answer "${question.correctAnswer}" is correct for the following question:
    "${question.text}"
    
    The options were:
    A) ${question.options.A}
    B) ${question.options.B}
    C) ${question.options.C}
    D) ${question.options.D}

    Provide a concise, clear explanation (max 3 sentences) suitable for a student learning about Agentic AI.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "No explanation generated.";
  } catch (error) {
    console.error("Error fetching AI explanation:", error);
    return "Failed to fetch AI explanation. Please try again later.";
  }
};
