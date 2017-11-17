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
    marginTop: 24,
    marginBottom: 20,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100
  },

  topoTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#333333',
    padding: 20,
    fontWeight: 'bold'
  }
})


export default Topo