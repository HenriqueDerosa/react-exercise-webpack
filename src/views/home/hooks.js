import { useInfiniteQuery } from 'react-query'
import Movie from '~/models/movie'
import { getMovies } from '~/services/movies'

export const useListMovies = () =>
  useInfiniteQuery(['movies'], getMovies, {
    getNextPageParam: lastPage => lastPage.data.page + 1,
    select: data => {
      return {
        ...data,
        pages: data.pages.map(page => ({
          ...page,
          data: {
            ...page.data,
            results: page.data.results.map(movie => new Movie({ ...movie })),
          },
        })),
      }
    },
  })
