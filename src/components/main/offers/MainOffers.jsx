import { Component } from "react";
import "./MainOffers.css";
import { OfferList } from "..";

class MainOffers extends Component {
    render() {
        return (
            <div className="main-offers-wrapper bg-shadow-white">
                <div className="main-offers">
                    <div className="column">
                        <OfferList></OfferList>
                    </div>
                </div>
            </div>
        );
    };
};

export default MainOffers;