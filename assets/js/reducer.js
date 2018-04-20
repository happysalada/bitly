const initialState = {
  notificationOpen: false,
  notifications: [],
  currentItems: null,
  username: '',
  viewingItem: null,
  storedOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LIVE_UPDATE_ON':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: [
          ...state.notifications,
          {
            title: 'You are connecte to live updates',
            message: 'Thank you for your business'
          }
        ]
      };
    case 'PICK_UP':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: [
          ...state.notifications,
          {
            title: 'Your item has been picked up by our delivery person',
            message: 'We are moving at the speed of light'
          }
        ]
      };
    case 'REQUEST_ACCEPT':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: [
          ...state.notifications,
          {
            title: 'Your request is accepted',
            message: 'Our delivery person will be there in 1 second!'
          }
        ]
      };
    case 'DELIVERED':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: [
          ...state.notifications,
          {
            title: 'Your item has arrived',
            message: 'We will update you on the conditions of storage'
          }
        ]
      };
    case 'SHOCK':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: [
          ...state.notifications,
          {
            title: 'Your item has been moved!!',
            message: 'We have contacted the storer to ask for an explanation'
          }
        ]
      };
    case 'REMOVE':
      return {
        ...state,
        notificationOpen: !state.notificationOpen,
        notifications: []
      };
    case 'LIVE_UPDATE_OFF':
      return initialState;
    case 'UPDATE_ITEMS':
      return {
        ...state,
        currentItems: action.items,
        username: (action.items[0] && action.items[0].oem_name) || 'SakuraLove'
      };
    case 'UPDATE_VIEWING':
      return {
        ...state,
        viewingItem: action.item
      };
    case 'NO_ITEM':
      return {
        ...state,
        viewingItem: null
      };
    case 'CLOSE_SNACK':
      return {
        ...state,
        storedOpen: !state.storedOpen
      };
    default:
      return state;
  }
}
