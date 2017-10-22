import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import { SearchTrip } from './SearchTrip.js';
import style from './Main.css';
import NavBar from './NavBar.js';

class Trip extends React.Component {

    state = { 
        tripsDIV: [],
        tripsObj: []
    } ;

    componentWillMount() {
        this.loadData();
    }

    loadData() {
        var styleD = {
            minWidth:'150px',
            width: '350px',
            height: '500px',
            textAlign:'center',
            display: 'inline-block',
            padding: '20px 20px 20px 20px'
        };
    
        var styleB = {
            textAlign: 'center',
            width: '100%',
            padding: '20px 20px 20px 20px'
        }
    
        var styleC = {
            position: 'relative',
            transform: 'translate(-25%,-25%)'
//            width: 'auto',
  //          height: 'auto',
    //        maxWidth: '300px',
      //      maxHeight: '300px'
        }        

        this.state.tripsDIV.push(
            <div style={styleD}>
                    <Card>
                        <CardHeader
                            title="Cru"
                            subtitle="RevUp 2017"
                            avatar=""
                        />

                        <CardMedia
                            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                        >
                        <div style={{width:'100px',height:'200px',overflow:'hidden'}}>                        
                            <img src="img/card_img1.jpg" alt="" style={styleC}/>
                        </div>
                        </CardMedia>
                        <CardText>
                            Information about the Trip
                        </CardText>
                        <CardActions>
                        <Link to={"trip_detail0"}><FlatButton label="Find Out More" /></Link>
                        <FlatButton label="Sign Up" />
                        </CardActions>
                    </Card>
            </div>
        );
        /*
        this.state.tripsDIV.push(
            <div style={styleD}>
                    <Card>
                        <CardHeader
                            title="COMMIT Ministries"
                            subtitle="2017 Outreach"
                            avatar=""
                        />

                        <CardMedia
                            overlay={<CardTitle title="E.A. Missions" subtitle="Overlay subtitle" />}
                        >
                        <div style={{width:'100px',height:'200px',overflow:'hidden'}}>
                            <img src="http://www.shorttermmissions.com/trips/get_picture.php?media_id=129" alt="" style={styleC}/>
                        </div>
                        </CardMedia>

                        <CardText>
                        This trip is open to everyone! Team ...
                        </CardText>
                        <CardActions>
                        <Link to={"trip_detail0"}><FlatButton label="Find Out More" /></Link>
                        <FlatButton label="Sign Up" />
                        </CardActions>
                    </Card>
            </div>
        );

        this.state.tripsDIV.push(
            <div style={styleD}>
                    <Card>
                        <CardHeader
                            title="Cru"
                            subtitle="RevUp 2017"
                            avatar=""
                        />

                        <CardMedia
                            overlay={<CardTitle title="E.A. Missions" subtitle="Overlay subtitle" />}
                        >
                        <div style={{width:'100px',height:'200px',overflow:'hidden'}}>
                            <img src="http://www.shorttermmissions.com/trips/get_picture.php?media_id=129" alt="" style={styleC}/>
                        </div>
                        </CardMedia>

                        <CardText>
                        inistry involves teaching English, Art
                        </CardText>
                        <CardActions>
                        <Link to={"trip_detail0"}><FlatButton label="Find Out More" /></Link>
                        <FlatButton label="Sign Up" />
                        </CardActions>
                    </Card>
            </div>
        );        

        this.state.tripsDIV.push(
            <div style={styleD}>
                    <Card>
                        <CardHeader
                            title="Cru"
                            subtitle="RevUp 2017"
                            avatar=""
                        />

                        <CardMedia
                            overlay={<CardTitle title="E.A. Missions" subtitle="Overlay subtitle" />}
                        >
                        <div style={{width:'100px',height:'200px',overflow:'hidden'}}>
                            <img src="http://www.shorttermmissions.com/trips/get_picture.php?media_id=129" alt="" style={styleC}/>
                        </div>
                        </CardMedia>

                        <CardText>
                        This trip is open to everyone! Team member trip...
                        </CardText>
                        <CardActions>
                        <Link to={"trip_detail0"}><FlatButton label="Find Out More" /></Link>
                        <FlatButton label="Sign Up" />
                        </CardActions>
                    </Card>
            </div>
        );*/

        fetch('./request.json')
        .then((resp) => resp.json())
        .then((reply) => {

            this.state.tripsObj= reply.trips
            
            /*
            for (var i = 0; i < this.state.tripsObj.length; i++) {
                this.state.tripsDIV.push(
                    <div style={styleD}>
                            <Card>
                                <CardHeader
                                    title="Cru"
                                    subtitle="RevUp 2017"
                                    avatar=""
                                />
    
                                <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img src="img/card_img1.jpg" alt="" style={styleC}/>
                                </CardMedia>
    
                                <CardTitle title="Trip" subtitle="Card subtitle" />
                                <CardText>
                                    Information about the Trip
                                </CardText>
                                <CardActions>
                                <Link to={"trip_detail"}><FlatButton label="Find Out More" /></Link>
                                <FlatButton label="Sign Up" />
                                </CardActions>
                            </Card>
                    </div>
                );
            }*/
        })

        //var url = "http://10.20.44.12:4000/trips?filters=east%20asia,china,myanmar";

        
    }

    render() {

        var styleD = {
            minWidth:'300px',
            textAlign:'center',
            display: 'inline-block',
            padding: '20px 20px 20px 20px'
        };
    
        var styleB = {
            textAlign: 'center',
            width: '100%',
            padding: '20px 20px 20px 20px'
        }
    
    
        var styleC = {
            width: 'auto',
            height: 'auto',
            maxWidth: '300px',
            maxHeight: '300px'
        }

        var tripsObj2 = []

        //var url = "http://10.20.44.12:4000/trips?filters=east%20asia,china,myanmar";
        // for (var i = 0; i < this.state.tripsObj.length; i++) {            
        //     this.state.tripsDIV.push(
        //         <div key="{this.state.tripsObj[i].id}" style={styleD}>
        //                 <Card>
        //                     <CardHeader
        //                         title="Cru"
        //                         subtitle="RevUp 2017"
        //                         avatar=""
        //                     />

        //                     <CardMedia
        //                         overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        //                     >
        //                         <img src="img/card_img1.jpg" alt="" style={styleC}/>
        //                     </CardMedia>

        //                     <CardTitle title="Trip" subtitle="Card subtitle" />
        //                     <CardText>
        //                         Information about the Trip
        //                     </CardText>
        //                     <CardActions>
        //                     <Link to={"trip_detail"}><FlatButton label="Find Out More" /></Link>
        //                     <FlatButton label="Sign Up" />
        //                     </CardActions>
        //                 </Card>
        //         </div>
        //     );
        // }
        
        // return ( 
        //     <div style={styleB}>

        //         <NavBar />
                
        //         <SearchTrip />
        //         <MuiThemeProvider>
        //             {this.state.tripsDIV}
        //         </MuiThemeProvider>

        //     </div>
        // );
        return ( 
            <div style={styleB}>

                <NavBar />
                
                <SearchTrip />
                <MuiThemeProvider>
                    {this.state.tripsObj.map(trip => {
                        return <div key={trip.id} style={styleD}>
                            <Card>
                                <CardHeader
                                    title="Cru"
                                    subtitle="RevUp 2017"
                                    avatar=""
                                />

                                <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img src="img/card_img1.jpg" alt="" style={styleC}/>
                                </CardMedia>

                                <CardTitle title="Trip" subtitle="Card subtitle" />
                                <CardText>
                                    Information about the Trip
                                </CardText>
                                <CardActions>
                                <Link to={"trip_detail"}><FlatButton label="Find Out More" /></Link>
                                <FlatButton label="Sign Up" />
                                </CardActions>
                            </Card>
                        </div>;
                    })}
                </MuiThemeProvider>
            </div>
        );

    }
}

export default Trip;