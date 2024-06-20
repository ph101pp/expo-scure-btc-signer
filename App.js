import { TextDecoder, TextEncoder } from "fastestsmallesttextencoderdecoder";
global.Buffer ??= require("@craftzdog/react-native-buffer").Buffer;
global.TextDecoder ??= TextDecoder;
global.TextEncoder ??= TextEncoder;

import * as btc from '@scure/btc-signer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from "react"

export default function App() {

  useEffect(() => {
    const psbt = {
      "type": "Buffer",
      "data": [
        112,
        115,
        98,
        116,
        255,
        1,
        2,
        4,
        2,
        0,
        0,
        0,
        1,
        4,
        1,
        1,
        1,
        5,
        1,
        2,
        1,
        251,
        4,
        2,
        0,
        0,
        0,
        0,
        1,
        1,
        32,
        76,
        205,
        14,
        0,
        0,
        0,
        0,
        0,
        23,
        169,
        20,
        199,
        96,
        179,
        14,
        48,
        219,
        192,
        39,
        56,
        241,
        161,
        6,
        240,
        199,
        18,
        158,
        61,
        224,
        186,
        239,
        135,
        1,
        4,
        22,
        0,
        20,
        6,
        62,
        228,
        134,
        51,
        145,
        234,
        15,
        183,
        46,
        48,
        34,
        137,
        217,
        128,
        231,
        40,
        251,
        135,
        134,
        1,
        14,
        32,
        51,
        241,
        184,
        142,
        243,
        90,
        203,
        245,
        146,
        148,
        175,
        172,
        36,
        149,
        171,
        190,
        121,
        120,
        255,
        138,
        78,
        63,
        117,
        35,
        120,
        94,
        185,
        174,
        204,
        193,
        89,
        169,
        1,
        15,
        4,
        1,
        0,
        0,
        0,
        1,
        16,
        4,
        255,
        255,
        255,
        255,
        0,
        1,
        3,
        8,
        100,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        4,
        23,
        169,
        20,
        104,
        151,
        185,
        74,
        233,
        209,
        53,
        59,
        56,
        131,
        190,
        185,
        253,
        188,
        36,
        174,
        82,
        120,
        19,
        30,
        135,
        0,
        1,
        3,
        8,
        46,
        195,
        14,
        0,
        0,
        0,
        0,
        0,
        1,
        4,
        23,
        169,
        20,
        199,
        96,
        179,
        14,
        48,
        219,
        192,
        39,
        56,
        241,
        161,
        6,
        240,
        199,
        18,
        158,
        61,
        224,
        186,
        239,
        135,
        0
      ]
    }

    btc.Transaction.fromPSBT(Buffer.from(psbt));
    console.log("done");
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
