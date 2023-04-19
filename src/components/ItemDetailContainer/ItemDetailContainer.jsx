import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { Spinner } from 'react-bootstrap'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState (null)
    
    const [loading, setLoading] = useState (false)
const {itemId} = useParams()
    useEffect(() =>{
        setLoading (true)
        pedirProductos ()
        .then(res => {
            setItem(res.find (prod => prod.id === Number(itemId)))
        })

        .catch ((error => console.log(error)))
        .finally(()=>{
            setLoading(false)
        })

    }, [itemId]) 

  return (
    <section>

    {
        loading?
        <Spinner/>:
        <ItemDetail{...item}/>
    }

    </section>
  )
}
