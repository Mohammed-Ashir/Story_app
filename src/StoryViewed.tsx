// App.js

import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const App = ({navigation}) => {
  const [storyAdded, setStoryAdded] = useState(false);
  const [storyViewed, setStoryViewed] = useState(false);

  useEffect(() => {
    // Simulate story play progress
    if (storyViewed) {
      setTimeout(() => {
        setStoryViewed(false);
      }, 5000); // Close screen after 5 seconds
    }
  }, [storyViewed]);

  const handleProfilePress = () => {
    if (storyAdded) {
      if (storyViewed) {
      } else {
      }
    } else {
    }
  };

  return (
    <View
      style={{
        width: 150,
        height: 150,
        backgroundColor: 'transparent',
        transform: [{rotate: '45deg'}],
        overflow: 'hidden',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          borderRightWidth: 50,
          borderBottomWidth: 80,
          borderLeftWidth: 50,
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'red', // Change this color to match your background
          borderLeftColor: 'transparent',
        }}>
        <Image
          source={{uri: 'https://placekitten.com/150/150'}} // Example image
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
      </View>
    </View>
  );
};

export default App;
