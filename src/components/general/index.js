import React, { useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const CustomVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pauseAsync();
      setIsPlaying(false);
    } else {
      videoRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  const handleSeek = (time) => {
    videoRef.current.setPositionAsync(time);
    setCurrentTime(time);
  };

  const handleMute = () => {
    if (isMuted) {
      videoRef.current.setIsMutedAsync(false);
      setIsMuted(false);
    } else {
      videoRef.current.setIsMutedAsync(true);
      setIsMuted(true);
    }
  };

  const handleLoad = (meta) => {
    setDuration(meta.durationMillis);
  };

  const handleProgress = (progress) => {
    setCurrentTime(progress.positionMillis);
  };

  return (
    <View 
        style={{
            flex: 1, 
            flexDirection: 'column', 
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black'
        }}
    >
      <Video
        style={{
            width: '100%',
            height: '100%'
        }}
        ref={videoRef}
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/tiktok-3467d.appspot.com/o/videos%2F1679675855843.mp4?alt=media&token=e89f4357-1427-48e0-b0db-9056701855a8' }}
        resizeMode="contain"
        onPlaybackStatusUpdate={handleProgress}
        onLoad={handleLoad}
      />
      <View style={{
         
            flexDirection: 'row', 
            justifyContent: 'space-between'
      }}>
        <TouchableOpacity onPress={handlePlayPause}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} size={32} color={'white'}/>
        </TouchableOpacity>
        <Slider
            style={{width: 200}}
            value={currentTime}
            minimumValue={1}
            maximumValue={duration}
            onSlidingComplete={handleSeek}
            thumbTintColor="red" // nut tron
            minimumTrackTintColor="red" // thanh process
            maximumTrackTintColor="#000000" // thanh process hidden
        />
        <TouchableOpacity onPress={handleMute}>
            <Ionicons name={isMuted ? 'volume-off' : 'volume-high'} size={32} color={'white'}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomVideoPlayer;
