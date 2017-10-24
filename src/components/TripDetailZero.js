import React from 'react';
import NavBar from './NavBar.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

const styles = {

  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },

  slide: {
    padding: 10,
  },

};

const stylesB = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'img/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'img/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'img/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  
];



export default class TripDetailZero extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    
    var styleB = {
      textAlign: 'center',
      width: '100%',
      padding: '20px 20px 20px 20px'
  }

    return (
      <div style={styleB}>
        <NavBar />

        <br />

        <img src="img/card_img1.jpg" style={{maxHeight:'400px', maxWidth:'100%'}} />

        <MuiThemeProvider>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Summary" value={0} />
          <Tab label="Details" value={1} />
          <Tab label="What's Next" value={2} />
        </Tabs>

        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div style={{fontFamily: 'Robotto'}}>
            <h2 style={styles.headline}>Myanmar November 2017</h2>
            Ministry involves teaching English, Art and spiritual growth lessons to children and youth Mandarin-speaking audience. Participants should be able to speak simple Mandarin.
            <br />
          </div>
          <div style={styles.slide}>
    "description": "Ministry involves teaching English, Art and spiritual growth lessons to children and youth Mandarin-speaking audience. Participants should be able to speak simple Mandarin.", <br />
		"start_date": "2017-10-31T16:00:00.000Z", <br />
		"end_date": "2017-11-06T16:00:00.000Z", <br />
		"location": "Myanmar", <br />
		"estimated_cost": 1200, <br />
		"created_at": "2017-10-21T07:19:48.000Z", <br />
		"status": "open", <br />
		"agency_name": "Cru Singapore", <br />
          </div>
          <div style={styles.slide}>

          </div>
        </SwipeableViews>
        <Link to="/agency"><RaisedButton label="Sign Up Now" secondary={true}/></Link>
        </MuiThemeProvider>
      </div>
    );
  }
}