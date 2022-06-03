import { react } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text, 
  View,
  Button,
  SafeAreaView,
  Alert
} from 'react-native';
// import { NestableScrollContainer, NestableDraggableFlatList } from 'react-native-draggable-flatlist';
import PlayerCard from './src/components/PlayerCard';
import { colors } from './src/utils/colors';
import { fontSizes, spacing } from './src/utils/sizes';


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
