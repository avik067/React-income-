// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {bal, inc, ex} = props

  return (
    <div className="row">
      <div className="row tab-b tab">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">{bal}</p>
        </div>
      </div>

      <div className="row tab-i tab">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">{inc}</p>
        </div>
      </div>

      <div className="row tab-e tab">
        <img
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>

          <p data-testid="expensesAmount">{ex}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
