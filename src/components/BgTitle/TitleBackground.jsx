
// import styled from 'styled-components'

// export const TitleBackground = styled.div`
//         display: flex;
//         background-color: rgba(17,69,117,1);
//         align-items: center;
//         justify-content:center;
//         height: 200px
// `

// export const H2Title = styled.h2`
//         text-align:center;
//         color: #3acbf7;
//         font-size: 1.5em;
// `

import React from 'react'

export const TitleBackground = (props) => {
        return (
                <div >
                        <h1 style= {{
                            textAlign:"center"
                }} >Hola!, mi nombre es {props.name} y {props.greeting}</h1>
                </div>
        )
}
