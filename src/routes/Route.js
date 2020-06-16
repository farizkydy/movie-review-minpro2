import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import LoginForm from "../layouts/Loginform";
<<<<<<< HEAD
import DetailPageOverview from "../components/DetailPageOverview";
import ReviewComponent from "../components/ReviewComponents";
import Cast from "../components/Cast";
<<<<<<< HEAD
=======
>>>>>>> b392866ae3f0117a44b8271bfc2143669044b861
// import DetailPageOverview from "../components/DetailPageOverview";
// import ReviewComponent from "../components/ReviewComponents";
// import Cast from "../components/Cast";
import DescriptionPage from "../layouts/DescriptionPage";
<<<<<<< HEAD
=======
>>>>>>> 8fc935b028de5337fe2da9cbc2972486593bd39b
=======
import Homepage from "../layouts/Homepage"
>>>>>>> b392866ae3f0117a44b8271bfc2143669044b861

const Routes = () => {
    return (
        <Fragment>
<<<<<<< HEAD
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
=======
            <Route path="/" exact component={Homepage} />
            <Route path="/description/:id" exact component={DescriptionPage} />
            {/* <Route path="/review" exact component={ReviewComponent} />
            <Route path="/cast" exact component={Cast} /> */}
>>>>>>> b392866ae3f0117a44b8271bfc2143669044b861
        </Fragment>
    )
}

<<<<<<< HEAD
export default Routes;
=======
export default Routes;
>>>>>>> 8fc935b028de5337fe2da9cbc2972486593bd39b
