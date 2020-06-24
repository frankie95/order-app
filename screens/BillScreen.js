import React, { Component, useContext, useRef } from 'react'
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  SectionList,
  Image,
  Text,
  View,
  Platform,
  TouchableOpacity,
  StatusBar,
  Alert,
  Dimensions,
  Button
} from 'react-native'
import { Context } from '../context/CouponContext'
import RBSheet from "react-native-raw-bottom-sheet";

function Item({ item }) {
  const {state} = useContext(Context)
  const {tableNum,orders} = item
  const myInput = useRef();
  return (
    <View style={orders?styles.item:styles.itemEmpty}>
      <TouchableOpacity onPress={() => { myInput.current.open() }}><Text style={styles.title}>{tableNum}</Text>
      </TouchableOpacity>
      <RBSheet ref={myInput} height={Dimensions.get("window").height}>
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:0.5}}>
        <FlatList
        data={orders}
        renderItem={({ item })=><><Text style={styles.text}>{item.title}</Text>
        <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
        </>}
        keyExtractor={ item => item.id.toString()}
        />
       
        </View>
        <View style={{flex:0.4}}>
        <Button title="a"></Button>
        </View>
        <View style={{flex:0.1}}>
        <Text>{tableNum}</Text>
        <Button title="return" onPress={()=>myInput.current.close()}></Button>
        </View>
      </SafeAreaView>
      </RBSheet>
    </View>
  );
}
export default () => {
  const {state, signOut } = useContext(Context)
  const {
    buttonMenu,
    textMenuButton
  } = styles

  return <SafeAreaView style={styles.container}>
    <StatusBar
      barStyle="dark-content"
      backgroundColor="#FFFFFF"
    />
    <FlatList
      data={state.tables}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
    <TouchableOpacity
         style={buttonMenu}
         onPress={signOut}
         accessibilityLabel="Log out"
       >
         <Text style={textMenuButton}>Log out</Text>
       </TouchableOpacity>
  </SafeAreaView>
}



const styles = StyleSheet.create({
  text:{
    marginLeft: 10,
    marginRight: 10,
    fontSize : 25
  },
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#fff'
  },
  buttonMenu: {
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20
  },
  textMenuButton: {
    color: '#007aff',
    fontSize: 20,
    lineHeight: 20,
    fontStyle: 'italic'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemEmpty:{
    backgroundColor: '#c8ffc2',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
})

String.prototype.toPascalCase = function () {
  return this.match(/[a-z]+/gi)
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    .join('')
}
