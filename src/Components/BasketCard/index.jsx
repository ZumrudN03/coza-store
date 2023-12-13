import React, { useContext } from 'react'
import { BasketContext } from '../../Context/basket'
import './index.scss'

function BasketCard() {
    const { basket, removeBasket, increase, decrease } = useContext(BasketContext)
    return (
        <>

            {basket.length ? (basket.map((x) => (
                <div className='basketCard' key={x.id}>
                    <div className='basketCard_img'>
                        <i className="fa-solid fa-xmark" onClick={() => removeBasket(x)}></i>
                        <img src={x.thumbnail} />
                        <div className='icon_bkg'></div>
                    </div>
                    <div className='basketCard_textbox'>
                        <p className='basketCard_textbox_name'>{x.name}</p>
                        <div className='basketCard_textbox_btn_price'>
                            <div className='basketCard_textbox_count_price'>
                                <span>{x.count}</span>
                                <span>x</span>
                                <span>${(x.price*x.count).toFixed(2)}</span>
                            </div>
                            <div className='basketCard_textbox_inc_dec'>
                            <button onClick={() => decrease(x)}>-</button>
                            <button onClick={() => increase(x)}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))) : <p className='empty'>Basket is empty...</p>}
        </>
    )
}

export default BasketCard