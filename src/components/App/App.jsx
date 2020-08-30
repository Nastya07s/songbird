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

import { birdsData, stageNames } from './../../data/data.js';

export default class App extends Component {
  state = {
    birdsData: null,
    currentStage: 0,
    currentBird: null,
    rightBird: null,
    isGuessed: false,
    loading: true,
    score: 0,
    currentScore: 5,
  };

  componentDidMount = async () => {
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
      this.setState({ currentBird: null, rightBird, isGuessed: false, currentScore: 5 });
    }
  };

  showBird = (bird, isTouched) => {
    const { score, currentScore, rightBird, isGuessed } = this.state;
    const newState = { currentBird: bird };
    if (!isGuessed) {
      if (bird === rightBird) {
        newState.isGuessed = true;
        newState.score = score + currentScore;
      } else {
        let currentScoreNew = currentScore;
        if (!isTouched) currentScoreNew -= 1;

        newState.currentScore = currentScoreNew;
      }

    }
    this.setState({ ...newState });
  };

  goToNextLevel = (isActive) => {
    if (!isActive) return null;
    this.setState((state) => {
      return {currentStage: state.currentStage + 1}
    })
  }

  render() {
    const { birdsData, currentStage, loading } = this.state;
    console.log('currentStage: ', currentStage);
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
        <QuestionList stageNames={stageNames} currentStage={currentStage} />
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
        <NextLevelButton isGuessed={this.state.isGuessed} goToNextLevel={this.goToNextLevel}/>
      </div>
    );
  }
}
