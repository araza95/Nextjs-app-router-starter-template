/**
 * General utility functions.
 */

/**
 * Formats a date to a string.
 *
 * @param date: Date to format
 *
 * @returns {string} - Formatted date string
 *
 * @example formatDate(new Date()) // Returns 2021-08-31T12:00:00.000Z
 *
 * @throws - If no date is provided.
 * 
 */
export const formatDate = (date: Date): string => {
  if (!date) throw new Error("No date provided");
  // Add date formatting logic here
  return date.toISOString();
};

/**
 * Capitalize the first letter of a string.
 * 
 * @param str - The input string.
 * 
 * @returns - The string with the first letter capitalized.
 * 
 * @example capitalizeFirstLetter("hello") // Returns "Hello"
 * 
 * @throws - If no string is provided.
 */
export const capitalizeFirstLetter = (str: string): string => {
  if (!str) throw new Error("No string provided");

  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Check if a string is empty or consists only of whitespace.
 * 
 * @param str - The input string.
 * 
 * @returns - True if the string is empty or contains only whitespace; otherwise, false.
 * 
 * @example isStringEmpty("hello") // Returns false
 * 
 * @throws - If no string is provided.
 * 
 */
export const isStringEmpty = (str: string): boolean => {
  if (!str) throw new Error("No string provided");
  return str.trim() === '';
};

/**
 * Replace all occurrences of a substring in a string.
 * 
 * @param str - The input string.
 * 
 * @param search - The substring to search for.
 * 
 * @param replacement - The substring to replace occurrences with.
 * 
 * @returns - The string with all occurrences of the search substring replaced.
 * 
 * @example replaceAll("hello_ali)", "_", " ") // Returns "hello ali"
 * @example replaceAll("hello123ali123", "123", " ") // Returns "hello ali"
 * 
 * @throws - If no string, search, or replacement is provided.
 */
export const replaceAll = (str: string, search: string, replacement: string): string => {
  if (!str || !search || !replacement) throw new Error("required parameters not provided");

  return str.replace(new RegExp(search, 'g'), replacement);
};
