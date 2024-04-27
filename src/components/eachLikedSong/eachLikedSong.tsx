import React from "react";
import './eachLikedSong.scss';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';

type TProps = {
    name: string,
    authorName: string,
    pictrue: string,
    preview: string | null,
    onPlay: () => void;
    isPlaying: boolean;
    deleteLiked: () => void;
}

const EachLikedSong = (props: TProps) => {
    return (
        <div className="track">
            <div className="names">
                <div className="picture">
                    <img src={props.pictrue} alt="pic" />
                </div>
                <div className="names_track">
                    <p className="music_name">{props.name}</p>
                    <p className="name_auth">{props.authorName}</p>
                </div>
            </div>
            <div className="playButton">
                <Button onClick={props.onPlay}>{props.isPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon />}</Button> 
                <Button onClick={props.deleteLiked}><FavoriteIcon color="secondary"/></Button>
            </div>
        </div>   
    )
}

export default EachLikedSong;