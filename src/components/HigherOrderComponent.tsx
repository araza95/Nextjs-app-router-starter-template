'use client';

import { useRouter } from 'next/router';
// React Imports
import React, { FC, Fragment, ReactNode, useEffect, useState } from 'react';

// Next JS Imports

// Loading Overlay Imports
import LoadingOverlay from 'react-loading-overlay-ts';

interface IHigherOrderComponentProps {
  children: ReactNode;
}

const HigherOrderComponent: FC<IHigherOrderComponentProps> = ({ children }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  /**
   * Handle route change and set loading state.
   *
   * @description Handle Route Change and set loading state.
   *
   * @returns void
   */
  const handleRouteChange = (): (() => void) => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  };

  useEffect(() => {
    handleRouteChange();
  }, []);

  return (
    <Fragment>
      <LoadingOverlay
        active={loading}
        spinner
        className='h-[100vh]'
      >
        <div>{children}</div>
      </LoadingOverlay>
    </Fragment>
  );
};

export default HigherOrderComponent;
