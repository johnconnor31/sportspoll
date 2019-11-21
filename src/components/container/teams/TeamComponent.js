import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core'; 
import teamStyles from './teamStyles';

class TeamComponent extends React.Component{
    constructor(props){
        super(props);
        this.isSmallScreen = window.screen.width < 800;
    }
    render() {
        const { type, name, classes } = this.props;
        
        return (
            <Paper elevation={0} classes={{root: type==='Vs' ? classes.vsDiv : classes.homePaper}}>
                <div className={'pollTeam poll'+type} style={{fontSize: this.isSmallScreen ? '25px' : '40px'}}>
                    {name}
                </div>
            </Paper>
        );
    }
}

export default withStyles(teamStyles)(TeamComponent);