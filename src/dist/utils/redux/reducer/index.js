export default function reducef(state, action) {
  switch (action.type) {

    case 'LOGIN': {
      return {
        ...state,
        log: action.payload.log
      }
    }


    default:
      return state
  }
}