import React, {Component} from 'react'
import auth from './auth'

import {
  StyleSheet,
  TextInput,
  View,
  Image
} from 'react-native'

class Login extends Component {
  render = () => {
    return (
      <View style={styles.view}>
        <Image source={require('./images/bg.png')} style={styles.image}>
          <TextInput style={styles.text} placeholder='email'
            keyboardType='email-address'/>
          <TextInput style={styles.text} placeholder='senha'
            secureTextEntry={true}></TextInput>


        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  image: {
    flex: 1,
    width: null,
    paddingTop: 100,
    alignItems: 'center',
  },
  text: {
    width: 320,
    lineHeight: 36,
    fontSize: 20,
    color: '#222',
    margin: 5,
    backgroundColor: 'rgba(245,252,255, .9)',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000'
  }

})

export default Login
