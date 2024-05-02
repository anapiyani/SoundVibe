import './homeContainer.scss';
import Home from "../../components/home/home";
import { useEffect, useCallback, useState } from 'react';
import { recommendSongs } from '../../SpotifyApi';
import Alert from '@mui/material/Alert';
import { TSongs } from '../../components/types/types';
import Recommend from '../../components/recommend/recommend';

type TProps = {
    SongLiked: (name: string, authorName: string, picture: string, previewSong: string | null) => void;
    deleteLikedSong: (preview: string) => void;
}

const HomeContainer = (props: TProps) => {
    const [songs, setSongs] = useState<TSongs[]>([]);
    const [spinner, setSpinner] = useState<boolean>(false);
    const [catchErr, setCatchErr] = useState<boolean>(false);

    const getRecommedSongs = useCallback(async () => {
        try {
            setSpinner(true);
            const songs = await recommendSongs();
            setSongs(songs);
          } catch (error) {
            setCatchErr(true);
            setInterval(() => {
                setCatchErr(false);
            }, 5000)
          } finally {
            setSpinner(false);
          }
    }, []);
    
    useEffect(() => {
        getRecommedSongs();
    }, []);

    const SongLiked = (name: string, authorName: string, picture: string, previewSong: string | null): void => {
        props.SongLiked(name, authorName, picture, previewSong);
    }

    return (
        <div className="homecontainer">
            <div className="homeContent">
                {catchErr ?  <Alert variant="filled" severity="error">Something went wrong. Please check your internet</Alert> : ''}
                <Home/>
                <Recommend deleteLikedSong={props.deleteLikedSong} searchHandler={getRecommedSongs} songs={songs} isSpinning={spinner} LikedSongs={SongLiked}/>
            </div>
        </div>
    )
}

export default HomeContainer;