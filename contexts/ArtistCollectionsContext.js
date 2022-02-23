import * as React from 'react'
import { MOCK_COLLECTIONS } from '../mock-data/mock-collections'

const INITIAL_ARTIST_COLLECTIONS_CONTEXT = {
  collections: MOCK_COLLECTIONS,
}

export const ARTIST_COLLECTIONS_ACTIONS = {
  UPDATE_COLLECTION: 'update collections',
}

export const ArtistCollectionsContext = React.createContext()
const updateCollection = (state, idToUpdate, newCollectionData) => {
  if (idToUpdate) {
    const untouchedCollections = state.collections.filter(
      ({ id }) => id !== idToUpdate
    )
    const currentCollection = state.collections.find(
      ({ id }) => idToUpdate == id
    )
    if (currentCollection) {
      const edittedCollection = {
        ...currentCollection,
        ...newCollectionData,
      }
      return [edittedCollection, ...untouchedCollections]
    }
  }
  throw new Error('Invalid idToUpdate provided to updateCollection.')
}
const artistCollectionsReducer = (state, action) => {
  switch (action.type) {
    case ARTIST_COLLECTIONS_ACTIONS.UPDATE_COLLECTION: {
      return {
        ...state,
        collections: updateCollection(
          state,
          action.payload.id,
          action.payload.data
        ),
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const ArtistCollectionsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    artistCollectionsReducer,
    INITIAL_ARTIST_COLLECTIONS_CONTEXT
  )
  return (
    <ArtistCollectionsContext.Provider value={[state, dispatch]}>
      {children}
    </ArtistCollectionsContext.Provider>
  )
}

export const useArtistCollections = () => {
  const context = React.useContext(ArtistCollectionsContext)
  if (context === undefined) {
    throw new Error(
      'useArtistCollections must be used within a ArtistCollectionsProvider'
    )
  }
  return context
}
