'use client';

// React Imports
import { FC, Fragment } from 'react';

// React Query Imports
import { UserLoginMutationHook } from '@/services/react-query-client/auth/user-login';

// Custom Component Imports
import { Button } from '@/components/ui/button';

interface ISignInViewProps {}

const SignInView: FC<ISignInViewProps> = () => {
  const { mutateAsync } = UserLoginMutationHook();

  /**
   * @description Handles the login process for the user
   *
   * @returns {void}
   */
  const handleLogin = async (): Promise<void> => {
    mutateAsync({
      email: 'aliraza@zenkoders.com',
      password: '123123',
    });
  };
  return (
    <Fragment>
      <Button onClick={handleLogin}>Login</Button>
    </Fragment>
  );
};

export default SignInView;
