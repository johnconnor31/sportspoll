import React from 'react';
import { leagueStyles } from './containerStyles';
export default function LeagueDetails(props){
    const isSmallScreen = window.screen.width < 800;
    const leagueStyle = leagueStyles(isSmallScreen);
    const { pollData } = props;
    return (
        <div style={leagueStyle}>
                    <div className='pollHeader pollGroup'>{pollData.group}</div>
                    <div className='pollHeader pollCountry'>{pollData.country}</div>
        </div>
    );
} 