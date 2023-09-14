import { Component } from "react";
import "./Header.css";
import { HeaderTop, HeaderMain, HeaderBottom } from "./";

class Header extends Component {
    render() {
        return (
            <div className="header column">
                <HeaderTop></HeaderTop>
                <HeaderMain></HeaderMain>
                <HeaderBottom></HeaderBottom>
            </div>
        );
    };
};

export default Header;