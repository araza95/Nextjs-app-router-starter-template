// Purpose: User interface defines the properties of a user.

// Types Imports
import { USER_ROLES_ENUMS } from '../Enums/user-roles.enum';

export interface IUser<T = undefined> {
  /**
   * Email: User's email address.
   */
  email: string;

  /**
   * First Name: User's first name.
   */
  firstName: string;

  /**
   * Last Name: User's last name.
   */
  lastName: string;

  /**
   * Password: User's password.
   */
  password: string;

  /**
   * Subscription: User's subscription.
   */
  subscription: string;

  /**
   * Token: User's token.
   */
  token: string;

  /**
   * Username: User's username.
   */
  username: string;

  /**
   * User ID: User's ID.
   */
  userId: string;

  /**
   * User Role: User's role.
   */
  role: USER_ROLES_ENUMS;

  /**
   * User's profile picture.
   */
  profilePicture: string;

  /**
   * User's additional info (if any).
   * This is a generic type, so it can be anything.
   */
  additionalInfo: T;
}

// Generic T Type use case
/**

  const user: IUser<{ isAdmin: boolean }> = {
    email: 'admin@example.com',
    // ... other properties ...
    extendedProperties: { isAdmin: true },
  };

 */
