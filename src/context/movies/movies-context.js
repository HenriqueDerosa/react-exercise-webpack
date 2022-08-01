import { createContext } from 'use-context-selector'

export const MOVIES_PROVIDER_INITIAL_STATE = {
  selected: undefined,
}

const MoviesContext = createContext(MOVIES_PROVIDER_INITIAL_STATE)
MoviesContext.displayName = 'Movies'

export default MoviesContext
