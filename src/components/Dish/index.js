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

const Dishes = () => {
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

const DishCard = props => {
    return (
        <DishCardContainer>
            <DishTextContainer>
                <DishName>{props.dish.name}</DishName>
                <DishPrice>₹ {props.dish.price}</DishPrice>
                <DishDesc>{props.dish.desc}</DishDesc>
                <CartButtonsContainer>
                    <AddCardBtn>ADD</AddCardBtn>
                    <CustomizeButton />
                </CartButtonsContainer>
            </DishTextContainer>
            <DishImg src={props.dish.img} />
        </DishCardContainer>
    )
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
            if(prevState.qty >= 5) {
                return { qty: 5 };
            } else {
                return { qty: prevState.qty + 1};
            }
        });
    }

    decrementQty = () => {
        this.setState(prevState => {
            if(prevState.qty <= 1) {
                return { qty: 1 };
            } else {
                return { qty: prevState.qty - 1};
            }
        });
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