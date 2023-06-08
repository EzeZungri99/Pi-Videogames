import styles from "./SearchBar.module.css";
import {getByName} from "../../../redux/actions.js"
import {useDispatch} from "react-redux"


const SearchBar = () => {
const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(getByName(e.target.value));
  };


 


  return (
    <div>
      <input
        className={styles.inputSearch}
        placeholder="Search a Videogame..."
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar