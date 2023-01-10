import './card.scss'

export const Card = ({data}) => {
    console.log(data);
    return (
        <section>
            {data && (<>{
                    data.map((item) => (
                        <div id="card">
                            <div className="layout"></div>
                            <p>{item.title}</p>
                            <img className="article" src={item.cover} alt="cover"/>
                        </div>
                    ))
                }</>
            )}
        </section>
    );
}
