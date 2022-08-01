import { Grid, Typography } from '@mui/material'

import Header from '~/components/header/header'
import MoviesList from '~/views/home/movies-list/movies-list'

const Home = () => {
  return (
    <Grid>
      <Header />
      <Typography>Select one of the items below:</Typography>
      <MoviesList />
    </Grid>
  )
}

export default Home
