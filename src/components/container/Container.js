import localStorage from 'local-storage';
import React, { useState, useEffect } from 'react';
import Event from './Event';
import LeagueDetails from './LeagueDetails';
import TeamComponent from './teams/TeamComponent';
import PreviousVote from './PreviousVote';
import Paper from '@material-ui/core/Paper';
import pollData from '../../static/PollData';
import containerStyles from './containerStyles';
import VoteButtons from './VoteButtons';


export default function PollComponent(){
    const isSmallScreen = window.screen.width < 800;
    const classes = containerStyles(isSmallScreen);
    let [resultData, setResultData] = useState([]);
    const [randomPoll, setRandomPoll] = useState({});

    useEffect(() => {
        const refinedResultData = pollData.filter( poll => {
            const historyIndex = pollHistory.findIndex(historyPoll => historyPoll.id === poll.id);
            return historyIndex  === -1;
        });
        setResultData(refinedResultData);
        const randomPollInitial = resultData.length ? getRandomPoll(resultData) : getRandomPoll(pollData);
        setRandomPoll(randomPollInitial);
    },[]);
    
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
            const pollIndexInResult = resultData.findIndex(poll => poll.id === randomPoll.id);
            resultData.splice(pollIndexInResult,1);
            const nextPoll = resultData.length ? getRandomPoll(resultData) : getRandomPoll(pollData);
            setRandomPoll(nextPoll);
        }
    } 
    
    const pollHistory = localStorage.get('pollHistory') || [];
    const previousPoll = pollHistory.find(poll => poll.id === randomPoll.id);

    return(
        <Paper elevation={1} classes={{root: classes.root}}>
            <>
                <Event display='sport' value= {randomPoll.sport} />
                <LeagueDetails pollData={randomPoll} />
                <Event display='status' value= {randomPoll.state} /> 
            </>
            <>
                <TeamComponent type='Home' name={randomPoll.homeName} />
                <TeamComponent type='Vs' name='VS' />
                <TeamComponent type='Away' name={randomPoll.awayName} />
            </>
            <>
                <VoteButtons onPollClick = {onPollClick} />
                <PreviousVote previousPoll={previousPoll} />
            </>
        </Paper>
    );
}

export function getRandomPoll(pollData) {
    const randomIndex = Math.floor(Math.random()*pollData.length);
    const randomPoll = pollData[randomIndex];
    return randomPoll;
}