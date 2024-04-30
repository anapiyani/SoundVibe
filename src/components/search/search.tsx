import {useState } from "react";
import './search.scss';
import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import EachSearchSong from "../eachSearchSong/eachSearchSong";
import { TSongs} from "../types/types";

type TProps = {
    searchHandler: (name: string) => void;
    songs: TSongs[];
    isSpinning: boolean;
    LikedSongs: (name: string, authorName: string, picture: string, previewSong: string) => void; 
    deleteLikedSong: (preview: string) => void;
}

const Search = (props: TProps) => {
    const [name, setName] = useState<string>('');
    const [SearchAlert, setSearchAlert] = useState<boolean>(false);

    const handleSearch = () => {
        if (!name || name === '') {
            setSearchAlert(true),
            setTimeout(() => {
                setSearchAlert(false);
            }, 2000);
        } else {
            props.searchHandler(name)
        }
    }

    return (
        <div className="search">
            <div className="searchContent">
                <div className="searchForm">
                      <Input className="searchInput" onChange={(e) => setName(e.target.value)} placeholder="Music name..."/>
                      <Button className="searchButton" onClick={handleSearch} variant="outlined" startIcon={<SearchIcon className="iconSearch" />}>Search</Button>
                </div>
                {SearchAlert ? <Alert variant="outlined" severity="error" className="searchAlert">You should fill out input.</Alert> : ''}
                <div className="completedArea">
                    <div className="musics">
                    {props.isSpinning ? <CircularProgress /> : ''}
                        {
                            props.songs.length > 0 
                            ?
                            props.songs.map((item, index) => (
                                <EachSearchSong key={index} picture={item.album.images[0].url} authorName={item.artists[0].name} name={item.name} preview={item.preview_url} LikedSongs={props.LikedSongs} uri={item.uri} explicit={item.explicit} album={item.album.name} total={item.album.total_tracks} release_date={item.album.release_date} deleteLikedSong={props.deleteLikedSong} />
                            ))
                            :
                            <div className="noSongs">
                                <h2>Search for songs :) <br/>To enjoy music, you should like what you listen to. You can preview the tracks.</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;