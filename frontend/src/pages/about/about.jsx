import './about.scss'
import {Banner} from '../../components/banner/banner';
import banner from '../../assets/images/banners/about_banner.png'
import {Collapse} from '../../components/collapse/collapse';
import {about} from '../../data/data';

export const About = () => {
    return (
        <main>
            <Banner text="" banner={banner}/>
            <section className="collapse-section">
                {about && about.map(({title, text}, index) =>
                    <Collapse title={title} text={text} key={`about-page-collapse-${index}`}/>
                )}
            </section>
        </main>
    );
}
