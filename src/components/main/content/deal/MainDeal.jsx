import { Component } from "react";
import "./MainDeal.css";
import { MainCard } from "../.."
import { getAllProposition } from "services";

class MainDeal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            goods: []
        };
    }

    componentDidMount() {
        getAllProposition().then(data => {
            this.setState({
                goods: data.value._value
            });
        });
    };

    render() {
        return (
            <div className="main-deal-wrapper">
                <div className="main-deal">
                    <div className="main-deal__top-wrapper">
                        <div className="row">
                            <h4>Deal of the day</h4>
                            <div className="main-deal__nav">
                                <button>
                                    <svg className="about__info-card-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"></path>
                                    </svg>
                                </button>
                                <button>
                                    <svg className="about__info-card-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                                        <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="main-deal__deal-offer-wrapper">
                        <div className="row">
                            {this.state.goods.length > 0 && (
                                <>
                                    {this.state.goods.map(good => (
                                        <MainCard key={good.propos_id} name={good.propos_name}></MainCard>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default MainDeal;