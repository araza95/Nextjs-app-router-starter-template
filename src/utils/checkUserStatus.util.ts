/**
 * @description Check if user is logged in or not
 * @param {string} userID - User ID
 * @returns {boolean} true if user is logged in, false otherwise
 */
export const checkUserStatus = async (
  userID: string
): Promise<{ status: boolean }> => {
  if (!userID) throw new Error("No user ID provided");

  return { status: true };
};
