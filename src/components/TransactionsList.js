import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions, onDeleteTransaction ,onSortClick}) {


  function handleSortClick(e){
    onSortClick(transactions, e.target.id)
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header" style={{cursor: "pointer"}} id="date" onClick={handleSortClick}>Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" style={{cursor: "pointer"}} id="description" onClick={handleSortClick}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" style={{cursor: "pointer"}} id="category" onClick={handleSortClick}>Category</h3>
          </th>
          <th>
            {/* <h3 className="ui center aligned header" style={{cursor: "pointer"}} id="amount" onClick={handleSortClick}>Amount</h3> */}
            <h3 className="ui center aligned header" >Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Delete</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transactions.map(transaction => <Transaction key={transaction.id} {...transaction} onDeleteTransaction={onDeleteTransaction}/>)}
      </tbody>
    </table>
  );
}

export default TransactionsList;
