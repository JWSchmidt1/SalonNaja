import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import GalleryImages from '../../../galleryimages.json';

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
	};

    let GalImgs = GalleryImages.images;
    let AltTag = GalleryImages.alt;

    console.log(GalImgs);

    return(
        <ul className="galleryImages">

            {GalleryImages.images.map((item, index) => (
                <li>
                    <img onClick={() => openLightboxOnSlide((index+1))} src={item} alt={index} />
                </li>
            ))}

            <FsLightbox
                toggler={lightboxController.toggler}
                sources={GalImgs}
                slide={lightboxController.slide}
            />

        </ul>
    )
}

export default GalleryContent;