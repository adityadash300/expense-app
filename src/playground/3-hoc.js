// Higher Order Component (HOC) - A component(HOC) that renders another componenet
// Reuse Code
// Render Hijacking
// Prop manipulation
// Abstract state

import React from "react"
import ReactDOM from "react-dom"

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthenticaion = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please Login</p>
            )}
        </div>
    )
}
const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthenticaion(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info='This is the detail' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info='This is the detail' />, document.getElementById('app'))
