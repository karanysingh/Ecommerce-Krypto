// Context/actions.js


export function updateCartId(dispatch, cartId) {
  dispatch({ type: "UPDATE_CART_ID", payload: cartId })
  localStorage.setItem("currentUser-cartId", cartId)
}

export async function updateUserProfile(dispatch, response) {
  console.log("updating",response)
  let temp = {
    userProfile: response.user,
    token: response.accessToken,
    cartId: ""
  }
  dispatch({ type: "UPDATE_PROFILE", payload: temp })
  localStorage.setItem("currentUser", JSON.stringify(temp.userProfile))
  localStorage.setItem("currentUser-token", temp.token)
  localStorage.setItem("currentUser-cartId", temp.cartId)
}
export async function googleLogin(dispatch, token) {
  // try {
  //   dispatch({ type: "REQUEST_LOGIN" })

  //   try {
  //     let jwtResponse = await accountServices.getToken(token)

  //     let profileResponse = await accountServices.getUser(
  //       jwtResponse.body.tokens.token
  //     )
  //     try {
  //       let cartResponse = await cartServices.getCartWithAuth(
  //         jwtResponse.body.tokens.token
  //       )
  //       var cartId = await cartResponse.body.order.id
  //     } catch (e) {
  //       var cartId = ""
  //     }
  //     var data = {
  //       userProfile: profileResponse.body,
  //       token: jwtResponse.body.tokens.token,
  //       cartId: cartId,
  //       errorMessage: null
  //     }
  //     if (data.userProfile) {
  //       dispatch({ type: "LOGIN_SUCCESS", payload: data })
  //       localStorage.setItem("currentUser", JSON.stringify(data.userProfile))
  //       localStorage.setItem("currentUser-token", data.token)
  //       localStorage.setItem("currentUser-cartId", data.cartId)
  //       return data
  //     }
  //   } catch (error) {
  //     dispatch({ type: "LOGIN_ERROR", error: error.toString() })
  //   }
  //   return
  // } catch (error) {
  //   dispatch({ type: "LOGIN_ERROR", error: error })
  // }
}
export async function loginUser(dispatch, loginPayload) {
  // const { email, password } = loginPayload
  // try {
  //   dispatch({ type: "REQUEST_LOGIN" })

  //   try {
  //     let fbResponse = await accountServices.logIn(email, password)
  //     let jwtResponse = await accountServices.getToken(
  //       fbResponse.user.accessToken
  //     )
  //     console.log("token")
  //     console.log(jwtResponse)
  //     let profileResponse = await accountServices.getUser(
  //       jwtResponse.body.tokens.token
  //     )
  //     try {
  //       let cartResponse = await cartServices.getCartWithAuth(
  //         jwtResponse.body.tokens.token
  //       )
  //       var cartId = await cartResponse.body.order.id
  //     } catch (e) {
  //       var cartId = ""
  //     }
  //     var data = {
  //       userProfile: profileResponse.body,
  //       token: jwtResponse.body.tokens.token,
  //       cartId: cartId,
  //       errorMessage: null
  //     }
  //     if (data.userProfile) {
  //       dispatch({ type: "LOGIN_SUCCESS", payload: data })
  //       // console.log(data);
  //       localStorage.setItem("currentUser", JSON.stringify(data.userProfile))
  //       localStorage.setItem("currentUser-token", data.token)
  //       localStorage.setItem("currentUser-cartId", data.cartId)
  //       return data
  //     }
  //   } catch (error) {
  //     dispatch({ type: "LOGIN_ERROR", error: error.toString() })
  //   }
  //   return
  // } catch (error) {
  //   dispatch({ type: "LOGIN_ERROR", error: error })
  // }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" })
  localStorage.removeItem("currentUser")
  localStorage.removeItem("currentUser-token")
}
