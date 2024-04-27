import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type TProps = {
    picture: string;
    name: string;
    authorName: string;
    preview: string;
    uri: string;
    explicit: boolean;
    album: string;
    total: number;
    release_date: string;
    LikedSongs: (name: string, authorName: string, picture: string, previewSong: string) => void; 
}

const EachSearchSong = (props: TProps) => {
    const [saved, setSaved] = useState<boolean>(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const sendLikedSong = (name: string, authorName: string, picture: string, preview: string) => {
        props.LikedSongs(name, authorName, picture, preview);
        setSaved(true);
    }

    useEffect(() => {
        setSaved(false)
    }, [props.name, props.authorName, props.picture, props.preview])

    return (
        <div className="track">
            <Modal
                 open={open}
                 onClose={handleClose}
                 aria-labelledby="modal-modal-title"
                 aria-describedby="modal-modal-description">
                 <Box className="modal">
                     <Typography id="modal-modal-title" variant="h6" component="h2">
                         {props.name}
                     </Typography>
                     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                         Track name: {props.name} <br/>
                         Author: {props.authorName} <br/>
                         Listen link: <a style={{color: "white"}} href={props.uri}>{props.name}</a> <br/>
                         Explicit: {props.explicit ? <span>Yes</span> : <span>No</span>}
                        <h2>About album</h2>
                        Album name: {props.album} <br/>
                        Tracks in album: {props.total}<br/>
                        Release date: {props.release_date} <br/>
                     </Typography>
                 </Box>
            </Modal>
            <div className="names">
                <div className="picture">
                    <img src={props.picture} alt="pic" />
                </div>
                <div className="names_track">
                    <p className="music_name">{props.name}</p>
                    <p className="name_auth">{props.authorName}</p>
                </div>
            </div>
            <div className="playButton">
                <Button onClick={handleOpen} className="playBtnIns">
                    <InfoIcon/>
                </Button>
                {
                     saved ? <Button><FavoriteIcon color="secondary"/></Button> : <Button onClick={() => sendLikedSong(props.name, props.authorName, props.picture, props.preview)}><FavoriteBorderIcon/></Button>
                }
            </div>
        </div> 
    );
}  

export default EachSearchSong;
