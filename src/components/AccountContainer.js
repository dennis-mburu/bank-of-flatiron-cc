import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm);
  }

  const transactionsToDisplay = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList transactions={transactionsToDisplay} />
    </div>
  );
}

export default AccountContainer;
