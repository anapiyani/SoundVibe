import './dashContainer.scss';
import DashBoard from "../../components/dashboard/dashboard";
type Tduration = {
    duration: string;
    current: string;
}

type TProps = {
    handlePause: () => void; 
    handlePlay: () => void;
    handleNext: () => void; 
    handlePrev: () => void;
    isPlaying: boolean;
    durTime: Tduration;
    progress: number;
}

const DashContainer = (props: TProps) => {
    const handlePause = () => {
        props.handlePause(); 
    }

    const handlePlay = () => { 
        props.handlePlay(); 
    }

    const handleNext = () => {
        props.handleNext(); 
    }

    const handlePrev = () => {
        props.handlePrev(); 
    }

    return (
        <DashBoard 
            HandlePlay={handlePlay} 
            HandlePause={handlePause}
            nextHandle={handleNext} 
            prevHandle={handlePrev} 
            isPlaying={props.isPlaying}
            durTime={props.durTime}
            progress={props.progress}
        />
    )
}

export default DashContainer;
