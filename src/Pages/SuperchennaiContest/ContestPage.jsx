import { Link } from "react-router-dom";
import { useContests } from "./hooks/useContests";
import { formatDate } from "./utils/contestUtils";

const SuperchennaiContests = () => {
  const { contests, loading } = useContests();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Superchennai Contests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contests.map((contest) => (
          <Link
            key={contest.id}
            to={`/chennai-contests/${contest.slug}`}
            className="p-5 rounded-xl border shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{contest.title}</h2>

            <p className="text-gray-500 mt-2">
              Published: {formatDate(contest.publishedAt)}
            </p>

            <p className="text-sm mt-3 line-clamp-2">
              {contest?.meta?.description || "No description available."}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuperchennaiContests;
