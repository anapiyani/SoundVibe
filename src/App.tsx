import { useState, useRef, useEffect } from 'react';
import './scss/App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContainer from './containers/homeContainer/homeContainer'
import MenuBar from './components/menuBar/menuBar';
import SearchContainer from './containers/searchContainer/searchContainer';
import ErrorPage from './components/Error/Error';
import LikedContainer from './containers/likedSongs/likedContainer';
import DashContainer from './containers/DashContainer/dashContainer';

type TLiked = {
  name: string,
  picture: string,
  authorName: string,
  preview: string | null,
}

function App() {
  const [liked, setLiked] = useState<TLiked[]>(() => {
    const savedLikes = localStorage.getItem('likedSongs');
    return savedLikes ? JSON.parse(savedLikes) : [];
  });
  const audioRef = useRef<HTMLAudioElement>(null); 
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0); 
  const [duration, setDuration] = useState<number>(0); 
  const [progress, setProgress] = useState<number>(0);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0); 


  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateTime);
      audioRef.current.addEventListener('loadedmetadata', updateDuration);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateTime);
        audioRef.current.removeEventListener('loadedmetadata', updateDuration);
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('likedSongs', JSON.stringify(liked));
  }, [liked]);

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setProgress(audioRef.current ? (audioRef.current.currentTime / audioRef.current.duration) * 100 : 0);
    }
  };

  const updateDuration = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const SongLiked = (name: string, authorName: string, picture: string, previewSong: string | null): void => {
    const itemTOAdd: TLiked = {name: name, authorName: authorName, picture: picture, preview: previewSong}
    setLiked([...liked, itemTOAdd]);
  }

  const playMusic = (previewUrl: string | null) => {
    if (audioRef.current && previewUrl) {
      audioRef.current.src = previewUrl; 
      audioRef.current.play(); 
      setIsPlaying(true); 
    }
  }

  const deleteLiked = (previewUrl: string | null) => {
    const copyState = liked.slice(); 
    const index = copyState.findIndex(item => item.preview === previewUrl); 
    if (index !== -1) {
        copyState.splice(index, 1);
        setLiked(copyState);
    }
    }

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false); 
    }
  }

  const handlePause = () => {
    pauseMusic(); 
  }

  const handlePlay = () => {
    if (audioRef.current && audioRef.current.src) {
      audioRef.current.play(); 
      setIsPlaying(true); 
    }
  }

  const handleNext = () => {
    const nextIndex = (currentSongIndex + 1) % liked.length;
    setCurrentSongIndex(nextIndex); 
    playMusic(liked[nextIndex].preview); 
  }

  const handlePrev = () => {
    const nextIndex = (currentSongIndex - 1 + liked.length) % liked.length;
    setCurrentSongIndex(nextIndex); 
    playMusic(liked[nextIndex].preview); 
  }


  return (
    <div className="app">
      <Router>
        <MenuBar />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/search" element={<SearchContainer SongLiked={SongLiked} />} />
            <Route path="/likedSongs" element={<LikedContainer nextSong={handlePause} onPause={handlePause} deleteLiked={deleteLiked} liked={liked} playMusic={playMusic} isPlaying={isPlaying} />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <DashContainer 
            handlePause={handlePause} 
            isPlaying={isPlaying} 
            handlePlay={handlePlay} 
            handleNext={handleNext} 
            handlePrev={handlePrev} 
            durTime={{ duration: formatTime(duration), current: formatTime(currentTime) }}
            progress={progress}
          />
        </Router>
      <audio ref={audioRef} onEnded={handleNext} />
    </div>
  );
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
}

export default App;
