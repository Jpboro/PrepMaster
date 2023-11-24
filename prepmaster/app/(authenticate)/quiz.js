import { StyleSheet, SafeAreaView, Text, View, Pressable, ScrollView, ActivityIndicator, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'expo-router';

const Quiz = () => {
  const [question, setQuestion] = useState([]);
  const [score, setScore] = useState(0);
  const [questionno, setQuestionno] = useState(0);
  const [currquestion, setCurrquestion] = useState();
  const [selected, setSelected] = useState(false);
  const router = useRouter();

  //Random function
  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getNextRandomQuestion = () => {
    const randomIndex = getRandomIndex(question.length);
    setCurrquestion(randomIndex);
  };

  const handleCheck = (selectedOption) => {
    const isCorrect = selectedOption === question[currquestion].ans;
    setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));
    setSelected(true);
  };

  const handleQuit = () => {
    router.replace('/(tabs)/scorecard');
  };

  const handleNext = () => {
    setSelected(false);
    setQuestionno(questionno+1);
    getNextRandomQuestion();
  };

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://prepmaster-cgib.onrender.com/questions/paper1');
      const questionData = response.data.question;
      setQuestion(questionData);
    } catch (error) {
      console.log('Error fetching questions', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    getNextRandomQuestion();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image
          style={{ width: 200, height: 150, resizeMode: 'contain', alignSelf: 'center' }}
          source={require('./../../assets/icon.png')}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>Practice Mode: ON</Text>
        <Text>SCORE: {score}</Text>
      </View>

      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Question {questionno + 1}</Text>
      </View>

      <ScrollView style={styles.middle}>
        {question && question.length > 0 ? (
          <View style={{ margin: 10 }}>
            <Text>{question[currquestion].question}</Text>
          </View>
        ) : (
          <ActivityIndicator size={'large'} />
        )}
      </ScrollView>

      <View style={styles.bottom}>
        {question && question.length > 0 ? (
          <View style={{ alignSelf: 'center' }}>
            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor:
                  selected && question[currquestion].op1 === question[currquestion].ans ? 'green' : selected ? 'red' : 'white',
              }}
              disabled={selected}
              onPress={() => handleCheck(question[currquestion].op1)}
            >
              <Text>{question[currquestion].op1}</Text>
            </Pressable>

            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor:
                  selected && question[currquestion].op2 === question[currquestion].ans ? 'green' : selected ? 'red' : 'white',
              }}
              disabled={selected}
              onPress={() => handleCheck(question[currquestion].op2)}
            >
              <Text>{question[currquestion].op2}</Text>
            </Pressable>

            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor:
                  selected && question[currquestion].op3 === question[currquestion].ans ? 'green' : selected ? 'red' : 'white',
              }}
              disabled={selected}
              onPress={() => handleCheck(question[currquestion].op3)}
            >
              <Text>{question[currquestion].op3}</Text>
            </Pressable>

            <Pressable
              style={{
                ...styles.pressable,
                backgroundColor:
                  selected && question[currquestion].op4 === question[currquestion].ans ? 'green' : selected ? 'red' : 'white',
              }}
              disabled={selected}
              onPress={() => handleCheck(question[currquestion].op4)}
            >
              <Text>{question[currquestion].op4}</Text>
            </Pressable>
          </View>
        ) : (
          <ActivityIndicator size={'large'} />
        )}
      </View>

      <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Pressable
          onPress={handleQuit}
          style={{ width: 150, backgroundColor: 'red', borderRadius: 6, marginLeft: 'auto', marginRight: 'auto', padding: 15 }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>Quit</Text>
        </Pressable>

        <Pressable
          onPress={handleNext}
          style={{ width: 150, backgroundColor: '#0072B1', borderRadius: 6, marginLeft: 'auto', marginRight: 'auto', padding: 15 }}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold' }}>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 1,
  },
  top: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 1,
    backgroundColor: 'beige',
    borderWidth: 1,
    verticalAlign: 'middle',
    textAlignVertical: 'center',
  },
  bottom: {
    flex: 0.8,
    backgroundColor: 'pink',
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    verticalAlign: 'middle',
  },
  pressable: {
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    borderWidth: 1,
  },
});
