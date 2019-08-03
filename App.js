import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar,Button  } from 'react-native-paper';
import Displaylove from './components/Displaylove'

class App extends Component {

  state = {
    fname: '',
    sname: '',
    result: "loading..."
  };

  submitIt() {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
      method: 'GET',
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "d57e621856mshf876d71733c5d5fp1db305jsn8840495ff410"
      }
    })
    .then(data => data.json())
    .then(data2=> {
      console.log(data2)
      this.setState({
        result:data2
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <Appbar.Header>
        
        <Appbar.Content
          title="Love % Calculator"
          style={{alignItems: 'center'}}
        />
      </Appbar.Header>
        <TextInput
          label='Person (Male) '
          value={this.state.fname}
          onChangeText={text => this.setState({ fname:text })}
        />
        <TextInput
          label='Person (female)'
          value={this.state.sname}
          onChangeText={text => this.setState({ sname:text })}
        />
        <Button 
          style={{margin:30}}
          icon="favorite" 
          mode="contained" 
          onPress={this.submitIt.bind(this)}>
          Calculate
        </Button>
        <Displaylove data={this.state.result}/>
      </View> 
    )
  }
}

export default App; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
