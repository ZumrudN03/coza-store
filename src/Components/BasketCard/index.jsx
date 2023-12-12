import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basket'

function BasketCard() {
    const { basket, removeBasket, increase, decrease } = useContext(BasketContext)
    return (
        <div className='basketCard'>
            {basket.length ? (basket.map((x) => (
                <ul key={x.id}>
                    <li><img src={x.thumbnail} /></li>
                    <li>{x.name}</li>
                    <li>${x.price}</li>
                    <button onClick={() => decrease(x)}>-</button>
                    <button onClick={() => removeBasket(x)}>X</button>
                    <button onClick={() => increase(x)}>+</button>
                    <p>{x.count}</p>
                </ul>
            ))) : <p>Basket is empty...</p>}
        </div>
    )
}

export default BasketCard