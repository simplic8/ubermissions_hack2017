import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

class NavBar extends React.Component {

    state = {
        logged: true,
    };
    
    handleChange = (event, logged) => {
        if(this.state.logged == false)
            this.setState({logged: true});
        else   
            this.setState({logged: false});
    };

    render() {
      return (
        <div>
            <MuiThemeProvider>
                <AppBar title="#ubermissions"
                    iconElementRight={this.state.logged ? <Logged /> : <Login />}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                {/*<Toggle
                    label="Logged"
                    defaultToggled={true}
                    onToggle={this.handleChange}
                    labelPosition="right"
                    style={{margin: 20}}
                />*/}
            </MuiThemeProvider>
        </div>
      );
    }
}

class Login extends React.Component {
    static muiName = 'FlatButton';

    render() {
        return (
        <FlatButton {...this.props} label="Login" onClick={this.handleChange}  onTouchTap={this.handleChange} />
        );
    }
}
  
const Logged = (props) => (
<IconMenu
    {...props}
    iconButtonElement={
    <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
>
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" onTouchTap={this.handleChange} onClick={this.handleChange} />
</IconMenu>
);
  
Logged.muiName = 'IconMenu';



export default NavBar;