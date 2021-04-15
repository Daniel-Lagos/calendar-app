import React, {useEffect} from "react";
import {LoginScreen} from "../components/auth/LoginScreen";
import {CalendarScreen} from "../components/calendar/CalendarScreen";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {startChecking} from "../actions/auth";
import {PrivateRouter} from "./PrivateRouter";
import {PublicRouter} from "./PublicRouter";

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);

    if (checking) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter exact path="/login" isAuthenticated={!!uid}
                                  component={LoginScreen}/>
                    <PrivateRouter exact path="/" isAuthenticated={!!uid}
                                   component={CalendarScreen}/>
                    <Redirect to="/login"/>
                </Switch>
            </div>
        </Router>
    );
}