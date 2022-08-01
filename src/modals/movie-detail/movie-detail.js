import PropTypes from 'prop-types'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import Button from '~/components/button/button'
import MoviesContext from '~/context/movies/movies-context'

import styles from './styles'
import Movie from '~/models/movie'

const MovieDetail = ({ onClose, item }) => {
  const setSelected = useContextSelector(
    MoviesContext,
    context => context.setSelected,
  )
  const theme = useTheme()

  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Dialog
      sx={styles.dialog}
      keepMounted
      open
      fullScreen={fullScreen}
      onClose={onClose}
      aria-labelledby={`detail of movie ${item.title || item.name}`}
    >
      <Box
        component="img"
        sx={styles.backdrop}
        src={`https://image.tmdb.org/t/p/w500/${item.backdropPath}`}
        alt="Backdrop of the movie"
      />
      <DialogTitle variant="h2" id="movie detail" sx={styles.text}>
        {item.title || item.name}
      </DialogTitle>
      <DialogContent sx={[styles.content, styles.text]}>
        <Typography>{item.overview}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setSelected(null)}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

MovieDetail.propTypes = {
  onClose: PropTypes.func,
  item: PropTypes.instanceOf(Movie).isRequired,
}

MovieDetail.defaultProps = {
  onClose: () => {},
}

export default MovieDetail
