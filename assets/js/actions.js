import { Socket } from 'phoenix';

export function connectToChannel() {
  return dispatch => {
    const socket = new Socket('/socket');
    socket.connect();
    const channel = socket.channel(`device:lobby`);

    channel.on('button_one_pressed', () => {
      console.log('button one pressed');
      dispatch({ type: 'PICK_UP' });
    });

    channel.on('button_two_pressed', () => {
      console.log('button two pressed');
      dispatch({ type: 'DELIVERED' });
    });

    channel.on('button_three_pressed', () => {
      console.log('shock');
      dispatch({ type: 'SHOCK' });
    });

    channel.join().receive('ok', () => {
      console.log('live updates on');
    });

    return false;
  };
}

export function leaveChannel(channel) {
  return dispatch => {
    if (channel) channel.leave();
    dispatch({ type: 'LIVE_UPDATE_OFF' });
  };
}

export function getAccounts() {
  return async dispatch => {
    try {
      const response = await fetch('/api/accounts', {credentials: 'same-origin'})
      const {body} = await response.json()
      dispatch({type: 'UPDATE_ACCOUNTS', data: JSON.parse(body)})
    } catch ({message}) {
      console.log(message)
    }
  };
}

export function getTransactions(accounts) {
  console.log('IN ACTIONS' ,accounts);
  return async dispatch => {
    try {
      //let transactionRequests = [];
      // accounts.map(account => {
      //   console.log(account);
      //   transactionRequests.push(fetch(`/api/accounts/${account}/transactions`, {credentials: 'same-origin'}))
      // })
      //const response = await fetch(`/api/accounts/${accounts[1]}/transactions`, {credentials: 'same-origin'})
      //const response = await Promise.all(transactionRequests);
      //const {body} = await response.json(); //Promise.all(response.map(list => list.json()));
      //const {data} = JSON.parse(body);
     // const responses = await Promise.all(accounts.slice(5,6).map(account => fetch(`/api/accounts/${account}/transactions`, {credentials: 'same-origin'})))
      //const responsesJson = await Promise.all(responses.map(response => response.json()));
      //const data = responsesJson.reduce((acc, {body}) => acc.concat(JSON.parse(body)), []);

      dispatch({type: 'UPDATE_TRANSACTIONS', data})
    } catch ({message}) {
      console.log(message)
    }
  };
}

export function changePage(value) {
  return dispatch => {
    dispatch({type: 'CHANGE_PAGE', value: value})
  }
}