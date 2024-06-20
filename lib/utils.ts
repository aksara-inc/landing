import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTypingSequence(
  sequence: Array<string>,
  delay: number = 2500,
): Array<string | number> {
  let result: Array<string | number> = [];
  result.push(delay);
  for (let i = 0; i < sequence.length; i++) {
    result.push(sequence[i]);
    result.push(delay);
  }
  return result;
}

export function generateUniqueID(length: number = 5): string {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const seen = new Set<string>();
  while (true) {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    if (!seen.has(result)) {
      seen.add(result);
      return result;
    }
  }
}
