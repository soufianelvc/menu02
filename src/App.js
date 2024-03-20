import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Category from './Components/Category'
import CardList from './Components/CardList';
import axios from 'axios';
import "./App.css"

const App = () => {
    const [i , setI]= useState(0);
    const [allProducte ,setAllProducte]= useState([]);
    
    useEffect(()=>{
          axios.get("http://localhost:8000/prd")
        .then(res =>setAllProducte(res.data))
        .catch(err => console.log(err))
    },[i])

    // get all cat uniqe
    const allCategory= ['all',...new Set(allProducte.map((item)=>item.type))];

    // filter by type : 
    const filterByType = (cat)=>{
        if(cat === "all"){
           setI(i+1)
        }
        else{
            const newArr = allProducte.filter((item)=> item.type===cat )
            setAllProducte(newArr)
        }
       
    }
    // filter by  searche :  
        const Recherche= (word)=>{
            if(word !== ""){
                  const newArr = allProducte.filter((item)=> item.title===word )
                  setAllProducte(newArr)
            }           
        }
  return (
    <div className='color-body font'>
        <NavBar ch = {Recherche} />
        <Container>
            <Header />
            <Category fArray = {filterByType} allCategory = {allCategory}/>
            <CardList data = {allProducte}/>
        </Container>
    </div>
  )
}

export default App ; 
