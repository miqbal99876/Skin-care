export const IP = 'https://efuikwaku-001-site17.etempurl.com';
export const MapKey = 'AIzaSyB5qyR8RLChy15K4wrySBgxBS-gUvq9NdY';
export const AdminImageUrl =
  'http://efuikwaku-001-site16.etempurl.com/UploadedFiles/';
export const URLS = {
  base_url: `${IP}/api/`,
  image_url: `${IP}/UploadedFiles/`,
  auth: {
    authenticate: 'Account/authenticate',
    register: 'Account/register',
    update: 'Account/update',
    reset_password: 'Account/reset-password',
    new_password: 'Account/new-password',
    forgot_password: 'Account/forgot-password',
    verify_email: 'Account/confirm-email',
    update_token: 'Account/update-token',
  },
  vehicle_types: {
    get_vehicle_types: 'v1/VehicleType?PageNumber=1&PageSize=12',
  },
  driver_vehicle: {
    create_vehicle: 'v1/DriverVehicle',
    update_vehicle: 'v1/DriverVehicle',
    get_vehicle: 'v1/DriverVehicle/',
  },
  driver_license: {
    create_license: 'v1/DriverLicense',
    update_license: 'v1/DriverLicense',
    get_license: 'v1/DriverLicense/',
  },
  parcel_request: {
    get_pending_request: 'v1/ParcelRequest/GetPendingRequest',
    get_parcel_request_details: 'v1/ParcelRequest/',
    accept_parcel: 'v1/ParcelRequest/Accept',
    reject_parcel: 'v1/ParcelRequest/Reject',
    get_in_process_parcel: 'v1/ParcelRequest/GetInProcesss',
    update_parcel_status: 'v1/ParcelRequest',
    get_history: 'v1/ParcelRequest/GetByRole/Rider',
    update_payment_status: 'v1/ParcelRequest/UpdatePaymentStatus',
    get_earnings: 'v1/ParcelRequest/GetRiderEarnings',
  },
  rating: {
    get_ratings: 'v1/Rating/',
  },
  location: {
    update_location: 'v1/RiderLocation',
  },
  notification: {
    get_notifications: 'v1/Notification',
  },
  message: {
    get_chat_list: 'v1/Message',
    get_conversation: 'v1/Message/',
    send_message: 'v1/Message',
  },
  commission: {
    calculate: 'v1/Commission',
    get_all: 'v1/Commission',
    clear: 'v1/Commission',
  },
};
