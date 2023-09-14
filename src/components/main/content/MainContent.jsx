import { Component } from "react";
import "./MainContent.css";
import { MainDeal } from "..";

class MainContent extends Component {
    render() {
        return (
            <div className="main-content-wrapper">
                <div className="column">
                    <MainDeal></MainDeal>
                </div>
            </div>
        );
    };
};

export default MainContent;