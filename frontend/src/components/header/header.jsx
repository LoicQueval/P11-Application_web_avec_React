import './header.scss'
import logo from '../../assets/images/logo/header_logo.PNG'

export const Header = () => {
    return (
        <header>
            <h1>
                <img src={logo} alt="logo"/>
            </h1>
            <div>
                <a href="/">Accueil</a>
                <a href="/About">A Propos</a>
            </div>
        </header>
    );
}
