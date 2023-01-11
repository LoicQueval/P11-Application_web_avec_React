import {Banner} from '../../components/banner/banner';
import {Collapse} from '../../components/collapse/collapse';
import banner from '../../assets/images/banners/about_banner.png'

export const About = () => {
    return (
        <main>
            <Banner text="" banner={banner}/>
            <Collapse/>
        </main>
    );
}
