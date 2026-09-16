import { questions } from "../data/questions";
import { storyFragments } from "../data/storyFragments";

/**
 * @param {number[]} answers - selected option index per question, in order
 * @param {string} outcomeId - the matched outcome's id, used to pick the
 *   archetype-specific voice for each fragment
 * @param {string} husbandName
 * @returns {{ title: string, copy: string }[]}
 */
export function buildStoryTimeline(answers, outcomeId, husbandName) {
  const fragments = storyFragments[outcomeId];
  return questions.map((q, i) => {
    const fragment = fragments[i][answers[i]];
    return {
      title: q.timelineTitle,
      copy: fragment.split("{H}").join(husbandName),
    };
  });
}
