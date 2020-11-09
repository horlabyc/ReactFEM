import { createContext } from 'react';

const ThemeContext = createContext<[string, (theme: string) => void]>(["blue", () => { }]);

export default ThemeContext;