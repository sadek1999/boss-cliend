

const Card = ({item}) => {
    const {image,recipe,price,name}=item;
    return (
        <div className="card relative card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-0 px-3 mt-4 mr-10">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default Card;