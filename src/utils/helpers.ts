/**
 * Chooses a random name from an array of names
 * @param names Array of names to choose from
 * @returns A random name from the array, or empty string if array is empty
 */
const chooseRandomName = (names: string[]): string => {
  if (!Array.isArray(names) || names.length === 0) return '';
  const rand = Math.floor(Math.random() * names.length);
  return names[rand];
}

/**
 * Converts a string to URL-friendly slug
 * @param text Text to convert to slug
 * @returns URL-friendly slug string
 */
const slugify = (text: string): string => {
  if (!text) return '';
  
  return text
    .toString()
    .normalize('NFKD') // Normalize unicode characters
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export { 
  chooseRandomName, 
  slugify,
}