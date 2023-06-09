import React, { Suspense } from 'react';
import Routes from './AppRoutes';

const App = (): JSX.Element => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
  );
};

export default App;
