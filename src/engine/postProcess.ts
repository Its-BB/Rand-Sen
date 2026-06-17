function fixArticleAgreement(sentence: string): string {
  return sentence.replace(/\ba ([aeiouAEIOU])/g, 'an $1');
}

function capitalizeFirst(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function ensurePunctuation(text: string): string {
  const trimmed = text.trim();
  if (!trimmed) return trimmed;
  if (/[.!?]$/.test(trimmed)) return trimmed;
  return trimmed + '.';
}

export function postProcess(sentence: string): string {
  let result = sentence.replace(/\s+/g, ' ').trim();
  result = fixArticleAgreement(result);
  result = capitalizeFirst(result);
  result = ensurePunctuation(result);
  return result;
}
