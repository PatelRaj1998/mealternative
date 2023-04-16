/*
  Provide arrays for sidebar and menu bar
*/
import React from 'react';
import {
  HomeRounded,
  ExploreRounded,
  MenuBookRounded,
  VerifiedUserRounded,
  GroupAddRounded,
  AccountCircle,
  ExitToAppRounded,
} from '@material-ui/icons';

export const sideBarArrays = [
  { path: '/', text: 'Home', icon: <HomeRounded /> },
  { path: '/map', text: 'Map', icon: <ExploreRounded /> },
  { path: '/recipes', text: 'Recipes', icon: <MenuBookRounded /> },
];

export const authArrays = [
  { path: '/account', text: 'Account', icon: <AccountCircle /> },
  { path: null, text: 'Sign Out', icon: <ExitToAppRounded /> },
];

export const noAuthArrays = [
  { path: '/signin', text: 'Sign In', icon: <VerifiedUserRounded /> },
  { path: '/signup', text: 'Sign Up', icon: <GroupAddRounded /> },
];

export const authMenus = [
  { text: 'Account', path: '/account' },
  { text: 'SignOut' },
];

export const noAuthMenus = [
  { path: '/signin', text: 'Sign In' },
  { path: '/signup', text: 'Sign Up' },
];

export const toolTipIcons = [
  {
    path: '/recipes',
    title: 'Explore restaurants',
    icon: <MenuBookRounded />,
  },
  {
    path: '/map',
    title: 'Explore places',
    icon: <ExploreRounded />,
  },
];
