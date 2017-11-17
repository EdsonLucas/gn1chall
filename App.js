import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Reactotron from './config/ReactotronConfig'
import Topo from './components/Post'

class Post extends Component {

   render() {
      return (
         <View style={styles.postContainer}>
           <Text>{this.props.title}</Text>
           <Text>{this.props.autor}</Text>
           <Text>{this.props.description}</Text>
         </View>
      )
   }
}

export default class App extends Component {

   constructor() {
      super()
      this.state = { 
         posts: [
            {
               id: 0,
               title: 'Aprendendo React Native',
               autor: 'Edson Lucas',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
               id: 1,
               title: 'Aprendendo React Native',
               autor: 'Edson Lucas',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },

            {
               id: 2,
               title: 'Aprendendo React Native',
               autor: 'Edson Lucas',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
         ]
      }
   }

  render() {
    return (
      <View style={styles.container}>
        <Topo />
           <ScrollView>
             {
               this.state.posts.map(function(props) {
                  return (
                     <Post key={props.id} title={props.title} autor={props.autor} description={props.description} />
                  )
               })
             }
           </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'blue'
   },
   postContainer: {
      backgroundColor: '#EE7777',
      padding: 20,
      margin: 20
  }
});
