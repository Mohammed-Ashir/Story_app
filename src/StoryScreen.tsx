import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

const StoryScreen = ({navigation}) => {
  const images = [
    'https://placekitten.com/300/500',
    'https://placekitten.com/301/500',
    'https://placekitten.com/302/500',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval;
    let imageInterval;

    if (progress < 100) {
      progressInterval = setInterval(() => {
        setProgress(prevProgress => Math.min(prevProgress + 1, 100));
      }, 10);
    }

    imageInterval = setTimeout(() => {
      if (currentIndex < images.length - 1) {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setProgress(0);
      } else {
        navigation.goBack();
      }
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(imageInterval);
    };
  }, [currentIndex, images, navigation, progress]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: '100%', height: 10, backgroundColor: '#ddd'}}>
        <View
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: 'red',
          }}
        />
      </View>
      <Image
        source={{uri: images[currentIndex]}}
        style={{width: 300, height: 500, resizeMode: 'cover'}}
      />
      <Text>News Headline</Text>
      <Text>User Opinion</Text>
    </View>
  );
};

export default StoryScreen;
