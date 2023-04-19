import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import '../index.css'

function OneTransaction() {
  const [trans, setTrans] = useState({});
  let { index } = useParams();
   let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then((response) => {
        console.log(response.data)
        setTrans(response.data);
      })
      .catch(() => {
         navigate("/not-found");
      });
  }, [index,navigate]);
  
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      });
  };

  
 
  return (
    <article>
      <h3>
        {trans.date ? <span>⭐️</span> : null} {trans.date}
      </h3>
      <h5>
        <span>
          {trans.amount}
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </h5>
      <div className="showNavigation">
        <div>
          {" "}
           <Link to={`/transactions`}> 
            <button>Back</button>
           </Link> 
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}> 
            <button>Edit</button>
           </Link> 
        </div>
        <div>
          {" "}
           <button onClick={handleDelete}>Delete</button> 
        
        </div>
      </div>
    </article>
  );
}

export default OneTransaction;