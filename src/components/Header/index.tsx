import * as css from './styles';

const assets = {
  logotipo: '/assets/trendmark.svg',
  hamburger: '/assets/images/menu-button.svg'
};

function handleLogo ():void{
  window.location.href = '/#home';    
}

const Header = (): JSX.Element => {
    return(
        <css.Container>
            <css.Logo onClick={handleLogo} logoIMG={assets.logotipo} />
            <button> 
                <img 
                src={assets.hamburger} 
                alt="main menu button"/>
            </button>
        </css.Container>
    )
  
}

export { Header }