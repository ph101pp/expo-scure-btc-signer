# Minimal expo + @scure/btc-signer setup

Created using expos first app tutorial: https://docs.expo.dev/tutorial/create-your-first-app/

```
npx create-expo-app StickerSmash --template blank

npm install @scure/btc-signer @craftzdog/react-native-buffer fastestsmallesttextencoderdecoder 
```

### To run: 

```
npm install;
npm run ios;
```


### Expected result:

`console.log("done")` after parsing `psbt`.


### Actual result: 

```
Error: Reader(magic): TypeError: Cannot read property 'prototype' of undefined
```

