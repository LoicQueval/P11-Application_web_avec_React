import './logement-detail.scss'
import {Slideshow} from '../../components/slideshow/slideshow';
import {logements} from '../../data/data';
import {useParams} from 'react-router-dom';
import {Collapse} from '../../components/collapse/collapse';
import {Rating} from '../../components/rating/rating';
import emptyStar from '../../assets/images/rating/rating-star-empty.png';
import star from '../../assets/images/rating/rating-star.png';

export const LogementDetail = () => {
    const {logementId} = useParams();
    const logement = logements.filter((item) => item.id === logementId)[0];
    const pictures = logement.pictures;

    const rating = []
    for (let i = 0; i < 5; i++) {
        if (rating.length < logement.rating) {
            rating.push(star)
        } else {
            rating.push(emptyStar)
        }
    }

    return (
        <main id="logement-detail-page">
            <Slideshow pictures={pictures}/>
            <div className="logement-information">
                <div className="logement-information-left">
                    <h2>{logement.title}</h2>
                    <p>{logement.location}</p>
                    <div className="tags">
                        {logement.tags.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                        }
                    </div>
                </div>
                <div className="logement-information-right">
                    <div>
                        <p>{logement.host.name}</p>
                        <img className="profile" src={logement.host.picture} alt="host_profile"/>
                    </div>
                    <Rating stars={rating}/>
                </div>
            </div>
            <div className="collapses">
                <Collapse text={[logement.description]} style="logement" title="Description"/>
                <Collapse text={logement.equipments} style="logement" title="Équipement"/>
            </div>
        </main>
    );
}
