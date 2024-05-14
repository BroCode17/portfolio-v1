import React from 'react'
import './SearchBar.css'
function SearchBar({sty}) {
  return (
    <div className={[sty,'in_seach ']}>
        <div className='in_se_cont'>
            <span>Filter</span>
            <input type="text" id="seachItem" name='seach' placeholder='Example: web development, mobile apps, data science, etc' maximum-scale={1}/>
        </div>
    </div>
  )
}

export default SearchBar