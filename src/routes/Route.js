import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginForm from "../layouts/Loginform";
import DetailPageOverview from "../components/DetailPageOverview";
import ReviewComponent from "../components/ReviewComponents";
import Cast from "../components/Cast";
// import DetailPageOverview from "../components/DetailPageOverview";
// import ReviewComponent from "../components/ReviewComponents";
// import Cast from "../components/Cast";
import DescriptionPage from "../layouts/DescriptionPage";

const Routes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={LoginForm} />
            {/* <Route path="/overview" exact component={DetailPageOverview} /> */}
            <Route path="/review" exact component={ReviewComponent} />
            <Route path="/cast" exact component={Cast} />
            <Route path="/description" exact component={DescriptionPage} />
            {/* <Route path="/review" exact component={ReviewComponent} />
            <Route path="/cast" exact component={Cast} /> */}
        </Fragment>
    )
}

export default Routes;