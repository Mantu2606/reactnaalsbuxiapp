import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'nnabuxipur.ilakshyaerp.in' }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default Home;
