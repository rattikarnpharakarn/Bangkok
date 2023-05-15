import { Color } from '../../models/color.model';

export type ThemeType = 'dark' | 'red' | 'blue' | 'white' | 'gold' | 'goldblack';

export interface Theme {
  '--primary': Color;
  '--secondary': Color;
  '--background': Color;
  '--white': Color;
}
