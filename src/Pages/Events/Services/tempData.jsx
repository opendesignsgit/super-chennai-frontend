export const TEMP_EVENTS = [
  {
    id: "temp1",
    title: "Sample Event 1",
    slug: "sample-event-1",
    eventDates: [{ date: new Date().toISOString() }],
    details: { language: "English", location: "Chennai", price: 0 },
    eventsCategory: { id: "cat1", name: "Music" },
  },
  {
    id: "temp2",
    title: "Sample Event 2",
    slug: "sample-event-2",
    eventDates: [{ date: new Date().toISOString() }],
    details: { language: "Tamil", location: "Chennai", price: 500 },
    eventsCategory: { id: "cat2", name: "Workshop" },
  },
];
