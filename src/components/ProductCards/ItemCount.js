import React, { useState } from 'react'
import { Button } from '../Navbar/Button';
import { AddToCart  } from './CardElements';




export default function ItemCount ({ initial = 0, stock = 0, onAdd = () => {} }) {

    const [count, setUserSelected] = useState(initial);
    const [addedtoCarrito, setAddedToCarrito] = useState(false);

    const increment = () => {
      if (count < stock) setUserSelected (count+1);
    }

    const decrement = () => {
      if (count > 0) setUserSelected(count-1);
    }

    const handleOnAddCarrito = (event) => {
      if (count > 0) {
        setAddedToCarrito(true);
        onAdd(event);
      }
    }

    return(
      <>
      
        <AddToCart>

            <Button onClick={() => decrement()}id="decrementButton"><i className="fas fa-minus-circle"></i></Button>
        
            <p>{count}</p>
        
            <Button onClick={() => increment()}id="incrementButon"><i className="fas fa-plus-circle"></i></Button>

        </AddToCart>

        {!addedtoCarrito && 
            <Button onClick={handleOnAddCarrito}>AGREGAR AL CARRITO</Button>
        }


      </>
    )
}

