import React, { Suspense } from 'react';
import './i18n';

import RootPage from './pages/root';

const App = () => {
  return (
      <Suspense fallback={null}>
        <RootPage/>
      </Suspense>
  );
}

export default App;
