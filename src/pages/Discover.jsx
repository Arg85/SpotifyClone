import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch, useSelector } from "react-redux";
const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";
  if (isFetching) return <Loader title="loading Songs" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className=" flex w-full justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => {
            return <option key={genre.value}>{genre.title}</option>;
          })}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              data={data}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Discover;
