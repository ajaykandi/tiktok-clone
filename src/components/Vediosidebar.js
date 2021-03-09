import React, { useState } from "react";
import "./Vediosidebar.css";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";

function Vediosidebar({ likes, shares, comments }) {
  const [liked, setliked] = useState(false);
  const [shared, setShared] = useState(false);
  const [commented, setCommented] = useState(false);
  return (
    <div className="vediosidebar">
      <div className="vediosidebar__button">
        {liked ? (
          <FavoriteIcon onClick={(e) => setliked(false)} fontSize="large" />
        ) : (
          <FavoriteBorderIcon
            onClick={(e) => setliked(true)}
            fontSize="large"
          />
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="vediosidebar__button">
        <MessageIcon onClick={(e) => setCommented(true)} fontSize="large" />
        <p>{commented ? comments + 1 : comments}</p>
      </div>
      <div className="vediosidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default Vediosidebar;
