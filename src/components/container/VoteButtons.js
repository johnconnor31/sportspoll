import React from 'react';
import Button from '@material-ui/core/Button';
import containerStyles from './containerStyles';

export default function VoteButtons(props){
    const isSmallScreen = window.screen.width < 800;
    const classes = containerStyles(isSmallScreen);
    const { onPollClick } = props;
    return (
        <div>
            <Button onClick={onPollClick('Home')} classes={{root: classes.button}} variant='contained' color='primary'>Home Team</Button>
            <Button onClick={onPollClick('Draw')} classes={{root: classes.button}} variant='contained'>Draw</Button>
            <Button onClick={onPollClick('Away')} classes={{root: classes.button}} variant='contained' color='secondary'>Away Team</Button>
        </div>
    );
}