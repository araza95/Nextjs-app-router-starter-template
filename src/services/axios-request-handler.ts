// Axios Imports
import Axios from "axios";

/**
 * Performs a GET request.
 *
 * @param {string} endPoint - The URL to hit.
 * @param {string} header - The Authorization Token.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the GET request fails.
 */
export const GET = async (
  endPoint: string,
  header: string
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    Axios.get(endPoint, {
      headers: {
        Authorization: `Bearer ${header}`,
      },
    })
      .then((response) => {
        if (response) {
          resolve(response.data);
        }
      })
      .catch((error: Error) => {
        console.error(error);
        reject(error);
      });
  });
};

/**
 * Performs a POST request.
 *
 * @param {string} endPoint - The URL to hit.
 * @param {Array<unknown> | Record<string, never>} data - The request data (optional).
 * @param {string} token - The Authorization Token.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the POST request fails.
 */
export const POST = async (
  endPoint: string,
  data: Array<unknown> | Record<string, never> | unknown = {},
  token = ""
): Promise<unknown> =>
  new Promise((resolve, reject) => {
    Axios.post(endPoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response) {
          resolve(response.data);
        }
      })
      .catch((error: Error) => {
        console.error("response error", error);
        reject(error);
      });
  });

/**
 * Performs a PUT request.
 *
 * @param {string} endPoint - The URL to hit.
 * @param {Array<unknown> | Record<string, never>} data - The request data.
 * @param {string} token - The Authorization Token.
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the PUT request fails.
 */
export const PUT = async (
  endPoint: string,
  data: Array<unknown> | Record<string, never> | unknown = {},
  token = ""
): Promise<unknown> =>
  new Promise((resolve, reject) => {
    Axios.put(endPoint, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response) {
          resolve(response.data);
        }
      })
      .catch((error: Error) => {
        console.error({ error });
        reject(error);
      });
  });

/**
 * Performs a DELETE request.
 *
 * @param {string} endPoint - The URL to hit.
 * @param {string} header - The Authorization Token.
 * @param {unknown} data - The request data (optional).
 * @returns {Promise<unknown>} - A Promise resolving to the response data.
 * @throws Will throw an error if the DELETE request fails.
 */
export const DELETE = async (
  endPoint: string,
  header: string,
  data?: unknown
): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    Axios.delete(endPoint, {
      data,
      headers: {
        Authorization: `Bearer ${header}`,
      },
    })
      .then((res) => {
        if (res) {
          resolve(res.data);
        }
      })
      .catch((error: Error) => {
        reject(error);
        throw error;
      });
  });
};
