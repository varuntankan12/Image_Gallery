import React from 'react'
import ImageCard from './ImageCard';

const CardTamplete = ({ darkmode, data, openModal }) => {

    const dataarray = data;
    if(data === null){
        return(
            <div className='h-full mt-8 flex flex-col gap-2 justify-center items-center'>
                <p className={`text-3xl lg:text-5xl ${darkmode ? "text-[#E5E5E5]" : "text-color-2-dark"} font-[Montserrat]`}>API Fetch <span className="text-red-800 ">"Error"</span></p>
                <p className={`text-2xl lg:text-3xl ${darkmode ? "text-[#E5E5E5]" : "text-color-2-dark"} font-[Montserrat]`}>May be you are Offline Check your connection.</p>
            </div>
        )
    }

    return (
        <div className='mt-8'>
            <div className='flex flex-col justify-center items-center gap-y-2 lg:gap-y-4 w-full my-4 relative'>
                <div className='flex gap-x-2 mx-2 lg:gap-x-4 lg:mx-4'>
                    <div className='hidden lg:flex flex-col gap-4'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[0]} width={"320px"} height={"280px"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[1]} width={"320px"} height={"410px"} openModal={openModal} />
                    </div>
                    <div className='lg:hidden flex flex-col gap-2'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[0]} width={"48vw"} height={"50vw"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[1]} width={"48vw"} height={"60vw"} openModal={openModal} />
                    </div>
                    <div className='hidden lg:flex flex-col gap-4'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[2]} width={"320px"} height={"399px"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[3]} width={"320px"} height={"290px"} openModal={openModal} />
                    </div>
                    <div className='lg:hidden flex flex-col gap-2'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[2]} width={"48vw"} height={"65vw"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[3]} width={"48vw"} height={"45vw"} openModal={openModal} />
                    </div>
                    <div className='hidden lg:flex flex-col gap-4'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[4]} width={"428px"} height={"275px"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[5]} width={"430px"} height={"415px"} openModal={openModal} />
                    </div>
                </div>
                <div className='hidden lg:flex gap-4 mx-4'>
                    <ImageCard darkmode={darkmode} carddata={dataarray[6]} width={"274px"} height={"360px"} openModal={openModal} />
                    <ImageCard darkmode={darkmode} carddata={dataarray[7]} width={"274px"} height={"360px"} openModal={openModal} />
                    <ImageCard darkmode={darkmode} carddata={dataarray[8]} width={"531px"} height={"360px"} openModal={openModal} />
                </div>
                <div className='lg:hidden flex gap-2 mx-2'>
                    <ImageCard darkmode={darkmode} carddata={dataarray[7]} width={"60vw"} height={"60vw"} openModal={openModal} />
                    <ImageCard darkmode={darkmode} carddata={dataarray[8]} width={"35vw"} height={"60vw"} openModal={openModal} />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-y-2 lg:gap-y-4 w-full my-4 relative'>
                <div className='flex gap-x-2 mx-2 lg:gap-x-4 lg:mx-4'>
                    <div className='hidden lg:flex flex-col gap-4'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[9]} width={"320px"} height={"280px"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[10]} width={"320px"} height={"410px"} openModal={openModal} />
                    </div>
                    <div className='lg:hidden flex flex-col gap-2'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[9]} width={"48vw"} height={"50vw"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[10]} width={"48vw"} height={"60vw"} openModal={openModal} />
                    </div>
                    <div className='hidden lg:flex flex-col gap-4'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[11]} width={"320px"} height={"399px"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[12]} width={"320px"} height={"290px"} openModal={openModal} />
                    </div>
                    <div className='lg:hidden flex flex-col gap-2'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[11]} width={"48vw"} height={"65vw"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[12]} width={"48vw"} height={"45vw"} openModal={openModal} />
                    </div>
                    <div className='hidden lg:flex flex-col gap-4'>
                        <ImageCard darkmode={darkmode} carddata={dataarray[13]} width={"428px"} height={"275px"} openModal={openModal} />
                        <ImageCard darkmode={darkmode} carddata={dataarray[14]} width={"430px"} height={"415px"} openModal={openModal} />
                    </div>
                </div>
                <div className='hidden lg:flex gap-4 mx-4'>
                    <ImageCard darkmode={darkmode} carddata={dataarray[15]} width={"274px"} height={"360px"} openModal={openModal} />
                    <ImageCard darkmode={darkmode} carddata={dataarray[16]} width={"274px"} height={"360px"} openModal={openModal} />
                    <ImageCard darkmode={darkmode} carddata={dataarray[17]} width={"531px"} height={"360px"} openModal={openModal} />
                </div>
                <div className='lg:hidden flex gap-2 mx-2 my-1'>
                    <ImageCard darkmode={darkmode} carddata={dataarray[16]} width={"60vw"} height={"60vw"} openModal={openModal} />
                    <ImageCard darkmode={darkmode} carddata={dataarray[17]} width={"35vw"} height={"60vw"} openModal={openModal} />
                </div>
            </div>
        </div>
    )
}

export default CardTamplete