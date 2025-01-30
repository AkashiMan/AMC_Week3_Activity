import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextInputExample = () => {
  const [textName, onChangeName] = React.useState('');
  const [textAge, onChangeAge] = React.useState('');
  const [textAddress, onChangeAddress] = React.useState('');
  const [textSchool, onChangeSchool] = React.useState('');
  const [textCourse, onChangeCourse] = React.useState('');
  const [textEmail, onChangeEmail] = React.useState('');
  const [textContact, onChangeContact] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        {/* Name Input */}
        <View style={styles.row}>
          <Icon name="user" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={onChangeName}
            value={textName}
          />
        </View>

        {/* Age Input */}
        <View style={styles.row}>
          <Icon name="calendar" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Age"
            onChangeText={onChangeAge}
            value={textAge}
            keyboardType="numeric"
          />
        </View>

        {/* Address Input */}
        <View style={styles.row}>
          <Icon name="home" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Address"
            onChangeText={onChangeAddress}
            value={textAddress}
          />
        </View>

        {/* School Input */}
        <View style={styles.row}>
          <Icon name="building" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="School"
            onChangeText={onChangeSchool}
            value={textSchool}
          />
        </View>

        {/* Course Input */}
        <View style={styles.row}>
          <Icon name="book" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Course"
            onChangeText={onChangeCourse}
            value={textCourse}
          />
        </View>

        {/* Email Input */}
        <View style={styles.row}>
          <Icon name="envelope" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChangeEmail}
            value={textEmail}
            keyboardType="email-address"
          />
        </View>

        {/* Contact Input */}
        <View style={styles.row}>
          <Icon name="phone" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Contact"
            onChangeText={onChangeContact}
            value={textContact}
            keyboardType="phone-pad"
          />
        </View>

        {/* About Me */}
        <View style={styles.row}>
          <Icon name="info-circle" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="About Me"
            multiline
            numberOfLines={4}
          />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    marginRight: 12,
    width: 30, // Ensures consistent spacing for icons
    textAlign: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default TextInputExample;
