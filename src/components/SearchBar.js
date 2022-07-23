import React, { useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  const [searchPhrase, setSearchPhrase] = React.useState("")
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} class="form-search">
        <input 
        title="search" 
        value={searchPhrase} 
        onChange={(e) => setSearchPhrase(e.target.value)} 
        ref={inputRef}
        ></input>
        <Link to={`/search/${searchPhrase}`} textDecoration="none" className="link">
          <Button variant="contained" type="submit">Search</Button>
        </Link>
    </form>
  )  
}