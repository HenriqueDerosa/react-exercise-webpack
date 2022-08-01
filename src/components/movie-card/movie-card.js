import PropTypes from 'prop-types'
import { Box, Button, Grid, Typography } from '@mui/material'
import styles from './styles'
import Movie from '~/models/movie'

const MovieCard = ({ item, onClick }) => {
  return (
    <Button sx={styles.cardContainer} id={item.id} onClick={onClick}>
      <Box
        component="img"
        sx={styles.poster}
        src={`https://image.tmdb.org/t/p/w500/${item.posterPath}`}
        alt="Poster of the movie"
      />
      <Grid sx={styles.content}>
        <Typography sx={styles.title}>{item.title || item.name}</Typography>
      </Grid>
    </Button>
  )
}

MovieCard.propTypes = {
  item: PropTypes.instanceOf(Movie).isRequired,
  onClick: PropTypes.func.isRequired,
}

export default MovieCard
