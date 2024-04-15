const Cards = ({data}) => {
    console.log(data[0].title);
    return (
        <>
            <div className="category_card">
                <h1>Kategoriylar</h1>
                <div className="cards">
                    <div className="cards_card">
                        <img src={data.img} />
                            <h3>${data.title}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;