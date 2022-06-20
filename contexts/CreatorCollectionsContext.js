import * as React from 'react'

const INITIAL_CREATOR_COLLECTIONS_CONTEXT = {
  collections: {
    public: [],
    private: [],
  },
}

export const CREATOR_COLLECTIONS_ACTIONS = {
  UPDATE_COLLECTION: 'update collection',
  SET_COLLECTIONS: 'set collections',
}

export const CreatorCollectionsContext = React.createContext()

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

const creatorCollectionsReducer = (state, action) => {
  switch (action.type) {
    case CREATOR_COLLECTIONS_ACTIONS.UPDATE_COLLECTION: {
      return {
        ...state,
        collections: updateCollection(
          state,
          action.payload.id,
          action.payload.data
        ),
      }
    }
    case CREATOR_COLLECTIONS_ACTIONS.SET_COLLECTIONS: {
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

export const CreatorCollectionsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    creatorCollectionsReducer,
    INITIAL_CREATOR_COLLECTIONS_CONTEXT
  )
  return (
    <CreatorCollectionsContext.Provider value={[state, dispatch]}>
      {children}
    </CreatorCollectionsContext.Provider>
  )
}

export const useCreatorCollections = () => {
  const context = React.useContext(CreatorCollectionsContext)
  if (context === undefined) {
    throw new Error(
      'useCreatorCollections must be used within a CreatorCollectionsProvider'
    )
  }
  return context
}
