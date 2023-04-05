import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useState, useEffect } from 'react';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
const userIcon = require('../assets/user.png');

const Chat = ({ route, navigation }) => {
  const { name, color } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.setOptions({ title: name });

    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: userIcon,
        },
      },
      {
        _id: 2,
        text: `${name} has entered the chat.`,
        createdAt: new Date(),
        system: true,
      },
    ]);
  }, []);

  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000000',
          },
          left: {
            backgroundColor: '#FFFFFF',
          },
        }}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: `${color}` }]}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      {Platform.OS === 'android' ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Chat;
