module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@api": "./src/api",
            "@context": "./src/context",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@styles": "./src/styles",
            "@utils": "./src/utils",

            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@molecules": "./src/components/organisms",
            "@templates": "./src/components/templates",
            "@screens": "./src/screens",
            "@": "./src",
          },
        },
      ],
    ],
  };
};
