import React from 'react'
import PropTypes from 'prop-types'
import { Button as MuiButton, CircularProgress } from '@mui/material'

const Button = ({ children, isLoading, ...props }) => {
  return (
    <MuiButton color="primary" variant="contained" {...props}>
      {isLoading ? (
        <CircularProgress variant="indeterminate" color="secondary" size={24} />
      ) : (
        children
      )}
    </MuiButton>
  )
}

Button.propTypes = {
  isLoading: PropTypes.bool,
}

Button.defaultProps = {
  isLoading: false,
}

export default Button
