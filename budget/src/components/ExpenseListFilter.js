import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount } from '../action/filters'

const ExpenseListFilters = (props) => {
     return (
        <div>
            <input value = {props.filters.text} onChange ={(e) => {
                props.dispatch(setTextFilter(e.target.value))
            }} />
            <select
            value = {props.filters.sortBy}
            onChange = {(e) => {
                if (e.target.value === 'date'){
                    props.dispatch(sortByDate());
                } else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount());
                }
            }}>
                <option value = "date"> Date </option>
                <option value = "amount"> amount </option>
            </select>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)