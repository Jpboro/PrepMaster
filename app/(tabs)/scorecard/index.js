import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

const QuotesScreen = () => {
  const appreciationQuotes = [
    "You are doing amazing!",
    "Keep up the great work!",
    "Your efforts are truly appreciated.",
    // Add more appreciation quotes as needed
  ];

  const tryAgainQuotes = [
    "Mistakes are the portals of discovery.",
    "Every failure is a step to success.",
    "You learn more from failure than from success.",
    // Add more try again quotes as needed
  ];

  const getRandomQuote = (quotesArray) => {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
  };

  const [bgcolor, setBgcolor] = useState("green");

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <FontAwesome name="quote-left" size={24} color="#2c3e50" style={styles.icon} />
          <Text style={styles.quoteText}>{getRandomQuote(appreciationQuotes)}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <FontAwesome name="quote-left" size={24} color="#2c3e50" style={styles.icon} />
          <Text style={styles.quoteText}>{getRandomQuote(tryAgainQuotes)}</Text>
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => {
          // You can add a function here to refresh quotes if needed
        }}
        style={{backgroundColor: bgcolor}}
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
  /** 
  button: {
    marginTop: 16,
    backgroundColor: '#2ecc71',
  },*/
});

export default QuotesScreen;
