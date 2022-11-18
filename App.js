import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as React from 'react';

import Button from './components/Button'
import ImageViewer from './components/ImageViewer'

// const PlaceholderImage = require('./assets/images/csm-ed-clip.png');

export default function App() {
  const [placeholderImage, setPlaceholderImage] = React.useState(
    require('./assets/images/csm-ed-clip.png')
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={placeholderImage} />
      </View>
      <View style={styles.footerContainer}>
        {/* <Text style={styles.text}>{copiedText}</Text> */}
        <Button theme="primary" label="Add latest clip" />
        <Button label="Select from clipboard" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    padding: 3,
  }
});
