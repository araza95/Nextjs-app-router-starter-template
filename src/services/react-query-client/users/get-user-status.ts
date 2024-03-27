// React Query Imports
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// API & Service Imports
import { URL } from "@/services/api-base-urls";
import { POST } from "@/services/axios-request-handler";

// Types Imports
import { GET_USER_PAYLOAD } from "@/types/types/user-payload";
import { USER_ROLES_ENUMS } from "@/types/Enums/user-roles.enum";
import { CustomAxiosErrorType } from "@/types/types/shared.types";

/**
 * React Query hook to fetch user status.
 *
 * @param email - User's email address.
 * @param role - User's role (enum).
 *
 * @returns {Object} - React Query hook result object.
 */
export const GetUserStatusQueryHook = (
  email: string,
  role: USER_ROLES_ENUMS
): UseQueryResult<unknown, Error> => {
  /**
   * Function to perform the actual API call to get user status.
   *
   * @param payload - Payload containing user email and role.
   *
   * @returns {Promise<unknown>} - Promise resolving to the API response.
   * @throws Will throw an error if the API call fails.
   */
  const getUserStatusFn = async (
    payload: GET_USER_PAYLOAD
  ): Promise<unknown> => {
    try {
      // Perform a POST request to get user status
      const response = await POST(URL.GET_USER, payload);
      return response;
    } catch (error) {
      const axiosError = error as CustomAxiosErrorType;

      // Handle and rethrow the error with a custom message
      throw new Error(
        axiosError.response?.data?.message ?? "Unable to get user status"
      );
    }
  };

  return useQuery({
    queryKey: ["userID"],
    queryFn: () =>
      getUserStatusFn({
        email,
        role,
      }),
    // Stale time set to Infinity to always fetch fresh data
    staleTime: Infinity,
    // Retry once in case of a failed request
    retry: 1,
  });
};
