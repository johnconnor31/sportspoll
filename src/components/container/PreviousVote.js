import React from 'react';

export default function PreviousVote(props) {
    const { previousPoll } = props;
    return (
        previousPoll ? <div className='pollHistory'>You have previously voted: 
                <div className='historyVote'>
                    {previousPoll.vote}
                </div> . Please clear local storage to vote freshly</div> : ''
    );
}