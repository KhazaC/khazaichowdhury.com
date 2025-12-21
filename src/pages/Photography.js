import React, { useState } from "react";
import "./Photography.css";
import Lightbox from "../components/Lightbox";

function Photography() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);

  // Photo collections
  const photoCollections = [
    {
      id: 1,
      title: "Personal Favorites",
      coverUrl: `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali-1.jpg`,
      images: [
        `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali-1.jpg`,
        `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali.jpg`,
        `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali-3.jpg`,
        `${process.env.PUBLIC_URL}/assets/Personal%20Favorites/cali-4.jpg`,
      ],
    },
    {
      id: 2,
      title: "Turkey",
      coverUrl: `${process.env.PUBLIC_URL}/assets/Turkey/Turkey-Small-Screen-3.jpg`,
      images: [
        `${process.env.PUBLIC_URL}/assets/Turkey/Turkey-Small-Screen-1.jpg`,
        `${process.env.PUBLIC_URL}/assets/Turkey/Turkey-Small-Screen-2.jpg`,
        `${process.env.PUBLIC_URL}/assets/Turkey/Turkey-Small-Screen-3.jpg`,
        `${process.env.PUBLIC_URL}/assets/Turkey/Turkey-Small-Screen-4.jpg`,
      ],
    },
  ];

  const openGallery = (images) => {
    setCurrentGallery(images);
    setLightboxOpen(true);
  };

  return (
    <div className="photography-page">
      <div className="page-header">
        <h1>Image Galleries</h1>
      </div>

      <div className="photo-grid">
        {photoCollections.map((collection) => (
          <div
            key={collection.id}
            className="photo-card"
            onClick={() => openGallery(collection.images)}
          >
            <img src={collection.coverUrl} alt={collection.title} />
            <div className="photo-info">
              <h3>{collection.title}</h3>
              <span className="photo-count">
                {collection.images.length} photos
              </span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        images={currentGallery}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        startIndex={0}
      />
    </div>
  );
}

export default Photography;
