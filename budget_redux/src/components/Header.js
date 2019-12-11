import React from 'react';
import { connect } from 'react-redux'
import { NavLink} from 'react-router-dom';
import { startLogout } from '../actions/auth'

export const Header = ({startLogout}) =>
<header>
    <h1>Budget</h1>
    <NavLink to = "/" activeClassName="is-active" exact={true}>       |Dashboard|    </NavLink>
    <NavLink to = "/create" activeClassName="is-active">      Create Expense|     </NavLink>    
    <NavLink to = "/help" activeClassName="is-active">    Help|     </NavLink>

    <button onClick ={startLogout }> Log Out </button>
</header>

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch (startLogout())
})

export default connect (null, mapDispatchToProps)(Header)