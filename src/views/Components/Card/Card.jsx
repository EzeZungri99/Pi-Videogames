import style from "./Card.module.css"

const Card =(props) =>{
    return(
        <div className={style.conteiner}>

            <img src= {props.image} alt="imagen" className={style.image}/>
            <p>Name:{props.name}</p>
            <p>Genres:{props.genres}</p>
            
        </div>
    )

}
export default Card

