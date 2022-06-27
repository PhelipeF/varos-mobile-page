import * as css from './styles';

const directory = '/assets/images/valuation-2.png';

const ValuationName = (): JSX.Element => {
  return (
    <css.Container>
      <css.Trend url={directory} />   
    </css.Container>
  )
}

export { ValuationName }