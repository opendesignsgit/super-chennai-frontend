import { useParams } from "react-router-dom";
import { useIconBySlug } from "./hooks/useContestBySlug";
import { API_BASE_URL } from "../../../config";

const IconOfMonthDetails = () => {
  const { slug } = useParams();
  const { IconOfMonthData, loading } = useIconBySlug(slug);

  console.log("detailpage data", IconOfMonthData);

  if (loading) return <p>Loading...</p>;
  if (!IconOfMonthData) return <p>Icon not found.</p>;

  const { title, heroImage, publishedAt, content } = IconOfMonthData;

  const imageUrl = heroImage?.url
    ? `${API_BASE_URL}${heroImage.url}`
    : "/images/placeholder.png";

  // Extract introText block from content
  const introBlock = content?.root?.children?.find(
    (c) => c.type === "block" && c.fields?.blockType === "introText"
  );

  return (
    <div className="container mx-auto py-10 max-w-3xl">

      {/* HERO IMAGE */}
      <img
        src={imageUrl}
        alt={title}
        className="rounded-2xl w-full max-h-[420px] object-cover mb-6"
      />

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-3">{title}</h1>

      {/* PUBLISHED DATE */}
      <p className="text-gray-600 mb-6">
        Published on: {new Date(publishedAt).toLocaleDateString()}
      </p>

      {/* INTRO BLOCK */}
      {introBlock && (
        <div className="mb-8 p-5 bg-gray-100 rounded-xl">
          {introBlock.fields.title && (
            <h2 className="text-2xl font-semibold mb-2">
              {introBlock.fields.title}
            </h2>
          )}

          {introBlock.fields.description && (
            <p className="text-gray-700 text-lg mb-3">
              {introBlock.fields.description}
            </p>
          )}

          {introBlock.fields.showMarquee && (
            <div className="mt-3 bg-purple-200 px-3 py-2 rounded font-medium">
              {introBlock.fields.marqueeText}
            </div>
          )}
        </div>
      )}

      {/* RAW CONTENT (OPTIONAL PREVIEW) */}
      <pre className="bg-gray-50 p-4 rounded-lg text-sm whitespace-pre-wrap">
        {JSON.stringify(content, null, 2)}
      </pre>

    </div>
  );
};

export default IconOfMonthDetails;
