import BgImg from "../assets/background.jpg"
import styled from "styled-components";

export const RootContainer = styled.div`
  background-image: url(${BgImg});
  height: 100vh;
  background-size: cover; 
  background-position: center;
`

export const DualPanels = styled.div`
  display: flex;
  position: relative;
  height: calc(100% - 80px);
  width: 100%;
  align-items: center;
`