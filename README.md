# Alexis Jones Presentation #



## Set Up ##
 ```
 npm install

 ```

 copy this to loaders section of /node_modules/react-scripts/config/webpack.config.dev.js & webpack.config.prod.js

 ```
 {
   test: /\.less$/,
   loader: "style!css!less"
 }
```

then just
```
npm start
```
