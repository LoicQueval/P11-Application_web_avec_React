import './rating.scss'

export const Rating = ({stars}) => {
    return (
        <div className="rating">
            {
                stars.map((star, index) => (
                    <img key={index} className="stars" src={star} alt="empty-star"/>
                ))
            }
        </div>
    );
}
