import { Component } from "react";
import "./OfferList.css";

class OfferList extends Component {
    render() {
        return (
            <div className="offer-list-wrapper">
                <div className="offer-list">
                    <div className="column">
                        <div className="offer-list__header-wrapper">
                            <h4 className="offer-list__header-text text-ending_double-arrow">Trend Product</h4>
                        </div>
                        <div className="offer-list__field">
                            <div className="row">
                                <div className="offer-list__img-wrapper bg-shadow-white">
                                    <a href="http://localhost:3000">
                                        <img src="http://uitheme.net/orgomart/images/g-10.png" alt="" />
                                    </a>
                                </div>
                                <div className="offer-list__info-wrapper column">
                                    <span className="offer-list__weight">500gm</span>
                                    <a href="http://localhost:3000">Assorted Donuts Each Salted</a>
                                    <h6 className="offer-list__price">
                                        <span className="offer-list__price-currency">$</span>29
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="offer-list__field">
                            <div className="row">
                                <div className="offer-list__img-wrapper bg-shadow-white">
                                    <a href="http://localhost:3000">
                                        <img src="http://uitheme.net/orgomart/images/g-10.png" alt="" />
                                    </a>
                                </div>
                                <div className="offer-list__info-wrapper column">
                                    <span className="offer-list__weight">500gm</span>
                                    <a href="http://localhost:3000">Assorted Donuts Each Salted</a>
                                    <h6 className="offer-list__price">
                                        <span className="offer-list__price-currency">$</span>29
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="offer-list__field">
                            <div className="row">
                                <div className="offer-list__img-wrapper bg-shadow-white">
                                    <a href="http://localhost:3000">
                                        <img src="http://uitheme.net/orgomart/images/g-10.png" alt="" />
                                    </a>
                                </div>
                                <div className="offer-list__info-wrapper column">
                                    <span className="offer-list__weight">500gm</span>
                                    <a href="http://localhost:3000">Assorted Donuts Each Salted</a>
                                    <h6 className="offer-list__price">
                                        <span className="offer-list__price-currency">$</span>29
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="offer-list__field">
                            <div className="row">
                                <div className="offer-list__img-wrapper bg-shadow-white">
                                    <a href="http://localhost:3000">
                                        <img src="http://uitheme.net/orgomart/images/g-10.png" alt="" />
                                    </a>
                                </div>
                                <div className="offer-list__info-wrapper column">
                                    <span className="offer-list__weight">500gm</span>
                                    <a href="http://localhost:3000">Assorted Donuts Each Salted</a>
                                    <h6 className="offer-list__price">
                                        <span className="offer-list__price-currency">$</span>29
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default OfferList;