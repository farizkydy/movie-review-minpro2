import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginForm from "../layouts/Loginform";
// import DetailPageOverview from "../components/DetailPageOverview";
// import ReviewComponent from "../components/ReviewComponents";
// import Cast from "../components/Cast";
import DescriptionPage from "../layouts/DescriptionPage";
import Homepage from "../layouts/Homepage"

const Routes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={Homepage} />
            <Route path="/description/:id" exact component={DescriptionPage} />
            {/* <Route path="/review" exact component={ReviewComponent} />
            <Route path="/cast" exact component={Cast} /> */}
            <Route path="/description/:id" exact component={DescriptionPage}/>
        </Fragment>
    )
}

export default Routes;