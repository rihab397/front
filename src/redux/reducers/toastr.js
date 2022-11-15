import {reducer as toastrReducer} from 'react-redux-toastr'
const toastr = {
  // ... other reducers ...
  toastr: toastrReducer // <- Mounted at toastr.
}

export default toastr