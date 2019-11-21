import { makeStyles } from '@material-ui/core/styles';

export default function headerStyles() {
    return makeStyles({
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
}