import './collapse.scss'
import arrow from '../../assets/images/icons/arrow-down.png'
import {useState} from 'react';

export const Collapse = ({about}) => {
    const [selectedCollapse, setSelectedCollapse] = useState(false);

    const onCollapseSelected = (e) => {
        const key = e.target.value

        setSelectedCollapse(!selectedCollapse);

        if (selectedCollapse === false) {
            document.getElementById('collapse-' + key).style.display = 'initial';
            document.getElementById('arrow-' + key).style.rotate = '180deg';
        } else {
            document.getElementById('collapse-' + key).style.display = 'none';
            document.getElementById('arrow-' + key).style.rotate = '0deg';
        }
    }

    return (
        <section id="collapse">
            {about && (<>{
                    about.map((item, index) => (<div key={index}>
                            <button onClick={onCollapseSelected} value={index}>
                                <h2>{item.title}</h2>
                                <img id={`arrow-${index}`} src={arrow} alt="arrows-down"/>
                            </button>
                            <div className="content" id={`collapse-${index}`}>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))
                }</>
            )}
        </section>
    );
}
