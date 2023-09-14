import React from "react";
import { Header, Banner, Main } from "components";

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Banner />
                <Main />
            </>
        );
    };
};

export default Home;