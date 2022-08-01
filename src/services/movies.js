import request from './request'

export const getMovies = ({ pageParam = 1 }) =>
  request.get('/trending/all/week', {
    params: {
      page: pageParam,
    },
  })
