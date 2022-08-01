import { Grid, Typography } from '@mui/material'
import Popcorn from '~/assets/popcorn.png'
import styles from './styles'

const Header = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="flex-end"
      justifyContent="left"
      marginBottom={3}
    >
      <img src={Popcorn} alt="popcorn" style={styles.image} />
      <Typography variant="h1" color="primary">
        Movies
      </Typography>
    </Grid>
  )
}

export default Header
