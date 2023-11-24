import React from 'react';
import { StyleSheet, Text, View, Pressable, SafeAreaView, Image } from 'react-native';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
      </View>

      <View style={styles.secondcontainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.welcomeText}>Welcome, The Great Conqueror</Text>
      </View>

      <View style={styles.cardContainersec}>
      <Text style={styles.descriptionText}>
          All the preparations needed for UGC Net Paper I
        </Text>
        <Text style={styles.descriptionText}>Target NET/JRF</Text>
      </View>

      <Pressable
        onPress={() => {
          router.replace('/quiz');
        }}
        style={styles.practiceButton}
      >
        <Text style={styles.buttonText}>Practice NOW</Text>
      </Pressable>

      <View style={styles.cardContainer}>
        <Text style={styles.descriptionTextt}>Best Platform For Practice</Text>

        <Text style={styles.descriptionText}>Stay Tuned For More Prep Materials</Text>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  secondcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3498db', // Example background color
  },
  logoContainer: {
    borderWidth:2,
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  cardContainer: {
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 16,
    backgroundColor: '#f0f0f0', // Adjust the card background color as needed
    width: '100%', // Make the card take up the full width
  },
  welcomeText: {
    fontSize: 20,
    //fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 24,
    marginBottom: 6,
    textAlign: 'center',
  },
  descriptionTextt: {
    fontSize: 24,
    color: "blue",
    marginBottom: 6,
    textAlign: 'center',
  },
  practiceButton: {
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 15,
    marginBottom:8,
  },
  buttonText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardContainersec: {
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#e1f7d5', // Light green
    width: '100%',
  },
});
