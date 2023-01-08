import './home.scss'
import logo from '../../assets/images/other/home.png';

function Home() {
    return (
        <main id="home-page">
            <div>
                <div className="card-overlay"></div>
                <p>Chez vous, partout et ailleurs</p>
                <img src={logo} alt="logo"/>
            </div>
            <section>
                <p>yes</p>
            </section>
        </main>
    );
}

export default Home;
