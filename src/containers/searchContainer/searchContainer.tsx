import React, {useState, useCallback} from "react";
import Search from "../../components/search/search";
import './searchContainer.scss';
import Alert from '@mui/material/Alert';
import {searchSongs} from '../../SpotifyApi';
import { TSongs } from "../../components/types/types";

type TProps = {
    SongLiked: (name: string, authorName: string, picture: string, previewSong: string | null) => void
}

const SearchContainer = (props: TProps) => {
    const [songs, setSongs] = useState<TSongs[]>([]);
    const [spinner, setSpinner] = useState<boolean>(false);
    const [catchErr, setCatchErr] = useState<boolean>(false);

    const searchHandler = useCallback(async (name: string) => {
        try {
            setSpinner(true);
            const songs = await searchSongs(name);
            setSongs(songs);
          } catch (error) {
            setCatchErr(true);
            setInterval(() => {
                setCatchErr(false);
            }, 5000)
          } finally {
            setSpinner(false);
          }
    }, [])

    const SongLiked = (name: string, authorName: string, picture: string, previewSong: string | null): void => {
        props.SongLiked(name, authorName, picture, previewSong);
    }
    
    return (
        <div className="searchContainer">
            <div className="searchContent">
                {catchErr ?  <Alert variant="filled" severity="error">Something went wrong</Alert> : ''}
                <Search searchHandler={searchHandler} songs={songs} isSpinning={spinner} LikedSongs={SongLiked}/>
            </div>
        </div>
    )
}

export default SearchContainer;