import React, { Component } from 'react'
import './SearchBarFilter.css';
import FilteredList from './FilteredList';

export default function SearchBarFilter(props) {

    return (
        <React.Fragment>
        {props.show ?
            <div className="box">
                <FilteredList searchInput={props.searchInput} 
                              searchUsersList={props.searchUsersList}
                              searchColorsList={props.searchColorsList} />
            </div>   
            :
            ''
        } 
        </React.Fragment>
    )
}
