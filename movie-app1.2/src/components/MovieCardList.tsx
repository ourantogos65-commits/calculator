// "use client"
// import { MovieCard } from "./MovieCard";
// import { Movietype } from "@/lib/types";
// import { useEffect, useState } from "react";
// import useSWR from "swr";
// type Props = {
//   movies: Movietype[];
//   text: string;
// };
// export const MovieCardList = ({ movies, text }: Props) => {
//     const [isLoading,setIsLoading]=useState(true)
//     const [displayMovies ,setDisplayMovies]=useState<Movietype[]>([])

//   useEffect(()={

//   }[])
//   const {
//     data: upcoming,
//     isLoading: upcomingLoading,
//     error: upcomingerror,
//   } = useSWR(`upcoming?language=en-US`, () => getMovies("upcoming"));
//   console.log(upcoming);
//   const {
//     data: popular,
//     isLoading: popularLoading,
//     error: popularerror,
//   } = useSWR(`popular?language=en-US`, () => getMovies("popular"));
//   return (
//     <div className="flex flex-col gap-3 ">
//       <h1 className="text-2xl text-bold"> {text}</h1>

//       <div className="flex flex-wrap">
//         {movies?.splice(0, 10).map((movie) => (
//           <MovieCard movie={movie} key={movie.id} />
//         ))}
//       </div>
//     </div>
//   );
// };
// // "use client";
// // import { useEffect, useState } from "react";
// // import { Movietype } from "@/lib/types";
// // import { MovieCard } from "./MovieCard";

// // type Props = {
// //   movies: Movietype[];
// //   text: string;
// // };

// // export const MovieCardList = ({ movies, text }: Props) => {
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [displayMovies, setDisplayMovies] = useState<Movietype[]>([]);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setDisplayMovies(movies.slice(0, 10));
// //       setIsLoading(false);
// //     }, 500);
// //     return () => clearTimeout(timer);
// //   }, [movies]);

// //   return (
// //     <div className="flex flex-col gap-3">

// //       <h1 className="text-2xl font-bold">{text}</h1>
// //       <div className="flex flex-wrap gap-3">
// //         {isLoading
// //           ? Array.from({ length: 10 }).map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="w-[229px] h-[439px] bg-gray-300 rounded-2xl animate-pulse"
// //               />
// //             ))
// //           : displayMovies.map((movie) => (
// //               <MovieCard key={movie.id} movie={movie} />
// //             ))}
// //       </div>
// //     </div>
// //   );
// // };
"use client";
import useSWR from "swr";
import { Movietype } from "@/lib/types";
import { MovieCard } from "./MovieCard";
import { axiosInstance } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";

type Props = {
  category: string;
  text: string;
};

export const MovieCardList = ({ category, text }: Props) => {
  const {
    data: movies,
    error,
    isLoading,
  } = useSWR(`/movie/${category}?language=en-US`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies</div>;

  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <h2 className="text-2xl font-bold">{text}</h2>
      )}

      <div className="flex flex-wrap gap-3">
        {movies.map((movie: Movietype) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
