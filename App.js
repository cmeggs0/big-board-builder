import React, { createRef } from 'react';
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
import { Platform } from 'react-native-web';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Welcome to Big Board Builder</Text>
      {/* <Button 
        title='Build My Board'
        paddingTop={spacing.xxxl}
        color={colors.medBlue}
        onPress={() => Alert.alert('Button pressed')}
      /> */}
      <PlayerCard player={'Chet Holmgren'} />
      <PlayerCard player={'Jabari Smith'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputWrapper}
      >
        <TextInput style={styles.input} placeholder={'Add a player'} />
        {/* <RoundedButton /> */}
      </KeyboardAvoidingView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
