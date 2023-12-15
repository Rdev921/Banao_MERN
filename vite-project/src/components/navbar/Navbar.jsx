import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import '../../index.css'
const Navbar = () => {
    return (
        <>
            <nav className='navMenu'>
                <div className="d-flex justify-content-between align-items-center p-2 ">
                    <div className="logo">
                        <img src="assets/logo.png" />
                    </div>
                    <form className=' d-flex align-items-center bg-light rounded-pill '>
                        <MdOutlineSearch size={15} className='search-icon' />
                        <input type="text" placeholder='Search for your favourite group in ATG' className='searchInput rounded-pill' />
                    </form>
                    <div className='d-flex align-items-center'>
                        <Link to={'/signup'} className='create-account pe-2 text-decoration-none '>Create account</Link>
                        <div className='itIsFree'>It's free!</div>
                        <div>
                            <IoMdArrowDropdown size={22} className='down-arrow' />
                        </div>
                    </div>
                </div>
            </nav>
        </>


    )
}

export default Navbar