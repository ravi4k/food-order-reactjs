import React from "react";
import {dishesData} from "./data";
import {
    AddCardBtn, CartButtonsContainer, ChangeButton, CustomizeButtonContainer,
    DishCardContainer,
    DishDesc,
    DishesContainer,
    DishImg,
    DishName, DishPrice, DishTextContainer, MenuTitle, QtyInput,
} from "./DishElements";
import {store} from "../Cart/CartProvider";

class Dishes extends React.Component {
    render() {
        return (
            <DishesContainer>
                <MenuTitle>Food Menu</MenuTitle>
                {dishesData.map((dish, index) => {
                    return (
                        <DishCard dish={dish}/>
                    )
                })}
            </DishesContainer>
        );
    }
}

class DishCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
        }
    }

    onQtyChange = newQty => {
        this.setState( () => {
            return {
                qty: newQty,
            }
        });
    }

    addToCart = () => {
        store.dispatch({
            type: 'add',
            payload: {
                id: this.props.dish.id,
                name: this.props.dish.name,
                qty: this.state.qty,
                price: this.props.dish.price,
            }
        })
    }

    render() {
        return (
            <DishCardContainer>
                <DishTextContainer>
                    <DishName>{this.props.dish.name}</DishName>
                    <DishPrice>₹ {this.props.dish.price}</DishPrice>
                    <DishDesc>{this.props.dish.desc}</DishDesc>
                    <CartButtonsContainer>
                        <AddCardBtn onClick={this.addToCart}>ADD</AddCardBtn>
                        <CustomizeButton onQtyChange={this.onQtyChange}/>
                    </CartButtonsContainer>
                </DishTextContainer>
                <DishImg src={this.props.dish.img}/>
            </DishCardContainer>
        );
    }
}

class CustomizeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            min: 1,
            max: 5
        }
    }

    incrementQty = () => {
        this.setState(prevState => {
            if(prevState.qty < 5) {
                this.handleQtyChange(prevState.qty + 1)
                return { qty: prevState.qty + 1};
            }
        });
        this.handleQtyChange()
    }

    decrementQty = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                this.handleQtyChange(prevState.qty - 1)
                return { qty: prevState.qty - 1};
            }
        });
    }

    handleQtyChange = newQty => {
        this.props.onQtyChange(newQty);
    }

    render() {
        return (
            <CustomizeButtonContainer>
                <ChangeButton onClick={this.decrementQty}>-</ChangeButton>
                <QtyInput value={this.state.qty} readOnly />
                <ChangeButton onClick={this.incrementQty}>+</ChangeButton>
            </CustomizeButtonContainer>
        );
    }
}

export default Dishes;