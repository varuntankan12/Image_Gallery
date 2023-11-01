import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { BsFillSunFill, BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";


const Navbar = ({ darkmode, setDarkMode, searchitem, setSearchItem, getPhotos }) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const toggleDarkMode = (checked) => {
        if (checked) {
            setDarkMode(true);
        }
        else {
            setDarkMode(false);
        }
    }

    const searchChangeHandler = (value) => {
        setSearchItem(value);
    }

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            getPhotos(searchitem);
        }
    }

    return (
        <div className='w-screen lg:h-[97px] lg:max-w-[1440px] lg:mx-auto'>
            <div className='h-[70px] w-[96vw] lg:h-[97px] lg:w-11/12 mx-auto flex justify-between items-center'>
                <h1 className={`font-[Pattaya] text-[24px] lg:text-[30px] font-normal leading-10 text-left ${darkmode ? "text-color-3-dark" : "text-color-3-light"} cursor-pointer`}>Image Gallery</h1>

                <div className='hidden lg:flex gap-4 items-center'>
                    {/*search bar */}
                    <div className='relative w-[419px]'>
                        <div className='relative flex items-center'>
                            <label className='relative flex items-center'><BsSearch className='absolute left-[10px] opacity-50' />
                                <input type='text' placeholder="Search Images Here" id='nav_search' value={searchitem} onChange={(event) => { searchChangeHandler(event.target.value) }} onKeyDown={handleKeyDown} className={`pl-10 h-[43px] w-[360px] rounded-l-md px-4 navsearchbar font-medium focus:outline-none focus:bg-color-2-light ${darkmode ? "bg-color-2-dark text-color-3-dark" : "bg-color-2-light text-color-3-light"}`}></input>
                            </label>
                            <button onClick={() => { getPhotos(searchitem) }} className={`h-[43px] w-[60px] flex justify-center items-center rounded-r-md ${darkmode ? "bg-[#696868]" : "bg-[#f1f1f1]"}`}>
                                <BsSearch className='left-[10px]' />
                            </button>
                        </div>
                        <div className='pl-10 w-[419px] rounded-md bg-gray-400 px-4 '>
                        </div>
                    </div>


                    <ul className={`mx-4 flex gap-6 font-bold text-sm ${darkmode ? "text-color-3-dark" : "text-color-3-light"} font-[Montserrat]`}>
                        <li><Link to={"/"}>Explore</Link></li>
                        <li><Link to={"/"}>Collection</Link></li>
                        <li><Link to={"/"}>Community</Link></li>
                    </ul>
                </div>



                {/*theme button */}
                <div className='hidden lg:flex items-center'>
                    <label htmlFor='toggle' className={`text-sm font-bold font-[Montserrat] ${darkmode ? "text-color-3-dark" : "text-color-3-light"} px-2 cursor-pointer`}>Dark Mode</label>
                    <div className="toggle-container">
                        <input type="checkbox" id="toggle" className="checkbox" onChange={(event) => { toggleDarkMode(event.target.checked) }} />
                        <label htmlFor="toggle" className="toggle"></label>
                    </div>
                </div>
                <div className='flex items-center lg:hidden'>
                    <div className='cursor-pointer'>
                        {darkmode ? <BsFillSunFill className={`h-[28px] w-[28px] p-[4px] mx-2 ${darkmode ? "text-color-3-dark" : "text-color-3-light"}`} onClick={() => { toggleDarkMode(!darkmode) }} /> : <MdOutlineDarkMode className={`h-[30px] w-[30px] p-[4px] mx-2 ${darkmode ? "text-color-3-dark" : "text-color-3-light"}`} onClick={() => { toggleDarkMode(!darkmode) }} />}
                    </div>
                    <button onClick={toggleMenu}><GiHamburgerMenu className={`h-[30px] w-[30px] mr-2 p-[2px] ${darkmode ? "text-color-3-dark" : "text-color-3-light"}`} /></button>
                </div>
            </div>

            <div className={isMenuVisible ? 'block md:hidden' : 'hidden md:hidden'} id='navcontent'>
                <div className={`w-screen border-y-[1.5px] border-opacity-30 ${darkmode ? "border-color-3-dark" : "border-color-3-light"} py-[8px]`}>
                    <div className='w-[325px] mx-auto'>
                        <div className='relative flex items-center'>
                            <label className='relative flex items-center'><BsSearch className='absolute left-[10px] opacity-50' />
                                <input type='text' placeholder="Search Images Here" id='nav_search' value={searchitem} onChange={(event) => { searchChangeHandler(event.target.value) }} onKeyDown={handleKeyDown} className={`pl-10 h-[43px] w-[275px] rounded-l-md px-4 navsearchbar font-medium focus:outline-none focus:bg-color-2-light ${darkmode ? "bg-color-2-dark text-color-3-dark" : "bg-color-2-light text-color-3-light"}`}></input>
                            </label>
                            <button onClick={() => { getPhotos(searchitem) }} className={`h-[43px] w-[50px] flex justify-center items-center rounded-r-md ${darkmode ? "bg-[#696868]" : "bg-[#f1f1f1]"}`}>
                                <BsSearch className='left-[10px]' />
                            </button>
                        </div>
                        <div className='pl-10 w-[419px] rounded-md bg-gray-400 px-4 '>
                        </div>
                    </div>
                </div>

                <div className='mx-[30px]'>
                    <ul className={` font-bold text-sm ${darkmode ? "text-color-3-dark" : "text-color-3-light"} font-[Montserrat]`}>
                        <li className='block py-2 ml-3 '><Link to={"/"}>Explore</Link></li>
                        <li className='block py-2 ml-3 '><Link to={"/"}>Collection</Link></li>
                        <li className='block py-2 ml-3 '><Link to={"/"}>Community</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar