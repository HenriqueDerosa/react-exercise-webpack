class Movie {
  constructor({ id, name, title, overview, posterPath, backdropPath } = {}) {
    this.id = id
    this.name = name
    this.title = title
    this.overview = overview
    this.posterPath = posterPath
    this.backdropPath = backdropPath
  }
}

export default Movie
