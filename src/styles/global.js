/* eslint-disable no-dupe-keys */
/** @type {import('@emotion/styled/types/index').Interpolation<T>} */
const globalStyle = {
  'html, body': {
    height: '100vh',
  },
  body: {
    // TODO: polish the gradient
    background:
      '-webkit-radial-gradient(50% 100%, 44% 72%,#5938a1 0%,#1c1c29 100%)',
    background:
      '-moz-radial-gradient(50% 100%, 44% 72%,#5938a1 0%,#1c1c29 100%)',
    background: '-o-radial-gradient(50% 100%,44% 72%,#5938a1 0%,#1c1c29 100%)',
    background: 'radial-gradient(44% 72% at 50% 100%,#5938a1 0%,#1c1c29 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: '#ededed',
    margin: 0,
    padding: 40,
  },
}

export default globalStyle
