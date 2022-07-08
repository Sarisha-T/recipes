// import {GiIndiaGate, GiFullPizza, GiNoodles, GiHamburger,GiBowlOfRice} from "@react-icons/gi"
import{GiMeal,GiWineBottle,GiCupcake,GiFrenchFries} from "react-icons/gi"
import{TbSoup} from "react-icons/tb"
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import React, { useState } from 'react';

function Category() {
    const[isActive,setActive]=useState('main course');
  return (
   
        <List>
            <SLink className={isActive==="main course"?"active":""}
            onClick={()=>setActive("main course")} to={"/type/main course"}>
                <GiMeal/>
                <h2>Meals</h2>
            </SLink>
            <SLink className={isActive==="drink"?"active":""}
            onClick={()=>setActive("drink")} to={"/type/drink"}>
                <GiWineBottle/>
                <h2>Drinks</h2>
            </SLink>
            <SLink className={isActive==="dessert"?"active":""}
            onClick={()=>setActive("dessert")} to={"/type/dessert"}>
                <GiCupcake/>
                <h2>Desserts</h2>
            </SLink>
            <SLink className={isActive==="snack"?"active":""}
            onClick={()=>setActive("snack")} to={"/type/snack"}>
                <GiFrenchFries/>
                <h2>Snacks</h2>
            </SLink>
            <SLink className={isActive==="soup"?"active":""}
            onClick={()=>setActive("soup")} to={"/type/soup"}>
                <TbSoup/>
                <h2>Soups</h2>
            </SLink>    
        

        </List>
        
       

       

    
    
  )
}
const List=styled.div`
/* border:1px solid white; */
display:flex;
justify-content:center;
margin:4vh 0vw;
/* background-color:#cec5c515;

border-radius:15%; */
`
const SLink=styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
text-decoration:none;
margin-right:2rem;
width:6rem;
height:6rem;
background-color:#68646458;
cursor:pointer;
&.active{
    background-color:#d67220;
    svg{
        color:white;
    }
    h2{
        color:black;
    }
}
svg{
    color:#d67220;
   font-size:2rem;
    /* border:1px solid white; */
}

h2{
    margin:0;
    font-size:0.8rem;
    color:white
}

    

`



export default Category;