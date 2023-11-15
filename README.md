# react-native-skia-stub

Stub to mock react-native-skia for enviroments that don't have GPU support.
Like Github actions.

## Usage

Patch package.json for your project to repace react-native-skia with react-native-skia-stub

```patch
diff --git a/package.json b/package.json
index 1fb98c3f..73c88464 100644
--- a/package.json
+++ b/package.json
@@ -196,7 +196,8 @@
     "_stream_duplex": "readable-stream/duplex",
     "_stream_passthrough": "readable-stream/passthrough",
     "stream": "stream-browserify",
-    "net": "react-native-tcp-socket"
+    "net": "react-native-tcp-socket",
+    "@shopify/react-native-skia": "react-native-skia-stub"
   },
   "browser": {
     "crypto": "react-native-crypto",
```
