import React from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
    const items = [{
        id: 'c1', name: 'sushi', amount: '2', price: '12.99'
    }]
    const CartItems = (
        <ul className={styles['cart-items']}>
            {items.map((item) => {
                return <li>{item.name}</li>
            })}
        </ul>
    )
    return (
        <Modal onClose={props.onClose}>
            {CartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>12.99</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button-alt']} onClick={props.onClose}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;