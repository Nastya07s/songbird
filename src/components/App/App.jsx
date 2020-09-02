import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { Component, Fragment } from 'react';

import Score from '../Score/Score.jsx';
import QuestionBlock from '../QuestionBlock/QuestionBlock.jsx';
import QuestionList from '../QuestionList/QuestionList.jsx';
import AnswerList from '../AnswerList/AnswerList.jsx';
import Description from '../Description/Description.jsx';
import NextLevelButton from '../NextLevelButton/NextLevelButton.jsx';
import GameOver from '../GameOver/GameOver.jsx';


import { birdsData, stageNames } from './../../data/data.js';

import getRandomInt from './../../helpers/helpers';

import achive from '../../img/achive.png';

import './App.scss';

export default class App extends Component {
  state = {
    birdsData: null,
    currentStage: 0,
    currentBird: null,
    rightBird: null,
    isGuessed: false,
    loading: true,
    isFinish: false,
    score: 0,
    currentScore: 5,
  };

  componentDidMount = async () => {
    const rightBirdNumber = getRandomInt(5);
    const rightBird = birdsData[this.state.currentStage][rightBirdNumber];

    return this.setState({
      rightBird,
      birdsData,
      loading: false,
    });
  };

  componentWillUpdate = (nextProps, nextState) => {
    if (
      nextState.currentStage !== this.state.currentStage &&
      !nextState.isFinish
    ) {
      const rightBirdNumber = getRandomInt(5);
      const rightBird = birdsData[nextState.currentStage][rightBirdNumber];

      this.setState({
        currentBird: null,
        rightBird,
        isGuessed: false,
        currentScore: 5,
      });
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

    const newState = { currentStage: this.state.currentStage + 1 };
    if (newState.currentStage > 5) newState.isFinish = true;

    this.setState({ ...newState });
  };

  startGame = () => {
    this.setState({ 
      currentStage: 0,
      currentBird: null,
      rightBird: null,
      loading: false,
      isFinish: false,
      isGuessed: false,
      score: 0,
    })
  }

  render() {
    const { birdsData, rightBird, currentStage, currentBird, loading, isFinish, isGuessed, score } = this.state;
    console.log('RENDER rightBird: ', rightBird);

    if (loading) return null;

    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
          <div className="navbar-brand">
            SONG<span className="bird-span">BIRD</span>
            {score === 30 ? <img src={achive} height={40}/>: null}
          </div>

          <div className="" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Score score={score} />
              </li>
            </ul>
          </div>
        </nav>
        <QuestionList stageNames={stageNames} currentStage={currentStage} />
        {isFinish ? (
          <GameOver score={score} startGame={this.startGame}/>
        ) : (
          <Fragment>
            <QuestionBlock
              rightBird={rightBird}
              isGuessed={isGuessed}
            />
            <div className="row mb2">
              <AnswerList
                birdsData={birdsData[currentStage]}
                showBird={this.showBird}
                rightBird={rightBird}
                isGuessed={isGuessed}
              />
              <Description bird={currentBird} />
            </div>
            <NextLevelButton
              isGuessed={isGuessed}
              goToNextLevel={this.goToNextLevel}
            />
          </Fragment>
        )}
      </div>
    );
  }
}
