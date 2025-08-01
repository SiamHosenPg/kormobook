import React from "react";

const Badge = ({ badge }) => {
  const badgeImages = {
    sprout: "/public/images/badge/sprout.png",
    Mid: "/images/badges/mid.png",
    Senior: "/images/badges/senior.png",
    Mastermind: "/images/badges/mastermind.png",
  };
  return (
    <div>
      <img className="w-4 " src={badgeImages.badge} alt="" />
    </div>
  );
};

export default Badge;
