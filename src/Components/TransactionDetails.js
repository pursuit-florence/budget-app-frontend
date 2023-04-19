import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function OneTransaction() {
  const [trans, setTrans] = useState({});
  let { index } = useParams();
   let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
      .then((response) => {
        
        setTrans(response.data);
      })
      .catch(() => {
         navigate("/not-found");
      });
  }, [index,navigate]);
  
  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/transaction/${index}`)
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
          {trans.item_name}
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* {bookmark.url} */}
      </h5>
      {/* <h6>{bookmark.category}</h6>
      <p>{bookmark.description}</p> */}
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
          {/* <button>Delete</button> */}
        </div>
      </div>
    </article>
  );
}

export default OneTransaction;