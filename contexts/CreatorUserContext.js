import * as React from 'react'

const INITIAL_CREATOR_USER_CONTEXT = {
  type: undefined,
  cognitoUser: undefined,
}

export const CREATOR_USER_ACTIONS = {
  UPDATE_TYPE: 'update user type',
  LOG_IN: 'log in',
}

export const CreatorUserContext = React.createContext()

const creatorUserReducer = (state, action) => {
  switch (action.type) {
    case CREATOR_USER_ACTIONS.UPDATE_TYPE: {
      return { ...state, type: action.payload }
    }
    case CREATOR_USER_ACTIONS.LOG_IN: {
      return { ...state, cognitoUser: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const CreatorUserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    creatorUserReducer,
    INITIAL_CREATOR_USER_CONTEXT
  )
  return (
    <CreatorUserContext.Provider value={[state, dispatch]}>
      {children}
    </CreatorUserContext.Provider>
  )
}

export const useCreatorUser = () => {
  const context = React.useContext(CreatorUserContext)
  if (context === undefined) {
    throw new Error('useCreatorUser must be used within a CreatorUserProvider')
  }
  return context
}
