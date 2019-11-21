import React from 'react';
import Paper from '@material-ui/core/Paper';
import containerStyles from './containerStyles';

export default function(props) {
    const { display, value } = props;
    const isSmallScreen = window.screen.width < 800;
    const classes = containerStyles(isSmallScreen);
    return (
        <Paper elevation={5} classes={{root: display==='sport' ? classes.sportPaper : classes.statusPaper}}>
            <div className='pollSport'>
                {value}
            </div>
        </Paper>
    );
}