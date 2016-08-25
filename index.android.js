import React, { Component } from 'react'
import Login from './javascript/login'
import {
  AppRegistry,
  StyleSheet,
  Text,
  ViewPagerAndroid,
  View
} from 'react-native'

class TendeuArchiveAndroid extends Component {
  render() {
    return (
      <ViewPagerAndroid style={styles.container} initialPage={0} >
        <View>
          <Login />
        </View>
      </ViewPagerAndroid>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

AppRegistry.registerComponent('TendeuArchiveAndroid', () => TendeuArchiveAndroid)
