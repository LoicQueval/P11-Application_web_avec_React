import './banner.scss'

export const Banner = ({banner, text}) => {
    return (
        <div className="banner">
            <div className="card-overlay"></div>
            <p>{text}</p>
            <img src={banner} alt="logo"/>
        </div>
    );
}
