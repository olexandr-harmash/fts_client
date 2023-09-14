import { Component } from 'react'
import './HeaderTop.css'

class HeaderTop extends Component {
  render() {
    return (
      <div className='header-top bg-green'>
        <div className='container'>
          <div className='header-top__info-settings row'>
            <div className='header-top__about'>
              <div className='header-top__nav'>
                <ul className='header-top__list row'>
                  <li className='header-top__nav-item'>
                    <a className='header-top__link' href='http://localhost:3000'>
                      About Us
                    </a>
                  </li>
                  <li className='header-top__nav-item'>
                    <a className='header-top__link' href='http://localhost:3000'>
                      My account
                    </a>
                  </li>
                  <li className='header-top__nav-item'>
                    <a className='header-top__link' href='http://localhost:3000'>
                      Wishlist
                    </a>
                  </li>
                  <li className='header-top__nav-item'>
                    <a className='header-top__link' href='http://localhost:3000'>
                      Order Tracking
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='header-top__settings'>
              <ul className='header-top__list row'>
                <li className='header-top__nav-item header-top__nav-item_arrow'>
                  English
                </li>
                <li className='header-top__nav-item header-top__nav-item_arrow'>
                  USD
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default HeaderTop;