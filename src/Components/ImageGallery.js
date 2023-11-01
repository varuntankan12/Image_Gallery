import React, { } from 'react';
import Loadinganimation from './Loadinganimation';
import CardTamplete from './CardTamplete';
import HomePageContent from './HomePageContent';

const ImageGallery = ({ darkmode, openModal, showModal, searchitem, setSearchItem, data, searchdata, isLoading, issearcheddata, getPhotos }) => {

    let tagarray = [];

    function retrivetags(result) {
        let tags = result.map((item) => {
            return item.tags[1].title;
        })

        return [...new Set(tags)];
    }

    if (issearcheddata) {
        tagarray = retrivetags(searchdata[0]);
    }

    function search(title) {
        setSearchItem(title);
        getPhotos(title);
    }

    return (
        <div className={`mx-auto max-w-[1440px] min-h-screen overflow-x-hidden ${showModal ? "noscroll" : ""}`}>
            {!issearcheddata &&
                <HomePageContent darkmode={darkmode} searchitem={searchitem} setSearchItem={setSearchItem} getPhotos={getPhotos}></HomePageContent>
            }
            {issearcheddata &&
                <div className='mx-auto max-w-[1100px] w-full flex items-center flex-wrap lg:mt-14 mt-4'>
                    <h2 className={`text-3xl mx-2 my-2 font-extrabold font-[Montserrat] ${darkmode ? "text-[#FFFFFF]" : "text-color-2-dark"}`}>{searchitem}</h2><br />
                    <div className='flex gap-2 flex-wrap my-2 mx-2'>
                        {tagarray.map((tag, index) => (
                            <button onClick={() => { search(tag) }} key={index} className={`lg:text-[14px] text-[10px] font-medium rounded-md bg-transparent cursor-pointer ${darkmode ? "text-[#FFFFFF] border-[1.5px] border-[#FFFFFF] hover:bg-color-2-dark" : "text-[#4F4F4F] border-[1.5px] border-[#4F4F4F] hover:bg-color-3-dark"} lg:px-4 lg:py-2 px-2 py-1 font-[Montserrat]`}>{tag}</button>
                        ))}
                    </div>
                </div>
            }
            {issearcheddata ? searchdata.map((arr, index) => (<CardTamplete key={index} darkmode={darkmode} data={arr} openModal={openModal} />)) : data.map((arr, index) => (<CardTamplete key={index} darkmode={darkmode} data={arr} openModal={openModal} />))}
            {isLoading ? <Loadinganimation /> :
                <div className='flex justify-center items-center w-screen max-w-[1440px] my-10'>
                    <button onClick={() => { getPhotos(searchitem) }} className='text-2xl font-bold tracking-tight text-[#6dfc7bce] hover:text-[#4692c2e4]'>Load More..</button>
                </div>
            }
        </div>
    )
}

export default ImageGallery;