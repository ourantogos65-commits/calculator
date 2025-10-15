import { Movietype } from "@/lib/types";
import { MovieCard } from "../MovieCard";
type Props = {
  movies: Movietype[];
};
export const SimiliarMovie = ({ movies }: Props) => {
  return (
    <div className="flex gap-3">
      {movies?.splice(0, 5).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
