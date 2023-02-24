import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Posts from './Features/Posts/Index';
import People from './Features/People/Index';
import Albums from './Features/Albums/Index';
import Todos from './Features/Todos/Index';
import NavigationBar from './components/NavigationBar';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`horizontal-tabpanel-${index}`}
        aria-labelledby={`horizontal-tab-${index}`}
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
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `horizontal-tab-${index}`,
      'aria-controls': `horizontal-tabpanel-${index}`,
    };
  }
  
  
const HomePage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
     <div className="w-full bg-white h-screen">
        <NavigationBar />
         <div className="my-auto mx-auto">
         <Box
        sx={{ bgcolor: 'background.paper'  }}
        pt={6}
        mx='auto'
      >
        <Tabs
          value={value} onChange={handleChange} centered
        >
          <Tab label="Posts" {...a11yProps(0)} />
          <Tab label="People" {...a11yProps(1)} />
          <Tab label="Albums" {...a11yProps(2)} />
          <Tab label="Todos" {...a11yProps(3)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Posts />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <People />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Albums />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Todos />
        </TabPanel>
      </Box>
         </div>
     </div>
    );
}

export default HomePage