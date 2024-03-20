import React, { useRef } from 'react'
// import Fade from 'react-reveal/Fade';
// import { Fade } from "react-awesome-reveal";
const NavBar = (props) => {
    const ch = props.ch ; 
    const val = useRef() ; 

    const Recherche2 =(val)=>{
        ch(val.current.value);
        val.current.value = "" ; 
      }
    return (

        <nav className="navbar bg-dark ">
            <div className="container-fluid  mt-2 container">
                <a className="navbar-brand text-light">
                    {/* <Fade left> */}
                        <div className='brand-color'>New restaurant-cafe</div>
                    {/* </Fade> */}
                    </a>
    
                <form className="d-flex" >
                    <input className="form-control me-2" type="texte" placeholder="Search..." ref={val} />
                    <button className="btn-search" type="button" onClick={()=>Recherche2(val)}>Search</button>
                </form>
            </div>
        </nav>
    )
}

export default NavBar; 
