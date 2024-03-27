import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import WebView from "react-native-webview";

const INJECTED_JAVASCRIPT = `
  // Assigning the global ReactNativeWebView as an additional property of window.location seems to be a hacky workaround
  window.location.ReactNativeWebView = window.ReactNativeWebView
`;

export default function App() {
  const [message, setMessage] = useState("No message");

  const handleMessage = (event) => {
    setMessage(event.nativeEvent.data);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.message}>Message: {message}</Text>
      <WebView
        source={{
          uri: "https://resourceful-hawk-umfqfx-dev-ed.trailblaze.my.site.com/demo",
        }}
        pullToRefreshEnabled
        onMessage={handleMessage}
        injectedJavaScriptBeforeContentLoaded={INJECTED_JAVASCRIPT}
        style={styles.webview}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webview: {
    width: "100%",
  },
  message: {
    marginTop: 100,
    marginBottom: 30,
  },
});
