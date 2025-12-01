'use server';

/**
 * @fileOverview A tool that translates computer functionality into real-world metaphors.
 *
 * - abstractionTranslationTool - A function that translates computer functionality into real-world metaphors.
 * - AbstractionTranslationInput - The input type for the abstractionTranslationTool function.
 * - AbstractionTranslationOutput - The return type for the abstractionTranslationTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AbstractionTranslationInputSchema = z.object({
  computerFunctionality: z
    .string()
    .describe('The computer functionality to be translated into a metaphor.'),
});

export type AbstractionTranslationInput = z.infer<typeof AbstractionTranslationInputSchema>;

const AbstractionTranslationOutputSchema = z.object({
  metaphor: z.string().describe('A real-world metaphor for the computer functionality.'),
});

export type AbstractionTranslationOutput = z.infer<typeof AbstractionTranslationOutputSchema>;

export async function abstractionTranslationTool(
  input: AbstractionTranslationInput
): Promise<AbstractionTranslationOutput> {
  return abstractionTranslationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'abstractionTranslationPrompt',
  input: {schema: AbstractionTranslationInputSchema},
  output: {schema: AbstractionTranslationOutputSchema},
  prompt: `你是一位擅长用生动有趣的比喻来解释复杂计算机概念的专家。
  请将以下计算机功能翻译成一个小学生也能轻松理解的比喻：

  {{computerFunctionality}}`,
});

const abstractionTranslationFlow = ai.defineFlow(
  {
    name: 'abstractionTranslationFlow',
    inputSchema: AbstractionTranslationInputSchema,
    outputSchema: AbstractionTranslationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
