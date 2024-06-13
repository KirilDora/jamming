import React, { useState } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  const search = () => {
    props.onSearch(term);
  };

  return(
    <div className={styles.searchBar}>
      <input value={term} placeholder='Enter a song title' className={styles.inputForm} type='text' onChange={handleTermChange}/>
      <button className={styles.searchButton} onClick={search}>search</button>
    </div>
  )
};

export default SearchBar;