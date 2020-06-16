import React, { Component } from "react";
import DescriptionPage from "../layouts/DescriptionPage";
import HeaderComponent from "../layouts/HeaderComponent";
import FooterComponent from "../layouts/FooterComponent";
import "../assets/sass/Cast.scss";

class Cast extends Component {
    render() {
        return (
            <div>
                {/* <HeaderComponent />
                <DescriptionPage /> */}
                <div className="casts">
                    <div className="casts__container">

                        <div className="casts__container__img">
                            <div className="card">
                                <img src={require('../assets/images/rachel.jpeg')} alt="joey" />
                                <p>Joey</p>
                            </div>
                            <div className="card">
                                <img src={require('../assets/images/monica.jpeg')} alt="joey" />
                                <p>Phoebe</p>
                            </div>
                            <div className="card">
                                <img src={require('../assets/images/rachel.jpeg')} alt="joey" />
                                <p>Rachel</p>
                            </div>
                            <div className="card">
                                <img src={require('../assets/images/rachel.jpeg')} alt="joey" />
                                <p>Ross</p>
                            </div>





                        </div>
                        {/* <div>
                            <p>joey</p>
                        </div> */}

                    </div>
                </div>
                {/* <FooterComponent /> */}
            </div>
        )
    }
}

export default Cast;