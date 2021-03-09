import React from 'react';
import './Country.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const Country = ({ country }) => {
    const { name, capital, region, nativeName, flag, alpha2Code } = country

    const classes = useStyles();
    return (
        <div className="country">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={flag}
                        title="Contemplative Reptile"
                    />
                    <CardContent className="card-content">
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>{capital}</Typography>
                        <Typography variant="subtitle1" gutterBottom>{region}</Typography>
                        <Typography variant="subtitle1" gutterBottom>{nativeName}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={'/country/' + alpha2Code} size="small" color="primary">
                        Learn More
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Country;