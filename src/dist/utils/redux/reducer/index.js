export default function reducef(state, action) {
  switch (action.type) {

    case 'LOGIN': {
      return {
        ...state,
        log: action.payload.log
      }
    }

    case 'ADD_CURRENT_USER': {
      return {
        ...state,
        currentUser: action.payload.currentUser
      }
    }


    default:
      return state
  }
}
