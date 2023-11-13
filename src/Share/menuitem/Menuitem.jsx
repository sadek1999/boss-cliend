

const Menuitem = ({item}) => {
    const {image,recipe,price,name}=item;
     
    return (
        <div className="flex space-x-3">
            <img className="w-20" style={{borderRadius:'0px 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h1 className="text-xl">{name}--------------------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
            
        </div>
    );
};

export default Menuitem;