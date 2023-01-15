import './slideshow.scss'
import {useState} from 'react';
import slideshowArrow from '../../assets/images/icons/slideshow-arrow.png'

export const Slideshow = ({pictures}) => {
    const [count, setCount] = useState(0)

    const onClickNextPicture = () => {
        count === pictures.length - 1 ? setCount(0) : setCount(count + 1);
    }

    const onClickPreviousPicture = () => {
        count === 0 ? setCount(pictures.length - 1) : setCount(count - 1)
    }

    return (
        <>
            {pictures && (
                <div className="slideshow">
                    {pictures.length > 1 && (
                        <button className="left-arrow" onClick={onClickPreviousPicture}>
                            <img src={slideshowArrow} alt="next_arrow"/>
                        </button>
                    )}
                    <img src={pictures[count]} alt="logement_pictures"/>
                    {pictures.length > 1 && (
                        <button className="next-arrow" onClick={onClickNextPicture}>
                            <img src={slideshowArrow} alt="next_arrow"/>
                        </button>
                    )}
                </div>
            )}
        </>
    );
}
