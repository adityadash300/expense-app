import React from "react"
import { connect } from "react-redux"
import { startLogin } from "../actions/auth"


export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control</p>
            <button onClick={startLogin}  className="button button--login">Login with <img className="box-layout__image" src="/images/google-logo.jpg"></img></button>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)