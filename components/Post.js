import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const Topo = () => (
   <View style={styles.topoContainer}>
    	<Text style={styles.topoTitle}>GoNative App</Text>
   </View>
)

const styles = StyleSheet.create({
topoContainer: {
    	backgroundColor: '#fff',
    	marginTop: 20,
    	padding: 20,
  },
topoTitle: {
    	textAlign: 'center'
  }
})


export default Topo