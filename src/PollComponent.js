import localStorage from 'local-storage';
import React, { useState, useMemo } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PollData from './static/PollData';

const resultData = rearrangePollData(PollData);
export default function PollComponent(){
    const isSmallScreen = window.screen.width < 800;
    const classes = makeStyles({
        root:{
            width: isSmallScreen ? '100%' : '80%',
            height: isSmallScreen ? '80%' : '100%'
        },
        sportPaper: {
            width: isSmallScreen ? '25%' : '15%',
            height: isSmallScreen ? '10%' : '20%',
            display: 'inline-block',
            fontWeight: 'bold',
        },
        statusPaper: {
            width: isSmallScreen ? '25%' : '15%',
            height: isSmallScreen ? '10%' : '20%',
            display: 'inline-block',
            fontWeight: 'bold'
        },
        homePaper: {
            width: '40%',
            height: '50%',
            display: 'inline-block',
            fontWeight: 'bold'
        },
        vsDiv: {
            width: '20%',
            display: 'inline-block',
            fontWeight: 'bold',
            height: '50%'
        },
        button: {
            width: '20%',
            margin: '0 5% 0 5%'
        }
    })();
    const randomPoll = useMemo(() => getRandomPoll(resultData),[resultData]);
    const pollHistory = localStorage.get('pollHistory') || [];
    const previousPoll = pollHistory.find(poll => poll.id === randomPoll.id);
    const [currentPoll, setCurrentPoll] = useState(previousPoll);
    function onPollClick(team){
        return function(){
            let pollHistory = localStorage.get('pollHistory') || [];
            
            const previousPollIndex = pollHistory.findIndex(poll => poll.id === randomPoll.id);
            if(previousPollIndex === -1) {
                pollHistory.push({
                    id: randomPoll.id,
                    vote: team
                });
            } else {
                pollHistory.splice(previousPollIndex,1, {id: randomPoll.id, vote: team});
            }
            localStorage.set('pollHistory', pollHistory);
            setCurrentPoll({
                id: randomPoll.id,
                vote: team
            });
        }
    } 
    return(
        <Paper elevation={1} classes={{root: classes.root}}>
            <Paper elevation={5} classes={{root: classes.sportPaper}}>
                <div className='pollSport'>
                {randomPoll.sport}
                </div>
            </Paper>
            <div style={{width: isSmallScreen ? '50%' : '70%',display: 'inline-block'}}>
                <div className='pollHeader pollGroup'>{randomPoll.group}</div>
                <div className='pollHeader pollCountry'>{randomPoll.country}</div>
            </div>
            <Paper elevation={5} classes={{root: classes.statusPaper}}>
            <div className='pollSport'>
                {randomPoll.state}
                </div>
            </Paper>
            <Paper elevation={0} classes={{root: classes.homePaper}}>
                <div className='pollTeam pollHome' style={{fontSize: isSmallScreen ? '25px' : '40px'}}>{randomPoll.homeName}</div></Paper>
            <Paper elevation={0} classes={{root: classes.vsDiv}}>
                <div className='pollTeam pollVs' style={{fontSize: isSmallScreen ? '15px' : '30px'}}>VS</div></Paper>
            <Paper elevation={0} classes={{root: classes.homePaper}}>
                <div  className='pollTeam pollAway' style={{fontSize: isSmallScreen ? '25px' : '40px',}}>{randomPoll.awayName}</div></Paper>
            <div>
            <Button onClick={onPollClick('Home')} classes={{root: classes.button}} variant='contained' color='primary'>Home Team</Button>
            <Button onClick={onPollClick('Draw')} classes={{root: classes.button}} variant='contained'>Draw</Button>
            <Button onClick={onPollClick('Away')} classes={{root: classes.button}} variant='contained' color='secondary'>Away Team</Button>
            </div>
            {currentPoll ? <div className='pollHistory'>You have voted: {currentPoll.vote}</div> : ''}
        </Paper>
    );
}

export function rearrangePollData(pollData){
    const resultData = [];
    pollData.forEach(poll => {
        let sportIndex = resultData.indexOf(pollArr => pollArr[0].sport === poll.sport);
        if(sportIndex===-1){
            resultData.push([]);
            sportIndex = resultData.length - 1;
        }
        resultData[sportIndex].push(poll);
    });
    return resultData;
}

export function getRandomPoll(pollData) {
    const randomSport = Math.floor(Math.random()*pollData.length);
    const pollsOfSport = pollData[randomSport];
    const randomPoll = Math.floor(Math.random()*pollsOfSport.length);
    return pollsOfSport[randomPoll];
}