import { MovieCardList } from "@/components/MovieCardList";
import { MovieCard } from "@/components/MovieCard";
import { Movietype } from "@/lib/types";
import { AxiosInstance } from "axios";
import { axiosInstance } from "@/lib/utils";

async function Home() {
  const getMovieData = async (category: string) => {
    try {
      const response = await axiosInstance.get(
        `/movie/${category}?language=en-US`
      );
      return response.data;
    } catch (error) {
      console.error("movie fetch error ", error);
    }
  };
  const upcomingMovieData = await getMovieData("upcoming");
  return (
    <div className="mt-10">
      <MovieCardList text="Upcoming" movies={upcomingMovieData.results} />;
    </div>
  );
}
export default Home;
