export default function reducef(state, action) {
  switch (action.type) {

    case 'LOGIN': {
      return {
        ...state,
        log: action.payload.log,
        user: action.payload.user
      }
    }

    // case 'ADD_CURRENT_USER': {
    //   return {
    //     ...state,
    //     user: action.payload.user
    //   }
    // }


    default:
      return state
  }
}
