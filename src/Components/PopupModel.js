import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { BsInfoCircle, BsInstagram, BsShare } from 'react-icons/bs';
import { TiThumbsUp } from 'react-icons/ti';
import { FiTwitter } from "react-icons/fi";
import { Link } from 'react-router-dom';

const PopupModel = ({ darkmode, imagedata, closeModal, getPhotos, setSearchItem }) => {

    const handleClickOutside = (event) => {
        const datadiv = document.getElementById('datadiv');
        const clickTarget = event.target;

        if (datadiv && !datadiv.contains(clickTarget)) {
            closeModal();
        }
    };

    function search(title) {
        closeModal();
        setSearchItem(title);
        getPhotos(title);
    }

    const download = (url) => {
        fetch(url, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", imagedata.alt_description + ".jpg");
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    function formatNumberToThousands(num) {
        if (num >= 1000 && num < 10000) {
            return (num / 1000).toFixed(1) + 'k';
        } else if (num >= 10000) {
            return (num / 1000).toFixed(0) + 'k';
        } else {
            return num.toString();
        }
    }

    return (
        <div className="fixed top-0 left-0 min-h-screen w-screen bg-[#000000] bg-opacity-75 flex justify-center items-center z-[99]" onClick={handleClickOutside}>
            <div className={`w-[380px] mx-3 max-w-[945px] lg:w-[945px] relative ${darkmode ? "bg-color-1-dark" : "bg-[#FFFFFF]"} rounded-2xl`} id="datadiv">
                <div className='absolute -top-2 -right-2 h-5 w-5 lg:-top-4 lg:-right-4 lg:h-9  lg:w-9 rounded-full bg-[#E5E5E5] bg-opacity-75 z-[999] flex justify-center items-center cursor-pointer' onClick={closeModal}>
                    <AiOutlineClose className='h-2 w-2 lg:h-4 lg:w-4' />
                </div>
                <div className='relative rounded-t-2xl overflow-hidden w-full lg:max-w[945px]'>
                    <img src={imagedata.urls.full} alt={imagedata.alt_description} className='w-[380px] aspect-square lg:w-[945px] lg:aspect-[945/482] object-cover' />
                    <div className='absolute left-0 lg:left-[25px] bottom-[15px] lg:bottom-[10px] flex justify-end lg:justify-between items-center lg:w-[900px] w-full'>
                        <div className='flex gap-4 lg:m-5 mx-2'>
                            <button className='text-[#ECECEC] font-semibold border-[1px] lg:py-[7px] lg:px-[10px] rounded-[3.29px] lg:min-w-[60px] flex items-center gap-1 px-2 py-1 text-sm'><BsShare />Share</button>
                            <button className='text-[#ECECEC] font-semibold border-[1px] lg:py-[7px] lg:px-[10px] rounded-[3.29px] lg:min-w-[60px] flex items-center gap-1 px-2 py-1 text-sm'><BsInfoCircle />Info</button>
                        </div>
                        <button onClick={() => { download(imagedata.urls.full) }} className='hidden lg:block h-[39px] text-center text-sm text-[#FFFFFF] px-6 bg-[#3CB46E] rounded-lg'>Download Image</button>
                    </div>
                </div>
                <div className="lg:px-6 rounded-b-2xl mb-3 lg:m-0">
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex flex-col lg:flex-row lg:gap-2 lg:items-center'>
                            <Link to={`https://unsplash.com/@${imagedata.user.username}`} target='_blank' className='flex items-center'>
                                <img src={imagedata.user.profile_image.medium} alt="user" className='h-[46px] w-[46px] rounded-full object-cover m-2 lg:my-5' />
                                <div className='flex flex-col justify-between lg:h-[32px] items-start'>
                                    <h3 className={`text-[14px] font-bold ${darkmode ? "text-[#E5E5E5]" : "text-color-2-dark"} font-[Montserrat]`}>{imagedata.user.name}</h3>
                                    <p className='text-[10px] leading-[15px] font-semibold font-[poppins] italic text-[#A7A7A7] cursor-pointer'>@{imagedata.user.username}</p>
                                </div>
                            </Link>
                            <div className='flex lg:gap-4 lg:mx-4 gap-1 mx-2'>
                                {imagedata.user.social.instagram_username && <Link to={`https://instagram.com/${imagedata.user.social.instagram_username}`} target='_blank' className='text-[#A7A7A7] text-xs lg:text-base flex items-center'><BsInstagram />/{imagedata.user.social.instagram_username}</Link>}
                                {imagedata.user.social.twitter_username && <Link to={`https://twitter.com/${imagedata.user.social.twitter_username}`} target='_blank' className='text-[#A7A7A7] text-xs lg:text-base flex items-center'><FiTwitter />/{imagedata.user.social.twitter_username}</Link>}
                            </div>
                        </div>
                        <div className='flex flex-col justify-center gap-2 mr-2'>
                            <button onClick={() => { download(imagedata.urls.full) }} className='lg:hidden lg:h-[39px] text-center text-[12px] text-[#FFFFFF] px-4 py-2 bg-[#3CB46E] rounded-lg'>Download Image</button>
                            <div className='flex gap-1 items-center'>
                                <div className='text-[#858484] text-[10px] lg:text-sm font-bold'><span>{formatNumberToThousands(imagedata.likes)}</span> Downloads</div>
                                <div className='flex gap-1 items-center mx-2 lg:mx-4'>
                                    <p><TiThumbsUp className='h-[12px] w-[12px] lg:h-[20px] lg:w-[20px] text-[#858484] font-bold' /></p>
                                    <p className="lg:text-base text-[10px] font-bold text-[#858484]">{formatNumberToThousands(imagedata.likes)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {imagedata.tags &&
                        <div className='mx-4 my-4'>
                            <h3 className={`text-[14px] font-bold ${darkmode ? "text-[#E5E5E5]" : "text-color-2-dark"} py-1`}>Related Tags</h3>
                            <div className='flex gap-2 flex-wrap my-2'>
                                {imagedata.tags.map((tag, index) => (
                                    <button onClick={() => { search(tag.title) }} key={index} className='lg:text-[12px] font-medium rounded-md bg-[#ECECEC] text-[#4F4F4F] lg:px-4 lg:py-2 font-[Montserrat] text-sm px-[10px] py-[5px]'>{tag.title}</button>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PopupModel;
