 
import './likedSongs.scss';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EachLikedSong from "../eachLikedSong/eachLikedSong";

type TLiked = {
    name: string,
    picture: string,
    authorName: string,
    preview: string | null,
  }


type TProps = {
    liked: TLiked[];
    playMusic: (previewUrl: string | null) => void;
    isPlaying: boolean;
    deleteLiked: (previewUrl: string | null) => void;
    onPause: () => void;
}

const LikedSongs = (props: TProps) => {
    return (
        <div className="likedSongs">
            <div className="likedsongs_content">
                <div className="header">
                    <div className="header_name">
                        <h1><FavoriteIcon className="icon"/>Liked songs</h1>
                    </div>
                </div>
                <div className="likedsongs">
                    <div className="completedArea">
                        <div className="musics">
                           {
                            props.liked.length > 0 ?
                            props.liked.map((item, index) => (
                                <EachLikedSong onPause={props.onPause} deleteLiked={() => props.deleteLiked(item.preview)} isPlaying={props.isPlaying} onPlay={() => props.playMusic(item.preview)} key={index} name={item.name} authorName={item.authorName} pictrue={item.picture} preview={item.preview} />
                            )) :
                            <div><h2 className="noLike">No liked songs yet...</h2></div>
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikedSongs;