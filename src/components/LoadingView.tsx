'use client';

import { JSX } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
export default function LoadingView({
  className,
}: {
  className?: string;
}): JSX.Element {
  return (
    <LoadingOverlay
      className={
        className ||
        'h-screen w-screen flex items-center justify-center bg-white bg-opacity-50 text-center'
      }
      active={true}
      spinner
      fadeSpeed={1500}
      text='Loading...'
    />
  );
}
