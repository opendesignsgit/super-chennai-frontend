import { useParams } from "react-router-dom";
import { useContestBySlug } from "./hooks/useContestBySlug";
import { formatDate } from "./utils/contestUtils";

const SuperchennaiContestDetails = () => {
  const { slug } = useParams();
  const { contest, loading } = useContestBySlug(slug);

  if (loading) return <p>Loading...</p>;
  if (!contest) return <p>Contest not found.</p>;

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-3xl font-bold">{contest.title}</h1>

      <p className="text-gray-500 mt-2">
        Published: {formatDate(contest.publishedAt)}
      </p>

      <div className="mt-6 prose max-w-none">
        {/* Render rich text */}
        {contest.content && (
          <pre>{JSON.stringify(contest.content, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default SuperchennaiContestDetails;
