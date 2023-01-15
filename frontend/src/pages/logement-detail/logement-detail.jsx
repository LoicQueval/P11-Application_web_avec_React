import './logement-detail.scss'
import {Slideshow} from '../../components/slideshow/slideshow';
import {logements} from '../../data/data';
import {useParams} from 'react-router-dom';

export const LogementDetail = () => {
    const {logementId} = useParams();
    const logement = logements.filter((item) => item.id === logementId)[0];
    const pictures = logement.pictures;

    return (
        <main id="logement-detail-page">
            <Slideshow pictures={pictures}/>
        </main>
    );
}
