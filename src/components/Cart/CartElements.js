import styled from "styled-components";

export const CartContainer = styled.div`
  position: absolute;
  right: 100px;
  overflow: scroll;
  width: 30%;
  height: 80%;
  padding: 40px 60px;
  background: #fff;
  border-radius: 10px;

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

export const CartItemCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  margin-bottom: 20px;
  
  :last-child {
    margin-bottom: 0;
  }
`

export const CartItemName = styled.div`
  font-weight: bold;
  width: 40%;
`

export const CartItemAmount = styled.div`
  font-weight: normal;
`

export const CartItemQty = styled.div`
  font-weight: normal;
`

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 100px;
`

export const CheckoutText = styled.div`
  width: 50%;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 20px;
`

export const CheckoutButton = styled.button`
  width: 50%;
  height: 50px;
  background: forestgreen;
  color: white;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  
  :hover {
    background: white;
    color: forestgreen;
    border: 1px solid lightgray;
  }
`