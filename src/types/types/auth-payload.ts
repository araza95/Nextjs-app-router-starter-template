import { USER_ROLES_ENUMS } from "../Enums/user-roles.enum";

//  =================================================== USER_LOGIN_PAYLOAD ===================================================

export type USER_LOGIN_PAYLOAD = {
  /**
   * Email : User Email Address that will be used for login.
   */
  email: string;

  /**
   * Password : User Password that will be used for login.
   */
  password: string;
};

export type USER_REGISTRATION_PAYLOAD = {
  /**
   * Email : User Email Address that will be used for login.
   */
  email: string;

  /**
   * Password : User Password that will be used for login.
   */
  password: string;

  /**
   * Name : User Name that will be used for login.
   */
  name: string;

  /**
   * Role: User Role that will be used for login.
   */
  role: USER_ROLES_ENUMS;
};
