// We need to import the CSS so that webpack will load it.
// The ExtractTextPlugin is used to separate it out into
// its own CSS file.
import css from '../css/app.css';

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme , MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import store from './store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#81ff6d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                <MainApp />
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>, document.getElementById('root'));
