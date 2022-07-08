import React, { useState } from 'react';
import { useEffect } from 'react';
import{ useParams} from "react-router-dom"
import styled from "styled-components"

function Recipe() {
    
    const[info,setInfo]=useState({});
    const[isActive,setActive]=useState('ingredients');
let params=useParams();
    const recipeInfo=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=f3cc37095bda47a2b3a9c0c4b3c17514`)
        const infos=await data.json()
        setInfo(infos)

    }
    useEffect(()=>{
        recipeInfo();
    },[params.name]);

    return(
        <Container>
            <div>
                <h2>{info.title}</h2>
                <img src={info.image} alt={info.title}  />
            </div>
            <Info>
            <Button className={isActive==="ingredients"?"active":""}
            onClick={()=>setActive("ingredients")}>Ingredients</Button>
            <Button className={isActive==="instructions"?"active":""}
            onClick={()=>setActive("instructions")}>Instruction</Button>
           
            {isActive==="ingredients" && (
                <ul>
                        {info.extendedIngredients.map((ingredient)=>(
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
            )}
            {isActive==="instructions" && (
                <h5>{info.instructions}</h5>
            )}
            </Info>
            
        </Container>
        
    ) 
}

const Container=styled.div`
    margin:10rem 5rem 0rem;
    display:flex;
    .active{
        background-color:#d67220;
        color:white;

    }
    h2{
        margin-bottom:1rem;
    }
    li{
        font-size:1rem;
        line-height:1.5rem;

    }
    ul{
        margin-top:2 rem;
    }
    div{
        margin-top:-5rem;
    }
    img{
    height:20rem;
}


`
const Button=styled.button`
padding:1rem 2rem;
color:white;
background-color:#68646458;

border:2px solid orangered;
font-weight:600;
margin-right:2rem;

    
`
const Info=styled.div`
    margin-left:10rem;
`


export default Recipe;