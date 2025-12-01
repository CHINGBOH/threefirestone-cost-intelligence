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
  prompt: `You are an expert at explaining computer functionality using real-world metaphors.

  Please translate the following computer functionality into a metaphor that is easy to understand:

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
