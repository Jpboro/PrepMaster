import { StyleSheet, SafeAreaView, Text, View, Pressable, ScrollView, ActivityIndicator, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from "axios";
import { useRouter } from 'expo-router';

const quiz = () => {
  const [question, setQuestion] = useState([]);
  const [score, setScore] = useState(0);
  const [currquestion, setCurrquestion] = useState(0);
  const [selected, setSelected] = useState();
  const [bgcolor, setBgcolor] = useState("white");
  const router = useRouter();
  /** 
  const handleSelect = (i) => {
    if (selected === i && selected === question[currquestion].ans) {
      setBgcolor("green");
    } else if (selected === i && selected !== question[currquestion].ans) {
      setBgcolor("red");
    } else if (i === question[currquestion].ans) {
      setBgcolor("green");
    }
  }; */

  const handleCheck = (i) => {
    //handleSelect(i);
    setSelected(i);
    if (i === question[currquestion].ans) 
    {setScore(score+1);
    setBgcolor("green")}
    else {setScore(score+0);
        setBgcolor("red")};
    console.log(bgcolor);
  };
  const handlequit = () => {
    router.replace("/(tabs)/scorecard")
  }
  const handlenext = () => {
    console.log('question:', question);
    console.log('currquestion:', currquestion);
    if (question.length-1 === currquestion) {
      router.replace("/(tabs)/scorecard");
    } else {
      setCurrquestion(currquestion+1);
      setSelected();
      //setBgcolor("white");
    };
  }

  
  const fetchQuestions = async () => {
    try{
      const response = await axios.get("https://prepmaster-cgib.onrender.com/questions/paper1");
      const questionData = response.data.question;
      setQuestion(questionData)
    } catch(error){
      console.log("Error fetching questions",error)
    }
    
  }
  useEffect(() => {
    fetchQuestions();

  },[]);

  
  //console.log(question);

  if (question && question.length > 0) {
    // Access nested properties safely
    const ansValue = question[0].question;
    console.log(ansValue);
  } else {
    // Handle the case when data is still loading or not available
    console.log("Data is not available yet.");
  }
  

  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.top}>
                <Image
                    style={{ width: 200, height: 150, resizeMode: "contain", alignSelf:'center' }}
                    source={require('./../../assets/icon.png')}
                  />
        </View>

        

        <View style={{flexDirection: 'row', justifyContent:"space-between",}}>
          <Text>Practice Mode: ON</Text>
          <Text>SCORE: {score}</Text>
        </View>

        <View><Text style={{textAlign:'center', fontWeight:'bold'}}>Question {currquestion + 1}</Text></View>

        <View></View>

        <ScrollView style={styles.middle}>
          {question && question.length > 0 ? (
            <>
            
            <View style={{margin: 10}}><Text>{question[currquestion].question}</Text></View>
            
            </>
          ) : (<ActivityIndicator size={'large'} />)}
        </ScrollView>

        <View></View>

        <View style={styles.bottom}>
        {question && question.length > 0 ? (
            <>
            <View style={{alignSelf:'center'}}>
              <Pressable style={{...styles.pressable, backgroundColor: bgcolor}} disabled={selected} 
              onPress={() => handleCheck(question[currquestion].op1)}><Text>{question[currquestion].op1}</Text></Pressable>
              <Pressable style={{...styles.pressable, backgroundColor: bgcolor}} disabled={selected} 
              onPress={() => handleCheck(question[currquestion].op2)}><Text>{question[currquestion].op2}</Text></Pressable>
              <Pressable style={{...styles.pressable, backgroundColor: bgcolor}} disabled={selected} 
              onPress={() => handleCheck(question[currquestion].op3)}><Text>{question[currquestion].op3}</Text></Pressable>
              <Pressable style={{...styles.pressable, backgroundColor: bgcolor}} disabled={selected} 
              onPress={() => handleCheck(question[currquestion].op4)}><Text>{question[currquestion].op4}</Text></Pressable>
            </View>
            </>
          ) : (<ActivityIndicator size={'large'} />)}
              
        </View>

        <View style={{marginTop:12, flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
          <Pressable
              onPress={handlequit} 
              style={{width:200, backgroundColor:"#0072B1", borderRadius:6, marginLeft:"auto", marginRight:"auto", padding:15}}>
              <Text style={{textAlign:"center",color:"white",fontSize:16,fontWeight:"bold"}}>Quit</Text>
          </Pressable>

          <Pressable
            onPress={handlenext} 
            style={{width:200, backgroundColor:"#0072B1", borderRadius:6, marginLeft:"auto", marginRight:"auto", padding:15}}>
            <Text style={{textAlign:"center",color:"white",fontSize:16,fontWeight:"bold"}}>Next</Text>
          </Pressable>
        </View>
      </SafeAreaView>
  )
}


export default quiz

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 1,
  },
  top: {
    //flex: 1,
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
})