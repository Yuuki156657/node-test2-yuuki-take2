import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';


export default function ButtonAppBar() {

  return (
      <AppBar position="static">
        <Toolbar className="Header-toolbar">
          <Typography variant="h6">
            React test2
          </Typography>
          <Button color="inherit">Reload Data:&nbsp;<RefreshIcon /></Button>
        </Toolbar>
      </AppBar>
  );
}