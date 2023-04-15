import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import { Spinner } from 'react-bootstrap'
import {ItemDetail} from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState (null)
    
    const [loading, setLoading] = useState (false)

    useEffect(() =>{
        setLoading (true)
        pedirProductos ()
        .then(res => {
            setItem()
        })

        .catch ((error => console.log(error)))
        .finally(()=>{
            setLoading(false)
        })

    }, []) 



    





  return (
    <section>

    {
        loading?
        <Spinner/>:
        <ItemDetail/>
    }

    </section>
  )
}
