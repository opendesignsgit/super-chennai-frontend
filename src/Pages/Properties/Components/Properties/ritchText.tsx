import { RichText } from "@payloadcms/richtext-lexical/react";

export const PropertyContent = ({ content }) => {
  if (!content) return null;

  return (
    <div className="prose max-w-none">
      <RichText data={content} />
    </div>
  );
};
