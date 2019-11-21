import { makeStyles } from '@material-ui/core/styles';

export default function containerStyles(isSmallScreen) {
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
        button: {
            width: '20%',
            margin: '0 5% 0 5%'
        }
    })();
    
    return classes;

}

export function leagueStyles(isSmallScreen) {
    return { 
        width: isSmallScreen ? '50%' : '70%',
        display: 'inline-block'
    };
}