import { Link } from "react-router-dom";

export default function Transaction({ trans }) {
   
  return (
   
    <tr>
      <td>
        {trans.date ? (
          <span>{trans.date}</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
         
      <td>
      <Link to={`/transactions/${trans.transactionId}`}>{trans.item_name}</Link>
         
      </td>
      <td>
    
         {trans.amount}
      
      </td>
    </tr>
    
  );
}