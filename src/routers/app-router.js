import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../components/header"
import ExpenseDashboardPage from "../components/dashboard-page"
import AddExpensePage from "../components/add-page"
import EditExpensePage from "../components/edit-page"
import HelpPage from "../components/help-page"
import NotFoundPage from "../components/not-found-page"


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter