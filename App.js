import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './components/Button'
import ImageViewer from './components/ImageViewer'

const PlaceholderImage = require('./assets/images/csm-ed-clip.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      {/* <Text style={{ color: '#fff' }}>Halloween! HALLOWEEN! Open up App.js to start working on your app!</Text> */}
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose from clipboard" />
        <Button label="Use latest clip" />
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
  }
});
