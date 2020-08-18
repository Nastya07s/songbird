import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { Component } from 'react';

import Header from '../Header/Header.jsx';
import QuestionBlock from '../QuestionBlock/QuestionBlock.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Description from '../Description/Description.jsx';
import NextLevelButton from '../NextLevelButton/NextLevelButton.jsx';

import getRandomInt from './../../helpers/helpers';

import birdsData from './../../data/data.js';

export default class App extends Component {

  state = {
    birdsData: null,
    currentStage: 1,
    currentBird: null,
    rightBird: null,
    isGuessed: false,
    loading: true,
  }

  componentDidMount = async () => {    
    // console.log('birdsData: ', birdsData);
    const rightBirdNumber = getRandomInt(5);
    const rightBird = birdsData[this.state.currentStage][rightBirdNumber]
    // console.log('rightBird: ', rightBird);
    return this.setState({
      rightBird,
      birdsData,
      loading: false,
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentStage !== this.state.currentStage) {
      const rightBirdNumber = getRandomInt(5);
      const rightBird = birdsData[this.state.currentStage][rightBirdNumber];
      this.setState({currentBird: null, rightBird});
    }
  }

  showBird = (bird) => {
    console.log('bird: ', bird);
    console.log('this.bird.rightBird: ', this.state.rightBird);
    if (bird === this.state.rightBird)
      this.setState({currentBird: bird, isGuessed: true});
    else this.setState({currentBird: bird});
    // console.log(this.state.currentBird);
    // return this.showBirdDesc.bind(this, bird);
  }

  // showBirdDesc = (bird) => {
  //   console.log('birdDesc', bird);
  // }

  render() {

    const { birdsData, currentStage, loading} = this.state;
    // 

    if (loading) return null;

    return (
      <div className="container">
        <audio src="https:\/\/mp3d.jamendo.com\/download\/track\/887208\/mp32\/" />
        <Header />
        <QuestionList />
        <QuestionBlock rightBird={this.state.rightBird} isGuessed={this.state.isGuessed} />
        <div className="row mb2">
          <AnswerList birdsData={birdsData[currentStage]} showBird={this.showBird} rightBird={this.state.rightBird}/>
          <Description bird={this.state.currentBird}/>
        </div>
        <NextLevelButton isGuessed={this.state.isGuessed}/>
      </div>
    )
  }
}
