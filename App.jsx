import { StyleSheet, Text, View,TouchableOpacity,Alert } from 'react-native';
import React from 'react';

const tombol = ({title, onklik}) => {
  return (
    <TouchableOpacity onpress={onklik} style={style.tombol}>
      <text>{title}</text>
    </TouchableOpacity>
  )
}
const App = ({title, onklik}) => {
  return (
    <View style={styles.kotak}>
      <Text>style={styles.judul}APP</Text>
      <Text>style={styles.judul}INI JUDUL</Text>
     <TouchableOpacity style={styles.tombol}>
       <text>klik</text>
      </TouchableOpacity>
      <tombol
        title={'simpan'}
        onklik={() => Alert.alert('Halo','simpan ya gaes')}
        />
        <tombol title={'kembali'} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  judul: {
    fontSize:24,
    color:'red',
    fontWeight:'bold',
  },
  kotak: {
    backgroundColor:'lightray',
    margin:10,
    padding:10,
  },
  tombol:{
    backgroundColor:'gren',
    padding:10,
    margin:5,
    borderRadius:10,
    justifyContent:'center',
    height:50,
    width:'50%',
  },
});