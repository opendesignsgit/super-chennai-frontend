import { Helmet } from "react-helmet-async";



export default function SEO({ title, description, keywords, children }) {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {children}
    </Helmet>
  );
}