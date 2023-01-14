import './collapse.scss'
import arrow from '../../assets/images/icons/arrow-down.png'
import {useState} from 'react';

export const Collapse = ({title, text}) => {
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
                <p>{text}</p>
            </div>
        </div>
    );
}
