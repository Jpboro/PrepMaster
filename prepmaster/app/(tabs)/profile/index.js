import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'

const index = () => {
  const handleLogout = () => {}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View>
            <Image
                style={{ width: 200, height: 150, resizeMode: "contain" }}
                source={{uri: "https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4"}}
              />
      </View>
      
      <View>
        <Text style={{textAlign:"center", marginTop:15}}>index</Text>
      </View>

      <Pressable
          onPress={handleLogout} 
          style={{width:200, backgroundColor:"#0072B1", borderRadius:6, marginLeft:"auto", marginRight:"auto", padding:15}}>
          <Text style={{textAlign:"center",color:"white",fontSize:16,fontWeight:"bold"}}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})