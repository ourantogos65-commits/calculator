"use client";
import { Movietype } from "@/lib/types";
import { useRouter } from "next/navigation";
type Props = {
  movie: Movietype;
};
export const MovieCard = ({ movie }: Props) => {
  const { title, vote_average, poster_path, id } = movie;
  const router = useRouter();
  const HandleClick = () => {
    router.push(`/detail/${id}`);
  };
  return (
    <div onClick={HandleClick}>
      <div className="bg-gray-300 overflow-hidden rounded-2xl w-[229px] h-[439px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="bg-gray-300 h-[340px] bg-cover"
        ></img>
        <p className="bg-gray-200">
          <span>{vote_average}</span>/10
        </p>
        <h2 className="text-2xl">{title}</h2>
      </div>
    </div>
  );
};
