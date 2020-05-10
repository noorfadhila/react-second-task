import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from'./ValidationComponent/ValidationComponent'

class App extends Component {
  state={
    textInput: ''
  }
  
  inputTextHandler = (event) =>{
    this.setState({
      textInput: event.target.value
    })
  }

  deleteTextHandler = (index) =>{
    const text = [...this.state.textInput.split('')];
    text.splice(index, 1);

    const textUpdated = text.join('')
    this.setState({textInput: textUpdated})
  }
  render() {
    let txtlength;
    let textInputLength = this.state.textInput.length;
    if(textInputLength < 5){
      txtlength = "text too short";
    }else{
      txtlength = "text long enough";
    }

    const txtInput = this.state.textInput.split('').map((text, index) => {
      return <CharComponent 
              txt={text} 
              key={index}
              clicked={ () => this.deleteTextHandler(index)}/>;
    });

    return (
      <div className="App">
        <ol style={{textAlign: 'left'}}>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p style={{textAlign: 'left'}}>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <ValidationComponent 
          changed={this.inputTextHandler}
          txtlength={txtlength}
          txt={this.state.textInput}/>
        {txtInput}
      </div>

    );
  }
}

export default App;
