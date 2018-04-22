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
    const transactions = await accounts.reduce(async (acc, account) => {
      try {
        const response = await fetch(`/api/accounts/${account}/transactions`, {credentials: 'same-origin'});
        const {body} = await response.json();
        const dataSoFar = await acc;
        if (body) {
          const {data} = JSON.parse(body);
          return dataSoFar.concat(data);
        }
        return dataSoFar;
      } catch (error) {
        return acc;
      }
    }, []);
    console.log('TRANSACTIONS', transactions)
    dispatch({type: 'UPDATE_TRANSACTIONS', transactions});
  };
}

export function changePage(value) {
  return dispatch => {
    dispatch({type: 'CHANGE_PAGE', value: value})
  }
}
