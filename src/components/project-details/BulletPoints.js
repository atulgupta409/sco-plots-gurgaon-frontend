import React from "react";

const BulletPoints = ({ isOnBanner, name, address, banner_bullets }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{address}</p>
      <div
        className={isOnBanner ? "bullet_points" : "bullet_points bullet_dark"}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: banner_bullets,
          }}
          className="project_highlights mob_hide"
        ></div>
      </div>
    </div>
  );
};

export default BulletPoints;
