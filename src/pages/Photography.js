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
      coverUrl: "assets/Personal Favorites/cali-1.jpg",
      images: [
        "assets/Personal Favorites/cali-1.jpg",
        "assets/Personal Favorites/cali.jpg",
        "assets/Personal Favorites/cali-3.jpg",
        "assets/Personal Favorites/cali-4.jpg",
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
              <span className="photo-count">{collection.images.length} photos</span>
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
