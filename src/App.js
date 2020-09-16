import React, { Suspense } from 'react';
import './i18n';

import HomePage from './pages/home';

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <HomePage/>
      </Suspense>
    </div>
  );
}

export default App;
