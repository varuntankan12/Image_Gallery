import React from 'react';
import { TiThumbsUp } from "react-icons/ti"

const ImageCard = (props) => {

    function formatNumberToThousands(num) {
        if (num >= 1000 && num < 10000) {
            return (num / 1000).toFixed(1) + 'k';
        } else if (num >= 10000) {
            return (num / 1000).toFixed(0) + 'k';
        } else {
            return num.toString();
        }
    }

    const carddata = props.carddata;
    const height = props.height;
    const width = props.width;
    const darkmode = props.darkmode;

    return (
        <div onClick={() => props.openModal(carddata)} className={`relative rounded-lg overflow-hidden border-[1px] ${darkmode ? "border-color-4-dark" : "border-[#E5E5E5]"} flex flex-col cursor-pointer transition-all  duration-500 hover:shadow-lg lg:hover:scale-105`}>
            <img src={carddata.urls.small} alt={carddata.alt_description} className="object-cover" style={{ height: height, width: width }} />
            <div className={`absolute bottom-0 w-full py-2 lg:m-0 lg:h-[64px] flex justify-between items-center ${darkmode ? "bg-color-4-dark" : "bg-[#FFFFFF]"}`}>
                <div className='flex items-center'>
                    <img src={carddata.user.profile_image.medium} alt="user" className='h-[28px] w-[28px] lg:h-[39px] lg:w-[39px] lg:m-2 rounded-full object-cover mx-1' />
                    <div className='flex flex-col justify-between items-start lg:mx-2'>
                        <h3 className={`text-[10px] lg:text-sm font-bold ${darkmode ? "text-[#E5E5E5]" : "text-color-2-dark"} font-[Montserrat]`}>{carddata.user.name}</h3>
                        <p className=' text-[8px] lg:text-[10px] leading-[15px] font-semibold font-[poppins] italic text-[#A7A7A7] '>@{carddata.user.username}</p>
                    </div>
                </div>
                <div className={`flex mx-4 items-center ${darkmode ? "text-[#E5E5E5]" : "text-color-2-dark"}`}>
                    <p><TiThumbsUp className='h-[12px] w-[12px] font-bold mr-[2px]' /></p>
                    <p className="text-[12px] font-bold">{formatNumberToThousands(carddata.likes)}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageCard