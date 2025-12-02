'use server';

/**
 * @fileOverview A tool that translates computer functionality into real-world metaphors and vice-versa.
 *
 * - abstractionTranslationTool - A function that translates computer functionality into real-world metaphors.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AbstractionTranslationInputSchema = z.object({
  text: z.string().describe('The text to be translated.'),
  translationDirection: z
    .enum(['termToMetaphor', 'metaphorToTerm'])
    .describe('The direction of the translation.'),
});

type AbstractionTranslationInput = z.infer<typeof AbstractionTranslationInputSchema>;

const AbstractionTranslationOutputSchema = z.object({
  result: z.string().describe('The resulting translation.'),
});

type AbstractionTranslationOutput = z.infer<typeof AbstractionTranslationOutputSchema>;

export async function abstractionTranslationTool(
  input: AbstractionTranslationInput
): Promise<AbstractionTranslationOutput> {
  return abstractionTranslationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'abstractionTranslationPrompt',
  input: {schema: AbstractionTranslationInputSchema},
  output: {schema: AbstractionTranslationOutputSchema},
  prompt: `你是一位擅长用生动的比喻来解释复杂计算机概念，或者从一个比喻反推其背后技术概念的专家。你的比喻风格应该和这个网站的风格保持一致：通俗易懂、充满想象力，就像给好奇心旺盛的成年人讲故事一样。

  你的任务是根据用户的翻译方向进行操作：

  {{#ifCond translationDirection '==' 'termToMetaphor'}}
  **任务：将计算机术语翻译成一个生动的比喻。**
  
  请将以下计算机功能翻译成一个生动的比喻：
  "{{text}}"
  {{/ifCond}}

  {{#ifCond translationDirection '==' 'metaphorToTerm'}}
  **任务：从一个比喻反推其可能对应的计算机术语或概念。**

  请分析以下比喻，并推断出它最可能描述的计算机术语或概念：
  "{{text}}"
  {{/ifCond}}

  请直接返回结果，不要添加任何额外的解释或开场白。`,
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
