import * as css from './styles';

const Showcase = (): JSX.Element => {
const assets = {
    StartupsValuations: '/assets/images/Startups-Valuation.svg',
    growingCompanies: '/assets/images/Empresas-em-crescimento.svg',
    restructuringCompanies: '/assets/images/Empresas-em-Reestruturação.svg',
    matureCompanies: '/assets/images/Empresas-maduras.svg',
  };
  return(
    <css.Container>
      <h2>Você, preparado para <br/> <span>qualquer situação.</span> </h2>

      <css.ContainerItens>
            <css.itensOptions>
                  <img
                        src={assets.StartupsValuations}
                        alt="Valorização de Startups"/>
                        <p>Startups (Valuations por Múltiplos) </p>
            </css.itensOptions>
            <css.itensOptions>  
                  <img
                        src={assets.growingCompanies}
                        alt="Crescimento de Empresas"/>
                        <p>Empresas em Crescimento e Maturação (Fluxo de caixa)</p>
            </css.itensOptions>
      </css.ContainerItens>
      

      <css.ContainerItens>
            <css.itensOptions>
            <img
                  src={assets.matureCompanies}
                  alt="Empresas Maduras"/>
                  <p>Empresas maduras (Modelo de Dividendo Descontado)</p>
            </css.itensOptions>
            <css.itensOptions>
            <img
                  src={assets.restructuringCompanies}
                  alt="Reestruturação de Empresas"/>
                  <p>Empresas em Reestruturação(turn-around)</p>
            </css.itensOptions>
      </css.ContainerItens>
    </css.Container>
)
}
export { Showcase };