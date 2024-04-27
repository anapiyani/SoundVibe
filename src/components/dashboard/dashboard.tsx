import {useState} from "react";
import './dashboard.scss';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from '@mui/material/Button';

type Tduration = {
    duration: string;
    current: string;
}

type TProps = {
    HandlePlay: () => void;
    HandlePause: () => void;
    nextHandle: () => void;
    prevHandle: () => void;
    durTime: Tduration;
    isPlaying: boolean;
    progress: number;
}

const DashBoard = (props: TProps) => {
    const handleMusic = () => {
        if (props.isPlaying) {
            props.HandlePause();
        } else {
            props.HandlePlay();
        }
    }

    const handleNext = () => {
        props.HandlePause();
        props.nextHandle();
    }
    const handlePrev = () => {
        props.HandlePause();
        props.prevHandle();
    }

    return (
        <div className="controls-wrapper">
            <div className="progress_bar">
                <div className="progress" style={{width: `${props.progress}%`}} id="progress"></div>
            </div>
                <div className="controls">
                    <p>{props.durTime.current}</p>
                    <Button onClick={handlePrev} className="prev">
                        <SkipPreviousIcon/>
                    </Button>
                   <Button onClick={handleMusic} className="play">
                         {props.isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
                    </Button>
                    <Button onClick={handleNext} className="next">
                        <SkipNextIcon/>
                    </Button>
                    <p>{props.durTime.duration}</p>
                </div>
        </div>
         );
        }
        

export default DashBoard;