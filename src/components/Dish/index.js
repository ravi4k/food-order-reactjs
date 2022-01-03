import React, {Component} from "react";
import {dishesData} from "./data";
import {
    AddCardBtn,
    CartButtonsContainer,
    ChangeButton,
    CustomizeButtonContainer,
    DishCardContainer,
    DishDesc,
    DishesContainer,
    DishImg,
    DishName,
    DishPrice,
    DishTextContainer,
    MenuTitle,
    NoResultText,
    QtyInput,
    SearchBarContainer,
    SearchButton,
    SearchContainer,
} from "./DishElements";
import {store} from "../Cart/CartProvider";
import {BiSearch} from "react-icons/bi";

class Dishes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: dishesData
        }
    }

    searchDishes = query => {
        query = query.trim().toLowerCase()
        if(query.length !== 0) {
            let filteredDishes = dishesData.filter(dish => {
                return dish.name.toLowerCase().includes(query)
            })
            console.log(filteredDishes)
            this.setState({
                dishes: filteredDishes
            })
        } else {
            this.setState({
                dishes: dishesData
            })
        }
    }
    render() {
        return (
            <DishesContainer>
                <MenuTitle>Food Menu</MenuTitle>
                <SearchBar searchHandler={this.searchDishes} />
                {this.state.dishes.map((dish, index) => {
                    return (
                        <DishCard dish={dish}/>
                    )
                })}
                {this.state.dishes.length == 0 &&
                    <NoResultText>Sorry! No results found.</NoResultText>
                }
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
            return prevState
        });
    }

    decrementQty = () => {
        this.setState(prevState => {
            if(prevState.qty > 1) {
                this.handleQtyChange(prevState.qty - 1)
                return { qty: prevState.qty - 1};
            }
            return prevState
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

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    updateInputValue = evt => {
        const val = evt.target.value.trim().toLowerCase()
        this.setState({
            query: val
        })
        if(val.length === 0) {
            this.props.searchHandler(val)
        }
    }

    handleSearchButton = () => {
        this.props.searchHandler(this.state.query)
    }

    render() {
        return (
            <SearchContainer>
                <SearchBarContainer placeholder="Search Here" onChange={this.updateInputValue}/>
                <SearchButton onClick={this.handleSearchButton}>
                    <BiSearch/>
                </SearchButton>
            </SearchContainer>
        )
    }
}

export default Dishes;