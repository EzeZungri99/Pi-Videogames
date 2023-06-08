import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions";
import s from "../Detail/Detail.module.css";
import { useParams } from "react-router-dom";

 
    function Detail() {
      const dispatch = useDispatch();
      const { id } = useParams();
 
    
      useEffect(() => {
        dispatch(getById(id));//ej 55
      }, [dispatch, id]);
    
      const videogame = useSelector((state) => state.gameId);
      console.log(videogame);
    
      let genres = [];
      let platforms = [];
    
      if (videogame) {
        genres = videogame?.genres?.map((e) => (e.name ? e.name : e)).join(", ");
        platforms = videogame?.platforms
          ?.map((e) => (e ? e : e))
          .join(", ");
      }
    
      return (
        <div>
          
          <div className={s.container}>
            <div>
              <h1 className={s.title}>DETALLES</h1>
            </div>
            {
              <div className="descriptionContainer">
                <div className="imgContainer">
                  <h1 className={s.title}>{videogame.name}</h1>
                  <h3 className={s.title}> ID: {videogame.id}</h3>
                  <h3 className={s.title}>Popularidad: {videogame.rating}</h3>
                  <h4 className={s.title}>Generos: {genres}</h4>
                  <h4 className={s.title}>Plataformas: {platforms}</h4>
                  <img
                    className="imageDetail"
                    src={videogame.image}
                    alt={videogame.name}
                  />
                  <p className={s.title}>Fecha: {videogame.released}</p>
                </div>
                <div className={s.description}>
                  <p>{videogame?.description?.replace(/<[^>]*>?/g, "")}</p>
                </div>
              </div>
            }
          </div>
        </div>
      );
    }




    // const Detail= () => {
    // return (
    //       <div>
            
    //         <div className={s.container}>
    //           <div>
    //             <h1 className={s.title}>DETALLES</h1>
    //           </div>
    //           {
    //             <div className="descriptionContainer">
    //               <div className="imgContainer">
    //                 <h1 className={s.title}>hola</h1>
    //                 <h3 className={s.title}> ID: </h3>
    //                 <h3 className={s.title}>Popularidad: </h3>
    //                 <h4 className={s.title}>hola </h4>

                    
    //                 <p className={s.title}>Fecha: </p>
    //               </div>
                  
    //             </div>
    //           }
    //         </div>
    //       </div>
    //     );
    //   }






export default Detail