import { useSelector } from "react-redux"
import Card from "../Card/Card"
import style from "./CardsConteiner.module.css"
import { Link } from "react-router-dom"
import { displayGames } from "../Page/Page.jsx"
import { useState } from "react"

const CardsConteiner =() =>{
   
    
const videogamesState = useSelector(state => state.videogames)


const [currentPage, setCurrentPage] = useState(1)

let videogames = displayGames(currentPage, videogamesState)

const totalPages = Math.ceil(videogamesState.length / 15);

function goToPreviousPage() {
  
    setCurrentPage(currentPage - 1);
   ;

}

// Función para ir a la página siguiente
function goToNextPage() {
  

setCurrentPage(currentPage + 1);
  
}



    return(
        <div className={style.divPadre}>


        <div className={style.container}>
            
            {videogames.map(videogame =>{
                return (
                <Link key={videogame.id} to={`/videogames/${videogame.id}`}>
                <Card
                id={videogame.id}
                key={videogame.id}
                name={videogame.name}
                genres={videogame.genres}
                image={videogame.image}
                

                
                
                />
                </Link>
                );
            })}
            
            
        </div>
        <div className={style.button}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1} >{"<<Prev"}</button>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>{"Next>>"}</button>
        </div>
        </div>
    )

}

export default CardsConteiner

