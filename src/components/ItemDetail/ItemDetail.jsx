import React from 'react'
import './ItemDetail.css'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({id, description, price, image,category}) => {




    
  return (
    <div className='item'>
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{id}</Card.Title>
      <Card.Title>{description}</Card.Title>
      <Card.Title>{price}</Card.Title>
      <Card.Title>{category}</Card.Title>
      <ItemCount/>
      <Link to ={`/detail/${id}`}><Button variant="primary">Agregar al carrito</Button></Link>
      
    </Card.Body>
  </Card>
  </div>
  )
}

