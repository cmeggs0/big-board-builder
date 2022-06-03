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
import { colors } from './src/utils/colors';
import { fontSizes, spacing } from './src/utils/sizes';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Welcome to Big Board Builder</Text>
      <Button 
        title='Build My Board'
        paddingTop={spacing.xxxl}
        color={colors.medBlue}
        onPress={() => Alert.alert('Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.offWhite,
    paddingTop: spacing.xxxl
  },
  playerCard: {

  }
});
