import * as css from './styles';

const assets = {
    Star: '/assets/images/Star.svg',
};

const Stars = (): JSX.Element => {
    return(
    <css.Container>
        <p>Avaliação média do Curso</p>
            <css.containerRating>
                <img
                src={assets.Star}
                alt="Valorização de Startups"/>
                
                <img
                src={assets.Star}
                alt="Valorização de Startups"/>

                <img
                src={assets.Star}
                alt="Valorização de Startups"/>

                <img
                src={assets.Star}
                alt="Valorização de Startups"/>

                <img
                src={assets.Star}
                alt="Valorização de Startups"/>
            </css.containerRating>
        <p>NPS: 83.6</p>
    </css.Container>
    )
}
export {Stars};