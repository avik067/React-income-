// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {bal, inc, ex} = props

  return (
    <div className="row">
      <div className="row tab-b">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p>Rs {bal}</p>
        </div>
      </div>

      <div className="row tab-i">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p>Rs {inc}</p>
        </div>
      </div>

      <div className="row tab-e">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p>Rs {ex}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
