import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginForm from "../layouts/Loginform";
import DetailPageOverview from "../components/DetailPageOverview";
import ReviewComponent from "../components/ReviewComponents";
import Cast from "../components/Cast";
<<<<<<< HEAD
// import DetailPageOverview from "../components/DetailPageOverview";
// import ReviewComponent from "../components/ReviewComponents";
// import Cast from "../components/Cast";
import DescriptionPage from "../layouts/DescriptionPage";
=======
>>>>>>> 8fc935b028de5337fe2da9cbc2972486593bd39b

const Routes = () => {
    return (
        <Fragment>
            <Route path="/" exact component={LoginForm} />
            {/* <Route path="/overview" exact component={DetailPageOverview} /> */}
            <Route path="/review" exact component={ReviewComponent} />
            <Route path="/cast" exact component={Cast} />
<<<<<<< HEAD
            <Route path="/description" exact component={DescriptionPage} />
            {/* <Route path="/review" exact component={ReviewComponent} />
            <Route path="/cast" exact component={Cast} /> */}
=======
>>>>>>> 8fc935b028de5337fe2da9cbc2972486593bd39b
        </Fragment>
    )
}

<<<<<<< HEAD
export default Routes;
=======
export default Routes;
>>>>>>> 8fc935b028de5337fe2da9cbc2972486593bd39b
