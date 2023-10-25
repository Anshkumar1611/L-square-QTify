import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { customTabPanel, labels } from "../../Constant";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ value, handleChange }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="white"
          indicatorColor="primary"
          aria-label="basic tabs example"
        >
          {labels.map((label) => {
            return (
              <Tab
                sx={{ textTransform: "none", fontWeight: "bolder" }}
                key={label.index}
                label={label.label}
                {...a11yProps(`${label.index}`)}
              />
            );
          })}
        </Tabs>
      </Box>
      {customTabPanel?.map((tab) => (
        <CustomTabPanel key={tab} value={value} index={tab}></CustomTabPanel>
      ))}
    </Box>
  );
}
