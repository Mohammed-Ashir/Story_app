// App.js

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

// Import Image Picker
import ImagePicker, {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';

const App = ({navigation}) => {
  const [storyViewed, setStoryViewed] = useState(false);

  const [filePath, setFilePath] = useState({});

  const captureImage = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      setFilePath(response);
    });
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response);
    });
  };
  useEffect(() => {
    // Simulate story play progress
    if (storyViewed) {
      setTimeout(() => {
        setStoryViewed(false);
      }, 5000); // Close screen after 5 seconds
    }
  }, [storyViewed]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={{uri: filePath.path}} style={{width: 100, height: 100}} />
      <View style={styles.container}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.path,
          }}
          style={styles.imageStyle}
        />
        <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
      </View>
      <TouchableOpacity
        style={{
          width: '50%',
          height: '30%',
        }}
        onPress={() => navigation.push('StoryScreen')}>
        <View
          style={{
            borderRadius: 80,
            borderColor: storyViewed ? 'lightgray' : 'black',
            borderWidth: 2,
            overflow: 'hidden',
          }}>
          <Image
            source={{uri: 'https://placekitten.com/100/100'}}
            style={{width: '100%', height: '100%', resizeMode: 'cover'}}
          />
        </View>
      </TouchableOpacity>
      <Text>Name: Ashir</Text>
      <Text>Bio: Software Engineer</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => captureImage('photo')}>
        <Text style={styles.textStyle}>click photo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.buttonStyle}
        onPress={() => chooseFile('photo')}>
        <Text style={styles.textStyle}>Choose Image from gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}
