import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import { Box, Button, Heading, Grommet } from 'grommet';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation='medium'
    style={{ zIndex: '100' }}
    {...props}
  />
);


class FermentStation extends Component {
  render() {
    return (
      <Grommet theme={theme}>
        <AppBar>Hello AppBar!
        <Heading level='1' margin='none' color="brand"> My App</Heading>
        <Button icon={<Notification />} active={true} hoverIndicator={true} onClick={() => { }} />
        </AppBar>
        <ApplicationViews />
      </Grommet>
    )
  }
}

export default FermentStation


