import React, { useContext, useState } from "react";
import { SketchPicker } from "react-color";
import ThemeContext from "../contexts/ThemeContext";
import { Button } from "antd";

const ThemeChanger = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [show, setShow] = useState(false)
  const handleChange = (color) => {
    setTheme({ primaryColor: color.hex });
    setShow(false)
  };
  
  return (
    <><Button onClick={() => setShow(true)} style={{backgroundColor: theme.primaryColor}}>Pick a color</Button>
    {(show && <SketchPicker color={theme.primaryColor} onChangeComplete={handleChange} />)}
    </>
  )
  
};
export default ThemeChanger;
