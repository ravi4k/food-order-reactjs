import React from "react";
import {
    CartContainer,
    CartItemAmount,
    CartItemCardContainer,
    CartItemName,
    CartItemQty,
    CheckoutButton, CheckoutContainer, CheckoutText
} from "./CartElements";
import {
    MenuTitle
} from "../Dish/DishElements";
import {dishesData} from "../Dish/data";

let cartItems = [dishesData[0], dishesData[1], dishesData[3]]

const Cart = props => {
    return (
        <CartContainer>
            <MenuTitle>Cart</MenuTitle>
            {cartItems.map((item, idx) => {
                return (
                    <CartItemCard item={item}/>
                );
            })}
            <CheckoutContainer>
                <CheckoutText>
                    <div>Sub Total</div>
                    <div>₹ {cartItems[0].price}</div>
                </CheckoutText>
                <CheckoutButton>CHECKOUT</CheckoutButton>
            </CheckoutContainer>
        </CartContainer>
    );
}

const CartItemCard = props => {
    return (
        <CartItemCardContainer>
            <CartItemName>{props.item.name}</CartItemName>
            <CartItemQty>1</CartItemQty>
            <CartItemAmount>₹ {props.item.price}</CartItemAmount>
        </CartItemCardContainer>
    )
}

export default Cart;