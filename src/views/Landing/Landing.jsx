import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { getAllGames } from "../../redux/actions"
import { useEffect } from "react"




const Landing =()=>{

    const dispatch = useDispatch()
    const videogames = useSelector(state => state.videogames)


    
    useEffect(() => {if(videogames.length < 1){
        dispatch(getAllGames())}
    },[]);
    //hacer pantalla de carga

    return(
        <>
        <h1>
            "soy el Landing"
        </h1>
        <button>
        <Link to="/home"> Bienvenido Maestro </Link>
        </button>
        
 
        </>
    )

}
export default Landing