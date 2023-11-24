import { StyleSheet, Text, View, Pressable, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

const index = () => {
  const router = useRouter();
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
        <View>
            <Image
                style={{ width: 200, height: 150, resizeMode: "contain" }}
                source={require('../../../assets/icon.png')}
              />
        </View>

        <View>
          <Pressable onPress={() => {router.replace("/quiz")} }style={{marginTop:15}}>
              <Text style={{textAlign:"center",color:"gray",fontSize:16}}>Mock Test Paper1</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})