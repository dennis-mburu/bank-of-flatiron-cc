import React, { useState } from "react";

function AddTransactionForm({onAddTransaction}) {

const [formData, setFormData] = useState({
  date: "",
  description: "",
  category: "",
  amount: ""
})

function handleChange(e){
  setFormData({...formData, [e.target.name]: e.target.value} )
}

function handleFormSubmit(e){
  e.preventDefault()
  fetch('http://localhost:8001/transactions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }, 
    body: JSON.stringify(formData)
  })
  .then(r => r.json())
  .then(data => onAddTransaction(data))
}

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange}/>
          <input type="text" name="description" value={formData.description} placeholder="Description" onChange={handleChange} />
          <input type="text" name="category" value={formData.category} placeholder="Category" onChange={handleChange}/>
          <input type="number" name="amount" value={formData.amount} placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
