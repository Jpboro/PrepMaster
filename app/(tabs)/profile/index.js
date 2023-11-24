import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'

const index = () => {
  const handleLogout = () => {}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", padding:16, }}>
      <Image
                    style={{ width: 200, height: 150, resizeMode: "contain", alignSelf:'center' }}
                    source={require('../../../assets/icon.png')}
                  />
      <View style={styles.middle}>
            <Image
                style={{ width: 200, height: 150, resizeMode: "contain" }}
                source={{uri: "https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4"}}
              />

              <Text>Code Name:</Text>
              <Text>The Conqueror</Text>
              <Text>Speciality:</Text>
              <Text>Problem Solving</Text>
              <Text>Achievements:</Text>
              <Text>Question Killer</Text>
              <Text>World Shaker</Text>
      </View>
      
      <Text style={styles.message}>Are you sure you want to log out?</Text>

      <Pressable
          onPress={handleLogout} 
          style={{width:200, backgroundColor:"#0072B1", borderRadius:6, marginLeft:"auto", marginRight:"auto", padding:15}}>
          <Text style={{textAlign:"center",color:"white",fontSize:16,fontWeight:"bold"}}>Logout</Text>
      </Pressable>

      <Text style={styles.message}>Visit Again</Text>
      <Text style={styles.message}>Always rooting for your SUCCESS</Text>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  middle: {
    flex: 1,
    backgroundColor: 'beige',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 1,
    verticalAlign: 'middle',
  },
})