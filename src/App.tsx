import React from 'react';
import { MobileView } from './pages/Mobile';
import * as css from './styles';

const bgImage = '/assets/images/varos-bg.png';

function App() {
  return (
    <css.Container backgroundImage={bgImage}>
      <MobileView />
    </css.Container>
  );
}

export default App;
