import MovieDetail from '~/modals/movie-detail/movie-detail'

import { useState, useMemo, useCallback, memo } from 'react'
import MoviesContext, { MOVIES_PROVIDER_INITIAL_STATE } from './movies-context'

const MoviesProvider = ({ children }) => {
  const [state, setState] = useState(MOVIES_PROVIDER_INITIAL_STATE)

  const setSelected = useCallback(selected => {
    setState(previousState => ({
      ...previousState,
      selected,
    }))
  }, [])

  const renderModal = useMemo(
    () =>
      !!state.selected && (
        <MovieDetail onClose={() => setSelected(null)} item={state.selected} />
      ),
    [state.selected, setSelected],
  )

  return (
    <MoviesContext.Provider value={{ state, setSelected }}>
      {children}
      {renderModal}
    </MoviesContext.Provider>
  )
}

export default memo(MoviesProvider)
