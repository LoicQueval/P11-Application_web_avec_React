import {useRouteError} from 'react-router-dom';
import './error404.scss';

export const Error404 = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
    );
}
