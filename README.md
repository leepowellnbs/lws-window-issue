# LWS Global Property Access

## Installation

- `npm install`
- `npx expo start`
- Install Expo Go on device (ideally iOS)
- Connect to running instance

## Issue

- Click the "Global" button and the global ReactNativeWebView property is inaccessible. It is blocked by the LWS security policy.
- Click the "Location" button and the global ReactNativeWebView property is accessible due to it being assigned to `window.location.ReactNativeWebView` as a workaround for the LWS security policy.
