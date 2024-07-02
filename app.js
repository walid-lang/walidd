import { View, Text, image } from 'react-native'
import React from 'react'

function ayo_mondok() {
    alert('mondok di miftahul ulum bettet pamekasan')
}
export default function app() {
  return (
    <View>
      <Text style={style.tulisan}><Text style={style.tulisanTebal}>selamat</Text>datang di <text style={style.tulisanMiring}>Pondok pesantren </text>MUB</Text>
      <image source={{uri:'https://id.images.search.yahoo.com/search/images;_ylt=AwrKBxUGboNmujcYMJ7LQwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=pp+miftahul+ulum+bettet&fr2=piv-web&type=E210ID91215G0&fr=mcafee#id=11&iurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2F9fFJ2Sn8i-s%2Fmaxresdefault.jpg&action=click'}} style={style.gambar}></image>
      <button
          title="ayo mondok"
          onPress={ayo_mondok}
        />
        <TouchableOpacity style={style.tombolKlik}> <text style={style.textTombol}> mondok keren </text> </TouchableOpacity>
    </View>
  )
}


const style = StyleSheet.create({
    tulisan:{
        fontsize: 50
    },
    tulisanTebal:{
        fontweight:'bold'
    },
    tulisanMiring:{
        fontStyle: 'italic'
    },
    gambar:{
         width: 400,
         height: 400
    },
    tombolKlik:{
        backgroundcolor: 'red', padding:5
    },
    textTombol:{
        color: '#FFF',textAlign: 'center'
    }
})


