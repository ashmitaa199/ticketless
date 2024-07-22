import React,{useRef} from 'react';
import "../styles/searchBar.css"

import {Col,FormGroup, Form} from "reactstrap";

const SearchBar = () => {

    const locationRef= useRef('')
    const distanceRef=useRef(0)

    const searchHandler=()=>{
        const location=locationRef.current.value
        const distance=distanceRef.current.value

        if(location==""||distance==""){
            return alert('All fields are require!');
        }
        
    }
  return (
   <Col lg='12'>
    <div className="search__bar">
        <Form className="flex items-center gap-4">
         < FormGroup className="flex gap-3 form__group form__group-fast">
         <span>
         <i class="ri-map-pin-line"></i>
         </span>

         <div>
            <h6>
                Location
            </h6>
            <input type="text" placeholder="Chooose your site" className='border' ref={locationRef}/>
         </div>
         </FormGroup>

         < FormGroup className="flex gap-3 form__group form__group-fast">
         <span>
         <i class="ri-map-pin-line"></i>
         </span>

         <div>
            <h6>
                Distance
            </h6>
            <input type="text" placeholder="distance" className='border' ref={distanceRef}/>
         </div>
         </FormGroup>

         
        <span className="search__icon" type="submit" onClick={searchHandler}>
        <i class="ri-search-line"></i>

        </span>
        </Form>
    </div>
   </Col>
  )
}

export default SearchBar
