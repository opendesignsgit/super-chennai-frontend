import React from "react";
import { API_BASE_URL } from "../../../config";

// Reusable Text Renderer
const renderTextChild = (child, key) => {
  switch (child.type) {
    case "text":
      return <span key={key}>{child.text}</span>;

    case "link":
      return (
        <a
          key={key}
          href={child.fields?.url || "#"}
          target={child.fields?.newTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {child.children?.[0]?.text || "Link"}
        </a>
      );

    case "linebreak":
      return <br key={key} />;

    default:
      return null;
  }
};

// Reusable Main Renderer
export const LexicalRenderer = ({ content }) => {
  if (!content?.root?.children) return null;

  return content.root.children.map((node, idx) => {
    switch (node.type) {
      // ---------- PARAGRAPH ----------
      case "paragraph":
        return (
          <p key={idx} className="">
            {node.children?.map((child, cIdx) =>
              renderTextChild(child, cIdx)
            )}
          </p>
        );

      // ---------- HEADINGS ----------
      case "heading": {
        const Tag = node.tag || "h2";
        return (
          <Tag
            key={idx}
            className=""
          >
            {node.children?.map((child, cIdx) =>
              renderTextChild(child, cIdx)
            )}
          </Tag>
        );
      }

      // ---------- MEDIA BLOCK ----------
      case "block": {
        const media = node.fields?.media;
        if (!media?.url) return null;

        const imgUrl = `${API_BASE_URL}/${media.url}`;
        return (
          <figure key={idx} className="my-6">
            <img
              src={imgUrl}
              alt={media.alt || media.filename || "Image"}
              className=""
            />
            {media.caption && (
              <figcaption className="">
                {media.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      default:
        return null;
    }
  });
};
