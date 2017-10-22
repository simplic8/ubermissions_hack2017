import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import RaisedButton from 'material-ui/RaisedButton';

var tripSearchCriteria = [];

export class SearchTrip extends React.Component {
    state = {
        dataSource: [ "croatia", "creative access", "creation care", "creative ministry", "cru", "crusade", "japan", "malaysia", "water projects", "water", "clean energy" ],
      };
    
      handleUpdateInput = (value) => {

        alert(document.getElementById('TripSearch').value);

        this.setState({
/*          dataSource: [
            value
          ], */
        });
      };
    
    addCriteria = () => {
        var TripSearchValue = document.getElementById('TripSearch').value;
        tripSearchCriteria.push(
            <div id={'"' + tripSearchCriteria.length + "'"}>{TripSearchValue}</div>
        )
    }
      

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AutoComplete
                        id="TripSearch"
                        hintText=""
                        dataSource={this.state.dataSource}
                        onUpdateInput={this.handleUpdateInput}
                        floatingLabelText="Type the keyword(s) to search the Trips Database (e.g., mission organization, mission type, location, required skills)"
                        fullWidth={true}
                        inputStyle={{textAlign:'left'}}
                    />
                    {tripSearchCriteria}
                    <div style={{display:'inline-block'}}><RaisedButton label="Add Criteria" style={{margin: 12}} /></div> 
                    <div style={{display:'inline-block'}}><RaisedButton label="Search" style={{margin: 12}} /></div>
                </MuiThemeProvider>
            </div>
        );
    }

}