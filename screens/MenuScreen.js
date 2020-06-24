import React, { useState, useEffect,useContext } from 'react'
import {
  Animated,
  Easing,
  View,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native'
import { CommonActions } from '@react-navigation/native';
import {Context} from "../context/CouponContext"
export default ({ navigation }) => {
  const {state}=useContext(Context)
  fadeInOpacity= new Animated.Value(0)

  useEffect(()=>{
    Animated.timing(fadeInOpacity, {
      toValue: 1, 
      duration: 1000, 
      easing: Easing.linear
    }).start(()=>{navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Bill' }],
      })
    )
    ;});
  },[])

  

  return (
    <Animated.View style={[styles.demo, { opacity: fadeInOpacity }]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
      <Text style={styles.text}>Welcome,{state.userToken}</Text>
    </Animated.View>
  );
}



var styles = StyleSheet.create({
  demo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30
  }
});