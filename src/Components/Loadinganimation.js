import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loadinganimation = () => {

    return (
        <div className='flex flex-col gap-2 justify-center items-center max-w-[350px] mx-auto'>
            <Player
                autoplay={true}
                loop={true}
                src="https://assets10.lottiefiles.com/packages/lf20_cTXX7h.json"
                style={{ height: '300px', width: '300px' }}
            ></Player>
            <div className='text-center w-[345px] text-[24px] font-bold text-[#A7A7A7]'><h2>Loading some awesome Images...</h2></div>
        </div>
    )
}

export default Loadinganimation