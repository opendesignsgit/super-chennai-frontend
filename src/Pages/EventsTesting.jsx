// src/Pages/EventsTesting.js
import { client } from "../sanityClient";

let cards = [];

// Build a promise that fetches events from Sanity
const query = `*[_type == "event"]{
  _id,
  EventsCalendarTitle,
  EventsCalendarContent,
  EventsCalendarMonth,
  EventsCalendarTime,
  EventsCalendarCategory,
  "image": image.asset->url,
  link,
  location,
  language,
  hours,
  ageLimit,
  price,
  aboutFull
}`;

const fetchEvents = async () => {
  try {
    const data = await client.fetch(query);
    cards = data;
  } catch (error) {
    console.error("Error fetching events from Sanity:", error);
  }
};

// Run the fetch once on load
fetchEvents();

export { cards };
