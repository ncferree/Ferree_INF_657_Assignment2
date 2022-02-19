import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import ChoreData from "./ChoreData";
import NameData from "./NameData";
import Chore from './Chore';

export default function App() {

  const [choreNum, setChoreNum] = useState(5);
  const minusChore = () => {
    setChoreNum((prev) => {
      return prev - 1;
    })
  }

  const randomName = () => {
    const int = Math.floor(Math.random() * 4);
    return NameData[int].name
  }
  const randomChore = () => {
    const int = Math.floor(Math.random() * 5);
    return ChoreData[int].title;
  }
  return (
    <View style={{flex: 1, backgroundColor: #fffff0}}  >
      <ScrollView>
        <View style={styles.container}>
          <div className="Random">
            <h1>What's Your Chore???</h1>
            <h4>Hey there {randomName()}!</h4>
            <h4>Your chore today is:</h4>
            <h3>{randomChore()}</h3>
            <br></br>
            <button onClick={minusChore}>Done</button>
            <h5>Your family has {choreNum} chores to finish!</h5>
            <br></br>
            <h1>All Chores</h1>
            <h6>{ChoreData.map((chore)=> (
              <Chore key={chore.id} title={chore.title} description={chore.description}/>
            ))}</h6>
          </div>
        </View>
        {/* <Image
          style={styles.tinyLogo}
          source={require('./assets/favicon.png')}
        /> */}
        <StatusBar style="auto" />
      </ScrollView>
      <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
      <View style={{ flex: 1, backgroundColor: 'steelblue' }} /> 
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  // button: {
  //   backgroundColor: 'black',
  //   text: 'white',
  // },
});
