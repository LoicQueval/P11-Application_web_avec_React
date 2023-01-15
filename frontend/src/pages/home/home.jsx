import './home.scss'
import {Card} from '../../components/card/card';
import {Banner} from '../../components/banner/banner';
import banner from '../../assets/images/banners/home_banner.png';
import {logements} from '../../data/data';
import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

function Home() {
    const pathName = useLocation().pathname
    const [data, setData] = useState(undefined);

    useEffect(() => {
        setData(logements);
    }, []);

    return (
        <main id="home-page">
            <Banner text="Chez vous, partout et ailleurs" banner={banner} page={pathName}/>
            <Card data={data}/>
        </main>
    );
}

export default Home;
