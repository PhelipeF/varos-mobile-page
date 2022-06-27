import * as css from './styles';
import { ValuationName } from '../../components/ValuationName';
import { SubscriptionForm } from '../../components/Form';
import { Showcase } from '../../components/Showcase';
import { ClassModules } from '../../components/ClassModules';
import React, { useState } from 'react';
import { Stars } from '../../components/Rating';
import { Schedule } from '../../components/Schedule';

const HomeView = (): JSX.Element => {

  const [dropdown, __dropdown] = useState(false);
  
  function setDropdown(value: boolean): void {
    __dropdown(value);
  }
  
  return (
    <css.Container>
      <ValuationName />
      <div className="showcase-texts">
        <h2>Domine o metodo mais usado no mundo para encontrar ações baratas.</h2>
        <p>Bancos, fundos, investidores. Todos eles usam o Valuation para fechar bons negócios.</p>
      </div>

    <SubscriptionForm />

    <Stars/>

    <Showcase/>

    <ClassModules
      setDropdown={setDropdown}
      dropdown={dropdown}
      component={<Schedule/>}
    />

    </css.Container>
  )
};

export { HomeView };