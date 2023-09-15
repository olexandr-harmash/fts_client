import { Component } from "react";
import "./MainCard.css";


class MainCard extends Component {
    render() {
        return (
            <div className="main-card-wrapper">
                <div className="main-card__faivorite">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                        <path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 14 5.9902344 L 36 5.9902344 C 40.430666 5.9902344 44 9.5595687 44 13.990234 L 44 35.990234 C 44 40.4209 40.430666 43.990234 36 43.990234 L 14 43.990234 C 9.5693339 43.990234 6 40.4209 6 35.990234 L 6 13.990234 C 6 9.5595687 9.5693339 5.9902344 14 5.9902344 z M 22.572266 11.892578 C 22.187855 11.867986 21.790969 11.952859 21.433594 12.162109 C 20.480594 12.721109 20.161703 13.947391 20.720703 14.900391 L 22.53125 17.990234 L 16.666016 28 L 12 28 C 10.896 28 10 28.896 10 30 C 10 31.104 10.896 32 12 32 L 27.412109 32 C 27.569109 31.237 27.473203 30.409531 27.033203 29.644531 L 27.029297 29.640625 C 26.642297 28.966625 26.105469 28.416 25.480469 28 L 21.302734 28 L 28.978516 14.898438 C 29.536516 13.945438 29.216672 12.720109 28.263672 12.162109 C 27.309672 11.604109 26.085344 11.923953 25.527344 12.876953 L 24.849609 14.033203 L 24.171875 12.876953 C 23.8225 12.281328 23.212949 11.933564 22.572266 11.892578 z M 28.310547 19.941406 L 27.484375 21.314453 C 26.572375 22.830453 26.542953 24.706859 27.376953 26.255859 L 33.673828 37.001953 C 34.045828 37.637953 34.713391 37.990234 35.400391 37.990234 C 35.743391 37.990234 36.092156 37.902797 36.410156 37.716797 C 37.363156 37.158797 37.682047 35.933469 37.123047 34.980469 L 35.376953 32 L 38 32 C 39.104 32 40 31.104 40 30 C 40 28.896 39.104 28 38 28 L 33.033203 28 L 28.310547 19.941406 z M 14.625 34.003906 C 14.068 33.987906 13.526719 34.074328 13.011719 34.236328 L 12.566406 34.994141 C 12.007406 35.946141 12.32825 37.172469 13.28125 37.730469 C 13.59925 37.917469 13.946063 38.005859 14.289062 38.005859 C 14.976062 38.005859 15.644578 37.650625 16.017578 37.015625 L 17.09375 35.179688 C 16.50875 34.496688 15.653859 34.033906 14.630859 34.003906 L 14.625 34.003906 z"></path>
                    </svg>
                </div>
                <div className="main-card__img-wrapper">
                    <a href="http://localhost:3000">
                        <img src="http://uitheme.net/orgomart/images/g-15.png" alt="" />
                    </a>
                </div>
                <div className="main-card__raiting-wrapper">
                    <img src="http://uitheme.net/orgomart/images/star.png" alt="" />
                    <img src="http://uitheme.net/orgomart/images/star.png" alt="" />
                    <img src="http://uitheme.net/orgomart/images/star.png" alt="" />
                    <img src="http://uitheme.net/orgomart/images/star.png" alt="" />
                    <img src="http://uitheme.net/orgomart/images/star.png" alt="" />
                </div>
                <h2 className="main-card__name">
                    <a href="http://localhost:3000">
                        {this.props.name}
                    </a>
                </h2>
                <div className="main-card__price-weight-wrapper">
                    <div className="row">
                        <span className="main-card__currency">$</span>
                        49
                        <span className="main-card__weight">500gm</span>
                    </div>
                </div>
                <div className="main-card__counter-wrapper">
                    <div className="row">
                        <button>-</button>
                        <input type="text" placeholder="1" />
                        <button>+</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default MainCard;