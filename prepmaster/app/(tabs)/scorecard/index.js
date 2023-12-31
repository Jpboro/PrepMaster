import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

const QuotesScreen = () => {
  const [appreciationQuotes, setAppreciationQuotes] = useState([
    "You are doing amazing!",
    "Keep up the great work!",
    "Your efforts are truly appreciated.",
    "Your dedication and hard work inspire us all.",
    "Your positive attitude and resilience make a world of difference.",
    "In the journey of life, you are the unsung hero.",
    "Your commitment to excellence is truly commendable.",
    // Add more appreciation quotes as needed
  ]);

  const [tryAgainQuotes, setTryAgainQuotes] = useState([
    "Mistakes are the portals of discovery.",
    "Every failure is a step to success.",
    "You learn more from failure than from success.",
    "Mistakes are the stepping stones to success. Embrace them, learn from them, and try again.",
    "Every setback is a setup for a comeback. Keep pushing forward, and success will follow.",
    "Failure is not the end but a part of the journey. Get up, dust yourself off, and give it another shot.",
    "Life is a series of challenges. With each stumble, you gain the strength to rise higher. Keep going!",
    "Challenges are opportunities in disguise. Keep moving forward, and you'll discover new heights.",
    // Add more try again quotes as needed
  ]);

  const getRandomQuote = (quotesArray) => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
  };

  const [appreciationQuote, setAppreciationQuote] = useState(getRandomQuote(appreciationQuotes));
  const [tryAgainQuote, setTryAgainQuote] = useState(getRandomQuote(tryAgainQuotes));


  const handleRefreshQuote = () => {
    setAppreciationQuote(getRandomQuote(appreciationQuotes));
    setTryAgainQuote(getRandomQuote(tryAgainQuotes));
    }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <FontAwesome name="quote-left" size={24} color="#2c3e50" style={styles.icon} />
          <Text style={styles.quoteText}>{appreciationQuote}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <FontAwesome name="quote-left" size={24} color="#2c3e50" style={styles.icon} />
          <Text style={styles.quoteText}>{tryAgainQuote}</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => {
          handleRefreshQuote()
          // You can add a function here to refresh quotes if needed
        }}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Refresh Quotes
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#3498db', // Example background color
  },
  card: {
    marginBottom: 16,
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
  },
  quoteText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#2c3e50',
    //fontFamily: 'YourCustomFont', // Replace with your custom font
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  
  button: {
    marginTop: 16,
    backgroundColor: '#2ecc71',
  },
  buttonText: {
    fontSize: 22, // Adjust the font size of the button text
    fontWeight: 'bold',
  },
});

export default QuotesScreen;
