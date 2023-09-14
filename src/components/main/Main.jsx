import { Component } from "react";
import "./Main.css";
import { MainOffers, MainContent } from ".";

class Main extends Component {
    render() {
        return (
            <div className="main-wrapper bg-shadow-white">
                <div className="main">
                    <div className="container">
                    <div className="row">
                        <MainOffers></MainOffers>
                        <MainContent></MainContent>
                    </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Main;