import { Link } from "react-router-dom";
 import './Navbar.css'

export default function NavBar() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/transactions">
            Budget App 
          </Link>
        </h1>
      </article>
      <nav>
        <ul>
          
          <li>
          
            <button> <Link to="/transactions/new">New transaction</Link>
            </button>
            
          </li>
        </ul>   
      </nav>
    </header>
  );
}