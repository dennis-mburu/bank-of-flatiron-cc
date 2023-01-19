import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((r) => r.json())
      .then((data) => setTransactions(data));
  }, []);

  function handleSearchChange(newTerm) {
    setSearchTerm(newTerm);
  }

  const transactionsToDisplay = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // .sort((a, b) => {
  //   const categoryA = a.category.toLowerCase();
  //   const categoryB = b.category.toLowerCase();

  //   if (categoryA < categoryB) {
  //     return -1;
  //   }
  //   if (categoryA > categoryB) {
  //     return 1;
  //   }
  //   return 0;
  // });

  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  function handleTransactionDelete(id) {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  }

  function handleSortChange(transactionsToSort, sortTerm) {
    setTransactions(
      transactionsToSort.sort((a, b) => {
        // if (typeof (a[searchTerm] === "number") || b[searchTerm] === "number") {
        //   return a[sortTerm] - b[sortTerm];
        // } else if ((typeof (a[searchTerm] === "string") || b[searchTerm] === "string") ){
          const categoryA = a[sortTerm].toLowerCase();
          const categoryB = b[sortTerm].toLowerCase();

          if (categoryA < categoryB) {
            return -1;
          }
          if (categoryA > categoryB) {
            return 1;
          }
          return 0;
        // }
      })
    );
  }

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      <AddTransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionsList
        transactions={transactionsToDisplay}
        onDeleteTransaction={handleTransactionDelete}
        onSortClick={handleSortChange}
      />
    </div>
  );
}

export default AccountContainer;
