import React from "react";

function Transaction({id, date, description, category, amount, onDeleteTransaction}) {

  function handleDeleteClick(){
    fetch(`http://localhost:8001/transactions/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => onDeleteTransaction(id))
  }
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button style={{cursor: "pointer", background: "red"}} onClick={handleDeleteClick}>Delete</button></td>
    </tr>
  );
}

export default Transaction;
