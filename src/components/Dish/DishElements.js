import styled from "styled-components";

export const DishesContainer = styled.div`
  position: absolute;
  left: 100px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 50%;
  height: 80%;
  padding: 40px;
  background: #fff;
  border-radius: 10px;
  
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

export const MenuTitle = styled.div`
  font-weight: bold;
  color: forestgreen;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 50px;
`

export const DishCardContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 2px solid rgb(200, 200, 200);
  
  :last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export const DishTextContainer = styled.div`
  width: calc(100% - 150px);
`

export const DishImg = styled.img`
  height: 125px;
  width: 125px;
  border-radius: 50%;
  position: absolute;
  right: 0;
`

export const DishName = styled.div`
  color: #2b2b2b;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`

export const DishDesc = styled.div`
  font-style: italic;
  font-size: 0.8rem;
  color: gray;
  margin-bottom: 20px;
`

export const DishPrice = styled.div`
  color: rgb(50, 50, 50);
  margin-bottom: 10px;
`

export const CartButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const AddCardBtn = styled.div`
  width: fit-content;
  padding: 10px 20px;
  font-weight: bold;
  border: 1px solid rgb(150, 150, 150);
  color: forestgreen;
  cursor: pointer;
  margin-right: 20px;
  
  :hover {
    background: forestgreen;
    color: white;
    border: 1px solid transparent;
  }
`

export const CustomizeButtonContainer = styled.div`
    display: flex;
`

export const ChangeButton = styled.button`
  font-size: 1.2rem;
  text-align: center;
  height: 30px;
  width: 30px;
  cursor: pointer;
  border: none;
  background: rgb(230, 230, 230);
  
  :hover {
    background: rgb(200, 200, 200);
  }
`

export const QtyInput = styled.input`
  text-align: center;
  width: 30px;
  background: none;
  border: none;
  cursor: default;
  outline: none;
`