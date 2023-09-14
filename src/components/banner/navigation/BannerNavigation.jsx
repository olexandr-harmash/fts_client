import { Component } from "react";
import "./BannerNavigation.css";

class BannerNavigation extends Component {
    render() {
        return (
            <div className="banner-nav">
                <ul className='banner-nav__list'>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Biscuits & Snacks </a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Breads & Bakery</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Breakfast & Dairy</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Frozen Foods</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Fruits & Vegetables</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Grocery & Staples</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Household Needs</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Meats & Seafood</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Fruits & Vegetables</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Grocery & Staples</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Household Needs</a><div className="arrow-right_black"></div></li>
                    <li className="banner-nav__list-item"><a href='http://localhost:3000'>Meats & Seafood</a><div className="arrow-right_black"></div></li>
                </ul>
            </div>
        );
    };
};

export default BannerNavigation;