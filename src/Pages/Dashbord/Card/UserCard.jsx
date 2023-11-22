import React from 'react';
import UseCard from '../../../Components/useCard/UseCard';

const UserCard = () => {
    const [card] = UseCard()

    const totalprice = card.reduce((total, item) => total + item.price, 0)

    console.log(card)
    return (
        <div>
            <h1 className='text-4xl'>Total item:{card.length}</h1>
            <h1 className='text-4xl'>Total price :{totalprice}</h1>
            <button className='btn btn-primary'>pay</button>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>item.img</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            card.map(item=> <tr key={item._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </td>
                                <td>
                                <div className="font-bold">{item.name}</div>
                                </td>
                                <td>{item.price} tk</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}
                       
                        
                    </tbody>
                    {/* foot */}
                    

                </table>
            </div>
        </div>
    );
};

export default UserCard;