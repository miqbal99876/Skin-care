import * as Actions from './action-types';
const INITIAL_STATE = {
  user_info: {
    first_name: 'Irfan',
    last_name: 'khan',
    email: 'irfan@gmail.com',
    image: null,
    role: 2,
  },
  current_location: {latitude: 0.73232, longitude: -0.323334},
  pending_parcel: {},
  selected_vehicle: {},
  selected_license: {},
  parcel_details: {},
  vehicle_types: {},
  parcel_history: [],
  ratings: [],
  notifications: [],
  chats: [],
  conversation: [],
  otp: '',
  commissions: [],
  earnings: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.SET_USER_INFO:
      return {
        ...state,
        user_info: action.payload,
      };
    case Actions.SET_CURRENT_LOCATION:
      return {
        ...state,
        current_location: action.payload,
      };
    case Actions.SET_VEHICLE:
      return {
        ...state,
        selected_vehicle: action.payload,
      };
    case Actions.SET_LICENSE:
      return {
        ...state,
        selected_license: action.payload,
      };
    case Actions.SET_PARCEL_DETAILS:
      return {
        ...state,
        parcel_details: action.payload,
      };
    case Actions.SET_PENDING_PARCEL:
      return {
        ...state,
        pending_parcel: action.payload,
      };
    case Actions.SET_VEHICLE_TYPES:
      return {
        ...state,
        vehicle_types: action.payload,
      };
    case Actions.SET_PARCEL_HISTORY:
      return {
        ...state,
        parcel_history: action.payload,
      };
    case Actions.SET_RATINGS:
      return {
        ...state,
        ratings: action.payload,
      };
    case Actions.SET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };
    case Actions.SET_CHATS:
      return {
        ...state,
        chats: action.payload,
      };
    case Actions.SET_CONVERSATION:
      return {
        ...state,
        conversation: action.payload,
      };
    case Actions.SET_OTP:
      return {
        ...state,
        otp: action.payload,
      };
    case Actions.SET_COMMISSIONS:
      return {
        ...state,
        commissions: action.payload,
      };
    case Actions.SET_EARNINGS:
      return {
        ...state,
        earnings: action.payload,
      };
    default:
      return state;
  }
};
