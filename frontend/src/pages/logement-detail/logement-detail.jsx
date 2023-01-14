import {Slideshow} from '../../components/slideshow/slideshow';
import {logement} from '../../data/data';
import { useParams } from "react-router-dom";

export const LogementDetail = () => {
    const { logementId } = useParams();
    const item = logement.filter((item) => item.id === logementId)[0];
    console.log(item);

    return (
        <main>
            <Slideshow data={logement}/>
            <h1>Yé</h1>
        </main>
    );
}
