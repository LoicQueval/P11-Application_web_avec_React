import './about.scss'
import {Banner} from '../../components/banner/banner';
import banner from '../../assets/images/banners/about_banner.png'
import {Collapse} from '../../components/collapse/collapse';
import {about} from '../../data/data';
import {useLocation} from 'react-router-dom';

export const About = () => {
    const pathName = useLocation().pathname

    return (
        <main>
            <Banner text="" banner={banner} page={pathName}/>
            <section className="collapse-section">
                {about && about.map(({title, text}, index) =>
                    <Collapse title={title} text={text} key={`about-page-collapse-${index}`}/>
                )}
            </section>
        </main>
    );
}
