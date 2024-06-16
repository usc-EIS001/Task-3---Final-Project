import { Link } from "react-router-dom";
import './navBar.css'

export function Navbar() {
return(
    <div className="navbar">
    <Link to="/">
        <button className="navhome">Home</button>
    </Link>

    <Link to="/recipies">
        <button className="navrecipies">Recipies</button>
    </Link>

    <Link to="/createRecipies">
        <button className="navcreaterecipies">Create Recipies</button>
    </Link>
    </div>
)
}