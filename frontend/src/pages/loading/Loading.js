import React, { useEffect, useRef } from 'react';
import { right_door, left_door } from '../../images';
import { LeftDoor, RightDoor } from './style';
import { door } from '../../sounds';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';

const Loading = () => {
  const audioRef = useRef();
  const isSoundOn = useSelector(state => state.soundReducer.isSoundOn);

  useEffect(() => {
    const audio = audioRef.current.audio.current;
    isSoundOn ? audio.play() : audio.pause();
  }, [isSoundOn]);

  return (
    <div>
      <AudioPlayer src={door} autoPlay={true} ref={audioRef} style={{ display: 'none' }} />
      <LeftDoor src={left_door}></LeftDoor>
      <RightDoor src={right_door}></RightDoor>
    </div>
  );
};

export default Loading;
