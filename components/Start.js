import { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

const backgoundImage = require('../assets/background.png');
const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgoundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Chat App</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder={`Your Name`}
          />
          <View style={styles.chooseContainer}>
            <Text style={styles.choose}>Choose Background Color:</Text>
            <View style={styles.colorContainer}>
              <TouchableOpacity
                style={[
                  styles.selected,
                  color === '#000000'
                    ? { borderColor: '#000000' }
                    : { borderColor: '#FFFFFF' },
                ]}
              >
                <TouchableOpacity
                  style={[styles.color, styles.black]}
                  onPress={() => setColor('#000000')}
                ></TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selected,
                  color === '#474056'
                    ? { borderColor: '#474056' }
                    : { borderColor: '#FFFFFF' },
                ]}
              >
                <TouchableOpacity
                  style={[styles.color, styles.gray]}
                  onPress={() => setColor('#474056')}
                ></TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selected,
                  color === '#8A95A5'
                    ? { borderColor: '#8A95A5' }
                    : { borderColor: '#FFFFFF' },
                ]}
              >
                <TouchableOpacity
                  style={[styles.color, styles.blue]}
                  onPress={() => setColor('#8A95A5')}
                ></TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.selected,
                  color === '#B9C6AE'
                    ? { borderColor: '#B9C6AE' }
                    : { borderColor: '#FFFFFF' },
                ]}
              >
                <TouchableOpacity
                  style={[styles.color, styles.green]}
                  onPress={() => setColor('#B9C6AE')}
                ></TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Chat', { name: name, color: color })
            }
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {Platform.OS === 'ios' ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 45,
    paddingTop: 40,
    fontWeight: '600',
    color: '#FFFFFF',
    height: '44%',
  },
  inputView: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '44%',
    width: '88%',
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
  },
  chooseContainer: {
    width: '88%',
  },
  choose: {
    fontSize: 16,
    fontWeight: '300',
    color: '#757083',
  },
  textInput: {
    width: '88%',
    height: 50,
    borderWidth: 1,
    borderColor: '#757083',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  color: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  black: {
    backgroundColor: '#000000',
  },
  gray: {
    backgroundColor: '#474056',
  },
  blue: {
    backgroundColor: '#8A95A5',
  },
  green: {
    backgroundColor: '#B9C6AE',
  },
  selected: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 25,
    height: 50,
    width: 50,
    marginRight: 20,
  },
  button: {
    backgroundColor: '#757083',
    width: '88%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default Start;
