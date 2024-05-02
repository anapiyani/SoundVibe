import {useState } from "react";
import './recommend.scss';
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

const Recommend = (props: TProps) => {
    const [name, setName] = useState<string>('');
    return (
        <div className="search">
            <div className="searchContent">
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
                                <h2>One moment xD <br/> I'm going to recommend you few songs</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommend;