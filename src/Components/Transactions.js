import { useState, useEffect } from "react";
import axios from "axios";
import Transaction from "./Transaction";
import '../index.css'

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions`).then((res) => {
      setTransactions(res.data);
    })}, []);

  return (
    <div >
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Item Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trans, index) => {
                
              return <Transaction key={index} trans={trans} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;