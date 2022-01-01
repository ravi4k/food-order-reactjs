import React from "react";
import {HeaderBar, HeaderElement, HeaderIcon} from "./HeaderElements";
import {BiRestaurant} from "react-icons/bi";

const Header = () => {
    return (
        <div>
            <HeaderBar>
                <HeaderElement>Food Order App</HeaderElement>
                <HeaderIcon>
                    <BiRestaurant />
                </HeaderIcon>
            </HeaderBar>
        </div>
    );
}

export default Header;