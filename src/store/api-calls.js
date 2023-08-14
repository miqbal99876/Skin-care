import * as Actions from './action-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SERVICES from '../services/common-services';
import API_REQUESTS from './api-requests';
import {URLS} from './api-urls';
import alertService from '../services/alert.service';
const get_current_location = params => {
  return async (dispatch, getState) => {
    try {
      const res = await SERVICES._get_current_location();
      var location = {
        address: 'Lahore,pakistan',
        latitude: res?.coords?.latitude,
        longitude: res?.coords?.longitude,
      };
      const json = await SERVICES._get_address(
        location.latitude,
        location.longitude,
      );
      location.address = json.results[3].formatted_address;
      dispatch({
        type: Actions.SET_CURRENT_LOCATION,
        payload: location,
      });
      return location;
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const register = payload => {
  return async (dispatch, getState) => {
    try {
      payload = SERVICES._removeEmptyKeys(payload);
      const response = await API_REQUESTS.postFormData(
        URLS.auth.register,
        payload,
      );
      console.log('Registration Response');
      return response;
    } catch (error) {
      console.log('error:');
      console.log(error?.response?.data);
      if (error?.response?.data?.Message) {
        alertService.show(error?.response?.data?.Message, 'Account');
      }
      if (error?.response?.data?.errors) {
        var errors = error?.response?.data?.errors;
        if (errors?.Password) {
          alertService.show(errors?.Password[0], 'Account');
        }
      }
      //throw new Error(error?.response?.data?.message || error.message);
    }
  };
};
const update = payload => {
  return async (dispatch, getState) => {
    try {
      payload = SERVICES._removeEmptyKeys(payload);
      const response = await API_REQUESTS.postFormData(
        URLS.auth.update,
        payload,
      );
      await AsyncStorage.setItem('@user', JSON.stringify(response?.data?.data));
      dispatch({
        type: Actions.SET_USER_INFO,
        payload: response?.data?.data,
      });
      return response;
    } catch (error) {
      return error;
    }
  };
};
const create_license = payload => {
  return async (dispatch, getState) => {
    try {
      payload = SERVICES._removeEmptyKeys(payload);
      const response = await API_REQUESTS.postFormData(
        URLS.driver_license.create_license,
        payload,
      );
      console.log('Registration Response on License');
      return response;
    } catch (error) {
      console.log('error:');
      console.log(error?.response?.data);
      alertService.show(error?.response?.data?.Message, 'Account');
      //throw new Error(error?.response?.data?.message || error.message);
    }
  };
};
const update_license = payload => {
  return async (dispatch, getState) => {
    try {
      payload = SERVICES._removeEmptyKeys(payload);
      const response = await API_REQUESTS.putFormData(
        URLS.driver_license.update_license,
        payload,
      );
      console.log(response?.data);
      dispatch({
        type: Actions.SET_LICENSE,
        payload: response?.data?.data,
      });
      //alertService.show(response?.data?.message, 'License');
      return response;
    } catch (error) {
      return error;
      //alertService.show(error?.response?.data?.Message, 'License');
      //throw new Error(error?.response?.data?.message || error.message);
    }
  };
};
const create_vehicle = payload => {
  return async (dispatch, getState) => {
    try {
      payload = SERVICES._removeEmptyKeys(payload);
      const response = await API_REQUESTS.postFormData(
        URLS.driver_vehicle.create_vehicle,
        payload,
      );
      console.log('Registration Response on Vehicle');

      return response;
    } catch (error) {
      alertService.show(error?.response?.data?.Message, 'Account');
      //throw new Error(error?.response?.data?.message || error.message);
    }
  };
};
const update_vehicle = payload => {
  return async (dispatch, getState) => {
    try {
      payload = SERVICES._removeEmptyKeys(payload);
      const response = await API_REQUESTS.putFormData(
        URLS.driver_vehicle.update_vehicle,
        payload,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_VEHICLE,
          payload: response?.data?.data,
        });
      }
      //  alertService.show(response?.data?.message, 'Vehicle');
      return response;
    } catch (error) {
      return error;
      //alertService.show(error?.response?.data?.message, 'Account');
      // throw new Error(error?.response?.data?.message || error.message);
    }
  };
};
const update_token = payload => {
  return async (dispatch, getState) => {
    try {
      payload = SERVICES._removeEmptyKeys(payload);
      const response = await API_REQUESTS.putData(
        URLS.auth.update_token,
        payload,
      );
      console.log(response?.data?.message);
    } catch (error) {
      console.log('error:', error?.response);
      throw new Error(error?.response?.data?.message || error.message);
    }
  };
};
const signin = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.postData(
        URLS.auth.authenticate,
        payload,
      );
      if (response?.data?.succeeded === true) {
        await AsyncStorage.setItem(
          '@token',
          JSON.stringify({
            refresh_token: response?.data?.data?.refreshToken,
            access_token: response?.data?.data?.jwToken,
          }),
        );
        await AsyncStorage.setItem(
          '@user',
          JSON.stringify(response?.data?.data),
        );
        dispatch({
          type: Actions.SET_USER_INFO,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      return error;
      // throw new Error(SERVICES._returnError(error));
    }
  };
};
const reset_password = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.postData(
        URLS.auth.reset_password,
        payload,
      );
      return response;
    } catch (error) {
      return error;
    }
  };
};
const new_password = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.postData(
        URLS.auth.new_password,
        payload,
      );
      return response;
    } catch (error) {
      return error;
    }
  };
};
const forgot_password = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.postData(
        URLS.auth.forgot_password,
        payload,
      );
      console.log(response?.data);
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_OTP,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      alertService.show(error?.response?.data?.Message, 'Forgot Password');
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_parcel_details = id => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.parcel_request.get_parcel_request_details + id,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_PARCEL_DETAILS,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_pending_parcel = payload => {
  //console.log('Already parcel pending ');
  return async (dispatch, getState) => {
    try {
      if (payload?.id) {
        console.log('Already parcel pending ');
        return;
      }
      const response = await API_REQUESTS.getData(
        URLS.parcel_request.get_pending_request,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_PENDING_PARCEL,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_earnings = () => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.parcel_request.get_earnings,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_EARNINGS,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      return error;
    }
  };
};
const get_in_process_parcel = () => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.parcel_request.get_in_process_parcel,
      );
      console.log(response?.data?.data);
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_PENDING_PARCEL,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_vehicle_types = () => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.vehicle_types.get_vehicle_types,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_VEHICLE_TYPES,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_vehicle = id => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.driver_vehicle.get_vehicle + id,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_VEHICLE,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_license = id => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.driver_license.get_license + id,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_LICENSE,
          payload: response?.data?.data,
        });
      }
      return response?.data;
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const accept_parcel = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.putData(
        URLS.parcel_request.accept_parcel,
        payload,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_PENDING_PARCEL,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
};
const reject_parcel = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.putData(
        URLS.parcel_request.reject_parcel,
        payload,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_PENDING_PARCEL,
          payload: {},
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
};
const change_parcel_status = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.putData(
        URLS.parcel_request.update_parcel_status,
        payload,
      );
      console.log(response?.data?.data);
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_PENDING_PARCEL,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
};
const get_parcel_history = () => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.parcel_request.get_history,
      );
      //console.log(response?.data)
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_PARCEL_HISTORY,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_ratings = id => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(URLS.rating.get_ratings + id);
      //console.log(response?.data)
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_RATINGS,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const update_location = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.postData(
        URLS.location.update_location,
        payload,
      );
      console.log(response?.data);
    } catch (error) {
      if (error?.response?.data?.Message) {
        alertService.show(error?.response?.data?.Message, 'location update');
      }
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_notifications = () => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.notification.get_notifications,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_NOTIFICATIONS,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_chat_list = () => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(URLS.message.get_chat_list);
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_CHATS,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const get_conversation = id => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(
        URLS.message.get_conversation + id,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_CONVERSATION,
          payload: response?.data?.data,
        });
      }
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const send_message = payload => {
  return async (dispatch, getState) => {
    try {
      payload = SERVICES._removeEmptyKeys(payload);
      const response = await API_REQUESTS.postData(
        URLS.message.send_message,
        payload,
      );
      return response?.data?.data;
    } catch (error) {
      alertService.show(error?.response?.data?.message, 'Message');
      throw new Error(error?.response?.data?.message || error.message);
    }
  };
};
const update_payment_status = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.putData(
        URLS.parcel_request.update_payment_status,
        payload,
      );
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_PENDING_PARCEL,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      throw new Error(SERVICES._returnError(error));
    }
  };
};
const calculate_commission = () => {
  console.log('Commission');
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.postData(URLS.commission.calculate, {
        isRider: true,
      });
      console.log('Commission response==> ', response);
      return response;
    } catch (error) {
      return error;
    }
  };
};
const clear_commission = payload => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.putData(
        URLS.commission.clear,
        payload,
      );
      return response;
    } catch (error) {
      return error;
    }
  };
};
const get_all_commissions = () => {
  return async (dispatch, getState) => {
    try {
      const response = await API_REQUESTS.getData(URLS.commission.get_all);
      if (response?.data?.succeeded === true) {
        dispatch({
          type: Actions.SET_COMMISSIONS,
          payload: response?.data?.data,
        });
      }
      return response;
    } catch (error) {
      return error;
    }
  };
};
const DIVIY_API = {
  get_current_location,
  signin,
  reset_password,
  forgot_password,
  new_password,
  register,
  create_license,
  create_vehicle,
  get_parcel_details,
  get_pending_parcel,
  get_vehicle_types,
  get_license,
  get_vehicle,
  accept_parcel,
  reject_parcel,
  get_in_process_parcel,
  change_parcel_status,
  get_parcel_history,
  get_ratings,
  update_location,
  update,
  update_license,
  update_vehicle,
  get_notifications,
  get_chat_list,
  get_conversation,
  update_token,
  send_message,
  update_payment_status,
  calculate_commission,
  clear_commission,
  get_all_commissions,
  get_earnings,
};

export default DIVIY_API;
