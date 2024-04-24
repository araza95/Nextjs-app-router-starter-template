// Note: Storage utility functions

// Cookies Import
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { DefaultOptions } from 'cookies-next/src/types';

/**
 * Sets a cookie on the client side.
 *
 * @param res: Next.js API response object
 *
 * @param key: Key to set
 *
 * @param value: Value to set
 *
 * @param options: Additional options for the cookie (optional)
 *
 * @returns {void}
 *
 * @example setCookie(res, "user", "John Doe", { maxAge: 3600 }) // Sets a cookie with key "user" and value "John Doe" that expires in 1 hour
 *
 */
export const setCookieClientSideFn = (
  key: string,
  value: string,
  options?: DefaultOptions,
): void => {
  if (!key || !value) throw new Error('Key and value must be provided');

  setCookie(key, value, options);
};

/**
 * Sets a cookie on the server side.
 *
 * @param key: Key to set
 *
 * @param value: Value to set
 *
 * @param options: Additional options for the cookie (optional)
 *
 * @returns {void}
 *
 * @example setCookieServerSideFn("user", "John Doe", { maxAge: 3600 }) // Sets a cookie with key "user" and value "John Doe" that expires in 1 hour
 *
 * @throws {Error} - If neither res nor req is provided
 *
 */
export const setCookieServerSideFn = (
  key: string,
  value: string,
  options: DefaultOptions,
): void => {
  if (!options.res || !options.req)
    throw new Error('Either res or req must be provided');

  setCookie(key, value, options);
};

/**
 * Gets a cookie by key from the client side.
 *
 * @param req: Next.js API request object
 *
 * @param key: Key to get
 *
 * @returns {string | undefined} - Value of key if it exists, undefined otherwise
 *
 * @example getCookie(req, "user") // Returns "John Doe" if it exists, undefined otherwise
 *
 * @throws {Error} - If key is not provided
 *
 */
export const getCookieFn = (key: string): string | undefined => {
  if (!key) throw new Error('Key must be provided');

  return getCookie(key);
};

/**
 * Removes a cookie by key from the client side.
 *
 * @param res: Next.js API response object
 *
 * @param key: Key to remove
 *
 * @returns {void}
 *
 * @example removeCookie(res, "user") // Removes the cookie with key "user"
 *
 * @throws {Error} - If key is not provided
 */
export const removeCookie = (key: string, options?: DefaultOptions): void => {
  if (!key) throw new Error('Key must be provided');

  deleteCookie(key, options);
};
