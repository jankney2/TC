import React, {Component} from 'react'

import {View, Text, StyleSheet} from 'react-native'


export default class Settings extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.contain}>
<Text>Hello there from the settings</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
contain:{
    display:'flex', 
    justifyContent:'center',
    alignItems:'center',
    flex:1
}
})