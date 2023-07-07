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
          <p data-testid="balanceAmount">Your Balance</p>
          <p>{bal}</p>
        </div>
      </div>

      <div className="row tab-i">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p data-testid="incomeAmount">Your Income</p>
          <p>{inc}</p>
        </div>
      </div>

      <div className="row tab-e">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p data-testid="expensesAmount">Your Expenses</p>

          <p>{ex}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
