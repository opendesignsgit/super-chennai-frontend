import { Link, useParams,useNavigate } from "react-router-dom";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";
import LexicalContent from "../Components/LexicalContent";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { useState } from "react";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";
import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
import EmptyState from "../Components/locations/EmptyState";
import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";
import { useLocations } from "../hooks/useLocations";

export default function NeighbourhoodItemDetail() {
  const { locationId, slug } = useParams();
  const { data, loading } = useNeighbourhood({
    location: locationId,
  });
  const { locations } = useLocations();
  const item = data?.find((i) => i.slug === slug);


  const navigate = useNavigate();

const [isModalOpen, setIsModalOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const galleryImages = item?.gallery?.map(
  (g) => API_BASE_URL_API_TEST_DEV + g.image.url
) || [];


  console.log("data EDUTHUKO ", item);

  if (loading) return <NeighbourhoodListSkeleton />;
  if (!item)
    return (
      <EmptyState
        title="Invalid Location"
        message="We couldn't find details for this location."
        onReset={() => navigate("/neighbourhood")}
      />
    );

  const { subcategory } = useParams();
  const relatedItems =
    data?.filter(
      (i) =>
        i.slug !== slug &&
        (subcategory
          ? i.subCategories?.some((sub) => sub.slug === subcategory)
          : i.category?.slug === category),
    ) || [];





  return (
    <>
      {/* HERO */}
      <div className="accaodomationBannerSection relative">
        {/* IMAGE */}
        <img
          src={
            item?.heroImage?.url
              ? API_BASE_URL_API_TEST_DEV + item.heroImage.url
              : "/placeholder.jpg"
          }
          className="w-full h-[400px] object-cover"
        />

        {/* SHADE */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2b3284_0%,#b10f92_50%,#2b3284_100%)]"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        {/* CONTENT */}
        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText">
            <AutoShrinkText
              text={item.name}
              baseSize={60}
              minSize={40}
              maxChars={40}
              className="accodoamationBannerText"
              width="80%"
              maxLines={2}
            />

            <div className="breadCrum">
              <Link to="/visit-chennai">Neighbourhoods</Link> -{" "}
              <span>{item.category?.title}</span>
            </div>
          </div>
        </div>
      </div>

      <NeighbourhoodSearchBar
        data={data}
        locations={locations}
        locationId={locationId}
      />
      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-6 m-15">
        <div className="flex items-start justify-between">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl font-semibold text-[#a34493]">
              {item.name}
            </h2>
            <span className="text-purple-600 text-sm font-semibold">
              {item.category?.title}
            </span>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end gap-2 text-sm">
            <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
              ⭐ <span>{item.rating}</span>
            </div>

            <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
              Est. {item.establishedYear}
            </div>
          </div>
        </div>

        {/* GALLERY */}
        {galleryImages.length > 0 && (
          <div className="mt-10">
            <div className="grid grid-cols-3 gap-2">
              {/* Hero Image */}
              <div className="col-span-2">
                <img
                  src={galleryImages[0]}
                  alt="Gallery"
                  className="w-full h-60 object-cover rounded-lg cursor-pointer"
                  onClick={() => {
                    setCurrentImageIndex(0);
                    setIsModalOpen(true);
                  }}
                />
              </div>

              {/* Side Images */}
              <div className="flex flex-col gap-2">
                {galleryImages.slice(1, 4).map((img, i) => {
                  const isLastVisible = i === 2 && galleryImages.length > 4;

                  return (
                    <div key={i} className="relative w-full h-[73px]">
                      <img
                        src={img}
                        alt=""
                        className="w-full h-full object-cover rounded-lg cursor-pointer"
                        onClick={() => {
                          setCurrentImageIndex(i + 1);
                          setIsModalOpen(true);
                        }}
                      />

                      {isLastVisible && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                          +{galleryImages.length - 4}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col">
              {/* Main Image */}
              <div className="flex items-center justify-center bg-black max-h-[80vh] p-4">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`Gallery ${currentImageIndex + 1}`}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Left Button */}
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) =>
                      (prev - 1 + galleryImages.length) % galleryImages.length,
                  )
                }
              >
                &#8592;
              </button>

              {/* Right Button */}
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) => (prev + 1) % galleryImages.length,
                  )
                }
              >
                &#8594;
              </button>

              {/* Thumbnails */}
              <div className="mt-3 mb-4 flex gap-2 overflow-x-auto px-2">
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-14 h-14 rounded-md object-cover cursor-pointer border-2 ${
                      currentImageIndex === index
                        ? "border-white"
                        : "border-transparent"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* TITLE */}

          {item.content && (
            <div className="border border-gray-200 rounded-xl p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                About this {item.category?.title}
              </h2>
              <div className="text-gray-500 text-sm">
                <LexicalContent content={item.content} />
              </div>
            </div>
          )}

          {/* DESCRIPTION */}
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 mt-10">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              About this {item.category?.title}
            </h2>
            {item.description || item.title}
          </div>

          {/* LOCATION MAP */}

          {item?.locations?.value && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 mt-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Location
              </h2>
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  item.locations.value,
                )}&output=embed`}
                className="w-full h-[300px] rounded"
              />
            </div>
          )}

          {item.amenities?.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 mt-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Amenities
              </h2>

              <ul className="list-disc pl-5 space-y-2">
                {item.amenities.map((a) => (
                  <li key={a.id}>{a.label}</li>
                ))}
              </ul>
            </div>
          )}

          {item.businessHours?.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 mt-10">
              <h3 className="text-xl font-semibold mb-4">Timings</h3>

              {item.businessHours.map((b) => (
                <div key={b.id}>
                  {b.openTime} - {b.closeTime}
                </div>
              ))}
            </div>
          )}
          {item.branches?.[0]?.address && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 mt-10">
              <h3 className="text-xl font-semibold">Address</h3>
              <p>{item.branches?.[0]?.address}</p>
            </div>
          )}

          {item.subCategories?.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 mt-10">
              <h4 className="text-lg font-semibold mb-3 text-gray-700">
                Releated categories
              </h4>

              <div className="flex flex-wrap gap-2">
                {item.subCategories.map((s) => (
                  <span
                    key={s.id}
                    onClick={() =>
                      navigate(
                        `/neighbourhood/${locationId}/${item.category?.title?.toLowerCase()}/${s.slug}`,
                      )
                    }
                    className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors cursor-pointer"
                  >
                    {s.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(item.contactInfo?.website ||
            item.contactInfo?.primaryPhone ||
            item.socialMedia?.instagram) && (
            <div className="flex justify-end gap-4 mt-5 flex-wrap">
              {/* Website */}
              {item.contactInfo?.website && (
                <a
                  href={item.contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  Visit Website
                </a>
              )}

              {/* Phone */}
              {item.contactInfo?.primaryPhone && (
                <a
                  href={`tel:${item.contactInfo.primaryPhone}`}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Call Now
                </a>
              )}

              {/* Instagram */}
              {item.socialMedia?.instagram && (
                <a
                  href={item.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.4 1 .4.4.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.4-.4.4-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.4-1-.4-.4-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.4.4-.4.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.3 4 .5 3.2.7 2.5 1 1.9 1.6.5 3 0 4.5 0 12s.5 9 1.9 10.4c.6.6 1.3.9 2.1 1.1.8.2 1.7.3 3 .4 1.3.1 1.7.1 5 .1s3.6 0 5-.1c1.3-.1 2.2-.2 3-.4.8-.2 1.5-.5 2.1-1.1C23.5 21 24 19.5 24 12s-.5-9-1.9-10.4c-.6-.6-1.3-.9-2.1-1.1-.8-.2-1.7-.3-3-.4C15.6 0 15.2 0 12 0z" />
                    <path d="M12 5.8a6.2 6.2 0 1 0 6.2 6.2A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 4-4 4 4 0 0 1-4 4zM18.4 4.6a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z" />
                  </svg>
                  Instagram
                </a>
              )}
            </div>
          )}

          {/* CONTACT */}
          {(item.contactInfo?.primaryPhone ||
            item.contactInfo?.email ||
            item.contactInfo?.website) && (
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white transition-all duration-300 mt-10">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                Contact Info
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                {item.contactInfo?.primaryPhone && (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5h2l3.6 7.59-1.35 2.45A1 1 0 008 16h9a1 1 0 001-1v-3.5l2-2V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                      />
                    </svg>
                    <span>{item.contactInfo.primaryPhone}</span>
                  </div>
                )}

                {/* Email */}
                {item.contactInfo?.email && (
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 12H8m0 0l-4-4m4 4l4-4M8 12v8m0 0l-4-4m4 4l4-4"
                      />
                    </svg>
                    <span>{item.contactInfo.email}</span>
                  </div>
                )}

                {/* Website */}
                {item.contactInfo?.website && (
                  <a
                    href={item.contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.354a8 8 0 100 15.292 8 8 0 000-15.292zM12 4v16"
                      />
                    </svg>
                    <span>{item.contactInfo.website}</span>
                  </a>
                )}
              </div>
            </div>
          )}

          {/* BRANCHES */}
          {item.branches?.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white transition-all duration-300 mt-10">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                Branches
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.branches?.map((b) => (
                  <div
                    key={b.id}
                    className="p-4 rounded-lg shadow hover:shadow-md transition-shadow bg-gray-50"
                  >
                    {/* Branch Name */}
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {b.branchName}
                    </h4>

                    {/* Area */}
                    {b.area && (
                      <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                          />
                        </svg>
                        <span>{b.area}</span>
                      </div>
                    )}

                    {/* Phone */}
                    {b.phone && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5h2l3.6 7.59-1.35 2.45A1 1 0 008 16h9a1 1 0 001-1v-3.5l2-2V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                          />
                        </svg>
                        <span>{b.phone}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {item.serviceOptions?.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white transition-all duration-300 mt-10">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                Services
              </h3>

              <div className="flex flex-wrap gap-3">
                {item.serviceOptions.map((s) => (
                  <span
                    key={s.id}
                    className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 cursor-pointer transition-colors"
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.awards?.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white transition-all duration-300 mt-10">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                Awards
              </h3>

              <div className="flex flex-wrap gap-3">
                {item.awards.map((a) => (
                  <div
                    key={a.id}
                    className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors cursor-pointer"
                  >
                    <span className="text-lg">🏆</span>
                    <span>{a.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SOCIAL */}
          {(item.socialMedia?.instagram || item.socialMedia?.facebook) && (
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white transition-all duration-300 mt-10">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                Social Media
              </h3>

              <div className="flex gap-4 flex-wrap">
                {/* Instagram */}
                {item.socialMedia?.instagram && (
                  <a
                    href={item.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors font-medium text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .2 2.5.4.6.2 1 .5 1.4 1 .4.4.8.9 1 1.5.2.5.3 1.3.4 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 2-.4 2.5-.2.6-.5 1-1 1.4-.4.4-.9.8-1.5 1-.5.2-1.3.3-2.5.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.2-2.5-.4-.6-.2-1-.5-1.4-1-.4-.4-.8-.9-1-1.5-.2-.5-.3-1.3-.4-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-2 .4-2.5.2-.6.5-1 1-1.4.4-.4.9-.8 1.5-1 .5-.2 1.3-.3 2.5-.4C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.3 4 .5 3.2.7 2.5 1 1.9 1.6.5 3 0 4.5 0 12s.5 9 1.9 10.4c.6.6 1.3.9 2.1 1.1.8.2 1.7.3 3 .4 1.3.1 1.7.1 5 .1s3.6 0 5-.1c1.3-.1 2.2-.2 3-.4.8-.2 1.5-.5 2.1-1.1C23.5 21 24 19.5 24 12s-.5-9-1.9-10.4c-.6-.6-1.3-.9-2.1-1.1-.8-.2-1.7-.3-3-.4C15.6 0 15.2 0 12 0z" />
                      <path d="M12 5.8a6.2 6.2 0 1 0 6.2 6.2A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 4-4 4 4 0 0 1-4 4zM18.4 4.6a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4z" />
                    </svg>
                    Instagram
                  </a>
                )}

                {/* Facebook */}
                {item.socialMedia?.facebook && (
                  <a
                    href={item.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.406 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                    Facebook
                  </a>
                )}
              </div>
            </div>
          )}

          {(item.companyInfo?.ownerName || item.companyInfo?.foundedYear) && (
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white transition-all duration-300 mt-10">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                Company Info
              </h3>

              <div className="flex flex-col gap-3">
                {/* Owner */}
                {item.companyInfo?.ownerName && (
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A7.968 7.968 0 0112 15c2.21 0 4.21.896 5.879 2.345M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Owner: {item.companyInfo.ownerName}</span>
                  </div>
                )}

                {/* Founded Year */}
                {item.companyInfo?.foundedYear && (
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3M12 12a9 9 0 100-18 9 9 0 000 18z"
                      />
                    </svg>
                    <span>Founded: {item.companyInfo.foundedYear}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {relatedItems?.length > 0 && (
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-6 m-15">
          {relatedItems.length > 0 && (
            <div className=" mt-10">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 capitalize">
                {subcategory} Nearby
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      navigate(
                        `/neighbourhood/${locationId}/${category}/${subcategory}/${item.slug}`,
                      )
                    }
                    className="cursor-pointer bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative">
                      <img
                        src={
                          item?.heroImage?.url
                            ? API_BASE_URL_API_TEST_DEV + item.heroImage.url
                            : "https://www.superchennai.com/images/restaurants-banner.jpg"
                        }
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://www.superchennai.com/images/restaurants-banner.jpg";
                        }}
                        className="w-full h-48 object-cover"
                        alt={item.name}
                      />

                      {/* Rating Badge */}
                      <span className="absolute top-3 right-3 bg-yellow-500 text-white text-xs px-2 py-1 rounded-md font-semibold shadow">
                        ⭐ {item.rating || "4.0"}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="titlenamecontent">{item.name}</h3>

                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {item.description || "No description available"}
                      </p>

                      {/* Read More */}
                      <div className="mt-3">
                        <span className="readmorelink">Read More →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
