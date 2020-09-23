import React, { Suspense } from 'react';
import './i18n';

import HomePage from './pages/home';

const App = () => {
  return (
      <Suspense fallback={null}>
        <HomePage/>
      </Suspense>
  );
}

export default App;
