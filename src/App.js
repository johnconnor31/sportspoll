import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import PollComponent from './PollComponent';
import './static/App.css';

function App() {
  const classes = makeStyles({
    root: {
      display: 'table',
      margin: '0 0 0 30%',
      width: '40%',
      left: '30%',
      height: '7%',
      backgroundImage: 'linear-gradient(to bottom right, green, white)',
      textAlign: 'center',
      verticalAlign: 'middle',
      lineHeight: '90px',
      fontStyle: 'italic', 
      fontSize:'larger', 
      fontWeight: 'bold'
    }
  })();
  return (
    <div className="App">
      <Paper classes={{root: classes.root}} elevation={1}>
          Sports Poll
      </Paper>
      <div className='pollDiv'>
        <PollComponent />
      </div>
    </div>
  );
}

export default App;
