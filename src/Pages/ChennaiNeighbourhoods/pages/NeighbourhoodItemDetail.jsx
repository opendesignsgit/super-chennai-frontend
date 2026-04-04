import { Link, useParams } from "react-router-dom";
import LexicalContent from "../Components/LexicalContent";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";

import { useState } from "react";
import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";
import { useLocations } from "../hooks/useLocations";
import EmptyState from "../Components/locations/EmptyState";

export default function NeighbourhoodItemDetail() {
  const { locationId,  slug } = useParams();
  const { data, loading } = useNeighbourhood({
    location: locationId,
  });
  const { locations } = useLocations();
  const item = data?.find((i) => i.slug === slug);

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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2b3284_0%,#b10f92_50%,#2b3284_100%)] opacity-80"></div>

        {/* CONTENT */}
        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText">
            <h3>{item.name}</h3>

            <div className="breadCrum">
              <Link to="/visit-chennai">Live</Link> -{" "}
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
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* TITLE */}

        <h1 className="text-3xl font-bold">{item.name}</h1>

        <LexicalContent content={item.content} />

        {/* CATEGORY + RATING */}
        <div className="flex gap-4 mt-2">
          <span className="text-purple-600">{item.category?.title}</span>

          <span className="text-yellow-500">⭐ {item.rating}</span>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6 text-gray-600">
          {item.description || item.title}
        </div>

        {/* LOCATION MAP */}
        {item?.locations?.value && (
          <div className="mt-8">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                item.locations.value,
              )}&output=embed`}
              className="w-full h-[300px] rounded"
            />
          </div>
        )}

        {/* CONTACT */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

          <div className="grid grid-cols-2 gap-4">
            <div>Phone: {item.contactInfo?.primaryPhone}</div>
            <div>Email: {item.contactInfo?.email}</div>
            <div>Website: {item.contactInfo?.website}</div>
          </div>
        </div>

        {/* BRANCHES */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Branches</h3>

          {item.branches?.map((b) => (
            <div key={b.id} className="border p-4 rounded mb-3">
              <h4 className="font-semibold">{b.branchName}</h4>
              <p>{b.area}</p>
              <p>{b.phone}</p>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        {item.serviceOptions?.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Services</h3>

            <div className="flex flex-wrap gap-2">
              {item.serviceOptions.map((s) => (
                <span
                  key={s.id}
                  className="bg-purple-100 px-3 py-1 rounded-full"
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* AWARDS */}
        {item.awards?.length > 0 && (
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4">Awards</h3>

            {item.awards.map((a) => (
              <div key={a.id} className="mb-2">
                🏆 {a.title}
              </div>
            ))}
          </div>
        )}

        {/* SOCIAL */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>

          <div className="flex gap-4">
            {item.socialMedia?.instagram && (
              <a href={item.socialMedia.instagram}>Instagram</a>
            )}

            {item.socialMedia?.facebook && (
              <a href={item.socialMedia.facebook}>Facebook</a>
            )}
          </div>
        </div>

        {/* COMPANY */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Company Info</h3>

          <p>Owner: {item.companyInfo?.ownerName}</p>
          <p>Founded: {item.companyInfo?.foundedYear}</p>
        </div>
      </div>
    </>
  );
}
