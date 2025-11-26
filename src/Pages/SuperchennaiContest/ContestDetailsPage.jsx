import { useParams } from "react-router-dom";
import { useContestBySlug } from "./hooks/useContestBySlug";
import { formatDate } from "./utils/contestUtils";

const SuperchennaiContestDetails = () => {
  const { slug } = useParams();
  const { contest, loading } = useContestBySlug(slug);

  if (loading) return <p>Loading...</p>;
  if (!contest) return <p>Contest not found.</p>;

  const block =
    contest?.content?.root?.children?.[0]?.fields || null;

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-3xl font-bold">{contest.title}</h1>



      {/* Marquee */}
      {block?.showMarquee && (
        <div className="bg-yellow-200 py-2 px-4 my-4 animate-pulse font-semibold">
          {block.marqueeText}
        </div>
      )}

      {/* Content UI */}
      <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold">{block?.title}</h2>

        <p className="text-gray-700 whitespace-pre-line">
          {block?.description}
        </p>
      </div>
    </div>
  );
};

export default SuperchennaiContestDetails;
