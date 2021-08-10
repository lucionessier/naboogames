import React from 'react';
import { ItemsBg, ItemsCard } from './CardElements';
// import { Button } from '../Navbar/Button';
import ItemCount from './ItemCount';
import Img from '../../img/godofwar.jpg';


export const ProductCards = () => {
    return (
        <ItemsBg id="ProductSection">
            <ItemsCard>
           
                <img src={Img} alt="Imagen portada God of War" style={{ width:"300px" , borderRadius: "20px"}}></img>

                <h3 style={{margin: "20px"}}>God of War</h3>
               
                    <ItemCount stock={10} onAdd={() => console.log("Agregado al carrito")}></ItemCount>

            </ItemsCard>

            <ItemsCard>
           
           <p style={{margin: "20px"}}>Nombre del producto</p>
          
               <ItemCount stock={10} onAdd={() => console.log("Agregado al carrito")}></ItemCount>

            </ItemsCard>

            <ItemsCard>
           
           <p style={{margin: "20px"}}>Nombre del producto</p>
          
               <ItemCount stock={10} onAdd={() => console.log("Agregado al carrito")}></ItemCount>

            </ItemsCard>

            <ItemsCard>
           
           <p style={{margin: "20px"}}>Nombre del producto</p>
          
               <ItemCount stock={10} onAdd={() => console.log("Agregado al carrito")}></ItemCount>

            </ItemsCard>

            <ItemsCard>
           
           <p style={{margin: "20px"}}>Nombre del producto</p>
          
               <ItemCount stock={10} onAdd={() => console.log("Agregado al carrito")}></ItemCount>

            </ItemsCard>

            <ItemsCard>
           
           <p style={{margin: "20px"}}>Nombre del producto</p>
          
               <ItemCount stock={10} onAdd={() => console.log("Agregado al carrito")}></ItemCount>

            </ItemsCard>
        </ItemsBg>

        
    )
}

export default ProductCards;
