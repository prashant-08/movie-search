import { useState } from 'react'
import './Navbar.css'
function Navbar () {
    const [isAutoCompleteVisible, setIsAutoCompleteVisible] = useState(false)

    return (
        <div className="navbar-wrapper">
            <div>Movie Base</div>
            <div className='search-bar'>
                <input type='text' id='movie-search-input' placeholder='Enter movie name'
                    onFocus={()=>{
                        setIsAutoCompleteVisible(true)
                    }}
                    onBlur={()=>{
                        setIsAutoCompleteVisible(false)
                    }}
                />
                <div id='result-list' style={{display : (isAutoCompleteVisible) ? 'block' : 'none'}}>
                        <div className='autocomplete-result'>result 1</div>
                        <div className='autocomplete-result'>result 2</div>
                        <div className='autocomplete-result'>result 3</div>
                        <div className='autocomplete-result'>result 4</div>
                </div>
            </div>
            <div>Theme</div>
        </div>
    )
}

export default Navbar