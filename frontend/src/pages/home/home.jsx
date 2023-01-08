import './home.scss'
import {Card} from '../../components/card/card';
import {Banner} from '../../components/banner/banner';
import logo from '../../assets/images/other/home.png';
import '../../data/data.json'

function Home() {
    return (
        <main id="home-page">
            <Banner text="Chez vous, partout et ailleurs" banner={logo}/>
            <section>
                <Card/>
            </section>
        </main>
    );
}

export default Home;
