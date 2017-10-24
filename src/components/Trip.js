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
                            avatar="img/cru_logo.jpg"
                        />

                        <CardMedia
                            overlay={<CardTitle title="Myanmar November 2017" subtitle="English, Art and spiritual growth" />}
                        >
                        <div style={{width:'100px',height:'200px',overflow:'hidden'}}>                        
                            <img src="img/card_img1.jpg" alt="" style={styleC}/>
                        </div>
                        </CardMedia>
                        <CardText>
                        Ministry involves teaching English, ...
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
                            avatar="img/commit_logo.jpg"
                        />

                        <CardMedia
                            overlay={<CardTitle title="E.A. Missions" subtitle="Connect with the east" />}
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
                            avatar="img/cru_logo.jpg"
                        />

                        <CardMedia
                            overlay={<CardTitle title="Children Outreach" subtitle="Fun with kids!" />}
                        >
                        <div style={{width:'100px',height:'200px',overflow:'hidden'}}>
                            <img src="https://www.adventures.org/mission-trips/images/2017/amb.jpg" alt="" style={styleC}/>
                        </div>
                        </CardMedia>

                        <CardText>
                        Reaching out to children in ...
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
                            overlay={<CardTitle title="Excite!" subtitle="Join us!" />}
                        >
                        <div style={{width:'100px',height:'200px',overflow:'hidden'}}>
                            <img src="https://ak2.picdn.net/shutterstock/videos/7298152/thumb/1.jpg?i10c=img.resize(height:160)" alt="" style={styleC}/>
                        </div>
                        </CardMedia>

                        <CardText>
                        Join us in this exciting ...
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

            //this.state.tripsObj= reply.trips
            var existing_state = this.state;
            existing_state.tripsObj = reply.trips;
            this.setState(existing_state);
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