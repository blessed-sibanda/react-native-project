import EStyleSheet from 'react-native-extended-stylesheet';
import * as common from './common';

export const lightColors = {
  $primary: common.primary,
  $secondaryColor: common.secondary,
  $successColor: common.success,
  $warningColor: common.warning,
  $dangerColor: common.danger,
  $blackColor: common.black,
  $whiteColor: common.white,
  $grey0Color: '#43393d',
  $grey1Color: '#8f888b',
  $grey2Color: '#d8d7dc',
  $grey3Color: '#edecec',
  $gradient0StartColor: '#ce4d82',
  $gradient0EndColor: '#4c39e8',
  $gradient1StartColor: '#ed7d3a',
  $gradient1EndColor: '#ce4d82',
  $overlay0Color: 'rgba(20, 7, 12, 0.8)',
  $overlay1Color: 'rgba(206, 77, 130, 0.8)',
};

export const lightStyles = EStyleSheet.create({
  buttonShadow: {
    '@media ios': {
      shadowRadius: '6rem',
      shadowColor: '#ef4492',
      shadowOpacity: 0.4,
      shadowOffset: {width: 0, height: '6rem'},
    },
    '@media android': {
      elevation: '6rem',
    },
  },
  shadow1: {
    '@media ios': {
      shadowRadius: '4rem',
      shadowColor: 'rgb(37, 9, 19)',
      shadowOpacity: 0.1,
      shadowOffset: {width: 0, height: '2rem'},
    },
    '@media android': {
      elevation: '2rem',
    },
  },
  shadow2: {
    '@media ios': {
      shadowRadius: '8rem',
      shadowColor: 'rgb(37, 9, 19)',
      shadowOpacity: 0.08,
      shadowOffset: {width: '1rem', height: '4rem'},
    },
    '@media android': {
      elevation: '4rem',
    },
  },
  shadow3: {
    '@media ios': {
      shadowRadius: '16rem',
      shadowColor: 'rgb(37, 9, 19)',
      shadowOpacity: 0.06,
      shadowOffset: {width: '2rem', height: '12rem'},
    },
    '@media android': {
      elevation: '12rem',
    },
  },
  shadow4: {
    '@media ios': {
      shadowRadius: '24rem',
      shadowColor: 'rgb(37, 9, 19)',
      shadowOpacity: 0.06,
      shadowOffset: {width: '3rem', height: '16rem'},
    },
    '@media android': {
      elevation: '16rem',
    },
  },
});
