import React from 'react';
import NavBar from './NavBar.js';
import Paper from 'material-ui/Paper';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import IconMenu from 'material-ui/IconMenu';
  import IconButton from 'material-ui/IconButton';
  import FontIcon from 'material-ui/FontIcon';
  import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
  import MenuItem from 'material-ui/MenuItem';
  import DropDownMenu from 'material-ui/DropDownMenu';
  import RaisedButton from 'material-ui/RaisedButton';
  import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

  const style = {
    height: 'auto',
    width: '95%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };

class Agency extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          value: 3,
        };
      }
    
      handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <NavBar />

                <MuiThemeProvider>
                
                <Paper style={style} zDepth={2}>
                    <div style={{display:'inline-block'}}><img src="https://cdn1-www.cru.org/icon.png.pagespeed.ce.wRJsnrwOth.png" /></div>
                </Paper>
                <br />

                <Toolbar>
                    <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="All Broadcasts" />
                        <MenuItem value={2} primaryText="All Voice" />
                        <MenuItem value={3} primaryText="Sign up List" />
                        <MenuItem value={4} primaryText="Complete Voice" />
                        <MenuItem value={5} primaryText="Complete Text" />
                        <MenuItem value={6} primaryText="Active Voice" />
                        <MenuItem value={7} primaryText="Active Text" />
                    </DropDownMenu>
                    </ToolbarGroup>
                    <ToolbarGroup>
                    <ToolbarTitle text="Options" />
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <RaisedButton label="Send an email to contact" />
                    <IconMenu
                        iconButtonElement={
                        <IconButton touch={true}>
                            <NavigationExpandMoreIcon />
                        </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                    </ToolbarGroup>
                </Toolbar>

                <Table>
                    <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Approved</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>2</TableRowColumn>
                        <TableRowColumn>Randal White</TableRowColumn>
                        <TableRowColumn>Approved</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>3</TableRowColumn>
                        <TableRowColumn>Stephanie Sanders</TableRowColumn>
                        <TableRowColumn>Approved</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>4</TableRowColumn>
                        <TableRowColumn>Steve Brown</TableRowColumn>
                        <TableRowColumn>Pending Approval</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>5</TableRowColumn>
                        <TableRowColumn>Christopher Nolan</TableRowColumn>
                        <TableRowColumn>Pending Approval</TableRowColumn>
                    </TableRow>
                    </TableBody>
                </Table>
                <div style={{textAlign:'center',width:'100%'}}>
                    <RaisedButton label="Reject" secondary={true}/> &nbsp;
                    <RaisedButton label="Approve" primary={true}/>
                </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Agency;