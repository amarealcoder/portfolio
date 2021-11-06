import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 400,
  },
  media: {
    height: 155,
  },
});

export default function MediaCard({ image, title, calcDesc }) {
  const classes = useStyles();

  return (
   
    <Card className={classes.root} elevation={5} >
      <CardHeader title={title} />
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {calcDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
