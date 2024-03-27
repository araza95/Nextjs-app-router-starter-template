import { USER_ROLES_ENUMS } from "../Enums/user-roles.enum";

//  =================================================== USER_LOGIN_PAYLOAD ===================================================

export type GET_USER_PAYLOAD = {
  /**
   * Email : User Email Address that will be used for login.
   */
  email: string;

  /**
   * user role: User role that will be used for login.
   */
  role: USER_ROLES_ENUMS;
};
