import React from 'react';
import { ItemsBg, ItemsCard } from './CardElements';
// import { Button } from '../Navbar/Button';
import ItemCount from './ItemCount';


export const ProductCards = () => {
    return (
        <ItemsBg id="ProductSection">
            <ItemsCard>
           
                <p style={{margin: "20px"}}>Nombre del producto</p>
               
                
                    
                    <ItemCount stock={10} onAdd={() => console.log("Agregado al carrito")}></ItemCount>
                    
               

                

            </ItemsCard>
        </ItemsBg>
    )
}

export default ProductCards;
