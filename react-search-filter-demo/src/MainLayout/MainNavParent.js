import React, { Component } from 'react';
import MainNav from './MainNav';
import listColors from './data/colors.json';
import listUsers from './data/users.json';
export default class MainNavParent extends Component {
  
  constructor(props) {
    super(props); 
    this.state = {
        tableArray: [],        
        searchUsersList: listUsers,
        searchFilteredUsersList: [],
        searchColorsList: listColors,
        searchFilteredColorsList: [],        
        open: true,
        showResults: false,        
        searchInput: '',
    };     
  }
  
  handleSearchInput = (event) => {       
    var searchStr = event.target.value;
    var newUsersList = [];
    var newColorsList = [];

    var count = 0; // Use a counter to limit the number of results returned
    
    // Search both starts with and indexOf(Contains the search string)
    this.state.searchUsersList.map((item, i) => {      
      if((item.title.toLowerCase().indexOf(searchStr) > 0 || item.title.toLowerCase().startsWith(searchStr)) && count < 3) {  
        newUsersList.push(item);
        count++;
      }                    
    });    

    count = 0; // Reset the counter
    this.state.searchColorsList.map((item, i) => {      
      if((item.name.toLowerCase().indexOf(searchStr) > 0 || item.name.toLowerCase().startsWith(searchStr)) && count < 3) {  
          newColorsList.push(item);
          count++;
      }                    
    });    

    if(searchStr.length > 0) {
      this.setState({showResults: true});
    }
    else {
      this.setState({showResults: false});
    }
    this.setState({searchFilteredUsersList: newUsersList});
    this.setState({searchFilteredColorsList: newColorsList});
    this.setState({searchInput: event.target.value});
  }  
  
  handleSearchFilter = () => {
    this.setState({showResults: true})
  }
  
  handleCloseSearchFilter = () => {
    this.setState({showResults: false})    
  }

  handleClearSearchField = (event) => {
    this.setState({searchInput: ''});
    this.setState({showResults: false});
  }
    
  render() {
    return (
      <React.Fragment>
        <MainNav searchUsersList={this.state.searchFilteredUsersList} 
                 searchColorsList={this.state.searchFilteredColorsList}
                 handleClearSearchField={this.handleClearSearchField}
                 handleSearchInput={this.handleSearchInput}  
                 searchInput={this.state.searchInput}
                 showResults={this.state.showResults}/>  
      </React.Fragment>
    );
  }
}