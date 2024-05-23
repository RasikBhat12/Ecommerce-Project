import React, { useState } from 'react';
import { useSearch } from '../../context/Search';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const [values, setValues] = useSearch();                               //retrieves the values from the search context using the useSearch custom hook
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
         const {data} = await axios.get(`/api/v1/product/search/${values.keyword}`);
         setValues({...values, results: data});                  // results is an array from backend
         navigate("/search");

        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div>
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
    <input className="form-control me-2" type="search" placeholder="Search Here" 
    aria-label="Search" value={values.keyword} onChange={(e)=> {setValues({...values, keyword: e.target.value})}} />
    <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  )
}

export default SearchInput;