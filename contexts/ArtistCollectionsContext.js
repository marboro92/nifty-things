import * as React from 'react'

const INITIAL_ARTIST_COLLECTIONS_CONTEXT = {
  collections: {
    public: [],
    private: [],
  },
}

export const ARTIST_COLLECTIONS_ACTIONS = {
  UPDATE_COLLECTION: 'update collection',
  SET_COLLECTIONS: 'set collections',
}

export const ArtistCollectionsContext = React.createContext()

// TEMP WORKAROUND FOR NOT HAVING A RELEASE DETAILS ENDPOINT
// this handles finding and updating the correct collection to show the work on the front end
export const findIdInCollection = (collectionList, findId) => {
  return collectionList.find(({ id }) => findId == id)
}
const updateCollection = (state, idToUpdate, newCollectionData) => {
  const allCollections = [
    ...state.collections.public,
    state.collections.private,
  ]
  if (idToUpdate) {
    const publicCollection = findIdInCollection(
      state.collections?.public,
      idToUpdate
    )
    const privateCollection = findIdInCollection(
      state.collections?.private,
      idToUpdate
    )
    const currentCollection = publicCollection || privateCollection
    const untouchedCollections = state.collections[
      publicCollection ? 'public' : 'private'
    ].filter(({ id }) => id !== idToUpdate)

    if (currentCollection) {
      const edittedCollection = {
        ...currentCollection,
        ...newCollectionData,
      }
      return {
        ...state.collections,
        [publicCollection ? 'public' : 'private']: [
          edittedCollection,
          ...untouchedCollections,
        ],
      }
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
    case ARTIST_COLLECTIONS_ACTIONS.SET_COLLECTIONS: {
      return {
        ...state,
        collections: action.payload.data,
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
