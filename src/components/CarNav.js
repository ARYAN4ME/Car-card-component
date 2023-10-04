import React, { useState, useEffect } from 'react';
import { BiSearch } from "react-icons/bi"
import "./page.css"
import { data } from './data';
function CarNav(props) {

  const [searchTerm, setSearchTerm] = useState("");
  const [relevanceFilter, setRelevanceFilter] = useState(data);


  useEffect(() => {
      filterData()
  }, [searchTerm])

  // this is for data filtering through a search bar
  const filterData = () => {
    let response = data.filter((res) => res.title.toLowerCase().includes(searchTerm.toLowerCase())===true)
    console.log(response)
    props.sendDataToParent(response);
  }


  

  const handleBrandChange = (event) => {
    const selectedValue = event.target.value;
    let brandresponce = data.filter((res) => res.brand === selectedValue)
    console.log("this is ",brandresponce);
    setRelevanceFilter(brandresponce);
    props.sendDataToParent(brandresponce);
  };

  const handleRelevanceChange = (event) => {
    const selectedValue = event.target.value;
    let brandresponce = relevanceFilter.filter((res) => res.relevance === selectedValue)
    console.log("this is ",brandresponce);
    // setRelevanceFilter(data)
    props.sendDataToParent(brandresponce);
  };
 

 

 

  return (
    <nav className="navbar  navbar-expand-lg br-3 rounded bg-body-tertiary">
      <div className="container-fluid ml-4 ">
        <div className=" d-flex gap-3" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <div class="search-box">
              <input type='search' placeholder="Search" onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm}></input>
              <div class="search-icon">
                  <BiSearch />
                </div>
            </div>
          </form>

          <select className="btn custom-btn" onChange={handleRelevanceChange}>
            <option className="navbar-nav activity" value="" disabled selected>Relevance</option>
            <option className="dropdown-item" value="Gasoline" >Gasoline</option>
            <option className="dropdown-item" value="Hybrid" >Hybrid</option>
            <option className="dropdown-item" value="Fuels" >Fuels</option>
            <option className="dropdown-item" value="Petrol" >Petrol</option>
          </select>

          <select className="btn custom-btn" onChange={handleBrandChange} >
      <option className="navbar-nav" value="" disabled  selected>All Brands</option>
      <option className="dropdown-item" value="BMW">BMW</option>
      <option className="dropdown-item" value="Toyota">Toyota</option>
      <option className="dropdown-item" value="Audi">Audi</option>
      <option className="dropdown-item" value="Volvo">Volvo</option>
    </select>
        </div>
      </div>
    </nav>
  );
}

export default CarNav;