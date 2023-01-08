import './footer.scss'
import logo from '../../assets/images/logo/footer_logo.PNG';

export const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
