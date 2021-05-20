import moment from "moment"
import React from "react"
import numeral from "numeral"
import { Link } from "react-router-dom"

const ExpenseListItem = ({description, amount, createdAt, id }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            - 
            {moment(createdAt).format("Do MMM, YYYY")}
        </p>
    </div>
)

export default ExpenseListItem