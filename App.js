import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native'
import Reactotron from './config/ReactotronConfig'
import Topo from './components/Post'
import PropTypes from 'prop-types'

class Post extends Component {

   render() {
      return (
         <View style={styles.postContainer}>
           <Text style={styles.postTitle}>{this.props.title}</Text>
           <Text style={styles.postAutor}>{this.props.autor}</Text>
           <View style={styles.hr}></View>
           <Text style={styles.postDescription}>{this.props.description}</Text>
         </View>
      )
   }
}

Post.PropTypes = {
   post: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string
     }).isRequired
}

export default class App extends Component {

   constructor() {
      super()
      this.state = {
         posts: [
            {
               id: 0,
               title: 'Aprendendo React Native',
               autor: 'Edson Lucas Nonato',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },
            {
               id: 1,
               title: 'Aprendendo React Native',
               autor: 'Edson Lucas Nonato',
               description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            },

            {
               id: 2,
               title: 'Aprendendo React Native',
               autor: 'Edson Lucas Nonato',
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
    backgroundColor: '#EE7777'
  },

  postContainer: {
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 100
  },

  postTitle: {
   fontSize: 18,
   color: '#333333',
   fontWeight: 'bold'
  },

  postAutor: {
    fontSize: 14,
    color: '#999999',
    paddingBottom: 10,
  },

  hr: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
  },

  postDescription: {
   color: '#666666',
   paddingTop: 10
  }
});
