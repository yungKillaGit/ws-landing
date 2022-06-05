import React, { ReactNode } from 'react';
import { MainLayout } from './src/shared/ui';
import App from './src/app';

export const wrapRootElement = ({ element }: {element: ReactNode;}) => {
  return (
    <App>
      {element}
    </App>
  );
};

export const wrapPageElement = ({ element }: {element: ReactNode;}) => {
  return (
    <MainLayout>
      {element}
    </MainLayout>
  );
};
