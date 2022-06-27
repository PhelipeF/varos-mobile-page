import React from 'react';
import { Header } from './components/Header';
import * as css from './styles';
import { HomeView } from './pages/Home';
import { Showcase } from './components/Showcase';
import { Footer } from './components/Footer';

const bgImage = '/assets/images/varos-bg.png';

function App() {
  return (
    <css.Container backgroundImage={bgImage}>
      <Header /> 
      <HomeView />
      <Footer />
    </css.Container>
  );
}

export default App;
