import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

export default class SearchTrip extends React.Component {
    render() {
        var styleA = {
            position: 'fixed',
            top: '55%',
            left: '50%',
            textAlign: 'center',
            minWidth: '25%',
            backgroundColor: '#fff',
            padding: '30px',
            transform: 'translate(-50%, -50%)'
        }
        
        return (
            <div style={styleA}>
                 <MuiThemeProvider>
                <img src="img/logo2.jpg" style={{maxWidth:'300px'}}/>
                <Link to="/trip"><RaisedButton label="Enter / Browse" fullWidth={true} /></Link>
                <p />
                <div style={{fontFamily:'Segoe UI'}}>or login below:</div>
                    <TextField
                        hintText="Enter your email address"
                        floatingLabelText="Email Address"
                        fullWidth={true}
                    /><br />
                    <TextField
                        hintText="Enter your password"
                        floatingLabelText="Password"
                        type="password" fullWidth={true}
                    /><br />
                    <Link to="/trip"><RaisedButton label="Login" primary={true} fullWidth={true} /></Link><p />
                    <Link to="/trip"><RaisedButton label="Register" secondary={true} fullWidth={true} /></Link>
                </MuiThemeProvider>
                <br />
            </div>
        );
    }
}