import React, {useState} from "react"

const ThemeContext = React.createContext()

function ThemeContextProvider(props){

    const [color, setColor] = useState("isnt")

    const toggleTheme = () => {
        setColor(prevColor => prevColor === "isnt" ? "is":"isnt")
    }

    return(
        <ThemeContext.Provider value={{
            color,
            toggleTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}