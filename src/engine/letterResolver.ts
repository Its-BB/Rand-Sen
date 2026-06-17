export function matchesLetterConstraint(word: string, letter: string): boolean {
  return word.toLowerCase().startsWith(letter.toLowerCase());
}

export function pickWithLetterConstraint(
  words: string[],
  letters: string[],
  used: Set<string>,
): string | null {
  if (letters.length === 0) return null;

  const letter = letters[Math.floor(Math.random() * letters.length)];
  const candidates = words.filter((w) => matchesLetterConstraint(w, letter) && !used.has(w));
  if (candidates.length === 0) {
    const fallback = words.filter((w) => matchesLetterConstraint(w, letter));
    return fallback.length > 0 ? fallback[Math.floor(Math.random() * fallback.length)] : null;
  }
  return candidates[Math.floor(Math.random() * candidates.length)];
}
