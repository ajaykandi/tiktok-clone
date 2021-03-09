import React from "react";
import "./VedioFooter.css";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import Ticker from "react-ticker";

function VedioFooter({ channel, song, descreption }) {
  return (
    <div className="vediofooter">
      <div className="vediofooter__text">
        <h3>@{channel} </h3>
        <p>{descreption}</p>
        <div className="vediofooter__ticker">
          <AudiotrackIcon className="vediofooter__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song} </p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VedioFooter;
