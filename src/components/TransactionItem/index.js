// Write your code here

import './index.css'

const TransactionItem = props => {
  const {details, trigger} = props
  const {id, title, amount, type} = details
  const deleteT = () => trigger(id)

  return (
    <li className="row history-index">
      <p className="transaction-result">{title}</p>
      <p className="transaction-result">{amount}</p>
      <p className="transaction-result">{type}</p>
      <div>
        <button
          className="d-button col"
          data-testid="delete"
          onClick={deleteT}
          type="button"
        >
          <img
            className="del-icon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
