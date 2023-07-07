import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    tList: [],
    name: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    bal: 0,
    inc: 0,
    ex: 0,
  }

  onDelete = idPassed => {
    const {tList} = this.state

    const target = tList.find(each => each.id === idPassed)
    const {title, id, amount, type, optionId} = target
    console.log(optionId)
    const t = typeof amount
    console.log(t)
    if (optionId === 'INCOME') {
      this.setState(pre => ({
        ...pre,
        tList: pre.tList.filter(each => each.id !== idPassed),
        inc: pre.inc - amount,
        bal: pre.bal - amount,
      }))
    } else {
      this.setState(pre => ({
        ...pre,
        tList: pre.tList.filter(each => each.id !== idPassed),
        ex: pre.ex - amount,
        bal: pre.bal + amount,
      }))
    }
  }

  addToHistory = () => {
    const {name, amount, type, bal, inc, ex} = this.state
    if (name === '') {
      alert('Enter a Title first')
      return
    }
    const typeFind = transactionTypeOptions.find(each => each.optionId === type)
    const foundType = typeFind.displayText
    const foundTypeId = typeFind.optionId
    let newBal
    let newInc
    let newEx

    if (type === 'INCOME') {
      newBal = bal + amount
      newInc = inc + amount
      newEx = ex
    } else {
      newBal = bal - amount
      newInc = inc
      newEx = ex + amount
    }

    console.log('hi')
    const newOb = {
      id: uuidv4(),
      title: name,
      amount,
      type: foundType,
      optionId: foundTypeId,
    }

    this.setState(pre => ({
      tList: [...pre.tList, newOb],
      bal: newBal,
      inc: newInc,
      ex: newEx,
      amount: '',
      name: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  nameChange = event => {
    const name = event.target.value

    this.setState(pre => ({...pre, name}))
  }

  amountChange = event => {
    const amount = event.target.value
    const am = Number(amount)
    const s = Number.isNaN(am)
    console.log(s)
    if (s) {
      alert('Enter Number')
      return
    }

    this.setState(pre => ({...pre, amount: am}))
  }

  changeType = event => {
    const type = event.target.value
    this.setState(pre => ({...pre, type}))
  }

  render() {
    const {tList, name, amount, type, bal, inc, ex} = this.state

    return (
      <div className="main">
        <div>
          <div className="heding">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your<span>Money Maneger</span>
            </p>
          </div>
          <div className="tab">
            <MoneyDetails bal={bal} inc={inc} ex={ex} />
          </div>
          <div className="lower row">
            <form className="form ">
              <h4>Add Transaction</h4>
              <label htmlFor="title">Title</label>
              <br />
              <input
                id="title"
                type="text"
                value={name}
                placeholder="Title"
                onChange={this.nameChange}
              />
              <br />
              <br />
              <label htmlFor="amount">Amount</label>
              <br />

              <input
                id="amount"
                type="text"
                value={amount}
                placeholder="Amount"
                onChange={this.amountChange}
              />
              <br />
              <br />
              <label htmlFor="type">Type</label>
              <select id="type" value={type} onChange={this.changeType}>
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <div>
                <button type="button" onClick={this.addToHistory}>
                  Add
                </button>
              </div>
            </form>
            <div className="history col">
              <h4>History</h4>
              <ul className="col">
                <li className="row history-index">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </li>
                {tList.map(eachT => (
                  <TransactionItem
                    key={eachT.id}
                    details={eachT}
                    trigger={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
