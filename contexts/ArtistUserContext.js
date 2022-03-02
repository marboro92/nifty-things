import * as React from 'react'

const INITIAL_ARTIST_USER_CONTEXT = {
  type: undefined,
  cognitoUser: undefined,
}

export const ARTIST_USER_ACTIONS = {
  UPDATE_TYPE: 'update user type',
  LOG_IN: 'log in',
}

export const ArtistUserContext = React.createContext()

const artistUserReducer = (state, action) => {
  console.log('action', action)
  console.log('state', state)
  switch (action.type) {
    case ARTIST_USER_ACTIONS.UPDATE_TYPE: {
      return { ...state, type: action.payload }
    }
    case ARTIST_USER_ACTIONS.LOG_IN: {
      return { ...state, cognitoUser: action.payload }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const ArtistUserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    artistUserReducer,
    INITIAL_ARTIST_USER_CONTEXT
  )
  return (
    <ArtistUserContext.Provider value={[state, dispatch]}>
      {children}
    </ArtistUserContext.Provider>
  )
}

export const useArtistUser = () => {
  const context = React.useContext(ArtistUserContext)
  if (context === undefined) {
    throw new Error('useArtistUser must be used within a ArtistUserProvider')
  }
  return context
}
