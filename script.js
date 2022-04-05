'use strict';
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scisors = document.querySelector('.scisors');
const play = document.querySelector('.play');
const newG = document.querySelector('.newgame');
const result = document.querySelector('.result');
const robotP = document.querySelector('.robot');
const player = document.querySelector('.player');
// assigned starting values
let robot = '';
let you = '';
let chance = 0;
let rarr = [];
let yarr = [];

play.addEventListener('click', function () {
  //  if (you) is for error to ocure if none of boxes are selected
  if (you) {
    //   generate random number and associate it to rock paper sciros
    chance = Math.trunc(Math.random() * 3) + 1;
    if (chance === 1) robot = 'rock';
    if (chance === 2) robot = 'paper';
    if (chance === 3) robot = 'scisors';
    // what will be pushed to dom
    if (robot === 'scisors') robotP.textContent = '✌';
    if (you === 'scisors') player.textContent = '✌';
    if (you === 'paper') player.textContent = '🤚';
    if (robot === 'paper') robotP.textContent = '✋';
    if (robot === 'rock') robotP.textContent = '✊';
    if (you === 'rock') player.textContent = '✊';
    // all options that can happen defined
    if (robot === you) result.textContent = 'DRAW';
    if (robot === 'rock' && you === 'paper') {
      yarr.push(1); //this push to array so we get array.lenght = number of wins
      result.textContent = 'YOU WON';
    }
    if (robot === 'paper' && you === 'scisors') {
      yarr.push(1);
      result.textContent = 'YOU WON';
    }
    if (robot === 'scisors' && you === 'rock') {
      yarr.push(1);
      result.textContent = 'YOU WON';
    }
    if (robot === 'scisors' && you === 'paper') {
      rarr.push(1);
      result.textContent = 'YOU LOSE ';
    }
    if (robot === 'paper' && you === 'rock') {
      rarr.push(1);
      result.textContent = 'YOU LOSE ';
    }
    if (robot === 'rock' && you === 'scisors') {
      rarr.push(1);
      result.textContent = 'YOU LOSE ';
    }
    document.querySelector('.error').textContent = '';
  } else {
    // if(you) is false this error pop up
    document.querySelector('.error').textContent =
      'YOU CANT WIN IF YOU DONT SELECT 😔';
  }
  // this push wins on dom
  document.querySelector('.rdata').textContent = ` ${rarr.length}`;
  document.querySelector('.ydata').textContent = ` ${yarr.length}`;
});
// assign values to value of "you" by selecting div
rock.addEventListener('click', function () {
  you = 'rock';
  rock.classList.add('back');
  paper.classList.remove('back');
  scisors.classList.remove('back');
});
paper.addEventListener('click', function () {
  you = 'paper';
  rock.classList.remove('back');
  scisors.classList.remove('back');
  paper.classList.add('back');
});
scisors.addEventListener('click', function () {
  you = 'scisors';
  rock.classList.remove('back');
  paper.classList.remove('back');
  scisors.classList.add('back');
});
