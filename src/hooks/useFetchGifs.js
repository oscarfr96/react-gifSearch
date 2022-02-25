import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading: true
    })
    
    //Dispararse cuando cambia la categoria
    useEffect(()=>{
        //Peticion HTTP
        getGifs( category )
        //Ponemos las imagenes
        .then( imgs => {
            //Cuando tenemos la respuesta llamamos al setState
            setState({
                data: imgs,
                loading: false
            })
        } )
    },[category])

    //Info del UseState
    return state;

}
