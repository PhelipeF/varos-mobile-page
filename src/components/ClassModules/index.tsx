import * as css from './styles';


const assets = {
    arrow: '/assets/images/module-arrow.svg'
  };

const ClassModules = ({setDropdown, dropdown, component}:
    {setDropdown(value: boolean): void, dropdown: boolean, component: JSX.Element}): JSX.Element => {
    
     return( 
        <>
        <css.ModuleTitle>
            <h2>Todos os Módulos</h2>
            <button 
                onClick={() => setDropdown(!dropdown)}
            >
                <img 
                src={assets.arrow} 
                alt="menu módulos dropdown"
                />
            </button>
            
            </css.ModuleTitle>
            {!!dropdown && <div>{component}</div>}
            </>
    )
}
export {ClassModules};