import '~/utils/typedefs'

/** @type {Styles} */
const styles = {
  cardContainer: {
    position: 'relative',
    width: 180,
    height: 240,
    borderRadius: 4,
    overflow: 'hidden',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,0.4)',
    margin: 1,
    padding: 0,
    transition: 'border 0.3s',
    cursor: 'pointer',
    '&:hover': {
      borderWidth: 5,
      borderStyle: 'solid',
      borderColor: 'primary.main',
    },
  },
  poster: {
    objectFit: 'cover',
    width: '100%',
  },
  content: {
    position: 'absolute',
    overflow: 'hidden',
    bottom: 0,
    height: 150,
    width: '100%',
    background: 'linear-gradient(to top, #1c1c29 50%, transparent)',
    paddingX: 2,
    paddingTop: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 600,
    color: 'primary.main',
    userSelect: 'none',
  },
}

export default styles
