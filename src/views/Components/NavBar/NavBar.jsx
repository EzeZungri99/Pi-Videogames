import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
import SearchBar  from "../SearchBar/SearchBar.jsx";
import FilterOrigin from "../Filter/Filter";

const NavBar =()=>{
    return(
        <div className={style.conteiner}>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <Link to="/">LANDING</Link>
            <Link to="/videogames/:id">DETAIL</Link>
            <SearchBar></SearchBar>
            <FilterOrigin></FilterOrigin>


        </div>
    )

}
export default NavBar