import palette from '../palette'

const MuiDialog = {
  styleOverrides: {
    paper: {
      borderRadius: 10,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: palette.background.dark,
      background: palette.background.darker,
      color: 'white',
    },
  },
}

export default MuiDialog
