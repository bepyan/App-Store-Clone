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
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@utils": "./src/utils",
            "@styles": "./src/styles",

            "@atoms": "./src/components/atoms",
            "@molecules": "./src/components/molecules",
            "@templates": "./src/components/templates",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@": "./src",
          },
        },
      ],
    ],
  };
};
