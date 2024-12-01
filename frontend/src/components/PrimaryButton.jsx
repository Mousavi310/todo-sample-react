import React, { useContext } from "react";
import { Button } from "antd";
import ThemeContext from "../contexts/ThemeContext";
const PrimaryButton = ({content}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Button type="primary" htmlType="submit" style={{ backgroundColor: theme.primaryColor }}>
        {content}
    </Button>
  );
};
export default PrimaryButton;
