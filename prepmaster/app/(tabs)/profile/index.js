import { StyleSheet, Text, View, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();
  const handleLogout = () => {router.replace("/login")}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4" }}
        />
        <Text style={styles.profileText}>Profile</Text>
        <Text>Code Name: The Conqueror</Text>
        <Text>Speciality: Problem Solving</Text>
        <Text>Achievements:</Text>
        <Text>Question Killer</Text>
        <Text>World Shaker</Text>
      </View>

      <Text style={styles.message}>Are you sure you want to log out?</Text>

      <Pressable
        onPress={handleLogout}
        style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>

      <Text style={styles.message}>Visit Again</Text>
      <Text style={styles.footerMessage}>Always rooting for your SUCCESS</Text>
    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 16,
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    alignSelf: 'center',
  },
  profileContainer: {
    backgroundColor: 'beige',
    borderRadius: 20,
    borderWidth: 1,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  profileText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    width: 200,
    backgroundColor: "#0072B1",
    borderRadius: 6,
    padding: 15,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerMessage: {
    fontSize: 16,
    fontStyle: 'italic',
  },
})
