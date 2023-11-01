import React from 'react';
import { BsSearch } from "react-icons/bs";

const HomePageContent = ({ darkmode, searchitem, setSearchItem, getPhotos }) => {

    const searchChangeHandler = (value) => {
        setSearchItem(value);
    }

    function handleKeyDown(event) {
        if (event.keyCode === 13) {
            getPhotos(searchitem);
        }
    }

    return (
        <div className='w-screen max-w-[1440px] h-[384px] flex flex-col justify-center items-center home-page-cover mx-auto font-[Montserrat]'>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#FFFFFF] text-center mx-[40px] tracking-tight">Download High Quality Images by creators</h2>
            <p className="text-xs lg:text-sm font-medium text-[#C4C4C4] m-2 mx-[80px] text-center">Over 2.4 million+ stock Images by our talented community</p>
            <div className='w-[350px] lg:w-[808px] mx-auto my-4'>
                <div className='relative flex items-center'>
                    <label className='relative flex items-center'><BsSearch className='absolute left-[10px] opacity-50' />
                        <input type='text' placeholder="Search Images Here" id='nav_search' value={searchitem} onChange={(event) => { searchChangeHandler(event.target.value) }} onKeyDown={handleKeyDown} className={`pl-10 h-[43px] w-[300px] lg:h-[56px] lg:w-[808px] rounded-l-md lg:rounded-r-md px-4 navsearchbar font-medium focus:outline-none focus:bg-color-2-light ${darkmode ? "bg-color-2-dark" : "bg-color-2-light text-color-3-light"}`}></input>
                    </label>
                    <button onClick={() => { getPhotos(searchitem) }} className={`lg:hidden h-[43px] w-[50px] flex justify-center items-center rounded-r-md ${darkmode ? "bg-[#696868]" : "bg-[#f1f1f1]"}`}>
                        <BsSearch className='left-[10px]' />
                    </button>
                </div>
                <div className='pl-10 w-[419px] rounded-md bg-gray-400 px-4 '>
                </div>
            </div>
        </div>
    )
}

export default HomePageContent