/**
 * Created by haonan on 16/4/21.
 */
import React from 'react';
import { render } from 'react-dom';
import SearchContainer from './containers/SearchContainer';
import "babel-polyfill";
render(
    <SearchContainer />,
    document.getElementById('content')
);