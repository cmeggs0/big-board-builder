import React, { createRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View,
  Button,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  Modal
} from 'react-native';
// import { PanGestureHandler, State } from "react-native-gesture-handler";
// import {
//   RecyclerListView,
//   DataProvider,
//   LayoutProvider
// } from "recyclerlistview";
// import Animated from "react-native-reanimated";
// import { NestableScrollContainer, NestableDraggableFlatList } from 'react-native-draggable-flatlist';
import PlayerCard from './src/components/PlayerCard';
import RoundedButton from './src/components/RoundedButton';
import { colors } from './src/utils/colors';
import { fontSizes, spacing } from './src/utils/sizes';
import { Keyboard, Platform } from 'react-native-web';


export default function App() {
  // Keyboard.dismiss();
  const [player, setPlayer] = useState();
  const [playerItems, setPlayerItems] = useState([]);

  const handleAddPlayer = () => {
    setPlayerItems([...playerItems, player])
    setPlayer(null);
  }

  const deletePlayer = (index) => {
    let playerItemsCopy = [...playerItems];
    playerItemsCopy.splice(index, 1);
    setPlayerItems(playerItemsCopy);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Welcome to Big Board Builder</Text>
        {/* <Button 
          title='Build My Board'
          paddingTop={spacing.xxxl}
          color={colors.medBlue}
          onPress={() => Alert.alert('Button pressed')}
        /> */}
        <PlayerCard player={'Chet Holmgren'} ranking={1} />
        <PlayerCard player={'Jabari Smith'} ranking={2} />
        {
          playerItems.map((player, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => deletePlayer(index)}>
                <PlayerCard player={player} />
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}
      >
        <TextInput 
          style={styles.playerInput} 
          placeholder={'Add a player'} 
          value={player}
          onChangeText={text => setPlayer(text)} 
        />
        <TextInput 
          style={styles.playerRankInput} 
          placeholder={1} 
          value={ranking}
          onChangeText={number => setPlayer.ranking(number)} 
        />
        <RoundedButton title='+' onPress={() => handleAddPlayer()} />
      </KeyboardAvoidingView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: spacing.md,
    backgroundColor: colors.darkBlue,
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.offWhite,
    paddingTop: spacing.xxl,
  },
  playerCard: {
    paddingTop: spacing.lg
  },
  inputWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playerInput: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginLeft: spacing.md,
    borderRadius: spacing.md,
    width: '50%',
    backgroundColor: colors.offWhite,
  },
  playerRankInput: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    marginLeft: spacing.md,
    borderRadius: spacing.md,
    width: '20%',
    backgroundColor: colors.offWhite,
  },
});
