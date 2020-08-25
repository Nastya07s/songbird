import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { Component } from 'react';

import Score from '../Score/Score.jsx';
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
    score: 0,
    currentScore: 5,
  };

  componentDidMount = async () => {
    // console.log('birdsData: ', birdsData);
    const rightBirdNumber = getRandomInt(5);
    const rightBird = birdsData[this.state.currentStage][rightBirdNumber];
    // console.log('rightBird: ', rightBird);
    return this.setState({
      rightBird,
      birdsData,
      loading: false,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.currentStage !== this.state.currentStage) {
      const rightBirdNumber = getRandomInt(5);
      const rightBird = birdsData[this.state.currentStage][rightBirdNumber];
      this.setState({ currentBird: null, rightBird });
    }
  };

  showBird = (bird, isTouched) => {
    console.log('isTouched: ', isTouched);
    // console.log("bird: ", bird);
    // console.log("this.bird.rightBird: ", this.state.rightBird);
    if (bird === this.state.rightBird)
      this.setState((state) => ({
        currentBird: bird,
        isGuessed: true,
        score: state.score + state.currentScore,
      }));
    else {
      let currentScore = this.state.currentScore;
      if (!isTouched) {
        currentScore -= 1; 
      }
      this.setState(() => ({
        currentBird: bird,
        currentScore,
      }));
    }
    // console.log(this.state.currentBird);
    // return this.showBirdDesc.bind(this, bird);
  };

  // showBirdDesc = (bird) => {
  //   console.log('birdDesc', bird);
  // }

  render() {
    const { birdsData, currentStage, loading } = this.state;
    //

    if (loading) return null;

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <div className="navbar-brand">
            SONG<span className="bird-span">BIRD</span>
          </div>

          <div className="" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Score score={this.state.score} />
              </li>
            </ul>
          </div>
        </nav>
        <QuestionList />
        <QuestionBlock
          rightBird={this.state.rightBird}
          isGuessed={this.state.isGuessed}
        />
        <div className="row mb2">
          <AnswerList
            birdsData={birdsData[currentStage]}
            showBird={this.showBird}
            rightBird={this.state.rightBird}
            isGuessed={this.state.isGuessed}
          />
          <Description bird={this.state.currentBird} />
        </div>
        <NextLevelButton isGuessed={this.state.isGuessed} />
      </div>
    );
  }
}
