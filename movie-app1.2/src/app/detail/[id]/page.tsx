import { MovieDetailPoster } from "@/components/moviedetail/MovieDetailPoster";
import { SimiliarMovie } from "@/components/moviedetail/SimilarMoviesList";
import { axiosInstance } from "@/lib/utils";

async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
  const movie = response.data;

  const similarResponse = await axiosInstance.get(
    `/movie/${id}/similar?language=en-US&page=1`
  );
  const similarMovieData = similarResponse.data;

  return (
    <div>
      <MovieDetailPoster movie={movie} />
      <SimiliarMovie movies={similarMovieData.results} />
    </div>
  );
}

export default DetailPage;
