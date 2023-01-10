import './home.scss'
import {Card} from '../../components/card/card';
import {Banner} from '../../components/banner/banner';
import banner from '../../assets/images/banners/home_banner.png';
import {accomodation} from '../../data/data';
import {useEffect, useState} from 'react';

function Home() {

    const [data, setData] = useState(undefined);

    useEffect(() => {
        setData(accomodation);
    }, []);

    return (
        <main id="home-page">
            <Banner text="Chez vous, partout et ailleurs" banner={banner}/>
            <Card data={data}/>
        </main>
    );
}

export default Home;
