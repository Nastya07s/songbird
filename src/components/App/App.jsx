import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import QuestionBlock from '../QuestionBlock/QuestionBlock.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Description from '../Description/Description.jsx';
import NextLevelButton from '../NextLevelButton/NextLevelButton.jsx';

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <audio src="https:\/\/mp3d.jamendo.com\/download\/track\/887208\/mp32\/" />
        <Header />
        <QuestionList />
        <QuestionBlock />
        <div className="row mb2">
          <AnswerList />
          <Description />
        </div>
        <NextLevelButton />
      </div>
    )
  }
}
