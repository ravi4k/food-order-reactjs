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

export const FiltersContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;
  width: 100%;
`

export const SearchContainer = styled.div`
  display: flex;
  width: 60%;
`

export const SearchBarContainer = styled.input`
  border: none;
  outline: none;
  padding: 10px;
  font-size: 1rem;
  border-right: 1px solid black;
  height: 50px;
  width: 100%;
`

export const SearchButton = styled.button`
  background: none;
  border: none;
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 10px;
  font-size: 1.2rem;
  
  :hover {
    background: lightgray;
  }
`

export const ToggleContainer = styled.div`
  display: flex;
`

export const ToggleButton = styled.button`
  height: 17px;
  width: 17px;
  padding: 2px;
  background-color: transparent;
  background-clip: content-box;
  border: 1px solid forestgreen;
  cursor: pointer;
  margin: auto 10px auto 0;
`

export const ToggleText = styled.div`
  color: forestgreen;
  font-weight: bold;
  font-size: 0.8rem;
  margin: auto 10px auto 0;
`

export const NoResultText = styled.div`
  position: relative;
  top: -50px;
  text-align: center;
  margin: auto;
  font-size: 1.5rem;
  font-weight: bold;
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

export const AddCardBtn = styled.button`
  width: fit-content;
  padding: 10px 20px;
  font-weight: bold;
  border: 1px solid rgb(150, 150, 150);
  color: forestgreen;
  cursor: pointer;
  margin-right: 20px;
  background: white;
  
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