import { Component } from "react";
import "./HeaderBottom.css";

class HeaderBottom extends Component {
    render() {
        return (
            <div className="header-bottom">
                <div className='container'>
                    <div className='header-bottom__categories-menu-contacts row'>
                        <div className='header-bottom__categories-dropdown'>
                            <button className='header-bottom__categories row'>
                                <img className='header-bottom__categories-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVklEQVR4nO3VQQqAMAxE0X88S29tb2K9hyJ0EQQhbirCf5BVFgOBISBNVIEd6ECZGdyBY8x227WwezPtq+A1E1xG+BW6pO8kJdjjyB7rn6r/OLDHEk9OW8N7ef+eTPQAAAAASUVORK5CYII=" alt=''/> 
                                <span>All categories</span>
                                <div className='arrow-right_black'></div>
                            </button>
                        </div>
                        <div className='header-bottom__menu-contacts row'>
                            <ul className='header-bottom__menu row'>
                                <li className='header-bottom__nav-item header-bottom__nav-item_arrow'>
                                    <a href="http://localhost:3000">Home</a>
                                </li>
                                <li className='header-bottom__nav-item header-bottom__nav-item_arrow'>
                                    <a href="http://localhost:3000">Shop</a>
                                </li>
                                <li className='header-bottom__nav-item header-bottom__nav-item_arrow'>
                                    <a href="http://localhost:3000">Dashboard</a>
                                </li>
                                <li className='header-bottom__nav-item header-bottom__nav-item_arrow'>
                                    <a href="http://localhost:3000">Product</a>
                                </li>
                                <li className='header-bottom__nav-item header-bottom__nav-item_arrow'>
                                    <a href="http://localhost:3000">Pages</a>
                                </li>
                            </ul>
                            <a className='header-bottom__contacts' href="http://localhost:3000">
                                <span>Need help? Call Us :</span>
                                <span> + 033 4000 5000</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default HeaderBottom;