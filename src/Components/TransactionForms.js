import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function TransactionForm() {
  let { index } = useParams();

  const [transactionForm, setTransactionForm] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    isFavorite: false,
  });

  const handleTextChange = (event) => {
    setTransactionForm({ ...transactionForm, [event.target.id]: event.target.value });
  };

  // const handleCheckboxChange = () => {
  //   setTransactionForm({ ...transactionForm, isFavorite: !transactionForm.isFavorite });
  // };

  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="NewForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={transactionForm.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="transaction"
          required
        />
        {/* <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={transactionForm.url}
          placeholder="http://"
          onChange={handleTextChange}
        /> */}
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transactionForm.amount}
          placeholder="amount paid.."
          onChange={handleTextChange}
        />
        <label htmlFor="from">From:</label>
        <input
          id="from"
          type="text"
          name="from"
          value={transactionForm.from}
          placeholder="payment from who"
          onChange={handleTextChange}
        />
        
        <br />

        <input type="submit" />
      </form>
      <Link to={`/bookmarks/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TransactionForm;
