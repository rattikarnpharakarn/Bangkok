
import React, { Dispatch, ReactNode, SetStateAction, FC, createContext } from 'react';
import { THEMES } from './Theme.config';
import { ThemeType, Theme } from './Theme.model';
import Home from '../../pages/homepage/page';
import Header from '@/app/component/Header';
import AuthProvider from '@/app/AuthProvider';


interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme,
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: 'blue',
  theme: THEMES['blue'],

} as ThemeContextProps);



interface Props {
  children?: ReactNode
  // any props that come into the component
}

const ThemeProvider: FC<Props> = ({ children, ...props }: Props) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>('blue');

  return (
    <ThemeContext.Provider value={{
      themeType: currentTheme,
      theme: THEMES[currentTheme],
      setCurrentTheme,


    }}  {...props}>
     
        {children}

     
      
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const useTheme = () => React.useContext(ThemeContext);


