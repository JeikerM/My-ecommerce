import React, { useEffect, useState } from 'react';
import {Spinner} from 'react-bootstrap';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    /* const param = useParams() */
    const {categoryId} = useParams()

    useEffect(() => {
        //iniciamos el efecto montaje con un loading en "true"

        setLoading(true)
        pedirProductos()
            .then((res) => {
                //imprimimos respuestas y guardamos en el hook
                if(categoryId){
                    setItems(res.filter(prod => prod.category===categoryId)  )
                }
                else{
                    setItems(res)
                }
                console.log(res)
            })
            //Consologueamos errores
            .catch((error) => console.log(error))
            .finally(() => { setLoading(false) })


    }, [categoryId])

    return (
        <div>
            {
                loading ? 
                <>
                <Spinner/>
                <h2>Cargando...</h2>
                </>
                    : <ItemList productos={items} />

            }
        </div>
    )
}


