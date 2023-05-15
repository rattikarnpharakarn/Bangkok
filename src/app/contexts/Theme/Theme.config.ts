import { Color } from '../../models/color.model';
import { ThemeType, Theme } from './Theme.model';

export const THEMES: Record<ThemeType, Theme> = {
  red: {
    '--primary': Color.VIOLET,
    '--secondary': Color.DARK_VIOLET,
    '--background': Color.LIGHT_RED,
    '--white': Color.WHITE,


  },
  dark: {
    '--primary': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--background': Color.DARK_VIOLET,
    '--white': Color.WHITE,


  },
  blue:{
    '--primary': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--background': Color.DARK_BLUE,
    '--white': Color.WHITE,

  },
  white:{
    '--primary': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--background': Color.WHITE,
    '--white': Color.WHITE,

  },
  gold:{
    '--primary': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--background': Color.GOLD,
    '--white': Color.WHITE,
  
  },
  goldblack:{
    '--primary': Color.VIOLET,
    '--secondary': Color.WHITE,
    '--background': Color.DARK_VIOLET,
    '--white': Color.GOLD,

  },
};
