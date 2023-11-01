import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, } from "react-router-dom";
import ImageGallery from "./Components/ImageGallery";
import PopupModel from "./Components/PopupModel";
import useGetPhotos from "./Hooks/useGetPhotos";

function App() {

    const [darkmode,setDarkMode] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imagedata,setImageData] = useState(null);
    const [searchitem, setSearchItem] = useState("");
    const [data, searchdata, isLoading, issearcheddata, getPhotos] = useGetPhotos();

    const openModal = (imagedata) => {
        setImageData(imagedata);
        setShowModal(true);
    }

    const closeModal = () => {
        setImageData(null);
        setShowModal(false);
    }

    return (
        <div className={`${darkmode ? "bg-color-1-dark" : "bg-color-1-light"} overflow-x-hidden`}>
            <Navbar darkmode={darkmode} setDarkMode={setDarkMode} searchitem={searchitem} setSearchItem={setSearchItem} getPhotos={getPhotos}></Navbar>

            {showModal && imagedata && (
                <PopupModel darkmode={darkmode} imagedata={imagedata} closeModal={closeModal} getPhotos={getPhotos} setSearchItem={setSearchItem} />
            )}

            <Routes>
                <Route path="/" element={<ImageGallery darkmode={darkmode} openModal={openModal} showModal={showModal} searchitem={searchitem} setSearchItem={setSearchItem} data={data} searchdata={searchdata} isLoading={isLoading} issearcheddata={issearcheddata} getPhotos={getPhotos} ></ImageGallery>}></Route>
            </Routes>
        </div>
    );
}

export default App;
