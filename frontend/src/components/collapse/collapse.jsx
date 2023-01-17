import './collapse.scss'
import arrow from '../../assets/images/icons/collapse-arrow.png'
import {useState} from 'react';

export const Collapse = ({title, text, style}) => {
    const [isSelected, setSelected] = useState(false);

    const onCollapseSelected = () => {
        setSelected(!isSelected);
    }

    return (
        <div className="collapse">
            <button onClick={onCollapseSelected}>
                <h2>{title}</h2>
                <img src={arrow} className={isSelected ? 'open-collapse-arrow' : 'close-collapse-arrow'}
                     alt="arrow-icon"/>
            </button>
            <div className={isSelected ? 'open-collapse' : 'close-collapse'}>
                {text.map((item, index) => (
                    <p className={style === 'logement' ? 'logement' : ''} key={index}>{item}</p>
                ))
                }
            </div>
        </div>
    );
}
