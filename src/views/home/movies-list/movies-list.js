import { CircularProgress, Grid, Typography } from '@mui/material'
import { memo } from 'react'
import { useContextSelector } from 'use-context-selector'
import Button from '~/components/button/button'
import MovieCard from '~/components/movie-card/movie-card'
import MoviesContext from '~/context/movies/movies-context'
import { useListMovies } from '../hooks'

const MoviesList = () => {
  const setSelected = useContextSelector(
    MoviesContext,
    context => context.setSelected,
  )
  const {
    data,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useListMovies()

  const onClick = event => {
    const { id } = event.currentTarget
    const moviesList = data.pages
      .map(page => page.data)
      .flatMap(item => item.results)

    setSelected(moviesList.find(item => item.id === Number(id)))
  }

  if (isLoading) {
    return (
      <Grid container justifyContent="center">
        <CircularProgress variant="indeterminate" />
      </Grid>
    )
  }

  if (!isSuccess) {
    return <Typography>Something went wrong</Typography>
  }

  return (
    <>
      <Grid container direction="row" justifyContent="center">
        {data.pages.map(page =>
          page.data.results.map(item => (
            <MovieCard key={item.id} onClick={onClick} item={item} />
          )),
        )}
      </Grid>
      <Grid container direction="column" alignItems="center" padding={2}>
        <Button
          onClick={fetchNextPage}
          disabled={!hasNextPage}
          isLoading={isFetching || isFetchingNextPage}
        >
          Load more
        </Button>
      </Grid>
    </>
  )
}

export default memo(MoviesList)
