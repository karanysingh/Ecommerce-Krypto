var token, cartId
if (typeof window !== "undefined") {
  var user = window.localStorage.getItem("currentUser")
    ? JSON.parse(window.localStorage.getItem("currentUser") || "{}")
    : ""
  token = window.localStorage.getItem("currentUser-token")
    ? window.localStorage.getItem("currentUser-token")
    : ""
  cartId = window.localStorage.getItem("currentUser-cartId")
    ? window.localStorage.getItem("currentUser-cartId")
    : ""
} else {
  var user = ""
  token = ""
  cartId = ""
}
export const initialState = {
  userProfile: "" || user,
  token: token ? token : "",
  cartId: cartId ? cartId : "",
  loading: false,
  errorMessage: null
}

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      }
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userProfile: action.payload.userProfile,
        token: action.payload.token,
        cartId: action.payload.cartId,
        loading: false
      }
    case "LOGOUT":
      // console.log(action.error);
      return {
        ...initialState,
        userProfile: "",
        token: ""
      }
    case "UPDATE_CART_ID":
      return {
        ...initialState,
        cartId: action.payload
      }
    case "UPDATE_PROFILE":
      return {
        ...initialState,
        userProfile: action.payload.userProfile,
        token: action.payload.token,
        cartId: action.payload.token
      }

    case "LOGIN_ERROR":
      // console.log(action.error);
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      }
    case "ERROR":
      // console.log(action.error);
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
