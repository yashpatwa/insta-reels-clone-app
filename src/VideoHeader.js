import React from "react";
import './VideoHeader.css';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

function VideoHeader() {
    return (
        <div className="videoHeader">
            <ArrowBackIosIcon />
            <h3>Reels</h3>
            <CameraAltOutlinedIcon />
        </div>
    )
}

export default VideoHeader;