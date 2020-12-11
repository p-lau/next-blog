import { createContext, useState, useContext } from "react"
type Props = [boolean, ()=> void]

const Context = createContext<Props>([true, function(){}])

export const useTheme = () => useContext(Context)
export default function ThemeContext({children}){
	const [theme, setTheme] = useState(true)
	const toggleTheme = () => setTheme(!theme)
	return(
		<Context.Provider value={[theme, toggleTheme]}>
			{children}
		</Context.Provider>
	)
}
