import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../index.css'
import axios from "axios";
function TransactionForm() {
  let { index } = useParams();
  const [transactionForm, setTransactionForm] = useState({
    transactionId: "",
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category:""
  });
  let navigate = useNavigate()
  const handleTextChange = (event) => {
    setTransactionForm({ ...transactionForm, [event.target.id]: event.target.value });
  };
  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .post(`${process.env.REACT_APP_API_URL}/transactions`, transactionForm)  
    .then(() => {
      navigate("/transactions"); 
    })
    .catch((e) => {
      console.log(e);
    });
  };
  return (
    <div className="New">
      <h1>Add a new item</h1>
      <form onSubmit={handleSubmit}>

      <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={transactionForm.date}
          placeholder="date"
          onChange={handleTextChange}
          
        />
        <label htmlFor="item_name">Name</label>
        <input
          id="item_name"
          value={transactionForm.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />
       
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transactionForm.amount}
          placeholder="amount"
          onChange={handleTextChange}
        />
        <label htmlFor="from">From</label>
        <input
          id="from"
          type="text"
          name="from"
          value={transactionForm.from}
          placeholder="from"
          onChange={handleTextChange}
        />
        
        <br />

        <input type="submit" />
      
      </form>
    </div>
  );
}

export default TransactionForm;
