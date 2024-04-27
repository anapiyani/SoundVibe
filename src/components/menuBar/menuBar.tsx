import {useState} from "react";
import './menuBar.scss';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { Link } from "react-router-dom";

const MenuBar = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const buttonClass = visible ? 'visibleOn' : 'visibleOff';

    const HandlerIcons = () => {
        setVisible(!visible);
    }

    return (
        <div className='menu' style={visible ? {} : {width: '70px'}}>
            <div className="container">
                <div className="content">
                    <div className="visible">
                        <Button onClick={HandlerIcons}>
                            {visible ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                        </Button>
                    </div>
                    <div className="buttons">
                        <Link to="/" className="linkTo"><Button variant="outlined" className={buttonClass} startIcon={<EmojiPeopleIcon />}>{visible ? 'Greetings' : 'G'}</Button></Link>
                        <Link to="/search" className="linkTo"><Button variant="outlined" className={buttonClass} startIcon={<SearchIcon />}>{visible ? 'Search' : 'S'}</Button></Link>
                        <Link to="/likedSongs" className="linkTo"><Button variant="outlined" className={buttonClass} startIcon={<FavoriteBorderIcon />}>{visible ? 'Liked songs' : 'L'}</Button></Link>
                    </div>
                    <div className="nowListening">
                        <p>There will be appear listening songs...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MenuBar;