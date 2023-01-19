import './logement-detail.scss'
import {Slideshow} from '../../components/slideshow/slideshow';
import {logements} from '../../data/data';
import { useEffect } from 'react';
import { Error404 } from '../error404/error404';
import {useNavigate, useParams} from 'react-router-dom';
import {Collapse} from '../../components/collapse/collapse';
import {Rating} from '../../components/rating/rating';
import emptyStar from '../../assets/images/rating/rating-star-empty.png';
import star from '../../assets/images/rating/rating-star.png';

export const LogementDetail = (p) => {
    const { logementId } = useParams();
    const filtered = logements.filter((item) => item.id === logementId);

    // Catch incorrect IDs and display a 404 page
    const navigate = useNavigate();
    useEffect(() => {
        if (!filtered || filtered.length === 0) {
            navigate("/404");
        }
    }, [filtered])
    if (!filtered || filtered.length === 0) {
        return <Error404/>;
    }

    // Display the details
    const logement = filtered[0];
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
