import '~/utils/typedefs'

/** @type {Styles} */
const styles = {
  dialog: {
    minWidth: 400,
    minHeight: 370,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '70%',
    height: '100%',
    objectFit: 'cover',
    background: 'linear-gradient(to right, #1c1c29 50%, transparent)',
    WebkitMaskImage:
      '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
    maskImage: 'linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))',
    pointerEvents: 'none',
  },
  text: {
    zIndex: 1,
  },
  content: {
    width: '50%',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    msOverflowStyle: 'none' /* IE and Edge */,
    scrollbarWidth: 'none' /* Firefox */,
  },
}

export default styles
