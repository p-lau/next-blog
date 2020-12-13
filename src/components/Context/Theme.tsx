import {createContext, useState, useContext, useEffect} from "react"
type Props = [boolean, ()=> void]

const THEME = 'plau-theme'

const Context = createContext<Props>([true, function(){}])

/*
 * Returns a fixed Array [theme, toggle]
 * @returns [theme, toggle] Ara
 *
 * theme - Boolean
 * @default true
 *
 * toggle - Function
 */
export const useTheme = () => useContext(Context)

// Theme Context
export default function ThemeContext({children}){
	const [theme, setTheme] = useState(true)

	function toggle(){
		localStorage.setItem(THEME, String(!theme))
		setTheme(!theme)
	}

	useEffect(()=>{
		const localTheme = localStorage.getItem(THEME)
		localTheme && setTheme(localTheme === "true")
	}, [])

	return(
		<Context.Provider value={[theme, toggle]}>
			{children}
		</Context.Provider>
	)
}