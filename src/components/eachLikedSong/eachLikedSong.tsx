 import './eachLikedSong.scss';
import Button from '@mui/material/Button';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import { useEffect, useState } from 'react';

type TProps = {
    name: string,
    authorName: string,
    pictrue: string,
    preview: string | null,
    onPlay: () => void;
    isPlaying: boolean;
    deleteLiked: () => void;
    onPause: () => void;
    nextSongPlay: () => void;
}

const EachLikedSong = (props: TProps) => {
    const [hasNoPrev, setHasNoPrev] = useState<boolean>(false);
    useEffect(() => {
        if (props.preview === null) {
            props.nextSongPlay;
            setHasNoPrev(true);
        }
    }, [])
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
                {
                    hasNoPrev 
                    ? 
                    <h2 className='npreview'>No Preview</h2> 
                    :
                    props.isPlaying ?  <Button onClick={props.onPause}><PauseCircleOutlineIcon className='infoIcon' /></Button> : <Button onClick={props.onPlay}> <PlayCircleOutlineIcon className='infoIcon' /> </Button>
                }
                <Button onClick={props.deleteLiked}><FavoriteIcon className='favIcon' color="secondary"/></Button>
            </div>
        </div>   
    )
}

export default EachLikedSong;