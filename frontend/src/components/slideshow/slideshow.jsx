import './slideshow.scss'
import {useLocation} from 'react-router-dom';

export const Slideshow = ({data}) => {
    const pathName = useLocation().pathname.split('/');
    const id = pathName[pathName.length - 1];
    console.log(data.map((item) => item.pictures))
    data.map((item) => console.log(item.pictures))
    console.log(id);
    return (
        <div>
            {data && (
                <>{
                    data.map((item) => item.id === id ?
                        (<div key={item.id}>{
                            item.pictures.map((picture) => (<div>
                                    <img src={picture} alt="toto"/>
                                </div>
                            ))
                        }
                        </div>)
                        :
                        undefined
                    )}
                </>
            )}
        </div>
    );
}
