import React from "react";
import {
    CartContainer,
    CartItemAmount,
    CartItemCardContainer,
    CartItemName,
    CartItemQty,
    CheckoutButton, CheckoutContainer, CheckoutText, DeliveryText
} from "./CartElements";
import {
    MenuTitle
} from "../Dish/DishElements";
import {store} from "./CartProvider";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            totalAmount: 0,
            deliveryApplies: false,
        }
    }

    unsubscribe = store.subscribe(() => {
        this.setState(prevState => {
            let totalAmount = store.getState().totalAmount
            let deliveryApplied = false
            if(totalAmount < 100) {
                totalAmount += 20
                deliveryApplied = true
            }
            return { items: Array.from(store.getState().items), totalAmount: totalAmount, deliveryApplied: deliveryApplied }
        })
    })

    render() {
        return (
            <CartContainer>
                <MenuTitle>Cart</MenuTitle>
                {this.state.items.map((item, idx) => {
                    return (
                        <CartItemCard item={item}/>
                    );
                })}
                <CheckoutContainer>
                    <CheckoutText>
                        <div>Sub Total</div>
                        <div>₹ {this.state.totalAmount}</div>
                    </CheckoutText>
                    <CheckoutButton>CHECKOUT →</CheckoutButton>
                    { this.state.deliveryApplied &&
                        <DeliveryText>
                            <div>Delivery Charges: ₹ 20</div>
                        </DeliveryText>
                    }
                </CheckoutContainer>
            </CartContainer>
        );
    }
}

const CartItemCard = props => {
    return (
        <CartItemCardContainer>
            <CartItemName>{props.item.name}</CartItemName>
            <CartItemQty>{props.item.qty}</CartItemQty>
            <CartItemAmount>₹ {props.item.amount}</CartItemAmount>
        </CartItemCardContainer>
    )
}

export default Cart;