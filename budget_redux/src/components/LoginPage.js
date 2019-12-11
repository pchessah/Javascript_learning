import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ( {startLogin}) => {
    return (
        <div>
            <h1> Press Button to login with Google Account </h1>
            <button onClick = { startLogin}> Log In </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect (null, mapDispatchToProps)(LoginPage)