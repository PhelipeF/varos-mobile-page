import * as css from './styles';

const Footer = (): JSX.Element => {
  return (
    <css.Container>
      <img 
        src="/assets/trendmark.svg"
        alt="Logo from footer"
        onClick={() => window.location.href = '/#top'}
      />
    </css.Container>
  )
};

export { Footer }