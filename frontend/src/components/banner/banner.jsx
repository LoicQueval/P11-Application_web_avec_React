import './banner.scss'

export const Banner = ({banner, text, page}) => {
    return (
        <div className={page === '/' ? 'banner, home' : 'banner'}>
            <div className="banner-overlay"></div>
            <p>{text}</p>
            <img src={banner} alt="banner"/>
        </div>
    );
}
