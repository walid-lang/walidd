import { Alert, Text, Touchable, TouchableOpacity, View styleSheet} from 'react-native'
import React, { Component } from 'react'

export class contact extends Component {
    state = {
        DearahPondok:[
            {id:0, nama:'angkasa'},
            {id:1, nama:'daerist'},
            {id:2, nama:'eagle'},
            {id:3 nama:'fantasi'},
        ]
    }
    klikSaja = (DearahPondok) =>{
        Alert('kamu pilih '+DearahPondok);
    }
  render() {
    return (
      <View>
        {
            this.state.DearahPondok.map((item,index)=> (
                <TouchableOpacity onPress={()=>this.klikSaja(item.nama)}>
                <text style={styles.textDaerahPondok} key={={index}}>{item.nama}</text>
                </TouchableOpacity>
            ))
        }
      </View>
    )
  }
}
const styles = styleSheet.create({
    textDaerahPondok: {
        fontSize: 30,
        backgroundColor: 'red',
        padding: 5,
        marginButtom:2
        color:'#FFF'
    }
})
export default contact