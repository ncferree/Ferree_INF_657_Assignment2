import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import ChoreData from "./ChoreData";
import NameData from "./NameData";
import Chore from './Chore';
import CustomText from './shared/CustomText';
import AppButton from './shared/AppButton';

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
    <View style={styles.container}  >
      <ScrollView>
        <View style={styles.chore}>
            <CustomText>What's Your Chore???
            <br></br>
            Hey there {randomName()}!
            <br></br>
            Your chore today is:
            <br></br>
           {randomChore()}
           </CustomText>
           <br></br>
            <AppButton onClick={minusChore} title="This Chore Is Finished!" onPress={() => console.log("That chore was finished.")} />
            <h5>Your family has {choreNum} chores to finish!</h5>
            <br></br>
            <AppButton title="Edit Chores" onPress={() => console.log("Edit Chores")}/>
            <AppButton title="Edit Family" onPress={() => console.log("Edit Family")}/>
            <h1>All Chores</h1>
            <h6>{ChoreData.map((chore)=> (
              <Chore key={chore.id} title={chore.title} description={chore.description}/>
            ))}</h6>
        </View>
        {/* <Image
          style={styles.tinyLogo}
          source={require('./assets/favicon.png')}
        /> */}
        <StatusBar style="auto" />
      </ScrollView>
      
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  chore: {
      margin: '3%',
      includeFontPadding: '3%',
  }
});