import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from "history"
import ExpenseDashboardPage from "../components/dashboard-page"
import AddExpensePage from "../components/add-page"
import EditExpensePage from "../components/edit-page"
import NotFoundPage from "../components/not-found-page"
import LoginPage from "../components/login-page"
import PrivateRoute from "./private-route"
import PublicRoute from "./public-route";

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter