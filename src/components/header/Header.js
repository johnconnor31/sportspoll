import React from 'react';
import Paper from '@material-ui/core/Paper';
import headerStyles from './headerStyles';

export default function Header (){
    const classes = headerStyles();
    return (
        <Paper classes={{root: classes.root}} elevation={1}>
          Sports Poll
      </Paper>
    );
}