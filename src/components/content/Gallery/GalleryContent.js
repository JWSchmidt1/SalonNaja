import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const GalleryContent = () => {

    const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

    function openLightboxOnSlide(number) {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

    return(
        <div className="galleryImages">
            <FsLightbox
                    toggler={lightboxController.toggler}
                    sources={[
                        'https://picsum.photos/200/300',
                        'https://picsum.photos/500/300',
                        'https://picsum.photos/200/300',
                        'https://picsum.photos/300/300',
                        'https://picsum.photos/600/300'
                    ]}
                    slide={lightboxController.slide}
                />
            <div className="col">
                <img onClick={() => openLightboxOnSlide(1)} src="https://picsum.photos/200/300" alt="" />
                <img onClick={() => openLightboxOnSlide(2)} src="https://picsum.photos/500/300" alt="" />
                <img onClick={() => openLightboxOnSlide(3)} src="https://picsum.photos/200/300" alt="" />
                <img onClick={() => openLightboxOnSlide(4)} src="https://picsum.photos/300/300" alt="" />
                <img onClick={() => openLightboxOnSlide(5)} src="https://picsum.photos/600/300" alt="" />
            </div>
            <div className="col">
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="col">
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
            </div>
            {/* <div className="col">
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
                <img src="https://picsum.photos/200/300" alt="" />
            </div> */}

        </div>
    )
}

export default GalleryContent;