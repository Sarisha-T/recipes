import React, { useState } from 'react';
import { useEffect } from 'react';
import{ useParams} from "react-router-dom"
import styled from "styled-components"
import {Link} from "react-router-dom"

function Types() {
    const [types, setTypes]=useState([])
    let params=useParams()
    
 
   
        const getTypes =async(name) => {
            const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f3cc37095bda47a2b3a9c0c4b3c17514&type=${name}`)
            const recipes=await data.json();
            setTypes(recipes.results)

        }

        useEffect(()=>{
            getTypes(params.type)
        },[params.type])
        return <Grid>
                    {types.map((item)=>{
                        return(
                            <Card key={item.id}>
                                <Link to={"/recipe/"+item.id}>
                                <img src={item.image} alt="blah"/>
                                <h4>{item.title}</h4>
                                </Link>

                            </Card>
                        )
                    })}


                </Grid>
   
  
}

const Grid=styled.div`
display:Grid;
/* border:1px solid white; */
margin:10vh 10vw;
grid-template-columns:repeat(auto-fit, minmax(10rem,1fr));
grid-gap:5rem;
`
const Card=styled.div`
img{
    width:100%;
}
a{
    text-decoration:none;
}
h4{
    text-align: center;
   color:white; 
    margin:0;
}
`
export default Types;