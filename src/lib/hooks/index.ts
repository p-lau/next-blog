import { useState } from "react"

export const useDarkTheme = () => {
	const [theme, changeTheme] = useState(true)
	const toggleTheme = () => changeTheme(!theme)
	return { theme, toggleTheme }
}