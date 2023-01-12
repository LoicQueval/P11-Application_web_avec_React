import './card.scss'

export const Card = ({data}) => {
    console.log(data);
    return (
        <section id="card">
            {data && (<>{
                    data.map((item) => (
                        <a id="card-content" key={item.id} href={`/logement/${item.id}`}>
                            <div className="layout"></div>
                            <p>{item.title}</p>
                            <img className="article" src={item.cover} alt="cover"/>
                        </a>
                    ))
                }</>
            )}
        </section>
    );
}
