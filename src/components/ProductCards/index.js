import React from 'react';
import { ItemsBg, ItemsCard, AddToCart } from './CardElements';
// import { Button } from '../Navbar/Button';
import ItemCount from './ItemCount';


export const ProductCards = () => {
    return (
        <ItemsBg id="ProductSection">
            <ItemsCard>
           
                <p style={{margin: "20px"}}>Nombre del producto</p>
               
                <AddToCart>
                    
                    <ItemCount stock={15} onAdd={() => console.log("Agregado al carrito")}></ItemCount>
                    
                </AddToCart>

                

            </ItemsCard>
        </ItemsBg>
    )
}

export default ProductCards;