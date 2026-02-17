import { useState, useEffect } from "react";
import axios from "axios";

export const cards1 = () => {
  const [cards1, setCards1] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          "https://demo.superchennai.com/api/events"
        );
        setCards1(response.data.docs);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);
  return { cards1, loading };
};

export const cards = [
  {
    url: "the-cry-club",
    id: 1,
    EventsCalendarTitle: "The Cry Club",
    EventsCalendarContent:
      "The Cry Club – Let it out, together. Show up with your...",
    EventsCalendarMonth: "15 Aug – 16 Aug, 2025",
    EventsCalendarTime: "6:19 PM",
    EventsCalendarCategory: "Business, Dating, Meetups",
    image: "/images/HomePage-Images/Events/Newevents/154.jpg",
    link: "",
    location: "EatSure Food Court - Law College Road: Pune",
    language: "English",
    hours: "1 Hour",
    ageLimit: "18yrs +",
    price: "₹399 onwards",
    aboutFull:
      "The Cry Club – Let it out, together. Show up with your baggage, heartbreaks, or the weight of a long week, and step into a space with no judgment and no pressure to fix anything—just soft lighting, safe vibes, and warm strangers who understand. Rant, cry, or hug it out while we provide tissues, tea, and emotional support music, so you can leave feeling lighter—because sometimes, a good cry is the vibe.",
  },

  {
    url: "4th-tamil-nadu-international-kite-festival-day-3",
    id: 2,
    EventsCalendarTitle: "4th Tamil Nadu International Kite Festival | Day 3",
    EventsCalendarContent:
      "Welcome to the 4th Tamil Nadu International Kite Festival!...",
    EventsCalendarMonth: "Saturday, 16 August 2025",
    EventsCalendarTime: "03:00 PM",
    EventsCalendarCategory: "Festival",
    image: "/images/HomePage-Images/Events/Newevents/day3-kite.jpg",
    link: "/kite-festival-day-3",
    location: "Thiruvidanthai Beach, ECR, Mahabalipuram",
    siteLink:
      "https://www.district.in/events/4th-tamil-nadu-international-kite-festival-day-3-buy-tickets?disableSSR=true",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
   
Get ready for four days of color, creativity, and family fun at Thiruvidanthai Beach! Kite enthusiasts from around the world—including France, Thailand, Switzerland, Singapore, Malaysia, Vietnam, and India—come together for a spectacular celebration of sky art Day 4 Highlights:
The festival’s grand finale on Day 4 promises an unforgettable experience at Thiruvidanthai Beach, ECR, Mahabalipuram, starting from 3 PM onwards. Enjoy dazzling international giant kite displays, thrilling acrobatic performances, mesmerizing LED kite shows, sparkling fireworks, a lively kids’ carnival, and a variety of shopping, food stalls, and cultural activities—making it a perfect family-friendly celebration of creativity and fun. 
Special Attractions:

Over 250 kites from eight countries painting the sky

Vibrant themed kites promoting “SAVE MARINE LIFE”

Huge colorful teddy bears and realistic dinosaurs for photo fun
    
    `,
  },
  {
    url: "4th-tamil-nadu-international-kite-festival-day-4",
    id: 3,
    EventsCalendarTitle: "4th Tamil Nadu International Kite Festival | Day 4",
    EventsCalendarContent:
      "Welcome to the 4th Tamil Nadu International Kite Festival!...",
    EventsCalendarMonth: "Sunday, 17 August 2025",
    EventsCalendarTime: "03:00 PM",
    EventsCalendarCategory: "Festival",
    siteLink:
      "https://www.district.in/events/4th-tamil-nadu-international-kite-festival-day-4-buy-tickets?disableSSR=true",
    image: "/images/HomePage-Images/Events/Newevents/day4-kite.jpg",
    link: "/kite-festival-day-3",
    location: "Thiruvidanthai Beach, ECR, Mahabalipuram",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    
    Welcome to the 4th Tamil Nadu International Kite Festival! Experience four days of color, creativity, and family fun at Thiruvidanthai Beach. Kite enthusiasts from around the world—including France, Thailand, Switzerland, Singapore, Malaysia, Vietnam, and India—come together for a spectacular celebration of sky art. Organised by Global Media Box in association with the Department of Tourism, Tamil Nadu, this year’s festival promises to be bigger and better than ever.
    What to Expect:
Visitors can enjoy a thrilling lineup of events, featuring dazzling international giant kite displays, breathtaking acrobatic kite performances, and mesmerizing LED kite shows that light up the sky. The festival also includes a sparkling fireworks display, a lively kids’ carnival, and a variety of shopping, food stalls, and cultural activities, making it a fun-filled experience for the entire family. Special Attractions:
Over 250 kites from eight countries will paint the skies, alongside vibrant themed kites promoting “SAVE MARINE LIFE”. Don’t miss the huge colorful teddy bears and realistic dinosaurs, perfect for photo opportunities and adding extra fun for visitors of all ages.`,
  },
  {
    url: "gallabox-presents-patriotic-run",
    id: 4,

    EventsCalendarTitle: "GALLABOX presents Patriotic Run",
    EventsCalendarContent:
      "Get ready to run for a cause that ignites your passion...",
    EventsCalendarMonth: "17 Aug 2025",
    EventsCalendarTime: "5:00 AM",
    EventsCalendarCategory: "Sports, Fitness",
    image: "/images/HomePage-Images/Events/Newevents/gallabox-marathon.jpg",
    link: "",
    location: "VGP Universal Kingdom, Chennai",
    language: "",
    hours: "",
    siteLink: "",
    ageLimit: "",
    price: "₹299 onwards",
    aboutFull: `
<strong>GALLABOX presents Patriotic Run </strong> 
<p>Get ready to run for a cause that ignites your passion and love for the nation! 🇮🇳 Join us for the GALLABOX presenting Patriotic Run, a unique event that combines fitness, fun, and patriotism.</p>

<ul>
<li><strong>Event Details</strong></li>
<li><strong>Distances:</strong></li>
<li>5km: (Perfect for a warm-up and a fun run!)</li>
<li>10km: (Challenge yourself and push your limits!)</li>
</ul> 

</br>

<h3>What's Included</h3>
<ul>
  <li><strong>Time chip:</strong> Accurate timing to track your progress ⏱️</li>
  <li><strong>T-shirt:</strong> A stylish and comfortable tee to commemorate your participation 👕</li>
  <li><strong>Bib:</strong> Your official race number, proudly displayed 📝</li>
  <li><strong>Certificate:</strong> A personalized certificate to mark your achievement 🏆</li>
  <li><strong>Hydration:</strong> Refreshing drinks to keep you going throughout the run 💧</li>
  <li><strong>Food pack:</strong> Delicious treats to refuel and recharge 🍔🥤</li>
  <li><strong>Medal:</strong> A shiny medal to proudly display your accomplishment 🏅</li>
</ul>
</br>

<h3>Winner's Perks</h3>
<ul>
  <li><strong>Medal:</strong> A special medal for the top performers 🏅</li>
  <li><strong>Trophy:</strong> A prestigious trophy for the champions 🏆</li>
  <li><strong>Gift vouchers:</strong> Exciting prizes to treat yourself 🎁</li>
</ul>
</br>

<h3>Why Join?</h3>
<ul>
  <li>Celebrate your love for the nation</li>
  <li>Challenge yourself and push your limits</li>
  <li>Enjoy a fun and energetic atmosphere</li>
  <li>Take home amazing goodies and memories</li>
</ul>
</br>
<strong>Don't miss this opportunity to be a part of something special! Register now and show your love for the nation! </strong>
`,
  },
  {
    url: "cinematic-magic-returns-to-chennai-tonight",
    id: 5,

    EventsCalendarTitle: "CINEMATIC MAGIC RETURNS TO CHENNAI TONIGHT!",
    EventsCalendarContent: "Get ready, Chennai! Moonlight Cinema is back....",
    EventsCalendarMonth: "16 Aug 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Movie",
    image: "/images/HomePage-Images/Events/Newevents/CINEMATIC MAGIC.jpg",
    link: "",
    location: "",
    language: "Absolutely FREE",
    hours: "",
    ageLimit:
      "Bring along friends and family for a night filled with laughter, thrills, and unforgettable memories!",
    price: "₹299 onwards",
    aboutFull: `
      <p>Get ready, Chennai! Moonlight Cinema is back with its signature vibe, bringing the magic of movies under the open sky. Experience the joy of watching your favorite films with the cool sea breeze and the sounds of waves at Marina Beach.</p>
      <p>

      Whether it’s a casual outing, a fun date, or a family movie night, this is your chance to relax, unwind, and enjoy cinema like never before. Don’t miss this magical evening under the stars!
      </p>

      <p> <strong>Tip: </strong> Arrive early to grab the best spots and soak in the beach vibes before the show begins.</p>

      <ul>
  <li><strong>Date:</strong> Saturday, August 16th</li>
  <li><strong>Show starts:</strong> 5:00 PM</li>
  <li><strong>Entry:</strong> Absolutely FREE</li>
  <li><strong>Bring along:</strong> Friends and family for a night filled with laughter, thrills, and unforgettable memories!</li>
</ul>

      
      `,
  },
  {
    url: "gaming-thiruvizha",
    id: 6,
    metaTitleEvent: "Chennai Events/Gaming Thiruvizha in Chennai/Super Chennai",
    conicallinkEvent: "/eventsdetails/6",
    metaDescriptionEvent:
      "Chennai Events – Don’t miss Gaming Thiruvizha, Chennai’s vibrant gaming and pop‑culture festival with cosplay, anime, esports & more, August 30–31.",
    EventsCalendarTitle: "Gaming Thiruvizha",
    EventsCalendarContent:
      "Gaming Thiruvizha is India’s flagship pop culture...",
    EventsCalendarMonth: "30 Aug – 31 Aug, 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Games",
    image: "/images/HomePage-Images/Events/Newevents/game-thiruvizha.jpeg",
    link: "",
    location: "Chennai Trade Centre, Hall No. 3 (Old Building), Nandambakkam",
    language: "",
    hours: "",
    siteLink: "https://kynhood.com/event/689079e3f0401c4f2ef04413",
    ageLimit: "",
    price: "",
    aboutFull: `
  
      Gaming Thiruvizha is India’s flagship pop culture and esports festival — a one-of-a-kind celebration uniting gamers, cosplayers, anime fans, creators, and digital youth. Rooted in local tradition yet driven by global aspirations, it offers an immersive cultural experience that goes far beyond gaming tournaments.With your ticket, you can compete in BGMI, Valorant, EAFC, Street Fighter, and Chess, explore free play zones with GTA V, CS2, DOTA, and Among Us, and witness the U16 National Chess Championship. The festival also features a Cosplay Showdown leading to the Tokyo Game Show, anime and art zones, traditional South Indian games, photo booths, local street food, carnival snacks, exclusive merchandise, and exciting giveaways — making it the ultimate weekend of gaming and entertainment.`,
  },
  {
    url: "resin-art-workshop",
    id: 7,

    siteLink: "https://in.bookmyshow.com/events/resin-beach-art/ET00400406",
    EventsCalendarTitle: "Resin Art Workshop",
    EventsCalendarContent:
      "Unleash your creativity with the glossy magic of resin...",
    EventsCalendarMonth: "9–30 Aug, 2025",
    EventsCalendarTime: "1:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/70.jpg",
    link: "/events",
    location: "Dices And Drama: Chennai",
    language: "Bengali, English, Hindi, Kannada, Malayalam",
    hours: "1 Hour",
    ageLimit: "All age groups",
    price: "₹999",
    aboutFull: `
    Unleash your creativity with the glossy magic of resin.,
    In this hands-on workshop, you'll learn how to craft stunning coasters, trays, or abstract art using vibrant pigments, glitter, and textures.,
    Whether you're an artist or a curious beginner, walk away with your own masterpiece — shiny, unique, and made by you.,
    All materials provided. No experience needed. Just bring your imagination!,
    Limited seats. Book now & pour your heart into art!,
  `,
  },
  {
    url: "pichwai-painting-workshop",
    id: 8,
    EventsCalendarTitle: "Pichwai Painting Workshop",
    EventsCalendarContent:
      "Pichwai Painting Workshop: A Cultural Art Experience...",
    EventsCalendarMonth: "12, Aug 2025",
    EventsCalendarTime: "1:00 PM",
    EventsCalendarCategory: "Food and Drinks, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/146.jpg",
    link: "",
    location: "Third Wave Coffee - Inorbit Mall: Hyderabad",
    language: "Bengali, English, Hindi, Telugu",
    hours: "2 Hours",
    ageLimit: "All age groups",
    price: "₹799 onwards",
    aboutFull:
      "Pichwai Painting Workshop: A Cultural Art Experience – Join us for a captivating workshop where you’ll explore the traditional art of Pichwai painting, creating intricate designs and vibrant colors inspired by the rich heritage of Rajasthan. No prior experience is necessary as our expert instructors will guide you through essential techniques like brushwork, color blending, and incorporating symbolic elements. Enjoy creative freedom to experiment with colors, patterns, and motifs inspired by Lord Krishna’s life, resulting in unique artworks that are both visually appealing and culturally significant. Immerse yourself in a relaxing, stress-free atmosphere, with all materials including paints, brushes, and canvas provided, and leave with a delightful and unforgettable experience.",
  },
  {
    url: "kids-texture-workshop",
    id: 9,
    EventsCalendarTitle: "Kid's Texture Workshop",
    EventsCalendarContent:
      "Here's our beginner-friendly art workshop. What to Expect:....",
    EventsCalendarMonth: "17 Aug 2025",
    EventsCalendarTime: "2 Hours 30 minutes",
    EventsCalendarCategory: "Entertainment, Hobby Classes, Kids",
    image: "/images/HomePage-Images/Events/Newevents/145.jpg",
    link: "",
    location: "House of Games, Kilpauk: Chennai",
    language: "English, Tamil",
    hours: "2 Hours 30 minutes",
    ageLimit: "10yrs +",
    price: "₹1699",
    aboutFull:
      "Here’s our beginner-friendly art workshop where our instructor will guide you step-by-step, helping you comfortably navigate the creative process at your own pace. We provide all materials and offer flexible durations so you can work quickly or take your time. Enjoy a relaxed, creative space whether you’re coming solo, as a couple, with friends, or family, and get 50% of your venue payment back as food credit to enjoy delicious refreshments while you create. With 1:1, 2:1, or 3:1 formats, you’ll receive personalized attention in a focused, interactive environment. Leave the workshop not just with new skills, but with your own handmade masterpiece. Prior registration needed; for queries contact the café.",
  },
  {
    url: "foodathon-4-0",
    id: 10,
    siteLink: "https://reg.myraceindia.com/MRTS1/foodathon",
    EventsCalendarTitle: "Foodathon 4.0 ",
    EventsCalendarContent:
      "When music meets food, it turns into more than just an event...",
    EventsCalendarMonth: "28 Sep, 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Food Festival",
    image: "/images/HomePage-Images/Events/Newevents/168.jpg",
    link: "",
    location: "Chennai, Tamil Nadu",
    language: "",
    hours: "",
    ageLimit: "",
    price: "₹899 onwards",
    aboutFull: `
      <p>Foodathon 4.0 is India’s first awareness run dedicated to tackling food loss and food waste, organized by No Food Waste Chennai Region. Participants can choose from 2K, 5K, and 10K categories, making it suitable for runners of all levels. By joining this unique run, you’re not only promoting a healthier lifestyle but also contributing to a vital cause—reducing food waste in our communities.</p>
      
      <p>All registrants will receive a Dry Fit T-shirt, a finisher medal, an e-certificate, and access to refreshments, hydration points, and medical support throughout the event.</p>

      <p> <strong> Registration Fees – Foodathon 4.0 </strong></p>


      <p>2KM Non-Timed Run: ₹499 + processing fee</p>
      <p>5KM Timed Run: ₹699 + processing fee</p>
      <p>10KM Timed Run: ₹799 + processing fee</p>
      `,
  },
  {
    url: "chai-pe-charcha",
    id: 11,
    EventsCalendarTitle: "Chai Pe Charcha",
    EventsCalendarContent:
      "Sit around a table, in a cozy little space and enjoy...",
    EventsCalendarMonth: "1 Aug – 10 Aug, 2025",
    EventsCalendarTime: "6:20 PM",
    EventsCalendarCategory: "Dating, Meetups",
    image: "/images/HomePage-Images/Events/Newevents/143.jpg",
    link: "",
    location: "Third Wave Coffee - Inorbit Mall: Hyderabad",
    language: "English, Hindi",
    hours: "1 Hour",
    ageLimit: "16yrs +",
    price: "₹199 onwards",
    aboutFull:
      "Sit around a table, in a cozy little space and enjoy a cup of Chai while connecting with people through heart to hearts and other touching conversations. It's a cozy little meet up for people who just want to get to know others and have good conversations. If you want to make new friends over Chai, come join us.",
  },
  {
    url: "clay-miniature-magnet",
    id: 12,
    metaTitleEvent: "Creative Clay Magnet Workshop | Chennai Hands-On Session",
    conicallinkEvent: "/eventsdetails/12",
    metaDescriptionEvent:
      "Craft tiny clay magnets in a fun hands-on workshop! Learn sculpting, texturing, and magnet techniques, and take home your handmade creations. Aug 12–Sep 21.",
    siteLink:
      "https://in.bookmyshow.com/events/clay-miniature-magnet/ET00411633",
    EventsCalendarTitle: "Clay miniature magnet",
    EventsCalendarContent:
      "Clay Miniature Magnet Workshop Create Tiny Treasures with Magnetic.....",
    EventsCalendarMonth: "12 Aug – 21 Sep, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/142.jpg",
    link: "",
    location: "Dices And Drama: Chennai",
    language: "English, Hindi, Marathi, Bengali, Kannad...",
    hours: "2 Hours",
    ageLimit: "All age groups",
    price: "₹899",
    aboutFull:
      "Clay Miniature Magnet Workshop Create Tiny Treasures with Magnetic Appeal Join us for a hands-on clay miniature magnet workshop where you`ll learn the techniques to craft exquisite miniature sculptures that can be transformed into functional magnets. Under the guidance of our skilled instructor, you`ll explore the intricacies of working with clay on a small scale and adding magnetic elements. What you`ll learn:  Clay basics: Properties of clay, tools, and techniques. Miniature sculpting: Creating detailed features and forms. Texture and detail: Adding depth and realism to your creations. Magnetic integration: Incorporating magnets into your miniatures. Finishing touches: Applying protective coats and adding decorative elements. What you`ll need: Clay (provided by the workshop) Sculpting tools Magnets (provided by the workshop) Apron Workshop highlights: Personalized creations: Design unique miniature magnets. Step-by-step instruction: Learn from a skilled artist. Relaxing atmosphere: Enjoy a creative and enjoyable experience. Take-home masterpieces: Leave with your beautifully crafted miniature magnets. Register today and embark on a journey of miniature artistry with magnetic appeal!",
  },
  {
    url: "resin-keychain-workshop",
    id: 13,
    EventsCalendarTitle: "Resin keychain Workshop",
    EventsCalendarContent:
      "Here’s our beginner-friendly art workshop. Hands-On Guidance...",
    EventsCalendarMonth: "17 Aug 2025",
    EventsCalendarTime: "4:45 PM",
    EventsCalendarCategory: "Arts and Crafts, Business, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/141.jpg",
    link: "",
    location: "House of Games, Kilpauk: Chennai",
    language: "English, Tamil",
    hours: "1 Hour",
    ageLimit: "21yrs +",
    price: "₹1599",
    aboutFull:
      "Here’s our beginner-friendly art workshop. Hands-On Guidance: Our instructor will guide you step-by-step, helping you comfortably navigate the entire creative process at your own pace. All Materials Provided: We’ve got you covered with all the tools and materials. Flexible Duration: Some participants finish quickly, while others love to slow down and enjoy the process — both are welcome! Create at your own rhythm. Interactive Learning: This is not just a demo! Ask anything about resin — from safety to curing tips. We encourage questions throughout to help you gain real understanding and confidence. Relaxed, Creative Space: Whether youre coming solo, as a couple, with friends, or family, this session offers a calming, expressive escape from routine. Refreshments Provided: Get 50% of your venue payment back as food credit. Enjoy delicious refreshments while you create — its a treat for both your mind and taste buds! 1:1, 2:1, or 3:1 Format: We offer personalized attention with small group formats for a more focused and interactive experience. Take Your Art Home: Leave the workshop not just with new skills, but with your own handmade masterpiece! Prior registration needed. For queries contact cafe",
  },
  {
    url: "isai-sangamam-2025",
    id: 14,
    EventsCalendarTitle: "ISAI SANGAMAM 2025",
    EventsCalendarContent:
      "Get ready for an electrifying evening of music, emotion...",
    EventsCalendarMonth: "15 Aug 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Concerts, Music Festivals",
    image: "/images/HomePage-Images/Events/Newevents/140.jpg",
    link: "",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "",
    hours: "1 hour 30 minutes",
    ageLimit: "All age groups",
    price: "₹299 onwards",
    aboutFull:
      "Get ready for an electrifying evening of music, emotion, and pure talent at Isai Thiruvizha 2K25 – Live in Concert, powered by EventVibe and Musica Cura. Experience soulful live performances by stars from Zee Tamil SaReGaMaPa and Super Singer, alongside the sensational Musica Cura Band. Featured artists include Sanjana, Abinesh, Sujesh, Thanumitha, Sabari, Balaji, Manoj, Praveen, Vishwa, and Suhasini, with live band members Jai on cajon, Sanjay on guitar, and Joyson on keys. Join us for a night of unforgettable melodies. Book your tickets now!",
  },
  {
    url: "theatre-workshop-for-kids",
    id: 15,
    EventsCalendarTitle: "Theatre Workshop for Kids",
    EventsCalendarContent:
      "Theatre is a powerful space for children to truly be themselves....",
    EventsCalendarMonth: "17 Aug 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Masterclass, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/139.jpg",
    link: "",
    location: "IDAM - The Art & Cultural Space: Chennai",
    language: "English",
    hours: "3 Hours",
    ageLimit: "5yrs +",
    price: "₹1499",
    aboutFull:
      "Theatre is a powerful space for children to truly be themselves, helping them overcome fear, build patience, learn respect and responsibility, improve communication, and much more. Through exploring their emotional range with facial expressions like smiles, anger, and disgust, discovering the power of non-verbal communication through gestures and movement, learning to use their voices from natural sounds to spoken words, and building engaging stories through oral storytelling, children develop confidence and creativity. This workshop offers improved communication skills, stage presence, increased self-confidence through group interaction, exposure to the joy and energy of drama, creative expression through writing and performance, and simple techniques to build and tell compelling stories. Scheduled for 17th August, from 10 am to 1 pm at IDAM, Kodambakkam, it is designed for children aged 5 to 13 years and limited to 15 participants. Join us for a week of discovery, creativity, and fun where children grow through drama and storytelling!",
  },
  {
    url: "resin-beach-art",
    id: 16,
    EventsCalendarTitle: "Resin Beach Art",
    EventsCalendarContent:
      "Dive into the captivating world of resin art with our hands-on......",
    EventsCalendarMonth: "12 Aug 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/138.jpg",
    link: "",
    location: "Dices And Drama: Chennai",
    language: "Bengali, English, Hindi, Kannada, Malaya...",
    hours: "1 Hour",
    ageLimit: "All age groups",
    price: "₹1299 onwards",
    aboutFull:
      "Dive into the captivating world of resin art with our hands-on Resin Beach Art workshop! Perfect for both beginners and experienced artists, this event is designed to unlock your creative potential through the vibrant and versatile medium of resin.Under the guidance of experienced instructors, you’ll learn the fundamentals of working with resin, including safety tips, mixing techniques, color blending, and molding. Our focus will be on creating stunning beach-themed art pieces, capturing the essence of the ocean with waves, sand, and sea-inspired colors.By the end of the session, you’ll have crafted your own mesmerizing piece of resin beach art to take home, whether it’s a beautiful seascape, a beach-themed tray, or an abstract ocean-inspired masterpiece. Join us for an afternoon of creativity, relaxation, and fun, and discover the endless possibilities that resin beach art offers!",
  },
  {
    url: "art-date",
    id: 17,
    EventsCalendarTitle: "Art Date",
    EventsCalendarContent:
      "Looking for a creative way to connect with someone new?....",
    EventsCalendarMonth: "12 Aug 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/137.jpg",
    link: "",
    location: "Dices And Drama: Chennai",
    language: "Bengali, English, Hindi, Kannada, Malaya...",
    hours: "2 Hours",
    ageLimit: "All age groups",
    price: "₹1599",
    aboutFull:
      "Looking for a creative way to connect with someone new? Join us for the “Small World Art Date,” where art meets serendipity! Participants will be paired up with their partner to embark on an exciting, collaborative art activity. Whether you’re a seasoned artist or just looking to have some fun, this event is designed to spark creativity and forge connections. Expect laughter, inspiration, and perhaps a masterpiece or two! Come with an open mind and leave with a new friend—or maybe something more.",
  },
  {
    url: "sunburn-weekend-ottello-goa",
    id: 18,
    EventsCalendarTitle: "SUNBURN WEEKEND - OTTELLO GOA",
    EventsCalendarContent:
      "This Monsoon gonna be different in Goa. An unforgettable experience over....",
    EventsCalendarMonth: "14 - 16 Aug 2025",
    EventsCalendarTime: "9:00 PM",
    EventsCalendarCategory: "Concerts, Music Shows, Afro, Disco, EDM",
    image: "/images/HomePage-Images/Events/Newevents/136.jpg",
    link: "",
    location: "Ottello: Goa",
    language: "English",
    hours: "12 Hours",
    ageLimit: "",
    price: "₹1800 onwards",
    aboutFull:
      "This Monsoon gonna be different in Goa. An unforgettable experience over the private Lake with this mesmerising lineup. We gonna take care of your party animal all night along. Expect some elite techno heads and su real vibes.",
  },
  {
    url: "pizza-playdate",
    id: 19,
    EventsCalendarTitle: "Pizza Playdate",
    EventsCalendarContent:
      "Join us for a delightful Pizza Playdate at Hibiscus! Perfect....",
    EventsCalendarMonth: "17 Aug 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Food and Drinks, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/135.jpg",
    link: "",
    location: "Hibiscus Cafe: Chennai",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "",
    price: "₹799",
    aboutFull:
      "Join us for a delightful Pizza Playdate at Hibiscus! Perfect for ages 5 and up, this hands-on workshop promises fun for all. Allow your little ones to experience the delight of crafting tasty and nutritious pizzas alongside our skilled chefs. They will discover a variety of dough and sauce recipes, as well as learn techniques for preparing and cooking toppings. Don’t miss this cheesy adventure! Our chefs will provide expert guidance throughout the entire process, from rolling out the dough to baking their ideal pizza!",
  },
  {
    url: "cake-baking-and-frosting-workshop",
    id: 20,
    EventsCalendarTitle: "Cake Baking and Frosting Workshop",
    EventsCalendarContent:
      "Our workshop offers comprehensive learning for aspiring bakers,....",
    EventsCalendarMonth: "13 Aug 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Education, Food and Drinks, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/134.jpg",
    link: "",
    location: "Reema's Swad Cooking Classes: Chennai",
    language: "English",
    hours: "10 Hours",
    ageLimit: "16yrs +",
    price: "₹4000",
    aboutFull:
      "Our workshop offers comprehensive learning for aspiring bakers, covering baking basics such as understanding baking science, accurate ingredient measurement, and mastering oven preheating and temperature settings. You’ll learn how to use an OTG effectively, including selecting trays, molds, and liners, and managing temperature and timing. Master techniques for baking moist and fluffy cupcakes and cakes in a variety of flavors like vanilla, pineapple, strawberry, butterscotch, chocolate, tutti frutti, orange, and litchi. Learn frosting techniques including rosettes, swirls, and color/flavor customization for different themes. Explore signature cakes and pastries such as pineapple pastry, black forest pastry, chocolate truffle with ganache, photo cakes, Barbie doll cakes, choco lava cakes, red velvet cake, and blueberry cake. Discover decorating techniques like elegant feather and drip designs, edible flowers, sprinkles, and creative accents, while mastering the use of piping bags, spatulas, and scrapers. By the end of the workshop, you’ll have the skills and confidence to bake and decorate cakes for any occasion. The class highlights include practical, hands-on sessions, personal attention to each student, printed recipe notes, exclusive offline classes for girls and ladies, all materials provided, and an online option also available.",
  },
  {
    url: "hand-built-pottery",
    id: 21,
    EventsCalendarTitle: "Hand Built Pottery",
    EventsCalendarContent:
      "Step into the world of tactile creativity at Clay Play...",
    EventsCalendarMonth: "12 Aug 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/133.jpg",
    link: "",
    location: "Dices And Drama: Chennai",
    language: "Bengali, English, Hindi, Kannada, Malaya...",
    hours: "1 Hour",
    ageLimit: "All age groups",
    price: "₹899 onwards",
    aboutFull:
      "Step into the world of tactile creativity at Clay Play Day, an immersive event designed for you to explore the joys of pottery without boundaries. Perfect for beginners and enthusiasts alike, this event invites you to dive into hand-built clay modeling in a free-form, unguided environment. Get your hands dirty and let your creativity flow as you shape clay using only your hands, knives, and brushes—without structured guidance. All supplies, including high-quality clay and sculpting tools, are provided; just bring your imagination and willingness to explore. Whether you want to unwind, try a new hobby, or spend a day doing something different, Clay Play Day offers a meditative escape into the art of hand-building with clay. Please note, this is not a wheel pottery workshop.",
  },
  {
    url: "one-direction-tribute-echoes-of-payno",
    id: 22,
    metaTitleEvent:
      "Liam Payne Show / One Direction Tribute / Events in Chennai",
    conicallinkEvent: "/eventsdetails/22",
    metaDescriptionEvent:
      "Calling all Directioners for the One-Direction-Tribute in Chennai on Aug 30 at 2:30 PM—Liam Payne vibes, music, and more. Tickets ₹450. Book now!",
    siteLink:
      "https://in.bookmyshow.com/events/one-direction-tribute-directioners-rave/ET00452486",
    EventsCalendarTitle: "ONE DIRECTION TRIBUTE -ECHOES OF PAYNO",
    EventsCalendarContent:
      "It’s Liam Day, babe—our guardian angel is turning a year older!...✨",
    EventsCalendarMonth: "30 Aug 2025",
    EventsCalendarTime: "2:30 PM",
    EventsCalendarCategory: "Club Gigs, Music Shows, Pop",
    image: "/images/HomePage-Images/Events/Newevents/132.jpg",
    link: "",
    location: "Venue To Be Announced: Chennai",
    language: "English",
    hours: "5 Hours",
    ageLimit: "All age groups",
    price: "₹450",
    aboutFull:
      "It’s Liam Day, babe—our guardian angel is turning a year older! This August 30, we’re celebrating Daddy Direction—the calm in our chaos, the one who kept the doors locked and our hearts full. Get ready for 4 hours of dancing, soft boy tears, and screaming every Liam line like it’s 2013 again—from Little Things to Strip That Down, we’re giving him the love he’s always given us. Venue to be announced, starting at 2:30 PM (be on time—Liam’s watching). Tickets are ₹450 with no cover charge. It’s giving Tumblr moodboards, “Hi angel” texts, plaid shirts, and that one Liam smile that saved your life. You coming or what?",
  },
  {
    url: "midweek-masala-weekday-comedy-show",
    id: 23,

    EventsCalendarTitle: "Midweek Masala - Weekday comedy show",
    EventsCalendarContent:
      "Waiting for the weekend for some good comedy? Well,...",
    EventsCalendarMonth: "13 Aug 2025",
    EventsCalendarTime: "8:30 PM",
    EventsCalendarCategory: "Stand up Comedy, Comedy Shows, Comedy",
    image: "/images/HomePage-Images/Events/Newevents/131.jpg",
    link: "",
    location: "Trinity Studio: Kodambakkam",
    language: "English, Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "16yrs +",
    price: "₹200 onwards",
    aboutFull:
      "Waiting for the weekend for some good comedy? Well, you don't have to! We present you weekday comedy show where best comics of Chennai do their new & working material.",
  },
  {
    url: "the-hindu-made-of-chennai",
    id: 24,
    metaTitleEvent:
      "Super Chennai / Music & Food Festival / Flavours & Festive Vibes",
    conicallinkEvent: "/eventsdetails/91",
    metaDescriptionEvent:
      "Mark your calendar for 8 Sept! This free-entry festival brings soulful music, mouthwatering food, and Chennai’s vibrant spirit together. Register early to join!",
    siteLink:
      "https://www.instagram.com/thehindu_madeofchennai/reel/DNcjjafgVvo/?hl=en",
    EventsCalendarTitle: "The Hindu – Made of Chennai",
    EventsCalendarContent:
      "When music meets food, it turns into more than just an event...",
    EventsCalendarMonth: "13 – 14 Nov, 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Music, Concerts",
    image: "/images/HomePage-Images/Events/Newevents/169.jpg",
    link: "",
    location: "YMCA, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    price: "₹899 onwards",
    aboutFull: `
      <p>When music meets food, it turns into more than just an event — it becomes a true celebration of Chennai! With soulful tunes, mouthwatering flavours, and the city’s vibrant spirit, this festival brings Chennai alive like never before.</p>
      
      <p>Organised By</p>
      <p>The Hindu – Made of Chennai</p>
      <p>Entry & Registration
Entry is free for all, but prior registration is mandatory. Registrations open on 8 September — secure your spot early and don’t miss this grand Chennai celebration!</p>
      `,
  },
  {
    url: "reema-swad-cooking-classes",
    id: 25,
    EventsCalendarTitle: "Reema Swad Cooking Classes",
    EventsCalendarContent:
      "Reema V Jain is an avid and passionate chef who....",
    EventsCalendarMonth: "16 Aug, 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/129.jpg",
    link: "/events",
    location: "Reema's Swad Cooking Classes: Chennai",
    language: "English",
    hours: "3 Hours",
    ageLimit: "16yrs +",
    price: "Price Not Specified",
    aboutFull:
      "Reema V Jain is an avid and passionate chef who has been teaching cooking and baking to women. She has had students from more than 12 countries and 70+ cities and has conducted over 550 workshops. She has also been featured in leading newspapers and conducts online workshops for more than 30 types of courses.",
  },

  {
    url: "chalta-hai-comedy",
    id: 26,
    EventsCalendarTitle: "Chalta Hai Comedy",
    EventsCalendarContent:
      "Stories from his childhood home to his first MNC job after...",
    EventsCalendarMonth: "15 Aug, 2025 ",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/128.jpg",
    link: "/events",
    location: "Multiple Venues",
    language: "English, Hindi",
    hours: "",
    ageLimit: "",
    price: "Price Not Specified",
    aboutFull:
      "Stories from his childhood home to his first MNC job after graduation, this show gets more personal, more awkward and even more hilarious. Is show ko dekhne k baad aap samjah jayengey ki embarrassing aur tragic situations mei fasna Aakash ka daily ka kaam hai. So get ready to LOL and fall off your chairs because you are signing up for something totally worth it. “Ye about the show ka paragraph likhna apne ek ghante ka show banana se bhi zada tough lagta hai” : Aakash",
  },
  {
    url: "daily-ka-kaam-hai-by-aakash-gupta",
    id: 27,
    EventsCalendarTitle: "Daily Ka Kaam Hai By Aakash Gupta",
    EventsCalendarContent:
      "From stories about his childhood home to his first MNC job...",
    EventsCalendarMonth: "17 Aug, 2025 ",
    EventsCalendarTime: "Not Specified",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/127.jpg",
    link: "/events",
    location: "Multiple Venues",
    language: "English, Hindi",
    hours: "1 hour 30 minutes",
    ageLimit: "16yrs +",
    price: "Price Not Specified",
    aboutFull:
      "From stories about his childhood home to his first MNC job after graduation, this show gets increasingly personal, awkward, and hilarious. After watching it, you’ll realize that getting caught in embarrassing and tragic situations is just a part of Aakash’s everyday life. So get ready to laugh out loud and maybe even fall off your chair, because you’re signing up for an experience that’s totally worth it. As Aakash says, “Writing this show’s description feels even tougher than creating my one-hour performance.”",
  },
  {
    url: "oriole-entertainment-live",
    id: 28,
    EventsCalendarTitle: "Oriole Entertainment Live",
    EventsCalendarContent:
      "Oriole Entertainment is the pioneer of Tier 2 and Tier 3...",
    EventsCalendarMonth: "12 Aug, 2025",
    EventsCalendarTime: "Not Specified",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/126.jpg",
    link: "/events",
    location: "Multiple Venues",
    language: "English, Hindi",
    hours: "Not Specified",
    ageLimit: "Not Specified",
    price: "Price Not Specified",
    aboutFull:
      "Oriole Entertainment is the pioneer of Tier 2 and Tier 3 city comedy shows. They have been dedicated to making people laugh since 2017 and plan to do it for the rest of their lives. They are most popularly known as the house of Anubhav Singh Bassi and Harsh Gujral. Their shows have made people chuckle in cities like Agra, Gurugram, Lucknow, Kanpur, Dehradun and many more. Oriole Entertainment Pvt Ltd was founded by Ankur Bhargava.",
  },
  {
    url: "comedy-ladder",
    id: 29,
    EventsCalendarTitle: "Comedy Ladder",
    EventsCalendarContent:
      "Comedy Ladder is the mothership of everything comedy. Founded in...",
    EventsCalendarMonth: "15 Aug, 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/125.jpg",
    link: "/events",
    location: "The Integral Space: Mumbai",
    language: "English, Hindi",
    hours: "",
    ageLimit: "",
    price: "Price Not Specified",
    aboutFull:
      "Comedy Ladder is the mothership of everything comedy. Founded in 2016 and now in its 7th year, Comedy Ladder has built a strong reputation with shows across India in venues such as NCPA Mumbai, Integral Space Mumbai, Jeff Goldberg Studio Mumbai, Happy High Delhi, and many more. It is not just a launchpad but also a stage for comics to perform their one-hour solo shows. Comedy Ladder collaborates with some of the biggest names in the industry including Aditi Mittal, Jeeya Sethi, Shreeja Chaturvedi, Sumaira Shaikh, Niv Prakasam, Sumukhi Suresh, Prashasti Singh, Kajol Srinivasan, Sonali Thakker, Pavitra Shetty, Gurleen Pannu, Sherya Priyam Roy, Biswa Kalyan Rath, Siddharth Dudeja, Kunal Kamra, Chirag Punjwani, Ashish Dash, Anand Reghu, Shridhar V, Navin Noronha, and many more. With over 2000 shows, Comedy Ladder is a household name in the comedy industry.",
  },
  {
    url: "summer-camp-for-kids",
    id: 30,
    EventsCalendarTitle: "Summer Camp for Kids",
    EventsCalendarContent:
      "Hamleys play breathes in a whole new life to the traditional....",
    EventsCalendarMonth: "11 Aug, 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Kids",
    image: "/images/HomePage-Images/Events/Newevents/124.jpg",
    link: "/events",
    location: "Online",
    language: "English, Hindi",
    hours: "1 Hour",
    ageLimit: "3-10 yrs",
    price: "₹3000",
    aboutFull:
      "Hamleys play breathes in a whole new life to the traditional idea of play & infuses the liveliness of outdoors and the never-ending elusiveness of the fantasies of a child’s mind. Welcome to the world of Mr & Mrs. Hopper who will take you through their private garden that is filled with adventure. The garden includes the Musical Wall, Ball Pool, Slides, Scarf shooters, Sand Play, Rock climbing, Water Play & many more fun-filled activities. It also has a dedicated space for Storytelling & DIY activities. ",
  },
  {
    url: "magic-beans-online-kids-workshops",
    id: 31,
    EventsCalendarTitle: "Magic Beans Online Kids Workshops",
    EventsCalendarContent:
      "Magic Beans is an activity centre, daycare & toy library....",
    EventsCalendarMonth: "12 Aug, 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/123.jpg",
    link: "/events",
    location: "Magic Beans - Kemps Corner, Mumbai",
    language: "English",
    hours: "45 Minutes",
    ageLimit: "",
    price: "Price Not Specified",
    aboutFull:
      "Magic Beans is an activity centre, daycare & toy library, based in Mumbai, catering specifically to the development of 1 year to 6 year olds.",
  },
  {
    url: "hamleys-play-and-playzone",
    id: 32,
    EventsCalendarTitle: "Hamleys Play & Hamleys Playzone",
    EventsCalendarContent:
      "Breathing in a whole new life to the traditional idea of play,...",
    EventsCalendarMonth: "11 Aug, 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Kids",
    image: "/images/HomePage-Images/Events/Newevents/122.jpg",
    link: "/events",
    location: "Multiple Venues",
    language: "English, Hindi",
    hours: "1 Hour",
    ageLimit: "Kids",
    price: "Price Not Specified",
    aboutFull:
      "Breathing in a whole new life to the traditional idea of play, Hamleys play Area infuses the liveliness of the outdoor and the never-ending elusiveness of the fantasies of a child’s mind. ",
  },
  {
    url: "sid-sriram-live-in-concert-chennai",
    id: 33,
    metaTitleEvent:
      "Sid Sriram Live / Soulful Music & Magic On Stage / Super Chennai",
    conicallinkEvent: "/eventsdetails/91",
    metaDescriptionEvent:
      "Witness Sid Sriram’s magic! From soft melodies to electrifying jams, enjoy a soulful night where every note connects hearts and creates lasting memories.",
    siteLink:
      "https://www.district.in/events/sid-sriram-live-in-concert-chennai-november-2025-buy-tickets",
    EventsCalendarTitle: "Sid Sriram Live in Concert | Chennai",
    EventsCalendarContent:
      "Some voices don’t just sing, they heal — and Sid Sriram’s voice is...",
    EventsCalendarMonth: "29 Nov, 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Music, Concerts",
    image: "/images/HomePage-Images/Events/Newevents/171.jpg",
    link: "",
    location: "YMCA, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    price: "₹899 onwards",
    aboutFull: `
      <p>Some voices don’t just sing, they heal — and Sid Sriram’s voice is one of them. His concerts are more than just stage performances; they are soulful journeys where every song feels personal, yet connects to thousands at once. With his unique ability to blend classical depth, contemporary energy, and heartfelt emotions, Sid creates a musical atmosphere that feels raw, pure, and magical. The way his voice flows between languages and genres makes each moment unforgettable, touching both the heart and soul.</p>
      
      <p>From gentle melodies that bring goosebumps to powerful live jams that electrify the crowd, every note from Sid Sriram is an experience on its own. His music is not just heard, it is felt — in the silence between beats, in the harmony of emotions, and in the collective energy of the audience singing along. Step into this unforgettable night and witness how sound transforms into emotion, rhythm turns into memory, and a concert becomes a celebration of music itself. ✨</p>
      `,
  },
  {
    url: "dreamcatcher-workshop",
    id: 34,
    EventsCalendarTitle: "Dreamcatcher Workshop",
    EventsCalendarContent:
      "Here’s our beginner-friendly art workshop where our instructor...",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/120.jpg",
    link: "/events",
    location: "House of Games, Kilpauk, Chennai",
    language: "English, Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "All age groups",
    price: "₹1599",
    aboutFull:
      "Here’s our beginner-friendly art workshop where our instructor will guide you step-by-step, helping you comfortably navigate the entire creative process at your own pace. All materials and tools are provided so you can focus on your art. The workshop offers flexible duration—some participants finish quickly, while others take their time; all are welcome to create at their own rhythm. Whether you come solo, as a couple, with friends, or family, enjoy a relaxed and creative space that offers a calming, expressive escape from routine. Refreshments are provided with 50% of your venue payment returned as food credit, making it a treat for both your mind and taste buds. Personalized attention is available in small group formats of 1:1, 2:1, or 3:1 for a focused and interactive experience. Leave the workshop not just with new skills but with your own handmade masterpiece. Prior registration is needed; for queries, please contact the café.",
  },
  {
    url: "paal-payasam-live",
    id: 35,
    EventsCalendarTitle: "Paal Payasam Live",
    EventsCalendarContent:
      "Join us for a delightful evening with 'Paal Payasam Live....",
    EventsCalendarMonth: "15 Aug, 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/119.jpg",
    link: "/events",
    location: "Arena - The Art Experience, Chennai",
    language: "Tamil, English",
    hours: "1 hour 30 minutes",
    ageLimit: "All age groups",
    price: "₹399 onwards",
    aboutFull:
      "Join us for a delightful evening with 'Paal Payasam Live' - a band of young musicians from Chennai. Hosted by Arena - The Art Experience, ECR's brand new cultural hub, this event features a menu of live music paired with a side of theatrical flair. We'll be serving up tributes to the legendary musicians of Tamil cinema alongside our own original compositions, all spiced with drama and garnished with comedy. What are you waiting for? Grab your tickets now!",
  },
  {
    url: "chennai-bus-treasure-hunt",
    id: 36,
    siteLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdklrpjtrzRgr_LhmH_zXf4tfu70NJZ18nuUd9vObd03KvT1w/viewform",
    EventsCalendarTitle: "Chennai Bus Treasure Hunt",
    EventsCalendarContent:
      "Ever wondered what beauty lies just beneath the surface?....",
    EventsCalendarMonth: "30 Aug, 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Treasure Hunt",
    image: "/images/HomePage-Images/Events/Newevents/170.jpg",
    link: "",
    location: " MTC Headquarters, Pallavan Salai, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    price: "₹899 onwards",
    aboutFull: `
      <p>Get ready, Chennai! 🎉 The MTC Bus Treasure Hunt is back this Madras Month, bringing you an exciting adventure across the city. Starting from the iconic MTC Headquarters (Pallavan House), participants will embark on a fun-filled treasure hunt packed with clues, challenges, and surprises along the way.</p>
      
      <p>It’s not just about the thrill of the chase — there are amazing cash prizes waiting for the winners. Whether you’re in it for the fun, the challenge, or the reward, this event promises to be one-of-a-kind. Bring your team spirit, quick thinking, and love for Chennai as you join this unique celebration.</p>
      
      <p><strong>🏆 Cash Prizes Await:</strong></p>
      <p><strong>🥇 1st Prize – ₹10,000</strong></p>
      <p><strong>🥈 2nd Prize – ₹6,000</strong></p>
      <p><strong>🥉 3rd Prize – ₹4,000</strong></p>
      <p>👉 To register, simply scan the QR code and secure your spot in the hunt!</p>
    `,
  },
  {
    url: "msv-ninaithale-inikkum",
    id: 37,
    EventsCalendarTitle: "MSV - Ninaithale Inikkum",
    EventsCalendarContent:
      "Naveen Fine Arts proudly presents 'Ninaithale Inikkum,' a grand musical...",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/117.jpg",
    link: "/events",
    location: "Raja Annamalai Mandram, Chennai",
    language: "Tamil",
    hours: "3 Hours",
    ageLimit: "All age groups",
    price: "₹300 onwards",
    aboutFull:
      "Naveen Fine Arts proudly presents 'Ninaithale Inikkum,' a grand musical tribute to the legendary M.S. Viswanathan. Get ready for a mesmerizing evening of timeless melodies as the playback singer Malathi Lakshman takes the stage to recreate the magic of MSV's unforgettable tunes. This event promises to be a soul-stirring musical experience that will transport you back to the golden era of Tamil music, accompanied by the Ram in Paadum Vaanampaadi Orchestra.",
  },
  {
    url: "scratch-pottery",
    id: 38,
    siteLink: "https://in.bookmyshow.com/events/sgraffito-pottery/ET00449867",
    EventsCalendarTitle: "Scratch Pottery",
    EventsCalendarContent:
      "Ever wondered what beauty lies just beneath the surface?....",
    EventsCalendarMonth: "12 Aug – 19 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/147.jpg",
    link: "",
    location: "Small World: S.T. Bed, Koramangala",
    language: "English, Hindi",
    hours: "2 Hours",
    ageLimit: "All age groups",
    price: "₹899 onwards",
    aboutFull:
      "Ever wondered what beauty lies just beneath the surface? Join us for a hands-on Sgraffito Workshop, where you’ll carve through layers of color to reveal stunning contrasts and patterns. This ancient art form, used in pottery, murals, and design, teaches us that sometimes uncovering depth takes just a little scratch. You’ll learn how to layer pigments or slips, master techniques to etch your own designs, and explore the philosophy of “subtracting to reveal.” Whether you’re a seasoned creator or a curious beginner, this workshop is all about mindfulness, expression, and uncovering hidden beauty.",
  },
  {
    url: "crochet-workshop",
    id: 39,
    EventsCalendarTitle: "Crochet Workshop",
    EventsCalendarContent:
      "Happy Crocheting! ❤️ Here’s our beginner-friendly....",
    EventsCalendarMonth: "17 Aug 2025",
    EventsCalendarTime: "4:30 PM",
    EventsCalendarCategory: "Arts and Crafts, Home Decor, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/148.jpg",
    link: "",
    location: "House of Games, Kilpauk: Chennai",
    language: "English, Tamil",
    hours: "2 Hours",
    ageLimit: "12yrs +",
    price: "₹1999",
    aboutFull:
      "Happy Crocheting! ❤️ Here’s our beginner-friendly art workshop where our instructor will guide you step-by-step, helping you comfortably navigate the creative process at your own pace. All materials are provided, and you can work at a flexible pace — finish quickly or take your time. Enjoy a relaxed, creative space whether you come solo, as a couple, with friends, or family, and get 50% of your venue payment back as food credit to enjoy delicious refreshments while you create. With 1:1, 2:1, or 3:1 formats, you’ll receive personalized attention in a small group setting, and leave with new skills and your own handmade masterpiece. Prior registration needed; for queries contact the café.",
  },
  {
    url: "epic-date-pass",
    id: 40,
    metaTitleEvent: "Events in Chennai / Epic Date Pass / Super Chennai",
    conicallinkEvent: "/eventsdetails/40",
    metaDescriptionEvent:
      "Looking for exciting events in Chennai? Don’t miss the Epic Date Pass on 30 Aug at 3 PM—an immersive experience for fun seekers. Entry ₹2999.Book Now.",
    siteLink: "https://in.bookmyshow.com/events/epic-date-pass/ET00429104",
    EventsCalendarTitle: "Epic Date Pass",
    EventsCalendarContent:
      "Discover the magic of connection with our all-date event...",
    EventsCalendarMonth: "16 Aug – 31 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/114.jpg",
    link: "/events",
    location: "Dices And Drama, Chennai",
    language: "English",
    hours: "5 Hours",
    ageLimit: "All age groups",
    price: "₹2999",
    aboutFull:
      "Discover the magic of connection with our all-date event pass! Join us for a day packed with laughter, inspiration, and camaraderie at Small World, where a tapestry of unique events and experiences weave together stories and create lasting bonds. Get access to all our in-house date events like baking, canvas painting, candle making, pottery, and more, engaging in activities that spark your creativity and challenge your comfort zone. The Epic Date Pass includes a parade of interactive and heartwarming artistic, musical, and social events, offering endless moments of joy as you connect with fellow explorers. Let’s create a mosaic of memories, spark meaningful connections, and share stories that we’ll laugh about for years to come. Limited spots available for this intimate gathering—where every moment celebrates togetherness.",
  },
  {
    url: "theatre-workshop-for-kids",
    id: 41,
    EventsCalendarTitle: "Theatre Workshop for Kids",
    EventsCalendarContent:
      "Theatre is a powerful space for children to truly...",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/113.jpg",
    link: "/events",
    location: "IDAM - The Art & Cultural Space, Chennai",
    language: "English",
    hours: "3 Hours",
    ageLimit: "5yrs +",
    price: "₹1499",
    aboutFull:
      "Theatre is a powerful space for children to truly be themselves. It helps them overcome fear, build patience, learn respect and responsibility, improve communication, and much more. Whether telling a story, speaking to an audience, or becoming a character, theatre opens up a world of possibilities. Children will explore their emotional range through facial expressions, discover the power of non-verbal communication through gestures and movement, learn to use their voices confidently, and build engaging stories through oral storytelling. Workshop benefits include improved communication and stage presence, increased self-confidence through group interaction, exposure to the joy and energy of drama, creative expression through writing and performance, and simple techniques for storytelling. The workshop will be held at IDAM, Kodambakkam, on 17th August from 10 am to 1 pm, for children aged 5 to 13 years, limited to 15 participants. Join us for a day of discovery, creativity, and fun where children grow through drama and storytelling!",
  },
  {
    url: "comedy-sabha-by-tanglish-comedy-Standup-Comedy-in-Chennai",
    id: 42,
    metaTitleEvent:
      "Comedy Sabha / Tanglish Comedy / Standup Comedy in Chennai",
    conicallinkEvent: "/eventsdetails/42",
    metaDescriptionEvent:
      "Comedy Sabha by Tanglish Comedy brings Tamil‑English Tanglish standup to Chennai. Laughs, sketches, and high energy—don’t miss this mini‑show!",
    siteLink:
      "https://in.bookmyshow.com/events/comedy-sabha-presented-by-tanglishcomedy/ET00342723",
    EventsCalendarTitle: "Comedy Sabha by @tanglishcomedy",
    EventsCalendarContent:
      "Standup comedy you've watched on YouTube, reels, TV,....",
    EventsCalendarMonth: "24 Sep – 29 Oct, 2025",
    EventsCalendarTime: "7:30 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/112.jpg",
    link: "/events",
    location: "Superstar Pizza, Besant Nagar, Chennai",
    language: "Tamil, English",
    hours: "1 hour 15 minutes",
    ageLimit: "8yrs +",
    price: "₹150",
    aboutFull:
      "Standup comedy you've watched on YouTube, reels, TV, and even OTT apps — but have you experienced it live, in front of an energetic audience, laughing and clapping along? If you want to see that, come to the mini-show Comedy Sabha! Comedy Sabha is a 75-minute comedy mini-show featuring a mix of standup and sketch comedy in Tamil, English, and Tanglish. The show includes new, experienced, and professional comedians performing one after another, hosted by a lively MC who keeps the energy high throughout. It’s an electrifying atmosphere where all your mid-week work-life stress melts away. For just 150 rupees, enjoy a pakka paisa vasool experience on a Wednesday! Book now!",
  },
  {
    url: "midweek-masala-weekday-comedy-show",
    id: 43,
    EventsCalendarTitle: "Midweek Masala - Weekday comedy show",
    EventsCalendarContent: "Waiting for the weekend for some good comedy?....",
    EventsCalendarMonth: "13 Aug, 2025",
    EventsCalendarTime: "8:30 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/111.jpg",
    link: "/events",
    location: "Trinity Studio, Kodambakkam",
    language: "English, Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "16yrs +",
    price: "₹200 onwards",
    aboutFull:
      "Waiting for the weekend for some good comedy? Well, you don’t have to! We present you weekday comedy show where best comics of Chennai do their new & working material. (Limited car parking at the venue please prefer bike or public transport)",
  },
  {
    url: "candle-making-workshop",
    id: 44,
    EventsCalendarTitle: "Candle Making Workshop",
    EventsCalendarContent:
      "A creative workshop to learn how to make beautiful, handcrafted candles using various techniques and styles.",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/110.jpg",
    link: "/events",
    location: "Hibiscus Cafe, Chennai",
    language: "English, Tamil",
    hours: "2 Hours",
    ageLimit: "12yrs +",
    price: "₹1199",
    aboutFull:
      "Learn how to make beautiful handmade candles at our candle making workshop! You'll have the opportunity to create several candles, experimenting with different techniques and styles. Our expert instructor will provide tips and tricks to ensure your candles burn evenly and smell amazing. By the end of the session, you'll take home your handcrafted creations and the skills to continue making candles on your own!",
  },
  {
    url: "macrame-workshop",
    id: 45,
    EventsCalendarTitle: "Macrame Workshop",
    EventsCalendarContent:
      "Here’s our beginner-friendly art workshop designed...",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/109.jpg",
    link: "/events",
    location: "House of Games, Kilpauk, Chennai",
    language: "English, Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "10yrs +",
    price: "₹1599",
    aboutFull:
      "Here’s our beginner-friendly art workshop designed to offer hands-on guidance with an instructor who will walk you step-by-step through the creative process at your own pace. All materials and tools are provided so you can focus fully on your art. The duration is flexible—whether you finish quickly or prefer to take your time, you can create at your own rhythm. This relaxed, creative space welcomes solo attendees, couples, friends, or families, providing a calming and expressive escape from routine. Refreshments are included, with 50% of your venue payment returned as food credit, making it a treat for both mind and taste buds. Personalized attention is offered in small group formats of one-on-one, two-on-one, or three-on-one to enhance interaction and focus. You’ll leave the workshop not only with new skills but also with your own handmade masterpiece. Prior registration is needed; for queries, please contact the café.",
  },
  {
    url: "musical-queens-celebrating-7-golden-voices",
    id: 46,
    EventsCalendarTitle: "MUSICAL QUEENS - Celebrating 7 Golden Voices",
    EventsCalendarContent: "ABBAS Cultural presents 'MUSICAL QUEENS....",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/108.jpg",
    link: "/events",
    location: "Vani Mahal, Chennai",
    language: "Tamil",
    hours: "2 hours 30 minutes",
    ageLimit: "5yrs +",
    price: "₹300 onwards",
    aboutFull:
      "ABBAS Cultural presents 'MUSICAL QUEENS - CELEBRATING 7 GOLDEN VOICES OF TAMIL CINEMA.' Join for a soul-stirring musical celebration honoring the legendary female playback singers P. Susheela, L.R. Eswari, S. Janaki, Vani Jayaram, Jency, Swarnalatha & K.S. Chitra, whose voices have become eternal treasures in our hearts. The event is a tribute to their timeless songs and contributions to Tamil cinema music.",
  },
  {
    url: "vikkals-comedy-cafe",
    id: 47,
    EventsCalendarTitle: "Vikkals Comedy Cafe",
    EventsCalendarContent: "Open mic nights are where OG standup comics.....",
    EventsCalendarMonth: "14 Aug, 2025",
    EventsCalendarTime: "8:30 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/107.jpg",
    link: "/events",
    location: "The Board Room, Anna Nagar, Chennai",
    language: "Tamil, English",
    hours: "1 hour 30 minutes",
    ageLimit: "16yrs +",
    price: "₹200 onwards",
    aboutFull:
      "Open mic nights are where OG standup comics and amateur open mic-ers come together to try out their new jokes. It’s a stage where you can spill your emotions with humor. Rs. 100 from the ticket price can be reimbursed on food and beverages as sides for the mains—entertainment included. Tickets are for audience only; performers must register separately.",
  },
  {
    url: "unplugged-melody-ft-aadithya-and-ramya",
    id: 48,
    EventsCalendarTitle: "Unplugged Melody Ft. Aadithya and Ramya",
    EventsCalendarContent: "Get ready for an enchanting evening of soulful...",
    EventsCalendarMonth: "14 Aug – 28 Aug, 2025",
    EventsCalendarTime: "8:30 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/106.jpg",
    link: "/events",
    location: "Hard Rock Cafe, Nungabakkam, Chennai",
    language: "Tamil, Hindi, Malayalam",
    hours: "2 Hours",
    ageLimit: "21yrs +",
    price: "₹0",
    aboutFull:
      "Get ready for an enchanting evening of soulful melodies and acoustic brilliance at Unplugged Melody Night, featuring the powerful vocal duo Aadithya SM and Ramya RamC, accompanied by the supremely talented guitarist Srinivas. Aadithya SM, a passionate vocalist since childhood, rose to fame through the reality show Rajaparvai and has performed alongside top playback singers like Yuvan Shankar Raja and Karthik. He is a regular at prestigious audio launches and live concerts, including events like Ponniyin Selvan and performances with artists such as Vijay Antony. Ramya RamC is a seasoned playback singer, dubbing artist, and international performer who has lent her voice to music by award-winning composers like Jake's Bejoy, GV Prakash, and Sam CS. Her recent work features in the Malayalam blockbuster Officer On Duty, starring Kunchacko Boban and Priyamani. Srinivas, with over a decade of experience, is an acclaimed session guitarist known for his performances on Sa Re Ga Ma Pa and training under the legendary Ilayaraja's personal guitarist, Sada Master. Let the music take over as these artists bring you a night of intimate, unplugged magic—only at Hard Rock Cafe Chennai.",
  },
  {
    url: "rage-therapy",
    id: 49,
    metaTitleEvent:
      "Workshops in Chennai, Rage Therapy, Japanese Art of Kintsugi",
    conicallinkEvent: "/eventsdetails/49",
    metaDescriptionEvent:
      "Looking for unique Workshops in Chennai? Join Rage Therapy—smash ceramics and repair them using Kintsugi, Japan’s art of golden mending.",
    siteLink: "https://in.bookmyshow.com/events/rage-therapy/ET00456435",
    EventsCalendarTitle: "Rage Therapy",
    EventsCalendarContent:
      "Rage Therapy – Break. Heal. Repeat. Ever felt like smashing...",
    EventsCalendarMonth: "12 Aug – 14 Sep, 2025",
    EventsCalendarTime: "1:00 PM",
    EventsCalendarCategory: "Health and Fitness",
    image: "/images/HomePage-Images/Events/Newevents/105.jpg",
    link: "/events",
    location: "Dices And Drama, Chennai",
    language: "Bengali, English, Hindi, Kannada, Malayalam...",
    hours: "1 Hour",
    ageLimit: "All age groups",
    price: "₹999",
    aboutFull:
      "Rage Therapy – Break. Heal. Repeat. Ever felt like smashing something to let it all out? At Rage Therapy, we hand you ceramic pots and a safe space to release every ounce of pent-up frustration—by breaking them! But that’s not all—after the rage comes the repair. Using the Japanese art of Kintsugi, you`ll piece your broken items back together, turning cracks into golden lines of healing. Come for the catharsis. Stay for the transformation. No judgment. Just joy in destruction—and beauty in mending.",
  },
  {
    url: "mini-clay-planters",
    id: 50,
    siteLink: "https://in.bookmyshow.com/events/clay-play-day/ET00399728",
    EventsCalendarTitle: "Mini Clay Planters",
    EventsCalendarContent:
      "A hands-on workshop to design and sculpt your own unique miniature clay planters from scratch.",
    EventsCalendarMonth: "16 Aug – 31 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/104.jpg",
    link: "/events",
    location: "Dices And Drama, Chennai",
    language: "English, Hindi",
    hours: "4 Hours",
    ageLimit: "All age groups",
    price: "₹1299 onwards",
    aboutFull:
      "Join us for a hands-on workshop where you`ll design and sculpt your very own miniature clay planters from scratch. Learn the basics of clay modeling, shaping, and texturing while crafting cute, functional art pieces perfect for succulents, desk décor, or gifting.",
  },
  {
    url: "dot-mandala-art",
    id: 51,
    siteLink:
      "https://in.bookmyshow.com/events/mandala-art-meditation/ET00376767",
    EventsCalendarTitle: "Dot Mandala Art",
    EventsCalendarContent:
      "An immersive and therapeutic mandala art workshop focused on self-discovery, where participants can design intricate mandalas and find inner peace.",
    EventsCalendarMonth: "12 Aug – 31 Aug, 2025",
    EventsCalendarTime: "3:30 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/103.jpg",
    link: "/events",
    location: "Nosh And Natter, Pune",
    language: "Bengali, English, Hindi, Kannada, Malayalam...",
    hours: "1 hour 30 minutes",
    ageLimit: "18yrs +",
    price: "₹399 onwards",
    aboutFull:
      "Embark on a journey of self-discovery with this unique Mandala Art workshop. Focusing on the therapeutic art of creating mandalas, the session allows you to immerse yourself in a calm and creative space. Through the process of designing intricate mandalas, you can embrace a mindful and artistic experience, find serenity, and express yourself creatively. This workshop nurtures creativity and inner peace, leaving you feeling refreshed and inspired.",
  },
  {
    url: "tote-bag-painting",
    id: 52,
    metaTitleEvent:
      "Events in Chennai, workshops in Chennai, Tote Bag Painting",
    conicallinkEvent: "/eventsdetails/52",
    metaDescriptionEvent:
      "Discover creative Workshops in Chennai! Join the Tote Bag Painting Workshop on Aug 30 at 1:00 PM in Kilpauk. Just ₹899. Reserve your spot now!",
    siteLink:
      "https://in.bookmyshow.com/events/tote-bag-painting-party/ET00370989",
    EventsCalendarTitle: "Tote Bag Painting",
    EventsCalendarContent:
      "Unleash your creativity at our Tote Bag Painting Workshop...",
    EventsCalendarMonth: "12 Aug – 14 Sep, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/102.jpg",
    link: "/events",
    location: "Dices And Drama, Chennai",
    language: "English, Hindi, Bengali",
    hours: "1 hour 30 minutes",
    ageLimit: "All age groups",
    price: "₹899 onwards",
    aboutFull:
      "Unleash your creativity at our Tote Bag Painting Workshop at Small World! This engaging workshop is perfect for expressing yourself by designing a unique, eco-friendly tote bag. Whether you’re an experienced artist or a beginner, enjoy creative exploration with colors, patterns, and painting techniques guided by our expert instructor. All materials, including blank tote bags, fabric paints, brushes, and stencils, are provided so you can focus on your art. Leave with your own beautifully painted tote bag to use or gift. The workshop offers a relaxing, inspiring environment to unwind and connect with fellow creatives. Reserve your spot today and bring your artistic vision to life!",
  },
  {
    url: "cuff-and-paint",
    id: 53,
    metaTitleEvent:
      "Chennai Events/Cuff and Paint event in Chennai/Super Chennai",
    conicallinkEvent: "/eventsdetails/53",
    metaDescriptionEvent:
      "Chennai Events – Experience Cuff & Paint, a whimsical couples’ art workshop in Chennai where creativity and fun go hand‑in‑hand at Wiggle Room.",
    EventsCalendarTitle: "Cuff And Paint",
    siteLink: "https://in.bookmyshow.com/events/cuff-and-paint/ET00457713",
    EventsCalendarContent: "Get ready for the quirkiest art date ever!...",
    EventsCalendarMonth: "11 Aug – 27 Aug, 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/101.jpg",
    link: "/events",
    location: "Wiggle Room, Chennai",
    language: "English, Tamil",
    hours: "1 hour 15 minutes",
    ageLimit: "18yrs +",
    price: "₹1600",
    aboutFull:
      "Get ready for the quirkiest art date ever! In Cuff & Paint, you and your partner will be handcuffed together and guided through a fun, messy, and unforgettable art session. Please note—one ticket is for a couple. Why cuffed? Because great art (and great memories) are made with a little chaos and a lot of teamwork! Whether it’s your best friend, partner, or a curious stranger, you’ll share laughs, spills, and strokes as you co-create a one-of-a-kind canvas. No experience needed. Just show up, cuff up, and paint your story!",
  },
  {
    url: "oorellam-un-pattu-angingu",
    id: 54,
    EventsCalendarTitle: "Oorellam Un Pattu - Angingu",
    EventsCalendarContent: "Oorellam Un Pattu – Angingu is a 100% manual...",
    EventsCalendarMonth: "15 Aug, 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/100.jpg",
    link: "/events",
    location: "Raja Annamalai Mandram, Chennai",
    language: "Tamil",
    hours: "3 Hours",
    ageLimit: "All age groups",
    price: "₹380 onwards",
    aboutFull:
      "Oorellam Un Pattu – Angingu is a 100% manual orchestra designed for an enjoyable experience with your family and friends.",
  },
  {
    url: "waffle-making-workshop",
    id: 55,
    EventsCalendarTitle: "Waffle Making Workshop",
    EventsCalendarContent:
      "A direct offline class where you can learn to make delicious vegetarian and eggless waffles.",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Food and Drinks",
    image: "/images/HomePage-Images/Events/Newevents/99.jpg",
    link: "/events",
    location: "Reema's Swad Cooking Classes, Chennai",
    language: "English",
    hours: "3 Hours",
    ageLimit: "16yrs +",
    price: "₹2000",
    aboutFull:
      "Reema’s Swad Cooking Classes offers a vegetarian and eggless Waffle Making Class covering a variety of delicious recipes including Honey Waffle, Oreo Waffle, Chocolate Overloaded/Nutella, Blueberry/Strawberry Cream Cheese, Coffee Mousse, Ice Cream Waffle, and a special Bubblegum recipe.",
  },
  {
    url: "blindfolded-pottery",
    id: 56,
    metaTitleEvent:
      "Workshops in Chennai/Pottery Workshop/Art & Craft Workshops",
    conicallinkEvent: "/eventsdetails/56",
    metaDescriptionEvent:
      "Join unique Art & Craft Workshops in Chennai! Try the blindfolded Pottery Workshop at Dices & Drama, Aug 12–Sep 21, 2:15 PM. ₹899 per person. Book now!",
    siteLink: "https://in.bookmyshow.com/events/blindfolded-pottery/ET00451209",
    EventsCalendarTitle: "Blindfolded Pottery",
    EventsCalendarContent:
      "Let your hands do the seeing. Get ready for the most...",
    EventsCalendarMonth: "12 Aug – 21 Sep, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/98.jpg",
    link: "/events",
    location: "Dices And Drama, Chennai",
    language: "English, Hindi",
    hours: "8 hours 19 minutes",
    ageLimit: "All age groups",
    price: "₹899",
    aboutFull:
      "Let your hands do the seeing. Get ready for the most unexpectedly sensual and meditative art experience. In this unique pottery workshop, you’ll be blindfolded—allowing touch, texture, and intuition to guide your creation. No peeking, no perfectionism, just pure connection with clay. Whether you’re solo or coming with a friend, prepare to get your hands dirty, let go of control, and create something beautifully imperfect. No prior experience needed. Just bring your curiosity.",
  },
  {
    url: "sip-and-paint-event",
    id: 57,
    EventsCalendarTitle: "Sip & Paint Event",
    EventsCalendarContent: "Join us for a creative twist on your typical....",
    EventsCalendarMonth: "16 Aug, 2025",
    EventsCalendarTime: "3:00 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/97.jpg",
    link: "/events",
    location: "Hibiscus Cafe, Chennai",
    language: "English",
    hours: "2 Hours",
    ageLimit: "All age groups",
    price: "₹999",
    aboutFull:
      "Join us for a creative twist on your typical paint night! Design your own custom tote bag while sipping on your favorite drinks. No experience needed—just good vibes, great company, and a canvas you can carry. We provide everything you need, including blank tote bags, paints, brushes, inspiration sheets, and a bit of guidance if you want it. Just bring your imagination (and maybe a friend or two). Beverages are included because great art deserves great sips. Let’s make something cute, bold, or totally out-there—your bag, your style, your rules! Grab your besties and let’s get artsy to turn plain totes into masterpieces!",
  },
  {
    url: "star-quest-astronomy-workshop-for-young-minds",
    id: 58,
    EventsCalendarTitle: "Star Quest (Astronomy Workshop for Young Minds)",
    EventsCalendarContent:
      "Turn curiosity into discovery! Children naturally look....",
    EventsCalendarMonth: "17 Aug – 14 Aug, 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Kids' Workshop",
    image: "/images/HomePage-Images/Events/Newevents/96.jpg",
    link: "/events",
    location: "Online (Your Place and Your Time)",
    language: "English",
    hours: "1 hour 15 minutes",
    ageLimit: "",
    price: "₹189",
    aboutFull:
      "Turn curiosity into discovery! Children naturally look up at the night sky and wonder what’s out there. This Astronomy for Kids Workshop (ages 5–16) transforms that curiosity into knowledge, imagination, and inspiration. In this fun, interactive session, kids will learn about planets, stars, and a wide range of celestial objects and phenomena in an easy-to-understand way. They will participate in space-themed activities and quizzes that make science exciting and memorable. Astronomy is more than looking at stars—it builds scientific thinking and observation skills, fosters a sense of wonder and creativity, and boosts confidence to explore and question the world around them. We keep seats limited to ensure every child gets personal attention and hands-on fun. E-certificates of participation will be emailed within 7 days for kids to proudly showcase. The joining link will be shared a day before the session to ensure smooth access. By the end of the workshop, your child won’t just know facts about space—they’ll feel inspired to explore, question, and dream bigger than ever before. It’s not just a Sunday evening spent—it’s a lifelong spark for learning and discovery!",
  },
  {
    url: "solve-the-rubiks-cube-sharpen-6-vital-skills",
    id: 59,
    EventsCalendarTitle: "Solve the Rubik's Cube, Sharpen 6 Vital Skills",
    EventsCalendarContent:
      "Learn to solve the Rubik's Cube with a focus on enhancing problem-solving and memory skills.",
    EventsCalendarMonth: "10 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Skill Workshop",
    image: "/images/HomePage-Images/Events/Newevents/95.jpg",
    link: "/events",
    location: "Happy Skills Events, Ghatkopar",
    language: "English, Hindi, Marathi",
    hours: "2 Hours",
    ageLimit: "8yrs +",
    price: "₹500",
    aboutFull:
      "In this workshop, you will learn a 6-step method to solve the 3 x 3 x 3 Rubik's Cube in about 2 hours through a live 120-minute slow and steady streaming demonstration led by the course creator. This step-by-step MOOC solution is designed for learners aged 8 to 80 and aims to sharpen six vital skills: critical thinking, analytical thinking, reasoning and problem-solving, systems analysis and design, technology design and programming, and judgment and decision-making. The experience is engaging and easy-paced, offering a clear and enjoyable path to mastering this mind-boggling puzzle with over 43 quintillion ways to scramble. After the live session, a limited-period special offer will allow you discounted access to all demonstrated lessons so you can learn at your own pace anytime, anywhere. This 5-star rated workshop combines expert guidance with practical skills development, providing a rewarding sense of accomplishment both personally and professionally.",
  },
  {
    url: "knife-painting-workshop",
    id: 60,
    EventsCalendarTitle: "Knife Painting Workshop",
    EventsCalendarContent:
      "An immersive art experience where participants explore texture...",
    EventsCalendarMonth: "12 Aug – 11 Aug, 2025",
    EventsCalendarTime: "3:00 PM",
    EventsCalendarCategory: "Art Workshop",
    image: "/images/HomePage-Images/Events/Newevents/94.jpg",
    link: "/events",
    location: "Queens and Beans, Hyderabad",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "All age groups",
    price: "₹799 onwards",
    aboutFull:
      "Dive headfirst into a captivating artistic escapade at our Knife Painting Workshop, where the canvas becomes your playground and each stroke tells a unique story, bringing texture to life. Immerse yourself in the intricate art of palette knife techniques with guidance from seasoned instructors who will reveal the secrets of creating mesmerizing textures, layering, and depth. Unleash your inner color maestro by experimenting with a vibrant spectrum of hues, discovering the magical interplay of colors as your masterpiece evolves. Whether you are a novice or experienced artist, receive personalized guidance tailored to your skill level to enhance your technique. Experience the therapeutic essence of knife painting as you let stress melt away, enjoying not just the creation of a beautiful piece but the joyful journey itself. Engage in interactive and playful sessions with fellow art lovers, sharing experiments, exchanging ideas, and soaking in the collective creative energy of our vibrant community.",
  },

  {
    url: "japanese-kintsugi-workshop",
    id: 61,
    EventsCalendarTitle: "Japanese Kintsugi Workshop",
    EventsCalendarContent:
      "Discover the ancient art of Kintsugi—mending broken ceramics with...",
    EventsCalendarMonth: "12 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Art & Mindfulness",
    image: "/images/HomePage-Images/Events/Newevents/93.jpg",
    link: "/events",
    location: "Dices And Drama, Chennai",
    language: "English, Hindi",
    hours: "2 hours",
    ageLimit: "All age groups",
    price: "₹999",
    aboutFull:
      "Step into the ancient Japanese philosophy of Kintsugi, where broken ceramics are mended with gold, turning flaws into beauty. This workshop is more than just an art form—it’s a practice in resilience, healing, and self-acceptance. Embrace imperfection, create something unique, and reflect on the stories that make us whole. You will learn Kintsugi basics, discovering the art and meaning behind this 400-year-old practice. During the workshop, you will repair a broken pottery piece using golden joinery techniques and engage in mindful creation to reflect and connect while crafting your own symbolic piece.",
  },

  {
    url: "mandala-workshop",
    id: 62,
    EventsCalendarTitle: "Mandala Workshop",
    EventsCalendarContent:
      "A beginner-friendly art workshop exploring the spiritual...",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "Time not specified",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/92.jpg",
    link: "/events",
    location: "House of Games, Kilpauk, Chennai",
    language: "English, Tamil",
    hours: "1 hour",
    ageLimit: "All age groups",
    price: "₹999",
    aboutFull:
      "A mandala is a geometric representation of the universe, often used as a tool for meditation and spiritual exploration. Our beginner-friendly Mandala art workshop offers a welcoming and supportive environment where you will receive hands-on guidance from our instructor, who will walk you through each step of the creative process at your own pace. All materials and tools are provided, so you can focus entirely on your artwork without any hassle. The workshop duration is flexible — whether you finish quickly or prefer to take your time, you are encouraged to create at a rhythm that feels comfortable to you. This relaxed and creative space is perfect whether you attend solo, with a partner, friends, or family, offering a calming and expressive break from your routine. Additionally, you will enjoy refreshments with 50% of your venue payment returned as food credit, making it a treat for both your mind and taste buds. To ensure personalized attention, sessions are offered in small group formats of one-on-one, two-on-one, or three-on-one, fostering an interactive experience. By the end of the workshop, you will not only gain new artistic skills but also leave with your own handmade masterpiece. Prior registration is required; for any queries, please contact the café.",
  },

  {
    url: "kaathuvaakula-rendu-comedians-ft-mervyn-and-jagan",
    id: 63,
    EventsCalendarTitle: "Kaathuvaakula Rendu Comedians ft. Mervyn & Jagan",
    EventsCalendarContent:
      "A Tamil improv comedy show with Jagan Krishnan and Mervyn Rozz...",
    EventsCalendarMonth: "16 Aug, 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Improv Comedy",
    image: "/images/HomePage-Images/Events/Newevents/91.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist, Chennai",
    language: "Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "5yrs+",
    price: "₹699",
    aboutFull: `
‘Kaathuvaakula Rendu Comedians’ is a Tamil Improv comedy show featuring stand-up comedians Jagan Krishnan and Mervyn Rozz. This one-of-a-kind performance is completely unscripted and fully improvised, with the comedians creating humor on the spot based on suggestions from the live audience. Expect spontaneous wit, unexpected twists, and plenty of laughs in this clean, family-friendly show. Perfect for a fun outing with friends or loved ones, this show guarantees a lively atmosphere and memorable moments.
  `,
  },

  {
    url: "salsa-bachata-urbankiz-dance-workshop",
    id: 64,
    EventsCalendarTitle: "Salsa, Bachata, Urbankiz Dance Workshop",
    EventsCalendarContent:
      "Learn, practice, and connect through social dance styles...",
    EventsCalendarMonth: "17 Aug – 2 Aug, 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Dance, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/90.jpg",
    link: "/events",
    location: "Sara’s Dance And Fitness Company, Chennai",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "21yrs+",
    price: "₹499 onwards",
    aboutFull: `
Social Dancing is a fantastic way to connect and explore via styles like Salsa / Bachata / Urban Kiz. * About Event: ~ Basic / Improver level Workshop to learn ~ Social dancing to practice what you have learned ~ Socialize to connect with existing social dance folks * About Artist: Praveen - one of the most sought-after Urbankiz Artists in Asia, Praveen has traveled across 20+ countries including the US, Europe, Japan, Singapore, and Dubai, and has shared his knowledge and passion for social dancing across the globe. He is also the founder of Dance academies like Salsa Chennai, Salsa Coimbatore, Salsa Kerala, Urbankiz Universe ( Bangalore & Hyderabad ) * Audience : ~ Open for all ages ~ Beginner Friendly Environment ~ Classes will be in English ~ Any comfortable costume/shoes/socks/heels ~ We try our level best to get a 1:1 ratio, sometimes it may vary. Chennai - Edina Building - Activity Hall, Hiranandani, Siruseri For Other cities, pls reach out to the exact location Looking forward to seeing you on the dance floor. 
  `,
  },

  {
    url: "bottle-painting ",
    id: 65,
    EventsCalendarTitle: "Bottle Painting ",
    EventsCalendarContent:
      "Join us for a lively and creative event where we turn ordinary bottles into extraordinary works of art!",
    EventsCalendarMonth: "11-20 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/89.jpg",
    link: "/events",
    location: "La Grace: Bengaluru",
    language: "Bengali, English, Hindi, Kannada, Malayalam",
    hours: "1 Hour",
    ageLimit: "16yrs+",
    price: "₹899 onwards",
    aboutFull: `
Join us for a lively and creative event where we turn ordinary bottles into extraordinary works of art! Participants are encouraged to bring their old bottles — whether they’re from beer, water, or any other source — and engage in a hands-on bottle paint workshop. Our instructor will guide you step-by-step, ensuring you feel comfortable and confident throughout the creative process. All materials are provided, so you can focus on enjoying the experience. The relaxed, interactive space is perfect whether you come solo, with friends, or as a couple. At the end of the session, you’ll take home your own decorated bottle — a unique, personal creation to cherish.
  `,
  },

  {
    url: "sculpture-painting-workshop-sunflower",
    id: 66,
    EventsCalendarTitle: "Sculpture Painting Workshop – Sunflower",
    EventsCalendarContent: "Sunflowers you don’t just see… but feel....",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Home Decor, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/88.jpg",
    link: "/events",
    location: "House of Games, Kilpauk, Chennai",
    language: "English, Tamil",
    hours: "2 Hours",
    ageLimit: "12yrs+",
    price: "₹2999",
    aboutFull: `
Sunflowers you don’t just see… but feel. That’s sculpting. Join our beginner-friendly art workshop designed to awaken your creativity in a relaxed, expressive space. Whether you're coming solo, with a partner, friends, or family, you'll be guided step-by-step by our instructor, ensuring a comfortable pace for every participant. All tools and materials are provided, so you can simply show up and create. The session offers flexible timing — some finish quickly, others take their time — and both are welcome to enjoy the process at their own rhythm. You’ll also receive 50% of your venue payment back as food credit, making it a treat for both your mind and taste buds. With personalized formats available (1:1, 2:1, or 3:1), you’ll get focused attention in a small group setting. And best of all, you’ll leave with your own handmade masterpiece and a sense of accomplishment. Prior registration is required. For queries, contact the café.
  `,
  },

  {
    url: "halki-halki-fati-by-vikas-kush-sharma",
    id: 67,
    EventsCalendarTitle: "Halki Halki Fati? By Vikas Kush Sharma",
    EventsCalendarContent: "The comedic maestro, the crowd whisperer,..",
    EventsCalendarMonth: "17 Aug – 2 Nov, 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Comedy, Stand up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/87.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet, Chennai",
    language: "English, Hindi",
    hours: "1 hour 30 minutes",
    ageLimit: "16yrs+",
    price: "₹799 onwards",
    aboutFull: `
    The comedic maestro, the crowd whisperer, the one and only Vikas Kush Sharma! 
    This guy’s crowd work and the most viral modern shayar of Instagram is so brilliant, 
    it’s like he’s got a PhD in decoding laughter! He’s the master of turning awkward situations 
    into uproarious punchlines, especially when it comes to relationships. 
    If you’re ever in need of a good laugh about love gone wrong or dating disasters, 
    Vikas has got your back! Get ready to chuckle, snort, and maybe even spit out your drink 
    with this comedic genius in action!
  `,
  },

  {
    url: "neon-painting-party",
    id: 68,
    metaTitleEvent:
      "Events in Chennai, Workshops in Chennai, Neon Painting Party",
    conicallinkEvent: "/eventsdetails/68",
    metaDescriptionEvent:
      "Chennai Events: Neon Painting Party offers a glowing art experience using fluorescent paints. No experience needed—bring creativity and join the fun!",
    siteLink: "https://in.bookmyshow.com/events/neon-painting-party/ET00457231",
    EventsCalendarTitle: "Neon Painting  Party",
    EventsCalendarContent:
      "Step into a world where creativity meets fun Our....",
    EventsCalendarMonth: "13 Aug – 27 Aug, 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/150.jpg",
    link: "",
    location: "Wiggle Room: Chennai",
    language: "English,Tamil",
    hours: "1 Hour",
    ageLimit: "Age Limit - 5yrs +",
    price: "₹899",
    aboutFull:
      "Step into a world where creativity meets fun Our Neon Painting Workshop is a one of a kind art experience where you create glowing masterpieces using fluorescent paints. Whether you are a seasoned artist or just looking to try something fun and vibrant, this workshop is all about expression, fun, and unforgettable memories.",
  },

  {
    url: "clay-coaster-workshop",
    id: 69,
    EventsCalendarTitle: "Clay Coaster Workshop",
    EventsCalendarContent:
      "Beginner-friendly air dry clay workshop with hands-on...",
    EventsCalendarMonth: "17 Aug, 2025",
    EventsCalendarTime: "1 hour 30 minutes",
    EventsCalendarCategory: "Arts and Crafts, Home Decor, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/84.jpg",
    link: "/events",
    location: "House of Games, Kilpauk: Chennai",
    language: "English, Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "12yrs +",
    price: "₹1699",
    aboutFull: `
  Here's our beginner-friendly air dry clay workshop.

  What to Expect:

  Hands-On Guidance:
  Our instructor will guide you step-by-step, helping you comfortably navigate the entire creative process at your own pace.

  All Materials Provided:
  We’ve got you covered with all the tools and materials.

  Flexible Duration:
  Some participants finish quickly, while others love to slow down and enjoy the process — both are welcome! Create at your own rhythm.

  Relaxed, Creative Space:
  Whether you're coming solo, as a couple, with friends, or family, this session offers a calming, expressive escape from routine.

  Refreshments Provided:
  Get 50% of your venue payment back as food credit. Enjoy delicious refreshments while you create — it's a treat for both your mind and taste buds!

  1:1, 2:1, or 3:1 Format:
  We offer personalized attention with small group formats for a more focused and interactive experience.

  Take Your Art Home:
  Leave the workshop not just with new skills, but with your own handmade masterpiece!

  Prior registration needed. For queries contact cafe.
  `,
  },

  {
    url: "epic-day-pass",
    id: 70,
    EventsCalendarTitle: "Epic Day Pass",
    EventsCalendarContent:
      "Discover the Magic of Connection with a day packed with..",
    EventsCalendarMonth: "16–31 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/85.jpg",
    link: "/events",
    location: "Dices And Drama: Chennai",
    language: "Bengali, English, Hindi, Kannada, Malayalam",
    hours: "5 Hours",
    ageLimit: "All age groups",
    price: "₹2999",
    aboutFull: `
  Discover the Magic of Connection by getting access to our all day event pass.
  Join us for the day packed with laughter, inspiration, and camaraderie. At the heart of Small World, we’re curating a tapestry of unique events and experiences that will weave together stories and create bonds that last a lifetime.
  Get access to all our in-house events and engage in activities that tickle your fancy and challenge your comfort zone.
  Epic Day Pass includes a parade of interactive and heartwarming artistic, musical and social events and endless moments of joy as you connect with fellow explorers.
  Let’s create a mosaic of memories, spark meaningful connections, and share stories that we’ll laugh about for years to come. Limited spots available for this intimate gathering — where every moment is a celebration of togetherness.
  `,
  },

  {
    url: "hukum-world-tour-grand-finale",
    id: 71,
    metaTitleEvent: "Events in Chennai/ Hukum World Tour/Anirudh Concert",
    conicallinkEvent: "/eventsdetails/71",
    metaDescriptionEvent:
      "Experience the electrifying Anirudh Concert in Chennai as the Hukum World Tour concludes with a grand finale—don’t miss this iconic event in Chennai!",
    siteLink:
      "http://district.in/events/hukum-world-tour-chennai-august-2025-buy-tickets",
    EventsCalendarTitle: "Hukum World Tour Grand Finale",
    EventsCalendarContent:
      "Anirudh Ravichander returns to Chennai for a thunderous musical spectacle!",
    EventsCalendarMonth: "23 Aug, 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Music, Concert",
    image: "/images/HomePage-Images/Events/Newevents/46.jpg",
    link: "/events",
    location: "Marg Swarnabhoomi, Kuvathur, ECR, Chennai",
    language: "Tamil, English",
    hours: "Open-ended",
    ageLimit: "All age groups",
    price: "₹1700 onwards",
    aboutFull: `
    After 3 long years, Anirudh Ravichander returns to his hometown for a thunderous comeback like never before!,
    The Hukum World Tour arrives in Chennai with all guns blazing — a grand spectacle where music, emotion, and mass energy collide.,
    From viral chartbusters to electrifying live sets, Anirudh is set to light up the stage with an unforgettable performance.,
    This isn't just a concert — it's a celebration of the Rockstar's roots, his music, and the city that made him.,
    Expect massive crowd moments, jaw-dropping visuals, and surprise guest artists that will take the energy to the next level.,
    Chennai, get ready to feel the tremors — Arangam Adhirattume!,
  `,
  },

  {
    url: "arr-unplugged",
    id: 72,
    EventsCalendarTitle: "ARR UnPlugged",
    EventsCalendarContent:
      "Aug 16th a super treat awaits you at medai alwarpet...",
    EventsCalendarMonth: "16 Aug 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Concerts, Music Festivals, Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/152.jpg",
    link: "",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "Tamil, Hindi",
    hours: "2 hours 30 minutes",
    ageLimit: "All age groups",
    price: "₹299 onwards",
    aboutFull:
      "Aug 16th a super treat awaits you at medai alwarpet ARR unplugged celebrating the genius with songs from his movies in Tamil and Hindi unplugged with battalion of young and vibrant singers don't miss the show at 7 pm",
  },

  {
    url: "couples-art-workshop",
    id: 73,
    EventsCalendarTitle: "Couples' Art Workshop",
    EventsCalendarContent:
      "Join us for a Date Night Painting Party, a fun-filled....",
    EventsCalendarMonth: "12 Aug – 31 Aug, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/151.jpg",
    link: "",
    location: "Dices And Drama: Chennai",
    language: "English, Hindi, Kannada, Malayalam, Beng...",
    hours: "2 Hours",
    ageLimit: "All age groups",
    price: "₹1599",
    aboutFull:
      "Join us for a Date Night Painting Party, a fun-filled evening of art, laughter, and romance where you and your special someone can dive into a vibrant world of colors and create something beautiful together. No prior painting skills are needed—just an open mind and a desire to enjoy the process. In a cozy, laid-back atmosphere with soft music setting the mood, our professional artist will guide you step-by-step to create your own masterpieces on canvas, whether individually or as a shared piece. It’s all about bonding over brush strokes, sparking creativity, and making unforgettable memories. This is not just another date night—it’s a Date Night Painting Party, where you’ll discover, create, and love, leaving with not only beautiful paintings but beautiful memories too.",
  },

  {
    url: "kal-ki-chinta-nahi-karta-ft-ravi-gupta",
    id: 74,
    EventsCalendarTitle: "Kal ki Chinta Nahi Karta ft. Ravi Gupta",
    EventsCalendarContent:
      "Forget your Kal ki Chinta and Join us in this super funny Show by Ravi Gupta.",
    EventsCalendarMonth: "5 Jul – 12 Aug, 2025",
    EventsCalendarTime: "07:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image:
      "/images/HomePage-Images/Events/Newevents/kal-ki-chinta-nahi-karta-ft-ravi-gupta.jpg",
    link: "/events",
    location: "Shanmukhananda Hall: Chennai",
    language: "Hindi",
    hours: "1 hour 30 minutes",
    ageLimit: "6 years +",
    rleigion: "",
    aboutFull: `Forget your Kal ki Chinta and Join us in this super funny Show by Ravi Gupta. Kal Ki Chinta Nahi Karta is new stand up special by Ravi Gupta.`,
  },

  {
    url: "gallabox-presents-patriotic-run",
    id: 75,
    EventsCalendarTitle: "GALLABOX presents Patriotic Run",
    EventsCalendarContent:
      "Get ready to run for a cause that ignites your passion...",
    EventsCalendarMonth: "17 Aug 2025",
    EventsCalendarTime: "5:00 AM",
    EventsCalendarCategory: "Sports, Fitness",
    image: "/images/HomePage-Images/Events/Newevents/gallabox-marathon.jpg",
    link: "",
    location: "VGP Universal Kingdom, Chennai",
    language: "",
    hours: "",
    siteLink: "",
    ageLimit: "",
    price: "₹299 onwards",
    aboutFull: `
<strong>GALLABOX presents Patriotic Run </strong> 
<p>Get ready to run for a cause that ignites your passion and love for the nation! 🇮🇳 Join us for the GALLABOX presenting Patriotic Run, a unique event that combines fitness, fun, and patriotism.</p>

<ul>
<li><strong>Event Details</strong></li>
<li><strong>Distances:</strong></li>
<li>5km: (Perfect for a warm-up and a fun run!)</li>
<li>10km: (Challenge yourself and push your limits!)</li>
</ul> 

</br>

<h3>What's Included</h3>
<ul>
  <li><strong>Time chip:</strong> Accurate timing to track your progress ⏱️</li>
  <li><strong>T-shirt:</strong> A stylish and comfortable tee to commemorate your participation 👕</li>
  <li><strong>Bib:</strong> Your official race number, proudly displayed 📝</li>
  <li><strong>Certificate:</strong> A personalized certificate to mark your achievement 🏆</li>
  <li><strong>Hydration:</strong> Refreshing drinks to keep you going throughout the run 💧</li>
  <li><strong>Food pack:</strong> Delicious treats to refuel and recharge 🍔🥤</li>
  <li><strong>Medal:</strong> A shiny medal to proudly display your accomplishment 🏅</li>
</ul>
</br>

<h3>Winner's Perks</h3>
<ul>
  <li><strong>Medal:</strong> A special medal for the top performers 🏅</li>
  <li><strong>Trophy:</strong> A prestigious trophy for the champions 🏆</li>
  <li><strong>Gift vouchers:</strong> Exciting prizes to treat yourself 🎁</li>
</ul>
</br>

<h3>Why Join?</h3>
<ul>
  <li>Celebrate your love for the nation</li>
  <li>Challenge yourself and push your limits</li>
  <li>Enjoy a fun and energetic atmosphere</li>
  <li>Take home amazing goodies and memories</li>
</ul>
</br>
<strong>Don't miss this opportunity to be a part of something special! Register now and show your love for the nation! </strong>
`,
  },

  {
    url: "canvas-painting",
    id: 76,
    EventsCalendarTitle: "Canvas Painting",
    EventsCalendarContent:
      "Calling all art enthusiasts! Immerse yourself in...",
    EventsCalendarMonth: "9 Aug – 1 Sep, 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts, Painting, Workshops",
    image: "/images/HomePage-Images/Events/Newevents/69.jpg",
    link: "/events",
    location: "Queens and Beans: Hyderabad",
    language: "English, Hindi",
    hours: "1 hour 30 minutes",
    ageLimit: "All age groups",
    price: "₹899 onwards",
    aboutFull: `
    Calling all art enthusiasts! Immerse yourself in a vibrant canvas painting workshop that will ignite your creativity and bring your artistic vision to life.,
    No prior experience needed! Whether you're a beginner eager to dip your brush into the world of painting or a seasoned artist looking to refine your skills, this workshop is designed for artists of all levels.,
    Take home your unique creation and cherish the memories.,
  `,
  },

  {
    url: "coffee-conversations",
    id: 77,
    siteLink: "https://in.bookmyshow.com/events/coffee-cuddles/ET00375016",
    EventsCalendarTitle: "Coffee Conversations",
    EventsCalendarContent: "Gather in a snug corner of warmth and comfort,...",
    EventsCalendarMonth: "9 Aug – 7 Sep, 2025",
    EventsCalendarTime: "3:00 PM",
    EventsCalendarCategory: "Business",
    image: "/images/HomePage-Images/Events/Newevents/59.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "",
    hours: "1 Hour",
    ageLimit: "All age groups",
    rleigion: "Bengali, English, Hindi, Kannada, Malayalam",
    aboutFull: `
      Gather in a snug corner of warmth and comfort, cradling mugs of aromatic coffee that promise to soothe the soul. 'Coffee Conversations' is an intimate get-together for those seeking to forge new friendships and indulge in rich, engaging conversations.

      Nestle into plush cushions and let the velvety whispers of steam rising from your cup invite open-hearted dialogues. If the idea of bonding over the comforting embrace of coffee entices you, come be part of 'Coffee Conversations', where every sip weaves a stronger connection.
    `,
  },

  {
    url: "vikramjit-singh-talking-and-touring",
    id: 78,
    EventsCalendarTitle: "Vikramjit Singh - Talking & Touring",
    EventsCalendarContent: "Vikramjit Singh is none of these things and more.",
    EventsCalendarMonth: "12 Jul – 16 Aug, 2025",
    EventsCalendarTime: "08:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image:
      "/images/HomePage-Images/Events/Newevents/vikramjit-singh-talking-touring.jpg",
    link: "/events",
    location: "The J Spot, Juhu: Chennai",
    language: "Hindi, English",
    hours: "1 hour 20 minutes",
    ageLimit: "16years +",
    rleigion: "Comedy",
    aboutFull: `Ideal husband, doting father, youth icon.
      Vikramjit Singh is none of these things and more. It hasn’t been easy, but anything is possible with a bad economy, complicated relationships and a missing jawline. He credits his family for who he has become, 
      but not in the way you think. Bring whoever you call “family” and laugh through it all, feeling slightly better about your own life.`,
  },

  {
    url: "young-adult-ft-gurleen-pannu",
    id: 79,
    metaTitleEvent: "Standup Comedy Shows in Chennai / Gurleen Pannu",
    conicallinkEvent: "/eventsdetails/79",
    metaDescriptionEvent:
      "Enjoy sharp humour and real-life rants at Young Adult by Gurleen Pannu—live in Alwarpet, Chennai on Sep 12. One of the best stand-up comedy Shows in Chennai!",
    siteLink:
      "https://in.bookmyshow.com/events/pannu-yaar-stand-up-comedy-show-ft-gurleen-pannu/ET00333386",
    EventsCalendarTitle: "Young Adult! ft.Gurleen Pannu",
    EventsCalendarContent:
      "_Young Adult!_ is about a person who is in their 20s,",
    EventsCalendarMonth: "15 – 21 Aug, 2025",
    EventsCalendarTime: "08:00 PM",
    EventsCalendarCategory: "Stand up Comedy",
    image:
      "/images/HomePage-Images/Events/Newevents/Young Adult! ft.Gurleen Pannu.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "Hindi, English",
    hours: "1 Hour 15 mins",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "",
    aboutFull: `
    _Young Adult!_ is about a person who is in their 20s, juggling life and someone who has just stepped into adulthood. In her new show, Gurleen Pannu has relateable observations, stories from her own experiences and a lot of laughs—you don’t want to miss this one!
    `,
  },
  {
    url: "surfing",
    id: 80,
    EventsCalendarTitle: "Surfing",
    EventsCalendarContent:
      "From August 3 to 12, get ready to witness top surfers from... ",
    EventsCalendarMonth: "3–12 Aug, 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Games",
    image: "/images/trendingChennai/surfing-inner.jpg",
    link: "/events",
    location: "Mahabalipuram, Chennai",
    language: "Surfing Championship",
    hours: "",
    ageLimit: "Under 18 (and everyone who loves the sea!)",
    rleigion: "",
    aboutFull: `
   From August 3 to 12, get ready to witness top surfers from over 20 Asian countries compete in one of the most exciting beach sports events of the year! Catch the thrill as athletes take on the waves in Shortboard categories – Open Men, Open Women, U18 Boys, and U18 Girls – all happening at the beautiful, heritage-rich coast of Mahabalipuram. What’s at stake? Not just championship titles — but direct entry into the 2026 Asian Games in Japan and a golden chance to qualify for the SurfCity El Salvador ALAS Global Finals in November 2025! “Hosting this championship reflects Tamil Nadu’s goal to shine on the global sports map and give our athletes worldwide exposure,” says Thiru Udhayanidhi Stalin, Deputy Chief Minister & Minister for Youth Welfare and Sports Development. This wave-riding extravaganza is powered by: Sports Development Authority of Tamil Nadu @sportstn_ , Government of Tamil Nadu
    `,
  },
  {
    url: "manjeet-ki-baat-a-comedy-show",
    id: 81,
    metaTitleEvent: "Standup Comedy in Chennai/Standup Comedy Shows in Chennai",
    conicallinkEvent: "/eventsdetails/81",
    metaDescriptionEvent:
      "Laugh out loud at Manjeet Sarkar’s ‘Unpaid Therapist’! A must-see Standup Comedy Show in Chennai on Aug 30 at Alwarpet. Book your seat now!",
    siteLink:
      "https://in.bookmyshow.com/events/two-funny-a-double-bill-stand-up-comedy-show/ET00338236",
    EventsCalendarTitle: "Manjeet Ki Baat – A Comedy Show",
    EventsCalendarContent:
      "Yes, you may have seen him somewhere on the internet.",
    EventsCalendarMonth: "9 Aug – 20 Sep, 2025",
    EventsCalendarTime: "06:00 PM",
    EventsCalendarCategory: "Stand up Comedy",
    image:
      "/images/HomePage-Images/Events/Newevents/MANJEET KI BAAT- A COMEDY SHOw.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist: Chennai",
    language: "English, Hindi",
    hours: "1 Hour 30 mins",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `
     Yes, you may have seen him somewhere on the internet. If you haven’t—then you probably have a nice, peaceful life. 
     Manjeet Sarkar is back and bringing a new show where he works out fresh material based on his experiences and observations. The set covers topics like politics, fake news, media narratives, and everyday life in India.
     This is a trial show, which means the material is still being developed. Some parts are polished, others are being tested live.
    It’s a casual and intimate setup —perfect for those who enjoy stand-up that talks about the world around us without pretending everything’s fine. Come watch, react, judge, or just sit back. It’s all part of the process.
    `,
  },
  {
    url: "vibe-check-an-youth-friendly-comedy-show",
    id: 82,
    metaTitleEvent:
      "Vibe Check Comedy Night / Chennai’s Unpredictable Stand-Up Show",
    conicallinkEvent: "/eventsdetails/82",
    metaDescriptionEvent:
      "Don’t miss Vibe Check on 6 Sept—a no-spoiler comedy night packed with surprise comics, bold jokes, and nonstop laughter to make your weekend unforgettable!",
    siteLink: "https://in.bookmyshow.com/events/madras-comedy-show/ET00361816",
    EventsCalendarTitle: "VIBE CHECK - An Youth Friendly Comedy show",
    EventsCalendarContent: "Looking for a weekend plan you can truly count on",
    EventsCalendarMonth: "6 Sep 2025",
    EventsCalendarTime: "04:00 PM",
    EventsCalendarCategory: "Stand up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/VIBE-CHECK.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist: Chennai",
    language: "Tamil, English",
    hours: "1 hour 15 minutes",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "Comedy",
    aboutFull: `Looking for a weekend plan you can truly count on? Vibe Check is not your typical comedy show—it’s an unpredictable mix of laughter, chaos, and 
    everything in between! Featuring a rotating lineup of Chennai’s favorite comics, the stage is set with fresh faces, familiar voices, and brand-new material 
    every time. No artist images, no lineup spoilers—just step in, sit back, and let the surprises unfold. Come vibe with us and walk out with cheeks aching from non-stop laughter!`,
  },
  {
    url: "vikkals-comedy-cafe-standup-comedy-open-mic",
    id: 83,
    metaTitleEvent:
      "Comedy Open Mic Nights / Stand-Up Shows in Chennai This Sept",
    conicallinkEvent: "/eventsdetails/83",
    metaDescriptionEvent:
      "Experience raw humor and fresh acts at Open Mic Nights, 2–4 Sept. ₹100 ticket credit for food & drinks. Shows weekly at Mylapore & Anna Nagar Board Room.",
    siteLink: "https://in.bookmyshow.com/events/vikkals-comedy-cafe/ET00429673",
    EventsCalendarTitle: "Vikkals Comedy Cafe - Standup Comedy Open Mic",
    EventsCalendarContent: "After 10 years in stand-up and six specials",
    EventsCalendarMonth: " 2 Sep – 4 Sep 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/Vikkals-Comedy.jpg",
    link: "/events",
    location: "",
    language: "Tamil, English",
    hours: "1 hour 15 minutes",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "The Board Room, Mylapore: Chennai",
    aboutFull: `Open Mic Nights bring together seasoned stand-up comics and fresh voices testing out their newest jokes—a stage where humor meets raw emotions. Tickets are for audience entry only, and performers must register separately. Enjoy the show with a twist—₹100 from your ticket can be redeemed on food and beverages. Catch us every Tuesday at The Board Room, Mylapore, and every Thursday at The Board Room, Anna Nagar. Don’t forget to check the venue before booking your tickets!`,
  },
  {
    url: "the-chennai-late-night-comedy-show",
    id: 84,
    metaTitleEvent:
      "Uncensored Comedy Nights / Raw Weekend Stand-Up in Chennai",
    conicallinkEvent: "/eventsdetails/84",
    metaDescriptionEvent:
      "Laugh out loud this 5–7 Sept! Late Night Comedy is back with no rules, surprise comics, and pure weekend comedy club vibes to light up Chennai’s vibrant nights.",
    siteLink:
      "https://in.bookmyshow.com/events/the-chennai-late-night-comedy/ET00432136",
    EventsCalendarTitle: "The Chennai Late Night Comedy Show",
    EventsCalendarContent: "Step into the world of Late Night Comedy",
    EventsCalendarMonth: "5 Sep – 7 Sep 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Stand up Comedy",
    image:
      "/images/HomePage-Images/Events/Newevents/The-Chennai-Late-Night.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "English, Hindi",
    hours: "1 hour 15 minutes",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "Comedy",
    aboutFull: `Step into the world of Late Night Comedy, where nothing is off-limits—no jokes are banned, no speech is censored, and no audience can hold back their laughter. This is your go-to spot for pure comedy club energy on the weekends, because honestly, how long can you sip the same Old Monk and binge the same Netflix shows? Let’s make Chennai’s late-night scene exciting again! The lineup remains a surprise for now, but expect seasoned local comics and, if you’re lucky, a few special 
    guest performers dropping in to keep the night unpredictable and unforgettable.`,
  },
  {
    url: "salt-air-swifts-flair",
    id: 85,
    metaTitleEvent: "",
    conicallinkEvent: "/eventsdetails/85",
    metaDescriptionEvent: "",
    siteLink:
      "https://in.bookmyshow.com/events/salt-air-swifts-flair/ET00457727",
    EventsCalendarTitle: "Salt Air: Swift's Flair",
    EventsCalendarContent: "Step into the world of Late Night Comedy",
    EventsCalendarMonth: "",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Music Festivals",
    image: "/images/HomePage-Images/Events/Newevents/Salt-Air.jpg",
    link: "/events",
    location: "",
    language: "English",
    hours: "5 Hours",
    ageLimit: "All age groups",
    rleigion: "Pop",
    aboutFull: `Salt Air & Swift’s Flair ✨🌊 — Chennai Swifties, get ready to live out your Wildest Dreams! Join us on August 31 at 2:30 PM at Third Wave Coffee, Bessy Beach for a cozy café singalong like never before. With strong coffee, friendship bracelet trading, and bridges sung louder than the waves, this sober Swiftie party is open to all ages. For just ₹350 + ₹350 cover, experience 4 hours of enchanted energy, golden friendships, and music that makes us feel truly fearless. From the chills of August to the heartbreak of All Too Well, 
    every song is a memory waiting to be made. 💖 Don’t miss it—save your spot now, because nights like these never go out of style!`,
  },
  {
    url: "bad-drawing-party",
    id: 86,
    metaTitleEvent: "",
    conicallinkEvent: "/eventsdetails/86",
    metaDescriptionEvent: "",
    siteLink: "https://in.bookmyshow.com/events/bad-drawing-party/ET00380239",
    EventsCalendarTitle: "Bad Drawing Party",
    EventsCalendarContent:
      "Step into a world of creativity and fun at our Bad Drawing Party!",
    EventsCalendarMonth: "2 Sep – 5 Oct 2025",
    EventsCalendarTime: "2:30 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/Bad-Drawing.jpg",
    link: "/events",
    location: "Dices And Drama: Chennai",
    language: "Bengali, English, Hindi, Kannada, Malaya",
    hours: "1 Hour",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "",
    aboutFull: `Step into a world of creativity and fun at our Bad Drawing Party! Whether you’re a skilled artist or just a casual doodler, this event is all about celebrating imperfections, sharing laughs, and connecting through art in a completely judgment-free space. 
    Come unleash your inner artist, bond with others, and enjoy the beauty of creating without pressure.`,
  },
  {
    url: "hamleys-play-chennai",
    id: 87,
    metaTitleEvent: "",
    conicallinkEvent: "/eventsdetails/87",
    metaDescriptionEvent: "",
    siteLink:
      "https://in.bookmyshow.com/events/hamleys-play-chennai/ET00362045",
    EventsCalendarTitle: "Hamleys Play - Chennai",
    EventsCalendarContent: "Hamleys Play reimagines the traditional concept",
    EventsCalendarMonth: "2 Sep – 30 Sep 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Entertainment",
    image: "/images/HomePage-Images/Events/Newevents/Hamleys-Play.jpg",
    link: "/events",
    location: "Phoenix Marketcity: Chennai",
    language: "English",
    hours: "1 Hour",
    ageLimit: "",
    rleigion: "",
    aboutFull: `Hamleys Play reimagines the traditional concept of play by blending the joy of the outdoors with the boundless imagination of a child’s mind. Step into the magical world of Mr. & Mrs. Hopper as they guide you through their private adventure garden, packed with exciting attractions like the Musical Wall, 
    Ball Pool, Slides, Scarf Shooters, Sand Play, Rock Climbing, Water Play, and many more fun-filled activities designed to spark curiosity and endless laughter.`,
  },
  {
    url: "hand-pressed-pottery",
    id: 88,
    metaTitleEvent: "Hand-Pressed Pottery Workshop / Creative Event / Chennai",
    conicallinkEvent: "/eventsdetails/88",
    metaDescriptionEvent:
      "Get hands-on with pottery! Craft keepsakes in this beginner-friendly workshop (1–18 Sep, Chennai). Materials included. Sign up and get creative!",
    siteLink:
      "https://in.bookmyshow.com/events/hand-pressed-pottery/ET00457809",
    EventsCalendarTitle: "Hand pressed Pottery",
    EventsCalendarContent:
      "Join our Hand-Pressed Pottery Trinket Making Workshop",
    EventsCalendarMonth: "1 Sep – 18 Sep 2025",
    EventsCalendarTime: "7:30 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/Hand-pressed.jpg",
    link: "/events",
    location: "Wiggle Room: Chennai",
    language: "English, Tamil",
    hours: "1 hour 15 minutes",
    ageLimit: "Age Limit - 5yrs +",
    rleigion: "",
    aboutFull: `Join our Hand-Pressed Pottery Trinket Making Workshop ✨ and create your own little work of art! In this hands-on session, you’ll learn traditional hand-pressed pottery techniques to craft beautiful trinkets—from dainty dishes to quirky keepsakes. All materials are provided, 
    and your finished piece will be carefully packed for you to take home. Whether you’re making something special for yourself or a heartfelt gift, it’s the perfect chance to get creative, mindful, and a little messy!`,
  },
  {
    url: "kids-mandala-workshop",
    id: 89,
    metaTitleEvent:
      "Art Workshop in Chennai / Beginner-Friendly Creative Event",
    conicallinkEvent: "/eventsdetails/89",
    metaDescriptionEvent:
      "Sept 6–7: Explore your creativity with a guided art class, small groups, and 50% food credit. All materials included. Register early!",
    siteLink: "https://in.bookmyshow.com/events/mandala-workshop/ET00421105",
    EventsCalendarTitle: "Kid's Mandala workshop ",
    EventsCalendarContent:
      "Join our beginner-friendly art workshop for a relaxed and creative",
    EventsCalendarMonth: "6 Sep – 7 Sep 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Entertainment",
    image: "/images/HomePage-Images/Events/Newevents/Kids-Mandala.jpg",
    link: "/events",
    location: "House of Games, Kilpauk: Chennai",
    language: "English, Tamil",
    hours: "1 hour",
    ageLimit: "All age groups",
    rleigion: "",
    aboutFull: `Join our beginner-friendly art workshop for a relaxed and creative escape where you’ll be guided step by step by our instructor at your own pace, with all materials provided and flexible timing to suit your rhythm. Whether you come solo, with friends, family, or as a couple, you’ll enjoy a calming space to express yourself while also receiving personalized attention in small formats (1:1, 2:1, or 3:1). Plus, 50% of your venue payment comes back as food credit, so you can indulge in delicious refreshments as you create. 
    At the end of the session, take home not just new skills but also your own handmade masterpiece. Prior registration is required—contact the café for details!`,
  },
  {
    url: "quadrant-life-crisis-stand-up-solo-by-navin-kumar",
    id: 90,
    metaTitleEvent:
      "Navin Kumar Comedy Tour / Laughter-Packed Shows / Super Chennai",
    conicallinkEvent: "/eventsdetails/90",
    metaDescriptionEvent:
      "Catch Navin Kumar’s viral comedy live! The Quadrant Life Crisis is a hilarious journey from a global comic you can’t miss. Book tickets now for Sept 6–13!",
    siteLink:
      "https://in.bookmyshow.com/events/quadrant-life-crisis-stand-up-solo-by-navin-kumar/ET00433604",
    EventsCalendarTitle: "Quadrant Life Crisis- Stand Up Solo by Navin Kumar",
    EventsCalendarContent:
      "Navin Kumar, one of India’s most viral English comics",
    EventsCalendarMonth: "6 Sep – 13 Sep 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Stand up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/Quadrant-Life.jpg",
    link: "/events",
    location: "Trinity Studio : Kodambakkam",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Navin Kumar, one of India’s most viral English comics with over 20 million views on YouTube and Instagram, is widely loved for his Quadrant Videos that hilariously capture the randomness of life. Fresh off the Edinburgh Fringe Festival and a sold-out show in London, 
    he now brings The Quadrant Life Crisis to his homeland, promising a comedy experience for everyone—because honestly, there’s only so much he can say about himself in the third person. So just come and enjoy the show!`,
  },
  {
    url: "kids-texture-workshop",
    id: 91,
    metaTitleEvent:
      "3D Art Workshop / Super Chennai / Beginner-Friendly Art Event",
    conicallinkEvent: "/eventsdetails/91",
    metaDescriptionEvent:
      "Join us 6–7 Sept 2025 at House of Games, Kilpauk! A 2.5-hour guided art session with step-by-step learning, all materials, and refreshments included.",
    siteLink: "https://in.bookmyshow.com/events/macrame-workshop/ET00433154",
    EventsCalendarTitle: "Kid's Texture Workshop",
    EventsCalendarContent:
      "Discover your creative side at our beginner-friendly art workshop",
    EventsCalendarMonth: "6 Sep – 7 Sep 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Entertainment",
    image: "/images/HomePage-Images/Events/Newevents/Kids-Texture.jpg",
    link: "/events",
    location: "House of Games, Kilpauk: Chennai",
    language: "English, Tamil",
    hours: "2 hours 30 minutes",
    ageLimit: "Age Limit - 10yrs +",
    rleigion: "",
    aboutFull: `Discover your creative side at our beginner-friendly art workshop, where you’ll play with palette knives and texture paste to craft wall-worthy 3D art pieces of your own. With step-by-step guidance from our instructor, 
    all materials provided, and a relaxed, flexible pace, this session is designed for everyone—whether you’re joining solo, as a couple, with friends, or family. Enjoy a calming, expressive space, personalized attention in small group formats (1:1, 2:1, or 3:1), and delicious refreshments with 50% of your venue fee redeemable as food credit. By the end of the workshop, you’ll take home not just new skills but also your very own handmade masterpiece. Prior registration required—contact the café for details.`,
  },
  {
    url: "midnight-tribe-festival",
    id: 92,
    metaTitleEvent:
      "3D Art Workshop / Super Chennai / Beginner-Friendly Art Event",
    conicallinkEvent: "/eventsdetails/92",
    metaDescriptionEvent:
      "Join us 6–7 Sept 2025 at House of Games, Kilpauk! A 2.5-hour guided art session with step-by-step learning, all materials, and refreshments included.",
    siteLink: "https://kynhood.com/event/68a7571bd040f8a6f646fee1",
    EventsCalendarTitle: "Midnight Tribe Festival",
    EventsCalendarContent:
      "✨ Plan a quick escape to Puducherry! ✨ Whether you’re a music",
    EventsCalendarMonth: "5 Sep – 6 Sep 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/206.jpg",
    link: "/events",
    location: "Sandunes Paradise Beach, Puducherry",
    language: "",
    hours: "4.00 PM",
    ageLimit: "",
    rleigion: "",
    aboutFull: `✨ Plan a quick escape to Puducherry! ✨ Whether you’re a music enthusiast, beach lover, thrill-seeker, foodie, or simply in need of a refreshing break, the Midnight Tribe Festival is the place to be on 5th & 6th September at Sandunes Paradise Beach Resort. Why go? Well, the real question is—why miss it! Over two exciting days, enjoy live music, electrifying performances, food stalls, water sports, and an incredible showcase of local talent and artists. As the sun sets behind Paradise Beach, the vibe only gets better, transforming into a vibrant night of music, fun, and unforgettable memories. The festival kicks off daily at 4 PM with Sundowner sessions, followed by live DJ and band performances from 8 PM onward, all while you indulge in a mouthwatering spread of the freshest seafood straight from the coast.`,
  },
  {
    url: "prom-chennai",
    id: 93,
    metaTitleEvent:
      "3D Art Workshop / Super Chennai / Beginner-Friendly Art Event",
    conicallinkEvent: "/eventsdetails/93",
    metaDescriptionEvent:
      "Join us 6–7 Sept 2025 at House of Games, Kilpauk! A 2.5-hour guided art session with step-by-step learning, all materials, and refreshments included.",
    siteLink: "https://kynhood.com/event/689ad724999af733d07d6125",
    EventsCalendarTitle: "Prom Chennai",
    EventsCalendarContent: "Thus spoke, the greatest night ever foretold",
    EventsCalendarMonth: "6 Sep 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Meetups, Night Life",
    image: "/images/HomePage-Images/Events/Newevents/209.jpg",
    link: "/events",
    location: "Bhola & Blonde, Thousand Lights",
    language: "",
    hours: "3.00 PM",
    ageLimit: "18+ years",
    rleigion: "",
    aboutFull: `Thus spoke, the greatest night ever foretold” — we bring you PROM. The night we once only dreamt of, imagined through high school rom-coms, filled with slow dances, glittering lights, and the thrill of walking in with a date, is finally here. This September, EN/D is making that fantasy a reality, bringing Chennai a grand, euphoric celebration bigger and bolder than you ever imagined. Picture this: 100 couples, your song playing at just the right moment, a dance floor designed for pure magic, and a setting drenched in gold, purple, and black opulence fit for the gods themselves. Everything you thought was out of reach is now within your grasp—it’s real, it’s happening, and it’s waiting for you on September 6th. Bring a girl, a boy, anyone—just bring your date, because this is PROM. Note: Venue cover charges (F&B) apply and are to be settled separately at the venue.`,
  },
  {
    url: "big-saturday-night",
    id: 94,
    metaTitleEvent:
      "3D Art Workshop / Super Chennai / Beginner-Friendly Art Event",
    conicallinkEvent: "/eventsdetails/94",
    metaDescriptionEvent:
      "Join us 6–7 Sept 2025 at House of Games, Kilpauk! A 2.5-hour guided art session with step-by-step learning, all materials, and refreshments included.",
    siteLink: "https://kynhood.com/event/68b592142835c512514be8ab",
    EventsCalendarTitle: "Big Saturday Night",
    EventsCalendarContent: "Thus spoke, the greatest night ever foretold",
    EventsCalendarMonth: "6 Sep 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Meetups, Night Life",
    image: "/images/HomePage-Images/Events/Newevents/201.jpg",
    link: "/events",
    location: "NOCI RestoBar, Express Avenue, Royapettah",
    language: "",
    hours: "7.00 PM",
    ageLimit: "21+ years",
    rleigion: "",
    aboutFull: `Thus spoke, the greatest night ever foretold” — we bring you PROM. The night we once only dreamt of, imagined through high school rom-coms, filled with slow dances, glittering lights, and the thrill of walking in with a date, is finally here. This September, EN/D is making that fantasy a reality, bringing Chennai a grand, euphoric celebration bigger and bolder than you ever imagined. Picture this: 100 couples, your song playing at just the right moment, a dance floor designed for pure magic, and a setting drenched in gold, purple, and black opulence fit for the gods themselves. Everything you thought was out of reach is now within your grasp—it’s real, it’s happening, and it’s waiting for you on September 6th. Bring a girl, a boy, anyone—just bring your date, because this is PROM. Note: Venue cover charges (F&B) apply and are to be settled separately at the venue.`,
  },
  {
    url: "floor-yoga-workshop",
    id: 95,
    metaTitleEvent: "",
    conicallinkEvent: "/eventsdetails/95",
    metaDescriptionEvent: "",
    siteLink: "https://kynhood.com/event/68a2fc2432e22ed6652d8ee8",
    EventsCalendarTitle: "Floor Yoga Workshop",
    EventsCalendarContent:
      "Begin your morning with renewal and balance at the Floor Yoga Workshop ",
    EventsCalendarMonth: "6 Sep 2025",
    EventsCalendarTime: "6:00 AM",
    EventsCalendarCategory: "Workshop",
    image: "/images/HomePage-Images/Events/Newevents/204.jpg",
    link: "/events",
    location: "Dream Yoga Studio, Thalambur",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `Begin your morning with renewal and balance at the Floor Yoga Workshop happening on 6th September, 6:00–7:00 AM, at Dream Yoga Studio, Thalambur. Open to all levels, this session will guide you through grounding postures and mindful movements designed to build strength, flexibility, and balance while deepening your connection to the mat. Floor yoga helps release tension, improve core stability, and enhance body awareness, leaving you both energized and centered. Led by an experienced instructor, the workshop offers a supportive space to refine your practice, calm your mind, and start the day with positivity and focus. Reserve your spot now and embrace a morning of movement, mindfulness, and fresh energy! For enquiries: 63851 11315.`,
  },
  {
    url: "aerial-yoga-one-day-workshop",
    id: 96,
    metaTitleEvent: "",
    conicallinkEvent: "/eventsdetails/96",
    metaDescriptionEvent: "",
    siteLink: "https://kynhood.com/event/68a2f92f0480e36e566f5749",
    EventsCalendarTitle: "Aerial Yoga - One Day Workshop",
    EventsCalendarContent: "Experience the freedom of movement and lightness",
    EventsCalendarMonth: "6 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Workshop",
    image: "/images/HomePage-Images/Events/Newevents/205.jpg",
    link: "/events",
    location: "Dream Yoga Studio, Thalambur",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `Experience the freedom of movement and lightness at the Aerial Yoga Session at Dream Yoga Studio, Thalambur, on 6th September from 6:00–7:00 PM. This unique practice blends traditional yoga, Pilates, and dance with the support of a hammock, allowing you to stretch deeper, improve flexibility, and build strength while feeling weightless and free. Guided by expert instructors, you’ll safely explore inversions and poses that strengthen your core, release spinal tension, and boost circulation. Suitable for both beginners and experienced practitioners, Aerial Yoga offers a refreshing way to reconnect with your body, calm your mind, and uplift your spirit. Come breathe, flow, and discover yoga like never before—limited spots available, so reserve your place in the sky today! 🌿`,
  },
  {
    url: "zumba-workshop",
    id: 97,
    metaTitleEvent: "",
    conicallinkEvent: "/eventsdetails/97",
    metaDescriptionEvent: "",
    siteLink: "https://kynhood.com/event/68a2fde532e22ed6652d8ef9",
    EventsCalendarTitle: "Zumba Workshop",
    EventsCalendarContent:
      "Discover the joy of weightlessness and flow at the Aerial Yoga Session",
    EventsCalendarMonth: "6 Sep 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Workshop",
    image: "/images/HomePage-Images/Events/Newevents/208.jpg",
    link: "/events",
    location: "Dream Yoga Studio, Thalambur ",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `Discover the joy of weightlessness and flow at the Aerial Yoga Session happening on 6th September, 6:00–7:00 PM at Dream Yoga Studio, Thalambur. Blending traditional yoga postures with elements of Pilates and dance, this practice uses a supportive hammock to help you stretch deeper, enhance flexibility, and build strength while feeling light and free. With guidance from experienced instructors, you’ll explore safe and effective inversions and poses that strengthen the core, ease spinal tension, and improve circulation. Suitable for both beginners and seasoned practitioners, Aerial Yoga is a refreshing way to reconnect with your body, calm your mind, and uplift your spirit. Come breathe, move, and experience yoga like never before—limited spots available, so secure your place today! 🌿`,
  },
  {
    url: "sashiko-stitches",
    id: 98,
    metaTitleEvent: "",
    conicallinkEvent: "/eventsdetails/98",
    metaDescriptionEvent: "",
    siteLink: "https://kynhood.com/event/68b572a468d895f15d971a94",
    EventsCalendarTitle: "Sashiko Stitches",
    EventsCalendarContent:
      "Step into the ancient and mindful world of Japanese ",
    EventsCalendarMonth: "7 Sep 2025",
    EventsCalendarTime: "10:30 AM",
    EventsCalendarCategory: "Workshop",
    image: "/images/HomePage-Images/Events/Newevents/207.jpg",
    link: "/events",
    location: "Hermoso Studio, Nungambakkam",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `Step into the ancient and mindful world of Japanese embroidery with the Sashiko Stitches Workshop! Designed for beginners, this hands-on session will be held on September 7th, 2025, at Hermoso Studio, Nungambakkam, from 10:30 AM to 6:30 PM. Guided through the traditional running-stitch technique, you’ll learn the core patterns and rhythms of Sashiko while crafting your own durable, one-of-a-kind design on a chic tote bag. With all materials provided, it’s the perfect chance to relax, spark your creativity, and immerse yourself in a timeless art form. Hosted at the SWE Space, a community dedicated to creation and expression, the workshop promises a rewarding day of learning, making, and connection. Don’t miss this fulfilling artistic journey—secure your spot today! For enquiries (WhatsApp): 6385804591.`,
  },
  {
    url: "vikkals-comedy-cafe-standup-comedy-open-mic",
    id: 99,
    metaTitleEvent:
      "Tamil Stand-Up Comedy Show | Vikkals Vikram - Super Chennai",
    conicallinkEvent: "/eventsdetails/99",
    metaDescriptionEvent:
      "Laugh out loud at this Tamil Stand-Up Comedy Show with Vikkals Vikram in Chennai. Enjoy unfiltered humor, witty stories, and nonstop fun for a memorable night.",
    siteLink: "https://in.bookmyshow.com/events/vikkals-comedy-cafe/ET00429673",
    EventsCalendarTitle: "Vikkals Comedy Cafe - Standup Comedy Open Mic",
    EventsCalendarContent: "Want to experience a laughter roller coaster",
    EventsCalendarMonth: "9 Sep – 11 Sep 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Open Mic Comedy",
    image: "/images/HomePage-Images/Events/Newevents/e219.jpg",
    link: "/events",
    location: "The Board Room, Mylapore: Chennai",
    language: "Tamil, English",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "Comedy",
    aboutFull: `Want to experience a laughter roller coaster? Here we have the most promising comedian Vikram Arul Vidyapathi also known as Vikkals Vikram brings you a fun-filled Standup Comedy Open Mic Night now in Chennai. So this is the perfect place to explore an unfiltered comedy with purest form. Starting from everyday struggles to quirky observations he knows how to change anything to humor— make sure you will laugh from your heart for the whole night.`,
  },
  {
    url: "tamil-retro-nite-ft-mj-shriram",
    id: 100,
    metaTitleEvent:
      "MJ Shriram Concert | Ilaiyaraaja & MSV Tribute - Super Chennai",
    conicallinkEvent: "/eventsdetails/100",
    metaDescriptionEvent:
      "Enjoy MJ Shriram live in Chennai with a soulful tribute to Ilaiyaraaja, MSV & Tamil music legends. Relive nostalgic melodies and timeless classics with loved ones.",
    siteLink:
      "https://in.bookmyshow.com/events/tamil-retro-nite-ft-mj-shriram/ET00459616",
    EventsCalendarTitle: "Tamil Retro Nite Ft. MJ Shriram",
    EventsCalendarContent: "!Let ‘s go back to nostalgia! We have MJ Shriram",
    EventsCalendarMonth: "12 Sep 2025",
    EventsCalendarTime: "9:00 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/e216.jpg",
    link: "/events",
    location: "Hard Rock Cafe, Nungabakkam: Chennai",
    language: "Tamil",
    hours: "2 hours",
    ageLimit: "Age Limit - 21yrs +",
    rleigion: "Regional, Retro",
    aboutFull: `!Let ‘s go back to nostalgia! We have MJ Shriram to take us back into the magic of MSV  and Ilaiyaraaja along with more legends with his soulful singing. More than a concert it's an emotion of going back to the memory lane, where songs remain of our story or a moment we have cherished. Come sing along and enjoy your nostalgic nite with your loved ones.`,
  },
  {
    url: "ini-filter-theva-illai",
    id: 101,
    metaTitleEvent:
      "Ini Filter Theva Illai | Glowing Skin & Self-Care - Super Chennai",
    conicallinkEvent: "/eventsdetails/101",
    metaDescriptionEvent:
      "Discover the secrets to glowing skin at Ini Filter Theva Illai. Learn self-care tips for women, wellness insights, and how to nurture your radiance from within.",
    siteLink:
      "https://in.bookmyshow.com/events/ini-filter-theva-illai/ET00461117",
    EventsCalendarTitle: "Ini Filter Theva Illai",
    EventsCalendarContent:
      "Are you ready for unfiltered laughter, stories for comedy!",
    EventsCalendarMonth: "12 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/e223.jpg",
    link: "/events",
    location: "LIVF Fertility And Womens Healthcare: Chennai",
    language: "Tamil, English",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "",
    aboutFull: `Ini filter ah theva ila. Your natural glow comes from discovering the connection between hormones, lifestyle, and wellness. Join our Women's Wellness Evening to learn the science behind glowing skin and inner health, and get insights on how to nurture your radiance from within.`,
  },
  {
    url: "jungle-rave-2025-chennais-first-ever-sober-rave",
    id: 102,
    metaTitleEvent:
      "Jungle Rave 2025 | Chennai First Ever Sober Rave - Super Chennai",
    conicallinkEvent: "/eventsdetails/102",
    metaDescriptionEvent:
      " Jungle Rave 2025, Chennai’s first ever sober rave, features top DJs, jungle-themed lights, dance, music, and a vibrant community celebrating life and nightlife.",
    siteLink:
      "https://in.bookmyshow.com/events/jungle-rave-2025-chennai-s-first-ever-sober-rave/ET00460614",
    EventsCalendarTitle: "Jungle Rave 2025 (Chennai's First Ever Sober Rave)",
    EventsCalendarContent: "Jump into a sparkling night like no other!",
    EventsCalendarMonth: "13 Sep 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Music Festivals",
    image: "/images/HomePage-Images/Events/Newevents/e211.jpg",
    link: "/events",
    location: "Noci Adante: Chennai",
    language: "English, Hindi, Tamil",
    hours: "5 hours",
    ageLimit: "Age Limit - 12yrs +",
    rleigion: "Afro, Bollywood, EDM, Hip Hop, House",
    aboutFull: `Jump into a sparkling night like no other!. Jungle Rave 2025 pops Chennai’s first ever sober rave , where sound, magic and dance take the spotlight— no substances required. Love yourself in the beats of top-DJs, lose yourself in stunned jungle themed lights and connect with the community of celebrating life together. It's not just a party— it's a revolution in nightlife. Just imagine being in a place full of music, magic, engaging activities and enjoyment where you can be truly yourself.`,
  },

  {
    url: "news-reading-workshop-by-news-reader-ranjith",
    id: 103,
    metaTitleEvent:
      "Master News Reading | Workshop with Ranjith - Super Chennai",
    conicallinkEvent: "/eventsdetails/103",
    metaDescriptionEvent:
      " News reading workshop with Ranjith in Chennai. Learn pronunciation, voice modulation, presentation skills, and techniques to become a confident news reader.",
    siteLink:
      "https://in.bookmyshow.com/events/news-reading-workshop-by-news-reader-ranjith/ET00459235",
    EventsCalendarTitle: "NEWS READING WORKSHOP BY NEWS READER RANJITH",
    EventsCalendarContent:
      "This workshop is well designed for aspiring news readers",
    EventsCalendarMonth: "13 Sep 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Acting",
    image: "/images/HomePage-Images/Events/Newevents/e221.jpg",
    link: "/events",
    location: "Aarokiya Annam: Chennai",
    language: "Tamil",
    hours: "2 hours",
    ageLimit: "",
    rleigion: "",
    aboutFull: `This workshop is well designed for aspiring news readers, passionate about the art of communication and media enthusiasts. We have news reader Ranjinth to share his journey and knowledge and techniques on pronunciation, voice modulation and presentation style that make an impactful news reader. If you dream of becoming a news reader or want to develop your communication skill this workshop will empower you with practical tools and inspiration.`,
  },
  {
    url: "koolly",
    id: 104,
    metaTitleEvent:
      "Lokesh Ambigapathy | Koolly Tanglish Comdey Show - Super Chennai",
    conicallinkEvent: "/eventsdetails/104",
    metaDescriptionEvent:
      "Laugh out loud with Vijay TV Lokesh Ambigapathy in Chennai! Koolly Tanglish stand-up comedy blends Tamil & English humor for a fun-filled night of nonstop laughter.",
    siteLink: "https://in.bookmyshow.com/events/koolly/ET00459627",
    EventsCalendarTitle: "KOOLLY",
    EventsCalendarContent:
      "Be  ready, Chennai!  Lokesh Ambigapathy, the much-loved Vijay TV",
    EventsCalendarMonth: "13 Sep 2025",
    EventsCalendarTime: "5:30 PM",
    EventsCalendarCategory: "Stand up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/e215.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 8yrs +",
    rleigion: "Comedy",
    aboutFull: `Be  ready, Chennai!  Lokesh Ambigapathy, the much-loved Vijay TV comedy artist, is here with his rib-tickling Koolly Tanglish Stand-Up Show.  A perfect blend of tamil and english humor we have Lokesh Ambigapathy most beloved Vijay TV comedy artist with  his non stop laughter of Koolly Tanglish Stand-Up comedy show. Whether it's a chennai vibe or day to day life or quirky talks on culture, Lokesh knows how to keep us laughing non-stop. Don't miss this chance of unlimited laughter,fun and entertainment with the most promising stand up comedian.`,
  },
  {
    url: "smooth-adi-a-tamil-standup-show",
    id: 105,
    metaTitleEvent:
      "SMOOTH ADI | Tamil Stand-Up Comedy Show Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/105",
    metaDescriptionEvent:
      "Catch SMOOTH ADI in Chennai for a Tamil stand-up comedy show with witty humor, cultural sketches, relatable stories, and nonstop laughter for a fun night.",
    siteLink:
      "https://in.bookmyshow.com/events/guna-sai-live-a-tamil-standup-comedy-show/ET00361726",
    EventsCalendarTitle: "SMOOTH ADI - A TAMIL STANDUP SHOW",
    EventsCalendarContent:
      "Chennai’s Smooth Adi is here to engage you with lots of humor",
    EventsCalendarMonth: "13 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Stand up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/e226.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist: Chennai",
    language: "Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "Comedy",
    aboutFull: `Chennai’s Smooth Adi is here to engage you with lots of humor and story relatable to our day to day life. Guna Sai is known for his effortless comedies and style adding on this ADI makes you laugh straight from the heart of tamil culture on stage. Smooth Adi comedy promises a night full of endless laughter and positive vibes.`,
  },
  // {
  //   id: 106,
  //   metaTitleEvent: "Kids Chess Upskilling Session | Ages 5–15 - Super Chennai",
  //   conicallinkEvent: "/eventsdetails/106",
  //   metaDescriptionEvent:
  //     "Boost your child’s skills with the Kids Chess Upskilling Session in Chennai. For ages 5–15, build confidence, sharpen minds & learn chess while having fun.",
  //   siteLink:
  //     "https://in.bookmyshow.com/events/kids-chess-upskilling-workshop-ages-5-to-15/ET00456806",
  //   EventsCalendarTitle: "Kids Chess Upskilling Session : Ages 5-15",
  //   EventsCalendarContent:
  //     "Activating your little one's mind is way easier if you visit here",
  //   EventsCalendarMonth: "13 Sep 2025",
  //   EventsCalendarTime: "7:00 PM",
  //   EventsCalendarCategory: "Education",
  //   image: "/images/HomePage-Images/Events/Newevents/e222.jpg",
  //   link: "/events",
  //   location: "Your Place and Your Time: India",
  //   language: "English",
  //   hours: "1 hour 30 minutes",
  //   ageLimit: "",
  //   rleigion: "",
  //   aboutFull: `Activating your little one's mind is way easier if you visit here. Here’s a chance for your kids to sharpen their cognitive skills, develop confidence and also by having fun. Chennai came with another awakening session for kids inducing games —  The Kids Chess Upskilling Session for 5-15 years children.  Bring your little one and let them boost their confidence in their way by playing also by learning.`,
  // },
  {
    url: "space-cadet-by-varun-thakur",
    id: 107,
    metaTitleEvent:
      "Space Cadet | Varun Thakur Stand-Up Comedy - Super Chennai",
    conicallinkEvent: "/eventsdetails/107",
    metaDescriptionEvent:
      "Catch Varun Thakur Stand-Up Comedy in Chennai with Space Cadet. Enjoy witty jokes, energetic performances, quirky observations, and nonstop laughter.",
    siteLink:
      "https://in.bookmyshow.com/events/space-cadet-by-varun-thakur/ET00339165",
    EventsCalendarTitle: "Space Cadet by Varun Thakur",
    EventsCalendarContent: "Are you ready for a humor filler evening!",
    EventsCalendarMonth: "13 Sep – 14 Sep 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Stand up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/e220.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "English, Hindi",
    hours: "1 Hour",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Are you ready for a humor filler evening! We have the Space Cadet, a brand new solo show presented by all our favorite comedian Varun Thakur known for his  energetic storytelling and on-spot impressions. Experience a rollercoaster ride of jokes about everything in our life and also some serious talk. Don’t miss out this laughter ride grab your seat with us.`,
  },

  {
    url: "musicom-finale-karoake-music-show-and-competition",
    id: 108,
    metaTitleEvent:
      "Musicom Finale | Karaoke & Singing Competition - Super Chennai",
    conicallinkEvent: "/eventsdetails/108",
    metaDescriptionEvent:
      "Showcase your talent at Musicom Finale, Chennai’s ultimate karaoke and singing competition. Enjoy soulful melodies, blasting hits, and unforgettable performances.",
    siteLink:
      "https://in.bookmyshow.com/events/musicom-finale-karoake-music-show-and-competition/ET00456083",
    EventsCalendarTitle: "Musicom Finale- Karoake Music Show and Competition",
    EventsCalendarContent:
      "Have a passion for music but not sure where to start",
    EventsCalendarMonth: "14 Sep 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Music Festivals",
    image: "/images/HomePage-Images/Events/Newevents/e217.jpg",
    link: "/events",
    location: "Kavikko Convention Centre: Chennai",
    language: "Tamil",
    hours: "5 hours",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "Regional",
    aboutFull: `Have a passion for music but not sure where to start?! This is for you. We came up with a karaoke music show and competition —Musicom Finale to step up all the music lovers who are passionate about music. From soulful melodies to blasting hits this finale is just gonna be a rocking night with unforgettable performances and entertainment. Grab the mic to show your voice to the world. Without music there is no life, come experience the art of sounds and voices.`,
  },
  {
    url: "secrets-a-tamil-standup-show",
    id: 109,
    metaTitleEvent:
      "SECRETS | Tamil Stand-Up Comedy Show in Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/109",
    metaDescriptionEvent:
      "Laugh out loud at SECRETS, a Tamil stand-up comedy show in Chennai. Friendship tales, family quirks, and daily life secrets create an evening full of fun!",
    siteLink: "https://in.bookmyshow.com/events/comedy-combo/ET00364786",
    EventsCalendarTitle: "SECRETS - A Tamil Standup show ",
    EventsCalendarContent: "Step into a laughter packed evening with SECRETS",
    EventsCalendarMonth: "14 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Stand up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/e210.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist: Chennai",
    language: "Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Step into a laughter packed evening with SECRETS — a tamil stand comedy show that drives you into hilarious, relatable and so many surprise moments of daily life. From friendship tales and family drama to little quirks of chennai living, nothing is small or big in front of spilling the secrets on stage. With witty punchlines and relatable stories and plenty of Laughing-Out-Loud  moments with amazing comics of Chennai Prabu, Sai Anand, Vanshita, Sandeep and Divyanand you all gonna have a non-stop laughing evening. `,
  },
  {
    url: "ghar-an-open-mic-for-words-by-tape-a-tale",
    id: 110,
    metaTitleEvent:
      "Tape A Tale GHAR Open Mic | Storytellers & poetry- Super Chennai",
    conicallinkEvent: "/eventsdetails/110",
    metaDescriptionEvent:
      " Celebrate creativity at Tape A Tale GHAR Open Mic in Chennai. A warm evening of storytellers, poetry, and spoken word artists sharing heartfelt tales and emotions.",
    siteLink:
      "https://in.bookmyshow.com/events/ghar-an-open-mic-for-words-by-tape-a-tale/ET00377836",
    EventsCalendarTitle: "Ghar - An Open Mic For Words By Tape A Tale",
    EventsCalendarContent: "GHAR is where stories find a home.",
    EventsCalendarMonth: "14 Sep – 21 Sep 2025",
    EventsCalendarTime: "12:00 PM",
    EventsCalendarCategory: "Performances",
    image: "/images/HomePage-Images/Events/Newevents/e218.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "English, Hindi, Hinglish",
    hours: "1 hour 30 minutes",
    ageLimit: "All age groups",
    rleigion: "",
    aboutFull: `GHAR is where stories find a home.  An open mic by Tape A Tale, GHAR offers storytellers, poets, writers, and spoken word artists to express their feelings and create a community bond to communicate by giving and receiving feedback. Whether it's a tale from your heart or thoughts you have been waiting to voiceout— this is the safest space to be listened to and celebrated. Join us in Chennai for an heart warming evening of poetry, storytelling and bond to take all the way with you.`,
  },

  {
    url: "lit-mic-chennai-open-mic-edition-36",
    id: 111,
    metaTitleEvent:
      "Open Mic Chennai | Lit-Mic Stand-Up Comedy Show - Super Chennai",
    conicallinkEvent: "/eventsdetails/111",
    metaDescriptionEvent:
      "Celebrate poetry, music & laughter at Lit-Mic open mic in Chennai. The 36th edition brings storytellers, artists & stand up comedy open mic Chennai all in one night.",
    siteLink:
      "https://in.bookmyshow.com/events/lit-mic-chennai-open-mic-edition-36/ET00460366",
    EventsCalendarTitle: "LIT-MIC - Chennai Open Mic - Edition 36",
    EventsCalendarContent: "An electrifying evening of celebrating poetry",
    EventsCalendarMonth: "14 Sep 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/e213.jpg",
    link: "/events",
    location: "IDAM - The Art & Cultural Space: Chennai",
    language: "English, Hindi, Tamil",
    hours: "3 hours",
    ageLimit: "All age groups",
    rleigion: "",
    aboutFull: `An electrifying evening of celebrating poetry, stories, music and of course comedy! — Lit-Mic Chennai returns with its 36th edition of promising laughter, rhythm, emotions and creative energy. This is the stage where performers come together to expose their voices and connect with the audience to create unforgettable moments. Come join us for an evening filled with expression, art and bonding with Chennai.`,
  },

  {
    url: "blacksheep-kida-virunthu-concert",
    id: 112,
    metaTitleEvent:
      "Black Sheep Kida Virunthu | Music & Arts Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/112",
    metaDescriptionEvent:
      "Black Sheep Kida Virunthu in Chennai brings sensational musicians for a music & arts festival with power-packed performances, vibrant energy, and nonstop fun.",
    siteLink:
      "https://in.bookmyshow.com/events/blacksheep-kida-viruthu-concert/ET00457696",
    EventsCalendarTitle: "BLACKSHEEP KIDA VIRUNTHU CONCERT",
    EventsCalendarContent:
      "Music is an art of embracing our feeling beyond just words",
    EventsCalendarMonth: "14 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/e212.jpg",
    link: "/events",
    location: "Vales University, Pallavaram: Chennai",
    language: "Tamil",
    hours: "6 hours",
    ageLimit: "Age Limit - 5yrs +",
    rleigion: "Folk, Regional",
    aboutFull: `Music is an art of embracing our feeling beyond just words, it's a tool to reach people easily through a beautiful blend of mixed sounds, words and voices. Here we have our  Black Sheep Kida Virunthu Concert that brings Black sheep stars and your favorite sensational musicians to present powerpack performances together. Get ready chennai! For a grand musical entertainment feast.`,
  },

  {
    url: "pichwai-painting-workshop",
    id: 113,
    metaTitleEvent:
      "Pichwai Art for Beginners | Painting Workshop - Super Chennai",
    conicallinkEvent: "/eventsdetails/113",
    metaDescriptionEvent:
      "Pichwai Art for Beginners painting workshop in Chennai. Learn traditional techniques, relax creatively, and bring cultural stories to life on canvas.",
    siteLink:
      "https://in.bookmyshow.com/events/pichwai-painting-workshop/ET00416246",
    EventsCalendarTitle: "Pichwai Painting Workshop",
    EventsCalendarContent:
      "Everything is an art but a tool to voiceout with words is painting",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/e225.jpg",
    link: "/events",
    location: "Dices And Drama: Chennai",
    language: "Bengali, English, Hindi, Telugu",
    hours: "2 hours",
    ageLimit: "",
    rleigion: "",
    aboutFull: `Everything is an art but a tool to voiceout with words is painting — we conduct a hands-on workshop for beginners to expertise in painting. Here you will experience the meditative joy of traditional painting and also to speak with words to the world full of noises. Come join in Pichwai Painting Workshop to celebrate the culture and enhance your talent.`,
  },

  {
    url: "chess-mastery-session-for-kids-ages-5-15",
    id: 114,
    metaTitleEvent:
      "Chess Mastery Session for Kids | Ages 5–15 - Super Chennai",
    conicallinkEvent: "/eventsdetails/114",
    metaDescriptionEvent:
      "Chess Mastery Session for Kids in Chennai! Specially designed for ages 5–15 to develop focus, sharpen memory, and learn strategy with fun and confidence.",
    siteLink:
      "https://in.bookmyshow.com/events/superblitz-chess-arena/ET00455819",
    EventsCalendarTitle: "Chess Mastery Session For Kids : Ages 5-15",
    EventsCalendarContent:
      "Give your child the chance of strategic thinking and confidence",
    EventsCalendarMonth: "14 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Education",
    image: "/images/HomePage-Images/Events/Newevents/e214.jpg",
    link: "/events",
    location: "Your Place and Your Time: India",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "All age groups",
    rleigion: "",
    aboutFull: `Give your child the chance of strategic thinking and confidence through the game of kings! The chess mastery session is a specially made program for children from 5 to 15 years, designed to make them explore, enjoy and expertise in chess.  Whether your child is just a beginner or already knows the  basics, this program is going to help them build sharpen memory, focus and develop problem-solving skills while playing.`,
  },
  {
    url: "playdate-with-parents",
    id: 115,
    metaTitleEvent:
      "Playdate with Parents | Family Games & Activities - Super Chennai",
    conicallinkEvent: "/eventsdetails/115",
    metaDescriptionEvent:
      "Reconnect at Playdate with Parents! A special event with fun family bonding games, creative sessions & interactive activities for parents and kids in Chennai.",
    siteLink:
      "https://in.bookmyshow.com/events/playdate-party-unwind-rediscover-playfulness/ET00355445",
    EventsCalendarTitle: "Playdate with Parents ",
    EventsCalendarContent:
      "In today's busy world we forget how our parents gave their best",
    EventsCalendarMonth: "10 Sep – 4 Oct 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Arts and Crafts",
    image: "/images/HomePage-Images/Events/Newevents/e224.jpg",
    link: "/events",
    location: "Dices And Drama: Chennai",
    language: "English",
    hours: "3 hours",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "",
    aboutFull: `In today's busy world we forget how our parents gave their best to keep us engaged and active, but we often miss spending some quality time with them. Play date with parents is a fun-filled event designed to bring back the bond between kids and parents From interactive sessions to creative games, every moment is made to strengthen the parent-child bond thicker.`,
  },
  {
    url: "telugu-night-ft-capricio",
    id: 116,
    metaTitleEvent:
      "Capricio Live in Chennai | Telugu Musical Event - Super Chennai",
    conicallinkEvent: "/eventsdetails/116",
    metaDescriptionEvent:
      "Capricio Live in Chennai! A Telugu music night with soulful tunes, rock beats, and unforgettable energy. A must-attend musical event.",
    siteLink:
      "https://in.bookmyshow.com/events/telugu-night-ft-capricio/ET00459991",
    EventsCalendarTitle: "Telugu Night ft. Capricio",
    EventsCalendarContent: "Chennai, get ready to groove! The most sensational",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "9:00 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/252.jpg",
    link: "/events",
    location: "Hard Rock Cafe, Nungabakkam: Chennai",
    language: "Telugu",
    hours: "2 hours",
    ageLimit: "Age Limit - 21yrs +",
    rleigion: "Regional, Rock",
    aboutFull: `Chennai, get ready to groove! The most sensational band Capricio came up with its powerpack Telugu musical celebration Night of the city. This band is known for their individuality and combination of telugu melodies to modern rock beats. They have captured hearts across India with their blasting performances. So this is the night we all want to come grab your seat with us`,
  },
  {
    url: "vibe-panrom-a-tamil-standup-comedy-show",
    id: 117,
    metaTitleEvent: " Vibe Panrom | Tamil Standup Comedy Show - Super Chennai",
    conicallinkEvent: "/eventsdetails/117",
    metaDescriptionEvent:
      "Chennai, get ready! Vibe Panrom Tamil Standup Comedy brings hilarious takes on life, family, and culture for an evening full of entertainment.",
    siteLink:
      "https://in.bookmyshow.com/events/jokes-for-reels-a-tamil-standup-comedy-show/ET00391838",
    EventsCalendarTitle: "Vibe Panrom – A Tamil Standup Comedy Show",
    EventsCalendarContent: "!Are you ready to laugh and vibe!",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/254.jpg",
    link: "/events",
    location: "IDAM - The Art & Cultural Space: Chennai",
    language: "Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `!Are you ready to laugh and vibe! Chennai came up with a humorous stand comedy show presented by Vibe Panrom. This show brings the most humorous comedians who will keep you evening with non-stop laughing on day to day chaos, family, relationship ect.
    Don’t miss this wonderful opportunity of having an endless laugh throughout the night`,
  },
  {
    url: "isai-sangamam",
    id: 118,
    metaTitleEvent:
      "Isai Sangamam | Cultural Music Event Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/118",
    metaDescriptionEvent:
      "Isai Sangamam Chennai brings classical & contemporary music together for a soulful cultural evening filled with harmony, rhythm, and magical melodies.",
    siteLink: "https://in.bookmyshow.com/events/isai-sangamam/ET00460947",
    EventsCalendarTitle: "Isai Sangamam",
    EventsCalendarContent: "A perfect blend of classical and contemporary",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "6:05 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/248.jpg",
    link: "/events",
    location: "Vani Mahal: Chennai",
    language: "Tamil",
    hours: "3 hours",
    ageLimit: "Age Limit - 3yrs +",
    rleigion: "Regional",
    aboutFull: `A perfect blend of classical and contemporary with trending tunes to create a harmony that resonates with every generation— Isai Sangamam came up with a grand musical celebration specially for Chennai. With their mesmerizing performances and a magical atmosphere you will have a wonderful night filled with sounds and melodies of chennai.`,
  },
  {
    url: "perfect-role-model-by-sonali-thakker",
    id: 119,
    metaTitleEvent:
      "Stand-Up Comedy Chennai | Sonali Thakker Live - Super Chennai",
    conicallinkEvent: "/eventsdetails/119",
    metaDescriptionEvent:
      "Sonali Thakker Live in Chennai brings a solo stand-up comedy night packed with witty insights, nonstop laughter, and hilarious stories from everyday life.",
    siteLink:
      "https://in.bookmyshow.com/events/perfect-role-model-by-sonali-thakker/ET00428237",
    EventsCalendarTitle: "Perfect Role Model by Sonali Thakker",
    EventsCalendarContent: "Chennai, get ready for a laughter-packed evening",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/237.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "English, Hindi",
    hours: "1 hour",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Chennai, get ready for a laughter-packed evening with one of India’s most loved comics – This is a solo stand-up comedy show where you will have an endless laugh for the whole evening, she will take you on a roller-coaster ride of day-to-day chaos, family and relationship dramas. This show is all about her unique perspective on being a “perfect role model” in today’s society and the most humorous realities that come together.`,
  },
  {
    url: "adults-only-english-stand-up",
    id: 120,
    metaTitleEvent:
      "Adults Only – English Stand-Up | Comedy Night - Super Chennai",
    conicallinkEvent: "/eventsdetails/120",
    metaDescriptionEvent:
      "Adults Only – English Stand-Up in Chennai brings bold, unfiltered comedy with edgy humor, sharp punchlines, and nonstop laughs for an adults-only night.",
    siteLink:
      "https://in.bookmyshow.com/events/adults-only-stand-up-comedy/ET00354828",
    EventsCalendarTitle: "Adults Only - English Stand Up",
    EventsCalendarContent: "Chennai, it’s time to leave the kids at home",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/236.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Chennai, it’s time to leave the kids at home and laugh! Adults Only is an unfiltered, bold, hilarious English stand-up comedy show. The comedians are bold enough to push boundaries away with their sharp punchlines and edgy humor. You will drive into the relationships and family drama everything we don’t talk about in front of our family. This is the chance to let our adult-talk without hesitation in a hilarious way. Grab the seat with your friends.`,
  },
  {
    url: "christian-keerthanaigal-music-show",
    id: 121,
    metaTitleEvent:
      "Christian Keerthanaigal Music Show | Chennai Live - Super Chennai",
    conicallinkEvent: "/eventsdetails/121",
    metaDescriptionEvent:
      "Experience live Christian music in Chennai with Christian Keerthanaigal Music Show, featuring talented singers, soulful hymns, and heartfelt praise.",
    siteLink:
      "https://in.bookmyshow.com/events/christian-keerthanaigal-music-show/ET00456869",
    EventsCalendarTitle: "Christian Keerthanaigal Music Show",
    EventsCalendarContent: "Songs are one of the important and beautiful tool",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/239.jpg",
    link: "/events",
    location: "Museum Theatre: Chennai",
    language: "English",
    hours: "2 hours 30 minutes",
    ageLimit: "All age groups",
    rleigion:
      "carnatic, Classical, Contemporary, Devotional, Indian Classical, Orchestra",
    aboutFull: `Songs are one of the important and beautiful tool we use to praise and thank God— here we have a Christian Keerthanaigal Music Show in Chennai. This special musical gathering brings faith, music and soulful worship together with gifted singers and musicians.
    We walk around all over the world but won’t find time to thank God, this is the perfect time to Thank him with classic hymns to contemporary worship. Let's join together and sing his praise`,
  },
  {
    url: "cookie-master-class",
    id: 122,
    metaTitleEvent:
      "Cookie Master Class | Baking Workshop Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/122",
    metaDescriptionEvent:
      "Cookie Master Class in Chennai offers a hands-on baking workshop for beginners and enthusiasts to master classic and gourmet cookies, from mixing to presenting.",
    siteLink: "https://in.bookmyshow.com/events/cookie-master-class/ET00445416",
    EventsCalendarTitle: "Cookie Master Class",
    EventsCalendarContent: "Baking is an art and if you want to burst",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "11:30 AM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/258.jpg",
    link: "/events",
    location: "Hibiscus Cafe: Chennai",
    language: "",
    hours: "1 hour 30 minutes",
    ageLimit: "",
    rleigion: "",
    aboutFull: `Baking is an art and if you want to burst all your work and personal stress this workshop is for you ! Cookie Master Class in Chennai is a hands-on baking session for beginners and people with basic knowledge of baking to expertise. Here you learn from classic flavours to creative gourmet varieties along with techniques of mixing, shaping, baking and of course presenting. You will learn the secret behind perfect taste and blend behind baking. 
    Don’t miss this opportunity baking is an art and this workshop will make you artist`,
  },
  {
    url: "north-indian-and-punjabi-cuisine-workshop",
    id: 123,
    metaTitleEvent: "North Indian | Punjabi Cuisine Workshop - Super Chennai",
    conicallinkEvent: "/eventsdetails/123",
    metaDescriptionEvent:
      "Learn the art of North Indian & Punjabi cuisine at this hands-on workshop. Master creamy curries, tandoori delights, and secrets from top restaurants in Chennai.",
    siteLink:
      "https://in.bookmyshow.com/events/north-indian-punjabi-cuisine-workshop-jan-22/ET00320314",
    EventsCalendarTitle: "North Indian & Punjabi Cuisine Workshop",
    EventsCalendarContent:
      "Turn your normal cooking into NORTH INDIAN special!",
    EventsCalendarMonth: "18 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/250.jpg",
    link: "/events",
    location: "Reema`s Swad Cooking Classes: Chennai",
    language: "English",
    hours: "4 hour",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "",
    aboutFull: `Turn your normal cooking into NORTH INDIAN special! This workshop helps you to develop the art of making authentic dishes from North Indian and Punjabi cuisine. From creamy buttery curries to smoky tandoori specials you will be an expert with their guidance also the secret behind restaurant style curries. Don’t miss the chance to impress your loved ones with your cooking skills and add on secrets from the expert chefs from here.`,
  },
  {
    url: "chirag-panjwani-live",
    id: 124,
    metaTitleEvent:
      "Laugh with Chirag Panjwani | Live Stand-Up - Super Chennai",
    conicallinkEvent: "/eventsdetails/124",
    metaDescriptionEvent:
      "Chirag Panjwani brings his hilarious stand-up comedy to Chennai! Enjoy a night full of laughter, witty stories, and fun at one of the top Chennai events.",
    siteLink:
      "https://in.bookmyshow.com/events/chirag-panjwani-live/ET00420747",
    EventsCalendarTitle: "Chirag Panjwani Live",
    EventsCalendarContent: "Want to experience a non-stop laughter evening?",
    EventsCalendarMonth: "11 Sep – 4 Oct 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/244.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "Hindi, English",
    hours: "1 hour",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Want to experience a non-stop laughter evening?! Here we have Chirag Panjwani Live stand-up comedy show, all set to give a performance of unique blend of hilarious anecdotes and sharp observation with his storytelling style that will  leave no crumbs.
    Chirag’s comedy show covers almost everything we see in day-to-day life and changes it into an unfiltered purest humor just to make you laugh throughout the evening. The whole week you have work and all stuff forget to laugh enough this is the perfect show to burst into laughter throughout the evening.`,
  },
  {
    url: "shimin-chakai-public-japanese-tea-ceremony",
    id: 125,
    metaTitleEvent:
      "Shimin Chakai | Japanese Tea Ceremony & Culture - Super Chennai",
    conicallinkEvent: "/eventsdetails/125",
    metaDescriptionEvent:
      "Discover Shimin Chakai in Chennai, a public Japanese Tea Ceremony. Witness Chanoyu, learn from tea masters, and experience the elegance of Japanese culture.",
    siteLink:
      "https://in.bookmyshow.com/events/shimin-chakai-public-japanese-tea-ceremony/ET00407899",
    EventsCalendarTitle: "SHIMIN CHAKAI - Public Japanese Tea Ceremony",
    EventsCalendarContent:
      "Experience the authentic elegance of Japanese culture with—Shimin Chakai",
    EventsCalendarMonth: "18 Sep – 19 Sep 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/249.jpg",
    link: "/events",
    location: "Hayakawa Japanese School: Chennai",
    language: "English, Japanese",
    hours: "2 hours",
    ageLimit: "Age Limit - 10yrs +",
    rleigion: "",
    aboutFull: `Experience the authentic elegance of Japanese culture with—Shimin Chakai  Public Japanese Tea Ceremony in Chennai. This invites you all to witness and participate in their old tradition of Chanoyu (the way to make tea) with every movement of gesture and flavors.
You will be guided by trained tea masters, the ceremony showcases the beauty of Japanese tradition and elegance. Bring your friends and loved ones— learn a new tradition, culture and experience the old-centuries chanoyu.
`,
  },
  {
    url: "circus-thupakki-an-edgy-standup-comedy-show",
    id: 126,
    metaTitleEvent:
      "Circus Thupakki | Standup Comedians Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/126",
    metaDescriptionEvent:
      "Get ready for Circus Thupakki in Chennai! A hilarious stand-up comedy show with top comedians delivering edgy jokes and non-stop laughter all night.",
    siteLink:
      "https://in.bookmyshow.com/events/pazhaka-vazhakam-a-tamil-standup-comedy-show/ET00394995",
    EventsCalendarTitle: "CIRCUS THUPAKKI - An Edgy standup comedy show ",
    EventsCalendarContent: "Chennai, get ready for a hilarious comedy blast!",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/246.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist: Chennai",
    language: "Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Chennai, get ready for a hilarious comedy blast! Circus Thupakki came up with a unique stand-up comedy show – it’s a rollercoaster of sharp punchlines and fearless humor that hits straight at the funny bone. Experience a life-time settlement of laughter for the whole evening with the most funniest comedians in Chennai. Your hot seat is ready, grab it and enjoy your show.`,
  },
  {
    url: "salsa-bachata-urbankiz-dance-workshop",
    id: 127,
    metaTitleEvent:
      "Salsa & Bachata | Urbankiz Dance Classes Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/127",
    metaDescriptionEvent:
      "Learn Salsa, Bachata & Urbankiz in Chennai! Beginner or pro, our expert instructors guide you to perfect your moves and enjoy the rhythm of social dance.",
    siteLink:
      "https://in.bookmyshow.com/events/dance-workshop-by-praveen-bachata-urbankiz-salsa/ET00378549",
    EventsCalendarTitle: "Salsa, Bachata, Urbankiz Dance Workshop",
    EventsCalendarContent:
      "It’s the time to move your bodies to the rhythm of sounds and beats!",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/243.jpg",
    link: "/events",
    location: "2:00 PM in Anna Nagar , 4:00 PM in KK Nagar ",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 21yrs +",
    rleigion: "Fusion",
    aboutFull: `It’s the time to move your bodies to the rhythm of sounds and beats! Here we have Salsa, Bachata & Urbankiz Dance Workshop to drive you into the world of dance. Either  you are a complete beginner or a dance enthusiast, this workshop is going to change you into an expert in social dance form. You will be led by experienced instructors to highlight your style and enhance your steps. Come become an expert with our experts.`,
  },
  {
    url: "business-opportunity-expo-2025",
    id: 128,
    metaTitleEvent:
      "Business Growth Workshop | Business Expo Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/128",
    metaDescriptionEvent:
      "Attend the Business Expo Chennai 2025 and enhance your business growth. Learn from experts, connect with entrepreneurs, and explore new opportunities.",
    siteLink:
      "https://in.bookmyshow.com/events/business-opportunity-expo-2025/ET00459416",
    EventsCalendarTitle: "Business Opportunity Expo 2025",
    EventsCalendarContent:
      "In today’s world business has become the most upgrading profession!",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "9:30 PM",
    EventsCalendarCategory: "Exhibitions",
    image: "/images/HomePage-Images/Events/Newevents/245.jpg",
    link: "/events",
    location: "The Park Hotel: Chennai",
    language: "English, Tamil",
    hours: "7 hour 30 minutes",
    ageLimit: "",
    rleigion: "",
    aboutFull: `In today’s world business has become the most upgrading profession! If you want to be one of them, this is the best opportunity to develop your business knowledge and become an entrepreneur. Either you are looking forward to starting your own venture or to scale-up your existing business, this expo brings all together the best solution for brands and business minds. 
    Enhance your brain for business to shine in the world.`,
  },
  {
    url: "jazz-weekender-edition",
    id: 129,
    metaTitleEvent:
      "Jazz Weekender Edition | Classical Jazz Music - Super Chennai",
    conicallinkEvent: "/eventsdetails/129",
    metaDescriptionEvent:
      "Chennai’s Jazz Weekender Edition brings classical jazz and contemporary blends. A perfect evening of music, soulful voices, and unforgettable performances.",
    siteLink:
      "https://in.bookmyshow.com/events/jazz-weekender-edition/ET00461104",
    EventsCalendarTitle: "Jazz Weekender Edition",
    EventsCalendarContent:
      "This evening you're gonna have a wonderful experience in Jazz",
    EventsCalendarMonth: "19 Sep - 21 Sep 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Music Shows",
    image: "/images/HomePage-Images/Events/Newevents/253.jpg",
    link: "/events",
    location: "Hyatt Regency: Chennai",
    language: "English",
    hours: "10 hours",
    ageLimit: "Age Limit - 21yrs +",
    rleigion: "Jazz",
    aboutFull: `This evening you're gonna have a wonderful experience in Jazz —with Jazz Weekender Edition. This celebration of Jazz blends musicians and soulful voices and mixed od sounds to give an unforgettable weekend. From classical standard to contemporary blends this show is just gonna take your heart and fill with music for lifetime. If you are a Jazz lover and yes this is your wanted show come join and sing together.`,
  },
  {
    url: "restorative-yoga-with-sound-healing",
    id: 130,
    metaTitleEvent: "Restorative Yoga | Sound Healing Workshop - Super Chennai",
    conicallinkEvent: "/eventsdetails/130",
    metaDescriptionEvent:
      "Ease stress and rejuvenate your body and mind with Restorative Yoga & Sound Healing. A weekend workshop in Chennai for ultimate relaxation and peace.",
    siteLink:
      "https://in.bookmyshow.com/events/restorative-yoga-with-sound-healing/ET00459768",
    EventsCalendarTitle: "Restorative Yoga with Sound Healing",
    EventsCalendarContent:
      "Week full of work and stress but we have your weekend!",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "4:30 PM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/251.jpg",
    link: "/events",
    location: "Satvat Holistics Pvt Ltd: Chennai",
    language: "English",
    hours: "1 hour",
    ageLimit: "Age Limit - 8yrs +",
    rleigion: "",
    aboutFull: `Week full of work and stress but we have your weekend! Restorative Yoga with Sound Healing is up with their method to relax your body, mind and heart with yoga. This session combines the gentle practice of yoga with therapeutic vibrations of sound bowls and healing instruments. 
Rest your body for a weekend and relax your mind with us.
`,
  },
  {
    url: "7-plus-one-rising-stars-on-tour",
    id: 131,
    metaTitleEvent:
      "Best Stand Up Show Chennai | 7 Plus One Tour - Super Chennai",
    conicallinkEvent: "/eventsdetails/131",
    metaDescriptionEvent:
      "Chennai’s biggest comedy night! 7 Plus One Tour with Karthick Kumar and rising stars brings soulful music, witty humor, and non-stop laughter you can’t miss.",
    siteLink:
      "https://in.bookmyshow.com/events/7-plus-one-rising-stars-on-tour/ET00448403",
    EventsCalendarTitle: "7 plus One - Rising Stars on Tour",
    EventsCalendarContent:
      "Chennai’s largest funniest and music filled stand-up comedy",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/242.jpg",
    link: "/events",
    location: "Medai The Stage: Coimbatore",
    language: "English, Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "Comedy",
    aboutFull: `Chennai’s largest funniest and music filled stand-up comedy show presented by the best comedian material Karthick Kumar and with more comedians. It's a tour to take you in the world of hilarious jokes and actual talks, with high-energy new voices and unique styles. Come experience a perfect blend of soulful music, beats and witty humor with captivating stage presence. This is the absolute show we don’t want you to miss.`,
  },
  {
    url: "wraps-and-rolls-making-workshop",
    id: 132,
    metaTitleEvent:
      "Wraps & Rolls Recipes | Cooking Classes Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/132",
    metaDescriptionEvent:
      "Love wraps & rolls? This Chennai cooking class, part of exciting Chennai events, teaches you to make them perfectly with tips, tricks, and tasty recipes to share.",
    siteLink:
      "https://in.bookmyshow.com/events/wraps-rolls-workshop-jan-22/ET00320317",
    EventsCalendarTitle: "Wraps & Rolls Making Workshop",
    EventsCalendarContent:
      "Who doesn't love wraps and rolls— we all know to eat",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/238.jpg",
    link: "/events",
    location: "Reema`s Swad Cooking Classes: Chennai",
    language: "English",
    hours: "2 hours",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "",
    aboutFull: `Who doesn't love wraps and rolls— we all know to eat but to make them you have to come to this workshop. A fun, hands-on cooking experience and also to know the secrets behind the street style wraps and roll this workshop will help you to satisfy your level of love towards wraps. From classics to adding flavours for your taste here we have experienced guides to make you expert. Bring your friends and have a food making date also by adding love to wraps and rolls making workshop.`,
  },
  {
    url: "bombay-chaat-items-workshop",
    id: 133,
    metaTitleEvent:
      "Bombay Chaat Items Workshop | Street Food Recipes - Super Chennai",
    conicallinkEvent: "/eventsdetails/133",
    metaDescriptionEvent:
      "Master Bombay chaat recipes at this hands-on workshop in Chennai. Learn authentic flavors, spices, tangy sauces, and make delicious street food at home.",
    siteLink: "https://in.bookmyshow.com/events/chaat-items-jan-22/ET00320311",
    EventsCalendarTitle: "Bombay Chaat Items Workshop",
    EventsCalendarContent:
      "Bombay is known for chaat items— here you have a chance to know the secrets",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/255.jpg",
    link: "/events",
    location: "Reema`s Swad Cooking Classes: Chennai",
    language: "English",
    hours: "4 hours",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "",
    aboutFull: `Bombay is known for chaat items— here you have a chance to know the secrets behind it by attending this workshop. A hand-on culinary experience where you’ll learn to make iconic chaat items with authentic touch in it. The bursting blend of spice, tangy sauce and bold flavors in one taste. Here after you don't have to go to Mumbai just to have your favorite chaat items, you can have it in your home made with your preference.`,
  },
  {
    url: "prasidas-weaving-workshop",
    id: 134,
    metaTitleEvent:
      "Prasida's Workshop | Traditional Weaving Skills - Super Chennai",
    conicallinkEvent: "/eventsdetails/134",
    metaDescriptionEvent:
      "Relax and get creative at Prasida's Weaving Workshop in Chennai. Learn traditional weaving techniques, explore patterns, textures, and hands-on designs.",
    siteLink:
      "https://in.bookmyshow.com/events/prasida-s-weaving-workshop/ET00450732",
    EventsCalendarTitle: "Prasida's Weaving Workshop",
    EventsCalendarContent:
      "We heard that weaving is so relaxing and therapeutic",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/259.jpg",
    link: "/events",
    location: "DeepBlueStories: Chennai",
    language: "English, Tamil, Malayalam",
    hours: "5 hours",
    ageLimit: "Age Limit - 10yrs +",
    rleigion: "",
    aboutFull: `We heard that weaving is so relaxing and therapeutic — so here we came up with a workshop to make it easier for beginners and develop your knowledge for weaving more. You will be guided by skilled instructors and learn various methods and techniques in weaving patterns, textures and designs. This hand-on session offers you a unique opportunity to explore the traditional weaving techniques while creating your own ideas.`,
  },
  {
    url: "paratha-special-workshop",
    id: 135,
    metaTitleEvent: "Paratha Workshop | Cooking Class Chennai - Super Chennai",
    conicallinkEvent: "/eventsdetails/135",
    metaDescriptionEvent:
      "Learn the art of making flaky, crispy, and flavorful parathas at this hands-on cooking class in Chennai. Perfect for friends and family to cook, laugh, and enjoy!",
    siteLink:
      "https://in.bookmyshow.com/events/paratha-special-workshop-mar-2022/ET00323345",
    EventsCalendarTitle: "Paratha Special Workshop",
    EventsCalendarContent: "Love for flaky, crispy and flavourful parathas",
    EventsCalendarMonth: "16 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Workshops",
    image: "/images/HomePage-Images/Events/Newevents/247.jpg",
    link: "/events",
    location: "Reema`s Swad Cooking Classes: Chennai",
    language: "English",
    hours: "4 hours",
    ageLimit: "Age Limit - 10yrs +",
    rleigion: "",
    aboutFull: `Love for flaky, crispy and flavourful parathas? Here is your chance to experience the art of making them — this workshop has hands-on culinary sessions to help you learn more detailed cooking of parathas and have fun with your friends. Bring your friends and families to cook, laugh and learn the authentic flavours of parathas with us.`,
  },
  {
    url: "that-dirty-show",
    id: 136,
    metaTitleEvent: "That Dirty Show | Adult Comedy Stand Up - Super Chennai",
    conicallinkEvent: "/eventsdetails/136",
    metaDescriptionEvent:
      "Bold, raw, and outrageously funny — That Dirty Show in Chennai delivers adult comedy, daring punchlines, and unfiltered humor for a night of nonstop laughter.",
    siteLink: "https://in.bookmyshow.com/events/that-dirty-show/ET00460729",
    EventsCalendarTitle: "That Dirty Show",
    EventsCalendarContent:
      "Get ready for a wildly unfiltered night of laughter!",
    EventsCalendarMonth: "2 Nov 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/241.jpg",
    link: "/events",
    location: "Alwarpet, Chennai",
    language: "Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Get ready for a wildly unfiltered night of laughter! That Dirty Show is a brand-new standup special filled with outrageous stories, daring punchlines, and comedy for the fearless. After touring South India with multiple hit specials, we return with our boldest and most hilarious set yet. If you can handle it, this is the comedy experience you can’t afford to miss `,
  },
  {
    url: "max-urbn-unmute-ft-paal-dabba-live-in-concert",
    id: 137,
    metaTitleEvent:
      "Chennai Live Concert | Max Urban UN-MUTE Rap Tour - Super Chennai",
    conicallinkEvent: "/eventsdetails/137",
    metaDescriptionEvent:
      "Chennai’s biggest live concert is here! Max Urban UN-MUTE Rap Tour unites rap kings for a hip hop night packed with fiery beats, powerful bars & raw energy.",
    siteLink:
      "https://in.bookmyshow.com/events/max-urbn-unmute-ft-paal-dabba-live-in-concert/ET00457532",
    EventsCalendarTitle: "Max Urbn Unmute ft. Paal Dabba Live in Concert",
    EventsCalendarContent:
      "Max Fashion India presents its first-ever rap extravaganza",
    EventsCalendarMonth: "26 Sep 2025",
    EventsCalendarTime: "5:30 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/240.jpg",
    link: "/events",
    location: "Express Avenue,Pattullos: Chennai",
    language: "Tamil",
    hours: "4 hour 30 minutes",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Max Fashion India presents its first-ever rap extravaganza — Max Urban UN-MUTE. Three cities. Three homegrown rap kings — Baby Jean (Kochi), Kayden Sharma (Hyderabad), and Paal Dabba (Chennai) — unite for a South India tour like never before. Where hip-hop collides with raw energy, neon vibes, and the unstoppable Gen Z beat. Expect fiery bars, unfiltered flows, and a crowd roaring the loudest 'How New Is Your New?' If you live for street culture, live music, and South India’s rap scene, this is one ticket you cannot miss`,
  },
  {
    url: "abishek-wants-to-enjoy-life-a-comedy-special",
    id: 138,
    metaTitleEvent:
      "Abishek Wants to Enjoy Life | Laughter & Comedy - Super Chennai",
    conicallinkEvent: "/eventsdetails/138",
    metaDescriptionEvent:
      "Abishek returns with Wants to Enjoy Life—a comedy special of jokes, music & stories. Don’t miss this laughter-filled stand-up comedy night in Chennai!",
    siteLink:
      "https://in.bookmyshow.com/events/abishek-wants-to-enjoy-life-a-comedy-special/ET00458295",
    EventsCalendarTitle: "Abishek Wants to Enjoy Life – A Comedy Special",
    EventsCalendarContent: "Abishek presents his brand-new special",
    EventsCalendarMonth: "25 Sep 2025",
    EventsCalendarTime: "3:00 PM",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/260.jpg",
    link: "/events",
    location: "The Music Academy: Chennai",
    language: "English, Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 16yrs +",
    rleigion: "",
    aboutFull: `

    Abishek presents his brand-new special — Abishek Wants to Enjoy Life! In a world full of negativity and stress, people have forgotten how to truly enjoy life. Abishek is here to bring laughter, positivity, and hilarious stories from his own experiences. With music, movement, and plenty of jokes, this special promises a unique and unforgettable experience for everyone. Grab your tickets now for a night of uplifting humor — his special is going to be a one-of-a-kind experience for the audience.
    `,
  },
  {
    url: "getting-there-by-rohan-joshi",
    id: 139,
    metaTitleEvent:
      "Rohan Joshi Comedy Special | Live Stand Up Show - Super Chennai",
    conicallinkEvent: "/eventsdetails/139",
    metaDescriptionEvent:
      "Rohan Joshi Stand Up Comedy Special comes to Chennai! Join the fun, laughter, and relatable stories in this ultimate live comedy night.",
    siteLink:
      "https://in.bookmyshow.com/events/getting-there-by-rohan-joshi/ET00458896",
    EventsCalendarTitle: "Getting There by Rohan Joshi",
    EventsCalendarContent:
      "Rohan Joshi, the renowned stay-at-home expert, faced a classic",
    EventsCalendarMonth: "27 Sep 2025",
    EventsCalendarTime: " 7:00 PM ",
    EventsCalendarCategory: "Comedy Shows",
    image: "/images/HomePage-Images/Events/Newevents/256.jpg",
    link: "/events",
    location: "The Music Academy: Chennai",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "Age Limit - 18yrs +",
    rleigion: "Comedy",
    aboutFull: `Rohan Joshi, the renowned stay-at-home expert, faced a classic New Year existential crisis. Like many, he decided it’s time to write more and hit the road. Unfortunately for the audience, they get to witness this mid-life crisis live. Join Rohan as he navigates the joys and absurdities of middle age. Laugh along as he shares hilarious stories and observations from his life, and watch his gradual transformation into the ultimate Indian uncle`,
  },
  {
    url: "the-planets-largest-coastal-cleanup",
    id: 140,
    RegisterLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdE7mzehrkb7M0dSSXg177_WhRPkWu3fdSMX7pmqqldlENQNg/viewform",

    metaTitleEvent:
      "Clean Chennai Beaches | Coastal Cleanup Drive - Super Chennai",
    conicallinkEvent: "/eventsdetails/140",
    metaDescriptionEvent:
      "Be part of Chennai’s coastal cleanup! Protect oceans, revive beaches, remove waste, and help create a cleaner, greener, healthier city for all.",
    siteLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdE7mzehrkb7M0dSSXg177_WhRPkWu3fdSMX7pmqqldlENQNg/formResponse",
    EventsCalendarTitle: "The Planet's Largest Coastal Cleanup",
    EventsCalendarContent:
      "On the streets, Chennai stands with pride as part of the planet’s",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "6:00 AM - 9:00 AM",
    EventsCalendarCategory: "Coastal CleanUp",
    image: "/images/HomePage-Images/Events/Newevents/261.jpg",
    link: "/events",
    location: "Kasimedu & Kovalam, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `On the streets, Chennai stands with pride as part of the planet’s largest coastal cleanup movement. This is not just about removing waste—it’s about protecting our oceans, reviving our shores, and shaping a healthier tomorrow. Let’s work side by side to make our beaches shining, sustainable, and filled with happiness, tunes, and laughter. Every hand that joins adds strength, and every step you take creates ripples of change that inspire thousands more. From 14,000 participants in 2023 to 24,000 in 2024, the movement is only getting bigger. In 2025, let’s cross 30,000 changemakers and make Chennai’s coastline shine brighter than ever before.`,
  },

  {
    url: "magic-show-in-chennai-magician-kalai-paradox-i-saw-tomorrow",
    id: 141,
    RegisterLink: "",

    metaTitleEvent:
      "Magic Show in Chennai|Magician Kalai|Paradox I Saw Tomorrow",
    conicallinkEvent: "/eventsdetails/141",
    metaDescriptionEvent:
      "Magician Kalai presents “Paradox I Saw Tomorrow”. A thrilling magic show in Chennai with illusions, humor & surprises. Don’t miss it—book now!",
    siteLink:
      "https://in.bookmyshow.com/events/paradox-by-magician-kalai/ET00439561",
    EventsCalendarTitle: "Paradox By Magician Kalai ",
    EventsCalendarContent: "Paradox – A magic & mind show",
    EventsCalendarMonth: "27 Sep 2025",
    EventsCalendarTime: "6:17 PM",
    EventsCalendarCategory: "Magic-Show",
    image: "/images/HomePage-Images/Events/Newevents/265.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam ",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    Think you’ve seen it all in magic? Paradox will prove you wrong. It’s not the usual trick act — it’s a fast-paced, funny, and interactive mix of illusion, humor, stories, and thought-provoking twists that make you question what’s real.
    </p>
        <p>
    What if tomorrow could be revealed today? Kalai takes you on a rollercoaster through shifting realities, keeping you entertained and astonished. Stay alert — you might even land on stage, caught in the middle of impossible moments unfolding right before your eyes.
    </p>
            <p>
    This isn’t just entertainment — it’s an unforgettable ride you’ll carry with you long after the final bow. You’ll laugh, gasp, and leave wondering if reality is as steady as it seems.
    </p>
            <div>
Who is Kalai?
    </div>
                <p>
Kalai is one of India’s leading illusionists, with over 3,000 shows across 28 countries. He has performed for stars like Dhoni, Dulquer Salmaan, Keerthy Suresh, Nayanthara, and Grandmaster Anand, to name a few. From 2014–2022, he was a headline act on the world’s largest cruise line in the USA. Now, he returns home with Paradox — a show that blends astonishment, laughter, and wonder.
    </p>
    `,
  },

  {
    url: "standup-comedy-show-in-chennai-7-plus-one-rising-stars-on-tour-karthik-kumar-punch-unpaid-therapist",
    id: 142,
    RegisterLink: "",

    metaTitleEvent:
      "Standup Comedy Show in Chennai/Sundeep Sharma/Super Chennai",
    conicallinkEvent: "/eventsdetails/142",
    metaDescriptionEvent:
      "Sundeep Sharma’s standup comedy show in Chennai is here! Stories, life, fitness, singlehood, jokes & relatability. Reserve your seat before it’s too late.",
    siteLink: "https://in.bookmyshow.com/events/sundeep-sharma-live/ET00379144",
    EventsCalendarTitle: "Arey Kahan – Stand-up Comedy Special",
    EventsCalendarContent: "Sundeep Sharma Live in Chennai",
    EventsCalendarMonth: "27 Sep 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Stand-up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/269.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    Sundeep Sharma brings his all-new comedy special <strong>Arey Kahan</strong>, where he hilariously shares his journey from fat to fit, his struggles with house helps, and the ups and downs of single life with his two dogs, Alpha and Beta.
    </p>
    <p>
    From tales of Delhi street fights to spot-on mimicry, Sundeep delivers laughter with a unique Bareilly boy charm. Get ready for his witty take on life, relationships, and India’s social and class divide — all told with a true Uttar Pradesh flavor.
    </p>
  `,
  },
  {
    url: "art-and-craft-workshops-in-chennai-glass-bottle-painting-home-decor",
    id: 143,
    RegisterLink: "",

    metaTitleEvent: "Art & Craft Workshops in Chennai | Glass Bottle Painting",
    conicallinkEvent: "/eventsdetails/143",
    metaDescriptionEvent:
      "Art, sip & paint! Glass bottle painting at Hibiscus Cafe on 27 Sep, 4 PM. Relax, unwind & create your own home decor with this art & craft workshop in Chennai.",
    siteLink:
      "https://in.bookmyshow.com/events/bottle-painting-activity/ET00454378",
    EventsCalendarTitle: "Bottle Painting Activity",
    EventsCalendarContent: "Sip, paint, and create at Hibiscus Café!",
    EventsCalendarMonth: "27 Sep 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Art & DIY",
    image: "/images/HomePage-Images/Events/Newevents/270.jpg",
    link: "/events",
    location: "Hibiscus Cafe: Chennai",
    language: "",
    hours: "2 Hours",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    Join us for a relaxing and creative experience at the charming <strong>Hibiscus Café</strong>! Unwind with a brush in one hand and your favorite drink in the other as you turn empty bottles into colorful works of art.
    </p>
    <p>
    Whether you’re a beginner or a seasoned artist, this session is all about fun, expression, and good vibes.
    </p>
    <div><strong>What’s Included:</strong></div>
    <ul>
      <li>All painting supplies and recycled glass bottles</li>
      <li>Your beautifully painted bottle to take home!</li>
    </ul>
    <p>
    Perfect for friends, date night, or solo unwinding — come sip, paint, and let your creativity bloom at Hibiscus Café.
    </p>
  `,
  },
  {
    url: "bread-pizza-doughnut-workshop-in-chennai-reemas-swad-cooking-classes-chennai",
    id: 144,
    RegisterLink: "",

    metaTitleEvent: "Baking Workshop in Chennai / Reema’s Swad Cooking Classes",
    conicallinkEvent: "/eventsdetails/144",
    metaDescriptionEvent:
      "Reema’s Swad Cooking Classes Chennai brings you a hands-on workshop in Chennai to master bread, pizza & doughnuts. Book now!",
    siteLink:
      "https://in.bookmyshow.com/events/bread-pizza-doughnuts-apr-22/ET00325866",
    EventsCalendarTitle: "Bread, Pizza & Doughnuts",
    EventsCalendarContent:
      "Baking workshop – breads, pizzas, and sweet treats!",
    EventsCalendarMonth: "27 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Cooking & Baking",
    image: "/images/HomePage-Images/Events/Newevents/280.jpg",
    link: "/events",
    location: "Reema's Swad Cooking Classes: Chennai",
    language: "English",
    hours: "4 Hours",
    ageLimit: "16yrs+",
    rleigion: "",
    aboutFull: `
    <p>
    Discover the art of baking with hands-on lessons in bread and pizza making. From soft sandwich bread, pav buns, and focaccia to pizza bases, sauces, bubble pizzas, and cheesy delights, you’ll learn recipes that are both fun and practical for everyday cooking.
    </p>
    <p>
    The workshop also covers crowd favorites like garlic bread, crown bread, Nutella bread, and a variety of doughnuts — cinnamon, chocolate, sugar, and the indulgent bombolini. Each recipe is crafted to be simple, flavorful, and enjoyable for bakers of all levels.
    </p>
    <p>
    With personal guidance, printed notes, and all materials provided, you’ll have everything you need to master these bakes. Classes are offered offline (exclusively for women and girls) as well as online, ensuring a convenient and interactive experience for everyone.
    </p>
  `,
  },
  {
    url: "standup-comedy-show-in-chennai-mohd-suhel-dysfunctional",
    id: 145,
    RegisterLink: "",

    metaTitleEvent:
      "Standup Comedy Show in Chennai / Mohd Suhel / Dysfunctional",
    conicallinkEvent: "/eventsdetails/145",
    metaDescriptionEvent:
      "Laugh out loud with Mohd Suhel in Chennai! Dysfunctional is a standup comedy show in chennai about workplace blunders & job chaos. 28 Sept, 6 PM. Book now.",
    siteLink: "https://in.bookmyshow.com/events/mohd-suhel-live/ET00408882",
    EventsCalendarTitle: "Dysfunctional by Mohd Suhel",
    EventsCalendarContent:
      "Corporate chaos and comedy collide — live with Mohd Suhel!",
    EventsCalendarMonth: "28 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Stand-up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/264.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "",
    hours: "1hr 30 Minutes",
    ageLimit: "18yrs+",
    rleigion: "",
    aboutFull: `
    <p>
    From fresher to fired (or even retired), this show is the ultimate survival guide to the job market — told by someone who’s never really been in corporate life.
    </p>
    <p>
    Join <strong>Mohd Suhel</strong> as he shares his laugh-out-loud corporate misadventures, the chaos of landing at ISRO, and his “retirement” from the corporate grind at just 21.
    </p>
    <p>
    If you’ve ever worked, wanted to quit, or simply enjoy laughing at workplace struggles, this show is for you. Don’t miss it — grab your tickets now!
    </p>
  `,
  },
  {
    url: "south-indian-cooking-class-reemas-swad-cooking-classes-chennai",
    id: 146,
    RegisterLink: "",

    metaTitleEvent:
      "South Indian Cooking Class / Reema’s Swad Cooking Classes Chennai",
    conicallinkEvent: "/eventsdetails/146",
    metaDescriptionEvent:
      "South Indian Cooking Class in Chennai by Reema’s Swad! Cook sambar, rasam, poriyal & more at this authentic culinary workshop. Limited seats!",
    siteLink:
      "https://in.bookmyshow.com/events/south-indian-cuisine-workshop-nov-21/ET00317177",
    EventsCalendarTitle: "South Indian Cuisine Workshop",
    EventsCalendarContent:
      "Learn to cook authentic South Indian vegetarian meals!",
    EventsCalendarMonth: "28 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Cooking & Baking",
    image: "/images/HomePage-Images/Events/Newevents/263.jpg",
    link: "/events",
    location: "Reema's Swad Cooking Classes: Chennai",
    language: "English",
    hours: "4 Hrs",
    ageLimit: "16yrs+",
    rleigion: "",
    aboutFull: `
    <p>
    Learn to cook delicious South Indian vegetarian dishes in this hands-on class!
    </p>
    <div><strong>Menu includes:</strong></div>
    <ul>
      <li>Rice, Sambar, Tomato Rasam</li>
      <li>Kara Kulambu, Coconut Kulambu</li>
      <li>Beans/Carrot Poriyal, Cabbage Poriyal, Potato Fry, Ladies Finger Poriyal</li>
      <li>Chow Chow Kootu, Pumpkin Kootu</li>
      <li>Payasam & Rava Kesari</li>
    </ul>
    <p>
    Perfect for beginners and food lovers who want to master traditional South Indian flavors.
    </p>
  `,
  },
  {
    url: "drawing-competition-in-chennai",
    id: 147,
    RegisterLink: "",

    metaTitleEvent:
      "Drawing Competition in Chennai / Young Artists Championship",
    conicallinkEvent: "/eventsdetails/147",
    metaDescriptionEvent:
      "Unleash your child’s creativity!Drawing Competition in Chennai for Pre-KG to 12th Std on 28 Sep. Compete, showcase talent & win exciting prizes.",
    siteLink: "https://in.bookmyshow.com/events/drawing-competition/ET00461829",
    EventsCalendarTitle: "Drawing Competition",
    EventsCalendarContent:
      "Young Artists Championship 2025 – A celebration of creativity!",
    EventsCalendarMonth: "28 Sep 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Kids & Family",
    image: "/images/HomePage-Images/Events/Newevents/266.jpg",
    link: "/events",
    location: "Hxtron School Of Digital Technologies: Chennai",
    language: "English, Tamil",
    hours: "1 Hour",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    Get ready for an exciting celebration of young talent at the <strong>Young Artists Championship 2025</strong>! This creative platform invites kids from Pre-KG to 12th Std to express their imagination through art and themes that inspire learning, fun, and awareness.
    </p>
    <p><strong>Unleash your creativity and showcase your talent in categories like:</strong></p>
    <ul>
      <li>Pre-KG – UKG → Coloring Fun</li>
      <li>Class 1–2 → My Dream House</li>
      <li>Class 3–4 → Save Nature</li>
      <li>Class 5–6 → Festivals of India</li>
      <li>Class 7–8 → My India, My Pride</li>
      <li>Class 9–10 → Digital India / Future World</li>
      <li>Class 11–12 → Global Warming & Solutions</li>
    </ul>
    <p>👉 Limited seats, register now!</p>
  `,
  },

  {
    url: "music-shows-chennai-bts-fans",
    id: 148,
    RegisterLink: "",

    metaTitleEvent:
      "BTS ARMY Fan Event / Music Shows Chennai / BTS Tribute Night",
    conicallinkEvent: "/eventsdetails/148",
    metaDescriptionEvent:
      "A special BTS ARMY fan event. Bangtan Beats Tribute Night at Third Wave Coffee, Kathipara on 28 Sep, 2:30 PM. A BTS music show in Chennai you can’t miss!",
    siteLink:
      "http://in.bookmyshow.com/events/bangtan-beats-bts-tribute/ET00460265",
    EventsCalendarTitle: "Bangtan Beats: BTS Tribute",
    EventsCalendarContent: "A BTS-themed celebration for the ARMY in Chennai!",
    EventsCalendarMonth: "28 Sep 2025",
    EventsCalendarTime: "2:30 PM",
    EventsCalendarCategory: "Music & Fan Events",
    image: "/images/HomePage-Images/Events/Newevents/267.jpg",
    link: "/events",
    location: "Third Wave Coffee, Chennai",
    language: "English, Korean",
    hours: "5 Hours",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    <strong>ARMY</strong>, it’s time to light up <strong>Third Wave Coffee</strong> like our own mini concert! From <em>No More Dream</em> to <em>Yet to Come</em>, the night is packed with music, energy, and the spirit of BTS. 💜🔥
    </p>
    <p>
    Shout along to <em>Fire</em>, sway to <em>Spring Day</em>, vibe with <em>Dynamite</em>, and go wild with <em>Mic Drop</em>. Relive iconic BTS eras through songs, stages, and ARMY-powered celebrations — plus join the <strong>NamKook birthday bash</strong> with love and excitement in true ARMY style. 🎂💫
    </p>
    <p>
    Come dressed in BTS-inspired looks — merch, concert fits, or bias-style outfits — and create memories you’ll treasure forever. Bring your ARMY crew and let’s make this a night to remember. 💜✨
    </p>
  `,
  },

  {
    url: "taylor-swift-tribute-chennai-music-events",
    id: 149,
    RegisterLink: "",

    metaTitleEvent:
      "Shake It Off September / ERAS Tour Tribute / Chennai Music Events",
    conicallinkEvent: "/eventsdetails/149",
    metaDescriptionEvent:
      "Don’t miss Shake It Off September – an ERAS Tour Tribute at Chennai Music Events with Taylor-inspired songs, live acts, and unforgettable fan energy.",
    siteLink:
      "https://in.bookmyshow.com/events/eras-tour-tribute-shake-it-off-september/ET00460184",
    EventsCalendarTitle: "Eras Tour Tribute: Shake It Off September",
    EventsCalendarContent: "A Taylor Swift fan night for all eras 💜",
    EventsCalendarMonth: "27 Sep 2025",
    EventsCalendarTime: "2:31 PM",
    EventsCalendarCategory: "Music & Fan Events",
    image: "/images/HomePage-Images/Events/Newevents/268.jpg",
    link: "/events",
    location: "Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    <strong>Shake It Off September – A Swiftie Night!</strong> ✨🎶
    </p>
    <p>
    Swifties, are you ready to sing, scream, and dance through every Taylor era? From debut to <em>The Tortured Poets Department</em>, this night is all about love, heartbreak, joy, and the magic of Taylor’s music. 💜
    </p>
    <p>
    Get set to belt out <em>Love Story</em>, cry through <em>Enchanted</em>, scream <em>All Too Well (10 Min)</em>, and lose yourself in <em>Shake It Off</em> — all in one unforgettable celebration. Relive Taylor’s journey, era by era, surrounded by fans who feel it just as deeply as you do. 🎤💫
    </p>
    <p>
    Dress in your favorite era outfit, strike a pose, and capture every iconic moment with your Swiftie squad. No age limit — from fearless teens to folklore adults to TTPD souls, this night is for everyone who carries Taylor in their heart. 💜✨
    </p>
  `,
  },

  {
    url: "rajini-experience-magnum-opus-music-events",
    id: 150,
    RegisterLink: "",

    metaTitleEvent: "Music Events in Chennai / RAJINI EXPERIENCE MAGNUM OPUS",
    conicallinkEvent: "/eventsdetails/150",
    metaDescriptionEvent:
      "RAJINI EXPERIENCE MAGNUM OPUS – a spectacular tribute show and part of top Music Events in Chennai, honoring Rajini’s legacy with power-packed performances.",
    siteLink:
      "https://in.bookmyshow.com/events/tribute-show-the-rajini-experience-magnum-opus/ET00462119",
    EventsCalendarTitle: "Tribute Show: The Rajini Experience Magnum Opus",
    EventsCalendarContent: "A spectacular homage to the legend Rajinikanth.",
    EventsCalendarMonth: "28 Sep 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Music & Tribute",
    image: "/images/HomePage-Images/Events/Newevents/272.jpg",
    link: "/events",
    location: "Kreate by Kraft, Chennai",
    language: "",
    hours: "2 hours",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>
    A spectacular Thalaivar homage – celebrate the legend Rajinikanth for only ₹300, with ₹200 redeemable at the venue for food and drinks!
    </p>
    <p>
    Prepare to witness the unstoppable energy of Superstar Rajinikanth like never before. This thrilling journey spans his iconic career – from the punch-filled <em>Baasha</em>, to the stylish aura of <em>Kabali</em>, and the charisma of <em>Sivaji</em>.
    </p>
    <p>
    Every rhythm, every tune, every instant embodies the charisma, style, and larger-than-life presence that only Thalaivar exudes. Experience live, electrifying renditions of his legendary songs and background scores.
    </p>
    <p>
    Relish the ultimate nostalgia of his timeless hits – a whirlwind of applause, cheers, and unforgettable goosebump moments.
    </p>
    <p>
    This is more than music – it’s Thalaivar in his full grandeur, a celebration where style becomes music, and mass transforms into magic.
    </p>
  `,
  },

  {
    url: "vismaya-25-rotary-club-of-chennai",
    id: 151,
    RegisterLink: "",

    metaTitleEvent: "VISMAYA '25 / Suhani shah / Rotary club of chennai  ",
    conicallinkEvent: "/eventsdetails/151",
    metaDescriptionEvent:
      "Attend VISMAYA '25 by Rotary Club of Chennai. Enjoy Suhani Shah's mesmerizing performance and contribute to impactful community service projects.",
    siteLink: "https://in.bookmyshow.com/events/vismaya-25/ET00458264",
    EventsCalendarTitle: "Vismaya '25",
    EventsCalendarContent:
      "A magical and philanthropic evening with mentalist Suhani Shah.",
    EventsCalendarMonth: "27 Sep 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Magic & Social Cause",
    image: "/images/HomePage-Images/Events/Newevents/271.jpg",
    link: "/events",
    location: "Sir Mutha Venkatasubba Rao Concert Hall: Chennai",
    language: "English, Hindi",
    hours: "2 hours",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>
    Experience a remarkable evening of inspiration and entertainment with the celebrated mentalist Suhani Shah, whose mesmerizing acts have enchanted audiences nationwide. By attending, you’ll be contributing to impactful community projects, as your participation supports local healthcare, education, and social welfare programs run by the Rotary Club of Chennai Kilpauk.
    </p>
    <p>
    This is your chance to network with change-makers, enjoy top-notch entertainment, and create a meaningful impact in Chennai. Your presence shows a dedication to social responsibility and helps improve the lives of those in need in our city.
    </p>
    <p>
    Don’t miss this unforgettable experience, blending magic, giving back, and the spirit of philanthropy.
    </p>
  `,
  },

  {
    url: "stand-up-comedy-show-in-chennai-sound-uduu-yg-madhuvanthi",
    id: 152,
    RegisterLink: "",

    metaTitleEvent:
      "Standup Comedy Show in Chennai / Sound UdUU / YG Madhuvanthii  ",
    conicallinkEvent: "/eventsdetails/152",
    metaDescriptionEvent:
      "Don't miss Sound UdUU, YG Madhuvanthii's debut stand-up comedy show in Chennai. A night of political satire, humor, and entertainment awaits!",
    siteLink: "http://in.bookmyshow.com/events/sound-uduu/ET00460767",
    EventsCalendarTitle: "Sound uduu",
    EventsCalendarContent:
      "Political satire and improv comedy by YG Madhuvanthii.",
    EventsCalendarMonth: "26 Sep 2025",
    EventsCalendarTime: "7:30 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/274.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "English, Tamil",
    hours: "1 hour 30 Minutes",
    ageLimit: "16yrs +",
    rleigion: "",
    aboutFull: `
    <p>
    Sound Uduu
    </p>
    <p>
    YG Madhuvanthii steps onto the stand-up stage for the first time, taking the audience on a fresh journey of political satire through humor.
    </p>
    <p>
    As a special bonus, enjoy the Satire Stand-Up Improv – “MISSING – Sukumari Mattuma??” dedicated to the legendary satire maestro, Shri CHO.
    </p>
  `,
  },

  {
    url: "baking-workshop-in-chennai-learn-cake-frosting-skills",
    id: 153,
    RegisterLink: "",

    metaTitleEvent: "Baking Workshop in Chennai / Learn Cake & Frosting Skills",
    conicallinkEvent: "/eventsdetails/153",
    metaDescriptionEvent:
      "Join our Baking Workshop in Chennai and learn cake & frosting skills through hands-on sessions, piping, and decoration techniques for all baking lovers.",
    siteLink:
      "https://in.bookmyshow.com/events/cake-baking-frosting-jul-22-weekend/ET00332437",
    EventsCalendarTitle: "Cake Baking & Frosting Workshop",
    EventsCalendarContent:
      "Hands-on baking class covering basics, OTG use, and cake decoration.",
    EventsCalendarMonth: "24 Sep 2025",
    EventsCalendarTime: "11:00 AM",
    EventsCalendarCategory: "Cooking Workshop",
    image: "/images/HomePage-Images/Events/Newevents/273.jpg",
    link: "/events",
    location: "Reema's swad cooking classes: Chennai",
    language: "",
    hours: "10 Hours",
    ageLimit: "16yrs +",
    rleigion: "",
    aboutFull: `
    <p>
    Our workshop is designed to give aspiring bakers complete hands-on learning. Here’s what you’ll master:
    </p>
    <h4>Baking Basics</h4>
    <ul>
      <li>Understand the science of baking for consistent results.</li>
      <li>Measure ingredients accurately for perfect bakes every time.</li>
      <li>Learn the role of baking powder, baking soda, and other essential ingredients.</li>
      <li>Master preheating, oven placement, and temperature settings.</li>
    </ul>
    <h4>Using an OTG</h4>
    <ul>
      <li>Learn the fundamentals of operating an OTG.</li>
      <li>Master preheating techniques for optimal results.</li>
      <li>Understand how to select baking trays, molds, and liners.</li>
      <li>Learn the correct temperature and time settings for different recipes.</li>
    </ul>
    <h4>Cupcake and Cake Baking</h4>
    <ul>
      <li>Perfect techniques to bake moist and fluffy cakes and cupcakes.</li>
      <li>Explore a variety of classic and exotic flavors, including: Vanilla, Pineapple, Strawberry, Butterscotch, Chocolate, Tutti Frutti, Orange, Litchi.</li>
      <li>Learn frosting and finishing techniques to create beautiful presentations.</li>
    </ul>
    <p>
    By the end of the workshop, you will have the skills and confidence to bake and decorate cakes for any occasion.
    </p>
  `,
  },

  {
    url: "live-concert-chennai-rock-on-harris-3.0",
    id: 154,
    RegisterLink: "",

    metaTitleEvent: "Live Concert Chennai / Rock On Harris 3.0 / Super Chennai",
    conicallinkEvent: "/eventsdetails/154",
    metaDescriptionEvent:
      "Rock On Harris 3.0 brings a spectacular Harris live concert to the city, making it one of the most awaited live concert Chennai music shows of the year.",
    siteLink:
      "https://www.district.in/events/rock-on-harris-3-0-chennai-october-2025-buy-tickets",
    EventsCalendarTitle: "Rock on Harris 3.0 Live in concert",
    EventsCalendarContent:
      "Harris Jayaraj returns to Chennai with a spectacular live concert featuring hit songs, top vocalists, and stunning stage production.",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Music Concert",
    image: "/images/HomePage-Images/Events/Newevents/278.jpg",
    link: "/events",
    location: "YMCA Ground, Nandanam, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    Chennai, are you ready for an unforgettable night? The wait ends here — Harris Jayaraj, the genius behind some of Tamil cinema’s most iconic tunes, returns with Rock On Harris 3.0, his most spectacular live concert yet!
    </p>
    <p>
    After a year-long hiatus, Harris is back in his hometown with a brand-new setlist, unique arrangements, and your favorite singers performing hit after hit that shaped a generation. From soulful ballads to high-voltage anthems, this is not just a concert — it’s a celebration of music, memories, and pure magic.
    </p>
    <p>
    Produced by Noise and Grains, the creative force behind India’s most epic live shows, Rock On Harris 3.0 promises a once-in-a-lifetime experience with stunning stagecraft and visuals.
    </p>
    <p>
    Expect:
    </p>
    <ul>
      <li>A lineup of top-tier vocalists</li>
      <li>Spectacular lights and stage production</li>
      <li>Thousands of fans coming together for one night to remember</li>
      <li>The legendary presence of Harris Jayaraj, live, loud, and unforgettable</li>
    </ul>
    <p>
    This isn’t just music. It’s a movement. A memory. A musical revolution.
    </p>
    <p>
    Rock On Harris 3.0 – Be there live, or hear about it later.
    </p>
  `,
  },

  {
    url: "concerts-in-chennai-hapan-anime-minichestra-beyond-borders",
    id: 155,
    RegisterLink: "",

    metaTitleEvent:
      "Concert in Chennai / Japan ANIME / Minichestra Beyond Borders",
    conicallinkEvent: "/eventsdetails/155",
    metaDescriptionEvent:
      "Minichestra Beyond Borders brings Japan ANIME to life at a grand Concert in Chennai with stunning music, cultural fusion, and anime-inspired energy.",
    siteLink:
      "https://www.district.in/events/minichestra-beyond-borders-japan-anime-classic-concert-in-chennai--sep21-2025-buy-tickets",
    EventsCalendarTitle: "Minichestra Beyond Borders",
    EventsCalendarContent:
      "Minichestra Beyond Borders – Japan ANIME Classic Concert in Chennai brings a fusion of anime classics and traditional Japanese music.",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Music Concert",
    image: "/images/HomePage-Images/Events/Newevents/276.jpg",
    link: "/events",
    location: "Sir Mutha Venkatasubba Rao Concert Hall, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    Minichestra Beyond Borders – Japan ANIME Classic Concert in Chennai is here! The renowned Japanese orchestra Minichestra brings a special evening of music to Chennai, blending anime classics with traditional Japanese compositions for a truly unique experience.
    </p>
    <p>
    Celebrate the beauty of Tamil Nadu and the charm of Japan through this lively performance, sing along to your favorite tunes, and create memories that unite our two cultures. Don’t miss this unforgettable musical journey!
    </p>
  `,
  },

  {
    url: "kalakki-comedy-show-in-chennai",
    id: 156,
    RegisterLink: "",

    metaTitleEvent: "KALAKKI / Comedy show in chennai / Live Stage Play",
    conicallinkEvent: "/eventsdetails/156",
    metaDescriptionEvent:
      "Laugh, feel, and enjoy KALAKKI – the comedy show in Chennai that brings live stage play magic with witty humour, drama, and raw theatre performance.",
    siteLink:
      "https://www.district.in/events/kalakki-stage-play-live-performance-sep20-2025-buy-tickets",
    EventsCalendarTitle: "Kalaki - A Theatre Play",
    EventsCalendarContent:
      "Kalaki is a theatrical experience full of fun, heartfelt moments, mischief, and laughter.",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Theatre",
    image: "/images/HomePage-Images/Events/Newevents/277.jpg",
    link: "/events",
    location: "IDAM - Kodambakkam",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
      Laugh out loud, feel every emotion, and watch stories unfold right in front of you!
    </p>
    <p>
      Kalaki is a theatrical experience full of fun, heartfelt moments, mischief, and laughter that will stay with you long after the curtain falls.
    </p>
    <p>
      Remember the thrill of watching actors perform live, just like the good old days in town theaters? We’re bringing that magic back with genuine emotions, unexpected twists, and endless fun.
    </p>
    <p>
      Bring your friends and family, create unforgettable memories, and take home stories you’ll cherish for years.
    </p>
  `,
  },

  {
    url: "chennai-marathon-namma-juniorthon-3-edition-kids-run",
    id: 157,
    RegisterLink: "",

    metaTitleEvent:
      "Chennai Marathon / Namma Juniorthon 3rd Edition / Kids Run",
    conicallinkEvent: "/eventsdetails/157",
    metaDescriptionEvent:
      "Chennai Marathon returns with Namma Juniorthon 3rd Edition – a fun-filled Kids Run featuring races, medals, and prizes for young participants.",
    siteLink:
      "https://www.district.in/events/namma-chennai-juniorthon-3rd-edition-sep21-2025-buy-tickets",
    EventsCalendarTitle: "Namma Chennai - Juniorthon 3rd Edition",
    EventsCalendarContent:
      "Fun & Fitness Sports Day 2025 for kids of all ages with races, prizes, and more.",
    EventsCalendarMonth: "21 Sep 2025",
    EventsCalendarTime: "8:00 AM",
    EventsCalendarCategory: "Kids Sports",
    image: "/images/HomePage-Images/Events/Newevents/275.jpg",
    link: "/events",
    location: "Nehru Park Sports Development Authority of Tamil Nadu, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>Get Ready for the Ultimate Kids Sports Fiesta!</p>
    <p>Bring out the champion in your child at our Fun & Fitness Sports Day 2025 — a day packed with energy, excitement, and fun! From first-time racers to 400-meter participants, there’s something for every young athlete.</p>
    <p><strong>Race Categories:</strong></p>
    <ul>
      <li>Pre-KG – 30 Meters</li>
      <li>LKG & UKG – 30 & 50 Meters</li>
      <li>1st Std – 75 Meters</li>
      <li>2nd Std – 100 Meters</li>
      <li>3rd & 4th Std – 200 Meters</li>
      <li>5th & 6th Std – 400 Meters</li>
    </ul>
    <p><strong>All Participants Receive:</strong></p>
    <ul>
      <li>T-Shirt</li>
      <li>Medal</li>
      <li>Certificate</li>
      <li>Refreshments</li>
    </ul>
    <p><strong>Exciting Prizes for Winners:</strong></p>
    <p>The top 3 in each category will win trophies and Decathlon gift vouchers.</p>
    <p>Don’t miss this opportunity to cheer, celebrate, and encourage your child. Let them run, play, and shine on the track!</p>
  `,
  },

  {
    url: "navratri-garba-dandiya-navjalsa-2025",
    id: 158,
    RegisterLink: "",

    metaTitleEvent:
      "Dandiya Navjalsa 2025 / Navratri Garba / Dandiya in Chennai",
    conicallinkEvent: "/eventsdetails/158",
    metaDescriptionEvent:
      "Dance the night away at Dandiya Navjalsa 2025! Celebrate Navratri Garba and Dandiya in Chennai with live music, vibrant decor, and festive energy.",
    siteLink:
      "https://www.district.in/events/dandiya-navjalsa-2025-sep20-2025-buy-tickets",
    EventsCalendarTitle: "Dandiya Navjalsa 2025",
    EventsCalendarContent:
      "Traditional Garba and Dandiya folk dances celebrating Navratri with music and dance.",
    EventsCalendarMonth: "20 Sep 2025",
    EventsCalendarTime: "20 Sep - 9PM , 21 Sep - 5PM",
    EventsCalendarCategory: "Festival",
    image: "/images/HomePage-Images/Events/Newevents/279.jpg",
    link: "/events",
    location: "Dharmaprakash Kalyana Mandapam, Chennai",
    language: "",
    hours: "8 Hours",
    ageLimit: "",
    rleigion: "Hindi, Gujrati",
    aboutFull: `
    <p>Dandiya and Garba are traditional folk dances from Gujarat, India, celebrated with energy and joy during Navratri.</p>
    <p>Garba is a graceful circular dance around a lamp or image of Goddess Durga, symbolizing life and creation, and is both a spiritual offering and festive gathering.</p>
    <p>Dandiya, or Dandiya Raas, is a lively stick dance representing the mock battle between Goddess Durga and demon Mahishasura.</p>
    <p>Tickets are required for children aged 6 and above. The event will be conducted in Hindi and Gujarati and is open to all ages, making it a fun and memorable family experience.</p>
  `,
  },
  {
    url: "dj-nights-in-chennai-henrique-camacho-live-music",
    id: 159,
    RegisterLink: "",
    metaTitleEvent:
      " DJ Nights in Chennai / Henrique Camacho live / Music Events ",
    metaDescriptionEvent:
      "DJ Nights in Chennai get bigger with Henrique Camacho live! A music event packed with EDM, trance, and electrifying beats for an unforgettable night.",
    conicallinkEvent: "/eventsdetails/159",
    siteLink:
      "https://in.bookmyshow.com/events/henrique-camacho-live-in-chennai/ET00461817",
    EventsCalendarTitle: "Henrique Camacho – Live in Chennai",
    EventsCalendarContent:
      "Attention Chennai! On October 12th, Sunday, 5 PM onwards, the renowned DJ Henrique",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/281.jpg",
    link: "/events",
    location: "Jekyll & Hyde, Porur, Chennai",
    language: "",
    hours: "6 Hours",
    ageLimit: "21 Yrs+",
    rleigion: "English",
    aboutFull: `
    <p>Attention Chennai! On October 12th, Sunday, 5 PM onwards, the renowned DJ Henrique Camacho is set to electrify the crowd at Jekyll & Hyde, Porur.</p>
    <p>Get ready for a night filled with psychedelic sounds, pulsating beats, and electrifying energy as Camacho delivers an unforgettable performance.</p>
    <p>Experience the perfect mix of music, lights, and atmosphere that will keep you on your feet till the very end.</p>
    <p>This extraordinary music journey awaits you—secure your spot now and feel the pulse live.</p>
  `,
  },
  {
    url: "comedy-show-in-chennai-rajasekhar-mamidanna-live",
    id: 160,
    RegisterLink: "",
    metaTitleEvent: "comedy show in chennai / Rajasekhar Mamidanna Live",
    metaDescriptionEvent:
      "Catch Rajasekhar Mamidanna Live, a comedy show in Chennai that brings sharp humour, life tales, and laughter-packed entertainment on stage.",
    conicallinkEvent: "/eventsdetails/160",
    siteLink:
      "https://in.bookmyshow.com/events/rajasekhar-mamidanna-live/ET00372739",
    EventsCalendarTitle: "Rajashekar Mamidanna Live",
    EventsCalendarContent:
      "Get ready to laugh out loud! The Grin Club is excited to bring Rajasekhar Mamidanna’s latest",
    EventsCalendarMonth: "04 Oct 2025",
    EventsCalendarTime: "4:30 PM",
    EventsCalendarCategory: "Comedy Show",
    image: "/images/HomePage-Images/Events/Newevents/283.jpg",
    link: "/events",
    location: "Music Academy Mini Hall, Chennai",
    language: "",
    hours: "1 Hour",
    ageLimit: "16 Yrs+",
    rleigion: "English",
    aboutFull: `
    <p>Get ready to laugh out loud! The Grin Club is excited to bring Rajasekhar Mamidanna’s latest comedy special to your city, live on stage.</p>
    <p>Known for his sharp wit and clean humor, Rajasekhar has won hearts across the country with his unique storytelling style.</p>
    <p>In this show, he dives into the amusing side of everyday life, delivering jokes and stories in a way only he can.</p>
    <p>With more than 50 million views on YouTube and countless entertaining anecdotes, Rajasekhar promises an evening of laughter, fun, and perhaps a few thoughtful insights.</p>
    <p>For any questions about the show, reach out to The Grin Club via their social media channels.</p>
  `,
  },
  {
    url: "happily-unmarried-stand-up-comedy-show-in-chennai",
    id: 161,
    RegisterLink: "",
    metaTitleEvent: "Happily Unmarried / Stand-up Comedy Show in Chennai",
    metaDescriptionEvent:
      "Happily Unmarried – a stand-up comedy show in Chennai by Sudarsan Ramamurthy. A laughter-packed evening filled with witty takes on love and life.",
    conicallinkEvent: "/eventsdetails/161",
    siteLink: "https://in.bookmyshow.com/events/happily-unmarried/ET00440813",
    EventsCalendarTitle: "Happily Unmarried",
    EventsCalendarContent:
      "Soda once quipped, “If you never get married, you’ll never have to worry about getting divorced.” His",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Comedy Show",
    image: "/images/HomePage-Images/Events/Newevents/282.jpg",
    link: "/events",
    location: "Punch - Unpaid therapist, Chennai",
    language: "",
    hours: "1 Hours 30 Minutes",
    ageLimit: "",
    rleigion: "English",
    aboutFull: `
    <p>Soda once quipped, “If you never get married, you’ll never have to worry about getting divorced.” His show, Happily Unmarried, is a rags-to-riches tale cleverly wrapped in an hour of jokes about relationships. It also moonlights as a fundraiser for future wedding expenses.</p>
    <p>Disclaimer: No married lives were harmed in the making of this show.</p>
  `,
  },
  {
    url: "state-level-kids-students-drawing-competition-in-chennai",
    id: 162,
    RegisterLink: "",
    metaTitleEvent: "",
    metaDescriptionEvent: "",
    conicallinkEvent: "/eventsdetails/162",
    siteLink:
      "https://in.bookmyshow.com/events/state-level-drawing-competition-oct-2025/ET00462140",
    EventsCalendarTitle:
      "State Level Kids & Students / Drawing Competition in Chennai ",
    EventsCalendarContent:
      "State Level Kids & Students Drawing Competition in Chennai 2025 brings creative themes, trophies, medals, and certificates for young artists of all ages.",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Competition",
    image: "/images/HomePage-Images/Events/Newevents/284.jpg",
    link: "/events",
    location: "ABS Global Smart School, Chennai",
    language: "Tamil, English",
    hours: "4 Hours",
    ageLimit: "3 years & above",
    rleigion: "",
    aboutFull: `
    <p>Kalam Event Management is thrilled to announce the State Level Drawing Competition – October 2025, scheduled for 12th October 2025 at ABS Global Smart School, Avadi, proudly supported by BookNGo.live.</p>
    <p><strong>Grades & Themes:</strong></p>
    <ul>
      <li>Pre-KG: Balloons (Printed Chart)</li>
      <li>LKG: Diya (Printed Chart)</li>
      <li>UKG: Rocket (Printed Chart)</li>
      <li>1st & 2nd STD: "Fruits Basket"</li>
      <li>3rd & 4th STD: "Trees"</li>
      <li>5th & 6th STD: "My New Robot"</li>
      <li>7th & 8th STD: "Rocket"</li>
      <li>9th to 12th STD: "Indian AirForce"</li>
      <li>Open Category: Dr. A.P.J Abdul Kalam</li>
    </ul>
    <p>Printed charts can be downloaded from the event gallery on BookNGo.live.</p>
    <p><strong>Schedule:</strong></p>
    <ul>
      <li>Pre-KG to UKG: 10:00 – 11:00 AM</li>
      <li>1st to 4th STD: 11:00 AM – 12:00 PM (A4 Chart Paper)</li>
      <li>5th to 12th STD: 11:00 AM – 12:00 PM (Half Chart Paper)</li>
      <li>Open Category: 12:00 – 01:00 PM (Half Chart Paper)</li>
    </ul>
    <p>Registration opens 30 minutes before the event start time.</p>
    <p><strong>Important Guidelines:</strong></p>
    <ul>
      <li>Winners will be awarded a Trophy.</li>
      <li>Every participant will receive a Medal and Certificate of Participation.</li>
      <li>Each drawing session lasts 60 minutes; results will be declared 90 minutes after the category ends.</li>
      <li>Participants should bring their own drawing materials (pad, art kit, etc.).</li>
      <li>Templates and brush pens are not allowed.</li>
      <li>School ID card is mandatory for registration.</li>
      <li>On-the-spot Registration: ₹300</li>
    </ul>
  `,
  },

  {
    url: "stand-up-comedy-chennai-marwadi-dreams-mayank-parakh",
    id: 163,
    RegisterLink: "",
    metaTitleEvent: "Stand Up Comedy Chennai / Marwadi Dreams / Mayank Parakh",
    metaDescriptionEvent:
      "Marwadi Dreams by Mayank Parakh brings Stand Up Comedy Chennai alive with witty punchlines, quirky tales, and an evening full of laughter.",
    conicallinkEvent: "/eventsdetails/163",
    siteLink:
      "https://in.bookmyshow.com/events/marwadi-dreams-standup-comedy-by-mayank-parakh/ET00418076",
    EventsCalendarTitle: "Marwadi Dreams Standup Comedy by Mayank Parakh Live!",
    EventsCalendarContent:
      "Join us for an exciting new show featuring Mayank Parakh, a Marwadi boy from a business family who dared",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Comedy Show",
    image: "/images/HomePage-Images/Events/Newevents/285.jpg",
    link: "/events",
    location: "Trinity Studio, Kodambakkam, Chennai",
    language: "Hindi, English",
    hours: "1 Hour 15 Minutes",
    ageLimit: "16 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Join us for an exciting new show featuring Mayank Parakh, a Marwadi boy from a business family who dared to dream beyond the conventional path. From a stable career at L&T Hyd Metro Rail to pursuing his passion, Mayank took the leap into the world of films and stand-up comedy. Experience fresh, unheard stories of his journey, full of twists, turns, and laughter, as he shares how he made his dreams a reality.</p>
    <p><strong>About Mayank Parakh:</strong><br>Mayank is a versatile actor and stand-up comedian from Chhattisgarh who has entertained audiences across India. He has performed with reputed companies and conglomerates like ICICI, Deloitte, Navneet, Tata Steel, Salesforce, Aditya Birla, Yes Bank, Ecom Express, and Taj Group of Hotels, among others.</p>
    <p><strong>Filmography & Highlights:</strong><br>Telugu films: WILDDOG (with Nagarjuna), GAAMI (as a mad scientist & main antagonist), YASHODA (with Samantha Ruth Prabhu)<br>Hindi films: SRIKANTH (with Rajkummar Rao)<br>Web series: Laakhon Mein Ek (Amazon Prime – as hostel warden Bala), Goodachari, Modern Love Hyderabad, Parampara S2, Puli Meka, Dayaa, Bhagvant Kesari, Gangs of Godavari<br>Upcoming projects: 3 Telugu films and 1 Hindi film</p>
    <p>Come witness the journey of a dreamer who turned challenges into laughter and screens into stages.</p>
  `,
  },

  {
    url: "thats-what-she-said-stand-up-comedy-show-in-chennai",

    id: 164,
    RegisterLink: "",
    metaTitleEvent: "Stand Up Comedy Show in Chennai / THATS WHAT SHE SAID",
    metaDescriptionEvent:
      "See THATS WHAT SHE SAID – a stand up comedy show in Chennai featuring Shruthi, Neha, Praveshika & Vanshitha with fresh material, laugh-out-loud moments & sassy fun.",
    conicallinkEvent: "/eventsdetails/164",
    siteLink:
      "https://in.bookmyshow.com/events/madras-comedy-show-a-tamil-standup-show/ET00351171",
    EventsCalendarTitle: "Thats What She Said - A Standup Show",
    EventsCalendarContent:
      "“THAT’S WHAT SHE SAID” is a stand-up comedy showcase featuring some of Chennai’s funniest and sharpest",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy Show",
    image: "/images/HomePage-Images/Events/Newevents/286.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist, Chennai",
    language: "Tamil, English",
    hours: "1 Hour 30 Minutes",
    ageLimit: "18 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>“THAT’S WHAT SHE SAID” is a stand-up comedy showcase featuring some of Chennai’s funniest and sharpest talents. Join Shruthi, Neha, Praveshika, and Vanshitha as they bring new, original humor straight to the stage.</p>
    <p>Prepare yourself for a laughter-packed ride — they’re ready to crack you up, serve unlimited sass, and leave you wanting more!</p>
    <p>🎟️ Seats are limited. Sass is unlimited. Book your tickets now!</p>
  `,
  },

  {
    url: "comedy-show-in-chennai-mervyn-rozz-on-arrival",
    id: 165,
    RegisterLink: "",
    metaTitleEvent:
      "Comedy Show in Chennai / Mervyn Rozz On Arrival / Super chennai ",
    metaDescriptionEvent:
      "Mervyn Rozz On Arrival, a comedy show in Chennai filled with travel stories, awkward encounters & laugh-out-loud moments. Perfect night out for family & friends.",
    conicallinkEvent: "/eventsdetails/165",
    siteLink:
      "https://in.bookmyshow.com/events/mervyn-rozz-on-arrival/ET00455543",
    EventsCalendarTitle: "Mervyn Rozz On Arrival",
    EventsCalendarContent:
      "After the phenomenal success of his first solo special Moving On, Mervyn Rozz is back with his brand-new",
    EventsCalendarMonth: "05 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy Show",
    image: "/images/HomePage-Images/Events/Newevents/287.jpg",
    link: "/events",
    location: "Medai-The Stage, Alwarpet, Chennai",
    language: "Tamil",
    hours: "1 Hour 30 Minutes",
    ageLimit: "5 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>After the phenomenal success of his first solo special Moving On, Mervyn Rozz is back with his brand-new comedy special: Mervyn Rozz – On Arrival.</p>
    <p>This time, he takes you through the hilarious, awkward, and unexpected moments from his 2024 tour across Australia, England, and Europe — from performing solo on the road to funny encounters with locals and audiences alike.</p>
    <p>On Arrival is packed with heart, laughter, and relatable stories — making it the perfect night out for friends and family.</p>
    <p>Join Mervyn for a show full of laughs, stories, and moments that resonate with everyone, wherever they’ve traveled.</p>
  `,
  },

  {
    url: "definitely-not-stand-up-comedy-show-in-chennai-vikkals",
    id: 166,
    RegisterLink: "",
    metaTitleEvent:
      "DEFINITELY NOT / Stand Up Comedy Show in Chennai / Vikkals.",
    metaDescriptionEvent:
      "Sai Anand from Vikkals presents DEFINITELY NOT, a stand up comedy show in Chennai packed with witty stories, keen observations & laugh-out-loud moments.",
    conicallinkEvent: "/eventsdetails/166",
    siteLink:
      "https://in.bookmyshow.com/events/patch-work-a-tanglish-standup-comedy-show/ET00377761",
    EventsCalendarTitle: "Definitely Not - A Standup Comedy Special",
    EventsCalendarContent:
      "Sai Anand, a Chennai-based stand-up comedian, writer, and actor from the trending YouTube channel “Vikkals”,",
    EventsCalendarMonth: "04 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy Show",
    image: "/images/HomePage-Images/Events/Newevents/288.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist, Chennai",
    language: "Tamil, English",
    hours: "1 Hour 30 Minutes",
    ageLimit: "16 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Sai Anand, a Chennai-based stand-up comedian, writer, and actor from the trending YouTube channel “Vikkals”, brings you his one-hour special “Definitely Not.”</p>
    <p>In this performance, Sai hilariously reflects on his life and the people around him — those who make him respond with a firm “Definitely Not” to any conversation lasting more than four words. He observes, interprets, and turns everyday situations into comedy, using laughter as his go-to coping strategy.</p>
    <p>An introvert at heart, yet a stand-up comic on stage, Sai Anand is your quirky, relatable neighborhood performer with a touch of therapy on the side. Why does he seem like he needs therapy? Catch him live and find out!</p>
  `,
  },

  {
    url: "athletic-championship-state-level-kids-jr-event",
    id: 167,
    RegisterLink: "",
    metaTitleEvent: "Athletic Championship / State Level Kids & Jr Event",
    metaDescriptionEvent:
      "Join the celebration of Dr APJ Abdul Kalam's Birthday at Chennai’s State Level Kids & Junior Athletic Championship, featuring athletic contests, medals, and awards.",
    conicallinkEvent: "/eventsdetails/167",
    siteLink:
      "https://in.bookmyshow.com/events/state-level-kids-jr-athletic-championship-2025/ET00459932",
    EventsCalendarTitle: "State Level Kids & Jr Athletic Championship - 2025",
    EventsCalendarContent:
      "Celebrate Dr. APJ Abdul Kalam’s Birthday at the State Level Kids & Junior Athletic Championship 2025!",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "8:30 AM",
    EventsCalendarCategory: "Sports",
    image: "/images/HomePage-Images/Events/Newevents/289.jpg",
    link: "/events",
    location: "TSP 2 Battalion Parade Ground, Avadi, Chennai",
    language: "English, Tamil",
    hours: "7 Hours",
    ageLimit: "3 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Celebrate Dr. APJ Abdul Kalam’s Birthday at the State Level Kids & Junior Athletic Championship 2025!</p>
    <p>Awards & Recognition: All winners will receive a Certificate, Medal, Trophy, and a Plant. Special awards include the Best School Award, Best Physical Education Teacher Award, and Individual Champion Trophies. An Overall Championship will be awarded to winners and runners-up. Each ticket allows participation in up to 3 events.</p>
    <p>Events by Grade include races and throws from LKG to Open Category with specific events for each group.</p>
    <p>Relay races are for 7th to 12th STD with teams of 4 members.</p>
    <p>Students must carry their ID cards. All participants will receive a Certificate, Medal, and Energy Drink.</p>
  `,
  },

  {
    url: "music-show-in-chennai-bharadwaj-autograph-live-concert",
    id: 168,
    RegisterLink: "",
    metaTitleEvent: "Music Show in Chennai / Bharadwaj Autograph Live Concert",
    metaDescriptionEvent:
      "Enjoy an electrifying Music Show in Chennai – Bharadwaj Autograph Live Concert brings chart-toppers, energy, and a magical live experience.",
    conicallinkEvent: "/eventsdetails/168",
    siteLink:
      "https://in.bookmyshow.com/events/bharadwaj-in-autograph-live-in-concert/ET00459300",
    EventsCalendarTitle: "Bharadwaj In Autograph Live In Concert",
    EventsCalendarContent:
      "Get ready, Chennai, for the first-ever grand live performance by Bharadwaj! A celebrated composer",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/290.jpg",
    link: "/events",
    location: "Chennai",
    language: "Tamil",
    hours: "3 Hours 30 Minutes",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>Get ready, Chennai, for the first-ever grand live performance by Bharadwaj! A celebrated composer in the Indian music industry, Bharadwaj has scored music for over 100 feature films and is the proud recipient of the KALAIMAMANI AWARD conferred by the Tamil Nadu State Government.</p>
    <p>Many of his compositions have become chartbusters, including hits like “Unnai Parthapinbu” (Kaadal Mannan), “Satham Illatha Thanimai Kaeten” (Amarkalam), “Thala pola varuma” (Attakasam), and more.</p>
    <p>His composition “Ovvavaru Pookalume” from the Tamil film Autograph won the National Award for Best Singer and Best Lyricist in 2004. Bharadwaj has also musically composed and performed all 1330 Thirukkural couplets, a unique feat in Indian music.</p>
    <p>Experience a magical, mesmerizing live concert featuring Bharadwaj alongside Sathish of Saregamapa fame and his band, with stunning visuals, high-quality sound, and a spectacular stage setup.</p>
  `,
  },

  {
    url: "chennai-stand-up-comedy-shamik-chakrabarti-live-show",
    id: 169,
    RegisterLink: "",
    metaTitleEvent: "Chennai Stand Up Comedy / Shamik Chakrabarti Live Show",
    metaDescriptionEvent:
      "Experience Chennai stand up comedy with Shamik Chakrabarti Live Show – witty storytelling, fresh jokes, and a laughter-filled evening for all comedy fans.",
    conicallinkEvent: "/eventsdetails/169",
    siteLink:
      "https://in.bookmyshow.com/events/shamik-chakrabarti-live/ET00454812",
    EventsCalendarTitle: "Shamik Chakrabarti Live",
    EventsCalendarContent:
      "Fresh from his performances at the Edinburgh Fringe Festival and Soho Theatre,",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/291.jpg",
    link: "/events",
    location: "The Music Academy Mini Hall, Chennai",
    language: "English",
    hours: "1 Hour 30 Minutes",
    ageLimit: "16 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Fresh from his performances at the Edinburgh Fringe Festival and Soho Theatre, London, Shamik brings his acclaimed show “Despite Appearances” on a major tour across India — his biggest one yet!</p>
    <p>If you’ve enjoyed his jokes on YouTube or Instagram but haven’t seen him live, now’s your chance — this ONE LAST TIME tour features completely new material you won’t find online.</p>
    <p>And if you’ve already seen the show, come back to experience the updates and surprises! Shamik’s dry, razor-sharp humor is guaranteed to leave you laughing until you cry. Don’t miss this live dose of hilarity!</p>
  `,
  },
  {
    url: "mirchi-retro-raagas-music-conert-in-chennai",
    id: 170,
    RegisterLink: "",
    metaTitleEvent: "Mirchi Retro Raagas / Retro Music Concert in Chennai",
    metaDescriptionEvent:
      "Celebrate 50 years of Rajinikanth with Mirchi Retro Raagas in Chennai. Enjoy timeless retro music, live performances, and a nostalgic tribute to the legend.",
    conicallinkEvent: "/eventsdetails/170",
    siteLink:
      "https://in.bookmyshow.com/events/mirchi-retro-raagas-rajini-50/ET00462789",
    EventsCalendarTitle: "Mirchi Retro Raagas: Rajini 50",
    EventsCalendarContent:
      "Mirchi and Dr. Shreevarma’s Wellness present a grand celebration",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/292.jpg",
    link: "/events",
    location: "Kamarajar Arangam, Chennai",
    language: "Tamil",
    hours: "3 Hours",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>Mirchi and Dr. Shreevarma’s Wellness present a grand celebration of 50 legendary years of Superstar Rajinikanth!</p>
    <p>Join us for an unforgettable evening filled with music, memories, and magic.</p>
    <p>Experience a spectacular musical journey spanning five decades of Rajini hits, complete with electrifying live performances, nostalgic visuals, and the collective energy of fans.</p>
    <p>Don’t miss this once-in-a-lifetime tribute to the charisma, legacy, and timeless appeal of Thalaivar.</p>
  `,
  },

  {
    url: "music-melody-masters-2-live-concert",
    id: 171,
    RegisterLink: "",
    metaTitleEvent: "Music Event in Chennai / Melody Masters 2 Live Concert",
    metaDescriptionEvent:
      "Enjoy a magical evening at the Music Event in Chennai, Melody Masters 2 Live Concert, with timeless Tamil songs performed live for an unforgettable experience.",
    conicallinkEvent: "/eventsdetails/171",
    siteLink: "https://in.bookmyshow.com/events/melody-masters-2/ET00462928",
    EventsCalendarTitle: "Melody Masters 2",
    EventsCalendarContent:
      "Gopal Sapthaswaram’s Melody Masters is a captivating live musical experience celebrating",
    EventsCalendarMonth: "2 Oct 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/293.jpg",
    link: "/events",
    location: "Vani Mahal, Chennai",
    language: "Tamil",
    hours: "3 Hours",
    ageLimit: "5 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Gopal Sapthaswaram’s “Melody Masters” is a captivating live musical experience celebrating the timeless compositions of Tamil cinema. Featuring 11 acclaimed singers, the show pays homage to the evergreen masterpieces of legendary composers like M.S. Viswanathan, T.K. Ramamoorthy, Ilaiyaraaja, and A.R. Rahman.</p>
    <p>Audiences will be taken on a nostalgic journey through iconic Tamil songs, performed with soul-stirring renditions that have become an inseparable part of the cultural heritage. “Melody Masters” promises an unforgettable evening of music, memories, and tribute, transporting you into a world of melodies that linger long after the performance ends.</p>
  `,
  },

  {
    url: "ninaithale-inikkum-chennai-music-event-qfr-live",
    id: 172,
    RegisterLink: "",
    metaTitleEvent: "Ninaithale Inikkum / Chennai Music Event / QFR Live",
    metaDescriptionEvent:
      "Ninaithale Inikkum, a Chennai Music Event by QFR Live, brings soulful Tamil performances and a heartfelt fundraiser for cancer screening awareness.",
    conicallinkEvent: "/eventsdetails/172",
    siteLink:
      "https://in.bookmyshow.com/events/qfr-live-ninaithale-inikkum-a-fund-raiser-show/ET00462874",
    EventsCalendarTitle: "QFR Live Ninaithale Inikkum - A Fund Raiser Show",
    EventsCalendarContent:
      "Quarantine From Reality – Live Music Shows is a special live extension of Subhasree Thanikachalam’s",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/294.jpg",
    link: "/events",
    location: "Kamarajar Arangam, Chennai",
    language: "Tamil",
    hours: "3 Hours",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>Quarantine From Reality – Live Music Shows is a special live extension of Subhasree Thanikachalam’s celebrated YouTube platform, QFR. These performances began during the COVID-19 lockdown as a way to uplift spirits and reconnect listeners to the healing and comforting power of music in a time of global uncertainty.</p>
    <p>Unlike typical commercial programs, QFR live concerts emphasize genuine artistry, simplicity, and emotive storytelling, often featuring unplugged performances by both established and emerging Tamil musicians.</p>
    <p>Presented in a cozy, intimate concert style, the shows explore a diverse range of musical genres—from classical and folk to independent and contemporary compositions. The relaxed setting allows performers to share the stories behind their musical pieces and engage listeners intimately, creating a heartfelt connection.</p>
    <p>The show’s minimalist production and heartfelt curation set it apart in an era flooded with virtual content.</p>
    <p>These live sessions not only entertained but also fostered a sense of community and cultural reflection during isolation. They highlighted that music is not just for performance, but also a source of comfort, connection, and conversation.</p>
    <p>Through QFR Live Music Shows, Subhasree Thanikachalam brought soulful melodies into homes, turning art into a source of solace and togetherness.</p>
  `,
  },

  {
    url: "haan-pehli-baar-kishore-da-tribute-music-show-in-chennai",
    id: 173,
    RegisterLink: "",
    metaTitleEvent:
      "Haan Pehli Baar / Kishore Da Tribute / Music Show in Chennai",
    metaDescriptionEvent:
      "Haan Pehli Baar is a Kishore Da Tribute music show in Chennai that unveils hidden treasures of the legend’s music with soulful live performances.",
    conicallinkEvent: "/eventsdetails/173",
    siteLink:
      "https://in.bookmyshow.com/events/haan-pehli-baar-a-kishore-da-tribute/ET00458565",
    EventsCalendarTitle: "Haan Pehli Baar - A Kishore Da Tribute",
    EventsCalendarContent:
      "Experience Kishore Kumar in a way you’ve never seen before! This is not your usual tribute concert — we’re uncovering",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/295.jpg",
    link: "/events",
    location: "The Spastics Society of Tamilnadu, Chennai",
    language: "Hindi",
    hours: "2 Hours 15 Minutes",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>Experience Kishore Kumar in a way you’ve never seen before! This is not your usual tribute concert — we’re uncovering the hidden gems of the legendary playback singer’s vast and remarkable repertoire.</p>
    <h3>What Makes This Unique</h3>
    <p>While the world celebrates his chart-topping hits, this show delves into Kishore Da’s lesser-known masterpieces that reveal the depth of his musical brilliance. Enjoy romantic ballads reinterpreted through soulful female voices, classic duets with modern arrangements, and rare tracks finally taking center stage.</p>
    <h3>Artists & Performers</h3>
    <p>A stellar lineup of acclaimed singers will bring their unique artistry to Kishore Kumar’s timeless catalog, making each performance a fresh and heartfelt experience.</p>
    <h3>Why Attend</h3>
    <p>This tribute honors both the eternal legacy of Kishore Da and the ever-evolving essence of his music. Relive old melodies, create new memories, and witness a celebration where timeless voices meet contemporary interpretations.</p>
    <p>Book your tickets now for an evening that promises to inspire, move, and celebrate the immortal voice of Kishore Kumar.</p>
  `,
  },

  {
    url: "matrimania-by-saikiran-stand-up-comedy-chennai",
    id: 174,
    RegisterLink: "",
    metaTitleEvent:
      "Matrimania by Saikiran / Stand Up Comedy Chennai / Super Chennai",
    metaDescriptionEvent:
      "Expect laughter and relatability at Matrimania by Saikiran, a stand up comedy in Chennai about marriage pressures, societal norms, and single life stories.",
    conicallinkEvent: "/eventsdetails/174",
    siteLink:
      "https://in.bookmyshow.com/events/matrimania-by-saikiran/ET00431488",
    EventsCalendarTitle: "Matrimania By Saikiran",
    EventsCalendarContent:
      "In a society obsessed with getting everyone hitched, Matrimania is a show",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "7:15 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/296.jpg",
    link: "/events",
    location: "The Music Academy Mini Hall, Chennai",
    language: "English",
    hours: "1 Hour 40 Minutes",
    ageLimit: "18 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>In a society obsessed with getting everyone hitched, Matrimania is a show for single people, reflecting single life, and created by someone navigating singledom who knows all too well the relentless push to settle down.</p>
    <p>If you’re constantly dodging relatives eager to see you married, come watch the show your mom wishes you’d skip and your dad hopes you never see.</p>
  `,
  },
  {
    url: "workshops-in-chennai-hands-on-weaving-with-prasida",
    id: 175,
    RegisterLink: "",
    metaTitleEvent: "Workshops in Chennai / Hands-on Weaving with Prasida",
    metaDescriptionEvent:
      "Discover the art of weaving at Prasida’s workshops in Chennai—engage in a hands-on session, create your own woven piece, and connect with tradition.",
    conicallinkEvent: "/eventsdetails/175",
    siteLink:
      "https://in.bookmyshow.com/events/prasida-s-weaving-workshop/ET00456641",
    EventsCalendarTitle: "Prasida's Weaving Workshop",
    EventsCalendarContent:
      "This Gandhi Jayanthi, immerse yourself in the art of weaving with a special",
    EventsCalendarMonth: "2 Oct 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Workshop",
    image: "/images/HomePage-Images/Events/Newevents/297.jpg",
    link: "/events",
    location: "DeepBlueStories, Chennai",
    language: "English, Tamil, Malayalam",
    hours: "2 Hours",
    ageLimit: "8 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>This Gandhi Jayanthi, immerse yourself in the art of weaving with a special 2-hour workshop at Prasida’s studio in Cholamandal Artists’ Village.</p>
    <p>Weaving was at the heart of Gandhi’s vision of self-reliance and sustainability, and this workshop offers a chance to celebrate that spirit through a slow, mindful craft.</p>
    <p>Whether you’re a complete beginner or already experienced, this is a perfect way to connect with tradition, spend a meaningful day, and create something with your own hands.</p>
    <p>Special Gandhi Jayanthi pricing available. Seats are limited!</p>
    <p>Workshop Includes: 2-hour guided session, all materials provided, light refreshments, a woven piece to take home, and a warm, shared space to celebrate handloom.</p>
    <p>Open for kids and adults. Whether it’s your first time at the loom or a return to the craft, come and enjoy a meaningful, hands-on experience with us!</p>
  `,
  },
  {
    url: "roasted-live-stand-up-comedy-show-in-chennai",
    id: 176,
    RegisterLink: "",
    metaTitleEvent:
      "Roasted Live / Stand-Up Comedy Show in Chennai / Super Chennai",
    metaDescriptionEvent:
      "Roasted Live brings a stand-up comedy show in Chennai with witty roasts, spontaneous humor, and hilarious performances that keep the audience laughing all night.",
    conicallinkEvent: "/eventsdetails/176",
    siteLink: "https://in.bookmyshow.com/events/roasted/ET00462922",
    EventsCalendarTitle: "Roasted",
    EventsCalendarContent:
      "Get ready for a comedy show with one clear mission: roasting! No one is off-limits",
    EventsCalendarMonth: "5 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/298.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist, Chennai",
    language: "Tamil",
    hours: "1 Hour 30 Minutes",
    ageLimit: "18 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Get ready for a comedy show with one clear mission: roasting! No one is off-limits — it could be your favorite celebrity, a well-known politician, or even you.</p>
    <p>Vijay brings his razor-sharp wit and unique comedic style to the stage, mixing different forms of humor to deliver a hilarious roasting experience like no other.</p>
  `,
  },
  {
    url: "tamil-stand-up-comedy-yogi-fun-laughter-flashback-live",
    id: 177,
    RegisterLink: "",
    metaTitleEvent:
      "Tamil Standup Comedy / Yogi Fun & Laughter / Flashback Live ",
    metaDescriptionEvent:
      "“Enjoy Flashback Live – Tamil Standup Comedy with Yogi, blending Tanglish humor, witty anecdotes, and fun-filled moments for comedy lovers.”",
    conicallinkEvent: "/eventsdetails/177",
    siteLink:
      "https://in.bookmyshow.com/events/weird-tired-a-tanglish-standup-show/ET00455219",
    EventsCalendarTitle: "Flash Back - A Tamil Standup Show",
    EventsCalendarContent:
      "Flash Back – a Tamil Standup Comedy Special by Comicstaan fame Yogi",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/299.jpg",
    link: "/events",
    location: "Punch - Unpaid Therapist, Chennai",
    language: "Tamil",
    hours: "1 Hour 30 Minutes",
    ageLimit: "18 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Flash Back – a Tamil Standup Comedy Special by Comicstaan fame Yogi.</p>
    <p>Get ready for non-stop laughter as Yogi takes you on a hilarious journey through stories, memories, and witty observations in his latest Tamil standup show, Flash Back.</p>
    <p>Known for his sharp humor and engaging storytelling, Yogi delivers some of his best comedic material, combining funny anecdotes with spontaneous audience interactions. Every performance is unique, unpredictable, and filled with moments that stick with you long after the show ends.</p>
    <p>Come for the jokes, stay for the laughter — because in Flash Back, every memory comes with a perfect punchline!</p>
  `,
  },
  {
    url: "green-kidathon-kids-run-fun",
    id: 178,
    RegisterLink: "",
    metaTitleEvent: "Green Kidathon / Kids Run & Fun / Event in chennai",
    metaDescriptionEvent:
      "Green Kidathon Stadium Run is a children’s athletic event offering fun, fitness, and healthy competition while encouraging teamwork and active play.",
    conicallinkEvent: "/eventsdetails/178",
    siteLink:
      "https://in.bookmyshow.com/events/green-kidathon-stadium-run-oct-2025/ET00459666",
    EventsCalendarTitle: "Green Kidathon Stadium Run Oct - 2025",
    EventsCalendarContent:
      "Kalam Event Management proudly presents the Green Kidathon Stadium Run – October 2025",
    EventsCalendarMonth: "5 Oct 2025",
    EventsCalendarTime: "6:00 AM",
    EventsCalendarCategory: "Sports",
    image: "/images/HomePage-Images/Events/Newevents/300.jpg",
    link: "/events",
    location: "SDAT - Nehru Park, Chennai",
    language: "English, Tamil",
    hours: "2 Hours 30 Minutes",
    ageLimit: "3 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Kalam Event Management proudly presents the Green Kidathon Stadium Run – October 2025 at SDAT Nehru Park, Chetpet, Chennai. Our sports partner is Decathlon, and the event is sponsored by BookNGo.live.</p>
    <p><strong>BIB Collection:</strong> Participants can collect their BIBs at Decathlon, Pondy Bazaar on 4th October 2025 between 12:00 PM and 7:00 PM.</p>
    <p><strong>Race Categories & Timings:</strong></p>
    <ul>
      <li>LKG/UKG (75 Mtrs): 7:15 AM</li>
      <li>1st & 2nd STD (100 Mtrs): 7:15 AM</li>
      <li>3rd & 4th STD (100 Mtrs): 7:00 AM</li>
      <li>5th & 6th STD (400 Mtrs): 6:45 AM</li>
      <li>7th & 8th STD (800 Mtrs): 6:45 AM</li>
      <li>9th & 10th STD (1 KM): 6:00 AM</li>
      <li>Open Category (2 KM): 6:15 AM</li>
      <li>Open Walkathon (2 KM): 8:00 AM</li>
    </ul>
    <p><strong>Prizes & Awards:</strong> The top 5 winners in each category will receive trophies, and all participants will enjoy certificates, medals, T-shirts, water bottles, BIBs, and refreshments.</p>
    <p>Participants are requested to report 30 minutes before their race for registration. Carry your school ID and proof of booking for a smooth entry.</p>
    <p>Thanks to all our supporting partners for making this event possible.</p>
  `,
  },

  {
    url: "roobarooh-music-concert-in-chennai-vandana-srinivasanus",
    id: 179,
    RegisterLink: "",
    metaTitleEvent:
      "RoobaRooh / Music Concert in Chennai / Vandana Srinivasanus",
    metaDescriptionEvent:
      "Roobaरूह by Vandana Srinivasan & The Madras Mehfil Collective – a music concert in Chennai with ghazals, retro, devotional and poetic melodies.",
    conicallinkEvent: "/eventsdetails/179",
    siteLink:
      "https://in.bookmyshow.com/events/roobarooh-by-vandana-srinivasan/ET00461873",
    EventsCalendarTitle: "Roobarooh by Vandana Srinivasan",
    EventsCalendarContent:
      "Rooba रूह: Face to Face with the Soul of Music By Vandana Srinivasan ",
    EventsCalendarMonth: "18 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/301.jpg",
    link: "/events",
    location: "The Music Academy Mini Hall, Chennai",
    language: "Hindi, Urdu, Tamil, Malayalam, Punjabi",
    hours: "2 Hours",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>Rooba रूह: Face to Face with the Soul of Music by Vandana Srinivasan & The Madras Mehfil Collective.</p>
    <p>Experience an evening where music, poetry, and stories come together with Rooba रूह—the debut multi-city tour by Vandana Srinivasan & The Madras Mehfil Collective.</p>
    <p>Inspired by the timeless tradition of mehfil gatherings, this concert goes beyond performance—it is an invitation to connect. Through songs, verses, and intimate storytelling, every note becomes a dialogue, every story a bridge, and every mehfil a celebration of shared spirit.</p>
    <p>The repertoire flows seamlessly across genres—Ghazals, Sufi, Classical, Semi-classical, Retro, Devotional, and Qawwali—woven into an emotional journey meant to be felt, not just heard.</p>
    <p>As the season of Diwali brightens homes and hearts, Rooba रूह invites you to embrace the joy of music, the warmth of togetherness, and the promise of new beginnings.</p>
    <p>✨ Join us for an unforgettable evening where the boundaries between artist and audience, performance and reflection, dissolve into the soul of music.</p>
  `,
  },
  {
    url: "standup-comedy-chennai-imaginesan-nesan-david",
    id: 180,
    RegisterLink: "",
    metaTitleEvent: " Standup Comedy Chennai / ImagineSan / Nesan David ",
    metaDescriptionEvent:
      "Standup Comedy Chennai gets a twist with ImagineSan by Nesan David — a two-hour journey of humour, music, and stories that heal heartbreak with laughter.",
    conicallinkEvent: "/eventsdetails/180",
    siteLink:
      "https://in.bookmyshow.com/events/imaginesan-a-live-standup-show-by-nesan-david/ET00452751",
    EventsCalendarTitle: "ImagiNesan - A Live Standup Show By Nesan Dravid",
    EventsCalendarContent:
      "Riding on the triumph of his debut special, Nesan David returns with a brand-new act",
    EventsCalendarMonth: "26 Oct 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Comedy, Musical",
    image: "/images/HomePage-Images/Events/Newevents/302.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet, Chennai",
    language: "English, Tamil",
    hours: "2 Hours",
    ageLimit: "16 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Riding on the triumph of his debut special, Nesan David returns with a brand-new act that’s equal parts laughter, rhythm, and raw emotion.</p>
    <p>This musical stand-up journey fuses humor, melody, and heartfelt storytelling, as Nesan walks the audience through his tales of first love, the whirlwind of young romance, and the sting of heartbreak. Each moment unfolds with wit and honesty, transforming personal memories into universal laughter.</p>
    <p>More than just jokes, ImagiNesan is an experience—an evening where comedy meets music, and pain finds healing through punchlines.</p>
    <p>✨ A celebration of love, loss, and laughter—told through the soul of comedy.</p>
  `,
  },
  {
    url: "english-standup-comedy-show-in-chennai-mallu-dude",
    id: 181,
    RegisterLink: "",
    metaTitleEvent: "English Standup Comedy / Show in Chennai / Mallu dude",
    metaDescriptionEvent:
      "Mallu Dude from Kuwait, a Chennai Rajasthani & a Hyderabad Tamil guy bring you this English standup comedy show in Chennai with humour about love, life & culture",
    conicallinkEvent: "/eventsdetails/181",
    siteLink:
      "https://in.bookmyshow.com/events/pan-indians-an-english-standup-comedy-show/ET00453196",
    EventsCalendarTitle: "Pan Indians - An English Standup Comedy Show",
    EventsCalendarContent:
      "A Malayali guy from Kuwait, a Tamilian from Hyderabad, and a Rajasthani from Chennai",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/311.jpg",
    link: "/events",
    location: "Trinity Studio, Kodambakkam",
    language: "English",
    hours: "1 Hour 45 Minutes",
    ageLimit: "16 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>A Malayali guy from Kuwait, a Tamilian from Hyderabad, and a Rajasthani from Chennai. Three cultures, three languages, and just one mic.</p>
    <p>This English stand-up comedy show brings together three comics who unload their hilarious takes on everything—from work struggles to love troubles—leaving you convinced that they seriously need to sort out their lives.</p>
    <p><em>Note:</em> Limited car parking available at the venue. We recommend taking a cab or using public transport.</p>
  `,
  },

  {
    url: "kenny-sebastian-live-standup-comedy-show-in-chennai",
    id: 182,
    RegisterLink: "",
    metaTitleEvent: "Kenny Sebastian Live / Standup Comedy Show in Chennai ",
    metaDescriptionEvent:
      "Kenny Sebastian Live offers a standup comedy show in Chennai with new jokes about fatherhood, witty observations and a musical twist—authentic laughs await.",
    conicallinkEvent: "/eventsdetails/182",
    siteLink:
      "https://in.bookmyshow.com/events/kenny-sebastian-live/ET00457720",
    EventsCalendarTitle: "Kenny Sebastian Live",
    EventsCalendarContent:
      "Kenny Sebastian returns with a brand-new trial show",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/303.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet, Chennai",
    language: "English",
    hours: "1 Hour",
    ageLimit: "16 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Kenny Sebastian returns with a brand-new trial show — a playful blend of sharp observations, fresh takes on fatherhood, and his signature touch of music.</p>
    <p>It’s an evening full of humor that’s still evolving, making every moment unique and unrepeatable.</p>
    <p>Be there for the laughter, soak in the vibe, and witness Kenny in his most raw and spontaneous form!</p>
  `,
  },
  {
    url: "workshops-in-chennai-aqua-sound-bath-health&fitness",
    id: 183,
    RegisterLink: "",
    metaTitleEvent: "Workshops in Chennai / Aqua Sound Bath / Health & Fitness",
    metaDescriptionEvent:
      "Workshops in Chennai bring you Aqua Sound Bath Immersion, a health & fitness journey combining water floatation with soothing sound healing therapy.",
    conicallinkEvent: "/eventsdetails/183",
    siteLink:
      "https://in.bookmyshow.com/events/aqua-sound-bath-immersion/ET00458490",
    EventsCalendarTitle: "Aqua Sound Bath Immersion",
    EventsCalendarContent:
      "Aqua Sound Bath Immersion – A Floating Voyage of Renewal",
    EventsCalendarMonth: "5 Oct 2025",
    EventsCalendarTime: "3:30 PM",
    EventsCalendarCategory: "Wellness",
    image: "/images/HomePage-Images/Events/Newevents/304.jpg",
    link: "/events",
    location: "Blues By Tiki Taka, Chennai",
    language: "English",
    hours: "1 Hour",
    ageLimit: "8 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Aqua Sound Bath Immersion – A Floating Voyage of Renewal</p>
    <p>Step into a one-of-a-kind experience where the serenity of water blends with the transformative resonance of gongs and singing bowls.</p>
    <p>As you float effortlessly, waves of sound move through you — quieting the mind, releasing stored emotions, and realigning your inner energy. The water acts as a natural amplifier, carrying every vibration deeper into your being, encouraging profound rest, emotional release, and a reset for the nervous system.</p>
    <p>Surrender. Drift. Heal.</p>
  `,
  },

  {
    url: "robocraft-ai-humanoid-building-workshops-in-chennai",
    id: 184,
    RegisterLink: "",
    metaTitleEvent: "ROBOCRAFT / AI Humanoid Building / Workshops in Chennai",
    metaDescriptionEvent:
      "Workshops in Chennai get futuristic with ROBOCRAFT AI Humanoid Building—hands-on robotics, programming, and live demos of next-gen AI applications.",
    conicallinkEvent: "/eventsdetails/184",
    siteLink:
      "https://in.bookmyshow.com/events/ai-humanoid-building-workshop-first-time-in-india/ET00411850",
    EventsCalendarTitle: "RoboCraft - AI Humanoid Building Workshop",
    EventsCalendarContent: "Join the iCare Robotics 1-Day ",
    EventsCalendarMonth: "25 Oct 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Workshop",
    image: "/images/HomePage-Images/Events/Newevents/305.jpg",
    link: "/events",
    location: "ICare Robotics, Chennai",
    language: "English, Tamil, Hindi",
    hours: "8 Hours",
    ageLimit: "12 Yrs+",
    rleigion: "",
    aboutFull: `
    <p>Join the iCare Robotics 1-Day Humanoid Workshop!</p>
    <p>Step into the future with our 6-foot humanoid robots — live, interactive, and ready to amaze you!</p>
    <p>For just INR 4,999, dive into an 8-hour immersive learning experience that opens the doors to the fascinating world of humanoid robotics. Perfect for students and enthusiasts of programming, AI, and digital sciences, this hands-on workshop will guide you through:</p>
    <ul>
      <li><strong>Robot Design & Assembly:</strong> Discover how humanoid robots are built, step by step.</li>
      <li><strong>Programming Essentials:</strong> Learn to code and control robots using Python & Java.</li>
      <li><strong>AI in Action:</strong> Explore cutting-edge applications like emotion detection, NLP, computer vision, and sign language recognition with live demos.</li>
      <li><strong>Team Projects:</strong> Work with peers to create your own interactive robotic innovations.</li>
    </ul>
    <p>This workshop is your chance to develop future-ready skills, collaborate with like-minded learners, and witness how AI and robotics are reshaping tomorrow.</p>
    <p><strong>⚡ Seats are limited — book today and be part of the future!</strong></p>
  `,
  },

  {
    url: "staccato-live-concert-in-chennai-tour-de-india",
    id: 185,
    RegisterLink: "",
    metaTitleEvent: "Staccato Live / Concert in Chennai / Tour De India",
    metaDescriptionEvent:
      "Tour De India presents Staccato Live, a spectacular concert in Chennai with over 20 musicians delivering nostalgia, fresh sounds, and powerful performances.",
    conicallinkEvent: "/eventsdetails/185",
    siteLink:
      "https://www.district.in/events/tour-de-india-staccato-live-in-concert-chennai-2025-buy-tickets",
    EventsCalendarTitle: "Tour De'India - Staccato Live in Concert",
    EventsCalendarContent:
      "Staccato, the celebrated band that proudly represented India at the London Olympics 2012",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Music Concert",
    image: "/images/HomePage-Images/Events/Newevents/306.jpg",
    link: "/events",
    location: "Music Academy, Chennai",
    language: "Multilingual",
    hours: "3 Hours",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>Staccato, the celebrated band that proudly represented India at the London Olympics 2012, returns with a grand multilingual concert experience.</p>
    <p>Known for their captivating live shows, the band brings together over 20 talented musicians on stage to deliver a night full of energy, nostalgia, and musical brilliance.</p>
    <p>This concert is a musical celebration that bridges generations, featuring legendary film tracks and contemporary hits alongside Staccato’s own original numbers.</p>
    <ul>
      <li>Memorable renditions of film songs across different languages</li>
      <li>A vibrant mix of golden oldies and upbeat new favorites</li>
      <li>Stunning stage visuals and lighting design</li>
      <li>Engaging audience interactions</li>
      <li>Special surprise guest acts</li>
    </ul>
    <p>Perfect for music fans, families, and groups of friends, this concert offers something special for everyone — from sentimental tunes to high-energy dance tracks.</p>
    <p>Come ready to sing, dance, and relive your favorite memories as Staccato takes you on an unforgettable journey of melody, rhythm, and celebration.</p>
  `,
  },
  {
    url: "concert-ratri-2.0-navratri-special-dj-nights-in-chennai",
    id: 186,
    RegisterLink: "",
    metaTitleEvent:
      "Concert Ratri 2.0 / Navratri Special / DJ Nights in Chennai",
    metaDescriptionEvent:
      "Concert Ratri 2.0 – a Navratri Special with DJ nights in Chennai, featuring celebrity artists, EDM beats, Garba performances & vibrant festival energy.",
    conicallinkEvent: "/eventsdetails/186",
    siteLink:
      "https://www.district.in/events/concert-ratri-20-oct1-2025-buy-tickets",
    EventsCalendarTitle: "Concert Ratri 2.0",
    EventsCalendarContent:
      "Concert Ratri 2.0 – Turning Navratri Nights into a Festival of Beats!",
    EventsCalendarMonth: "1 Oct 2025",
    EventsCalendarTime: "10:00 PM",
    EventsCalendarCategory: "Music Festival",
    image: "/images/HomePage-Images/Events/Newevents/307.jpg",
    link: "/events",
    location: "Phoenix Marketcity, Chennai",
    language: "Multilingual",
    hours: "17 Hours",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>Concert Ratri 2.0 – Turning Navratri Nights into a Festival of Beats!</p>
    <p>Chennai, get set for a night that fuses tradition with high-energy party vibes!</p>
    <ul>
      <li>A spectacular live act by a celebrity artist</li>
      <li>Non-stop hits from the city’s hottest DJs</li>
      <li>An electrifying Garba experience blending culture with modern rhythm</li>
    </ul>
    <p>This is where EDM meets Garba — dance to global beats and desi grooves all night long.</p>
    <p>Enjoy delicious food at the vibrant food court and celebrate in a fully air-conditioned venue.</p>
    <p>Designed for the young, the wild, and the free-spirited, Concert Ratri 2.0 is your ultimate Navratri destination.</p>
    <p>Don’t wait to hear the stories — come create them. Experience Navratri like never before!</p>
  `,
    eventSchedule: [
      {
        date: "Wed 1 Oct 2025",
        time: "10:00 PM",
      },
      {
        date: "Thu 2 Oct 2025",
        time: "3:00 PM",
      },
    ],
  },
  {
    url: "indian-navy-day-run-2025-chennai-marathon-event-jai-hind",
    id: 187,
    RegisterLink: "",
    metaTitleEvent:
      "Indian Navy Day Run 2025 / Chennai Marathon Event / Jai Hind",
    metaDescriptionEvent:
      "Be part of the Indian Navy Day Run 2025 – Chennai Marathon Event with 3K, 5K, 10K runs, patriotism, fitness, and the Jai Hind spirit for all participants.",
    conicallinkEvent: "/eventsdetails/187",
    siteLink:
      "https://www.district.in/events/indian-navy-day-run-2025-dec6-2025-buy-tickets",
    EventsCalendarTitle: "Indian Navy Day Run 2025",
    EventsCalendarContent:
      "Join us to honor the brave hearts of the Indian Navy and celebrate Indian Navy",
    EventsCalendarMonth: "7 Oct 2025",
    EventsCalendarTime: "5:00 AM",
    EventsCalendarCategory: "Sports",
    image: "/images/HomePage-Images/Events/Newevents/309.jpg",
    link: "/events",
    location: "Olcott Memorial Higher Secondary School, Chennai",
    language: "English, Tamil",
    hours: "",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p>Join us to honor the brave hearts of the Indian Navy and celebrate Indian Navy Day with a run symbolizing patriotism, unity, and gratitude.</p>
    <h3>Run Categories:</h3>
    <ul>
      <li>3K Fun Run – For all ages, a joyful run celebrating togetherness.</li>
      <li>5K Timed Run – Challenge yourself and earn your glory.</li>
      <li>10K Timed Run – For the bold, passionate, and unstoppable runners.</li>
    </ul>
    <p>Every step is a tribute to the sea warriors who protect our nation tirelessly. Let’s come together to salute their courage, discipline, and sacrifice.</p>
    <h3>Participant Benefits:</h3>
    <ul>
      <li>T-Shirt</li>
      <li>Medal</li>
      <li>E-Certificate</li>
      <li>Timing Bib (for 5K & 10K)</li>
      <li>Refreshments & Snacks</li>
      <li>Top Winners (1st, 2nd & 3rd) in all categories will receive Trophies and Gift Vouchers.</li>
    </ul>
    <p>Join the Run. Celebrate the Nation. Honor the Navy. Run with pride and honor.</p>
  `,
  },
  {
    url: "moi-virundhu-charity-event-world-food-day",
    id: 188,
    RegisterLink: "",
    metaTitleEvent:
      "MOI Virundhu Charity Event / World Food Day / Super Chennai",
    metaDescriptionEvent:
      "Participate in MOI Virundhu Charity Event in Chennai for World Food Day – experience community dining while helping Help on Hunger Foundation fight hunger.",
    conicallinkEvent: "/eventsdetails/188",
    siteLink:
      "https://www.district.in/events/moi-virndhu-oct12-2025-buy-tickets",
    EventsCalendarTitle: "Moi Virundhu",
    EventsCalendarContent:
      "Moi Virundhuis a signature initiative by the Help on Hunger Foundation that brings",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Charity / Community",
    image: "/images/HomePage-Images/Events/Newevents/310.jpg",
    link: "/events",
    location: "YMCA Royapettah, Chennai",
    language: "Multilingual",
    hours: "2 Hours",
    ageLimit: "All Age Groups",
    rleigion: "",
    aboutFull: `
    <p><strong>Moi Virundhu</strong> is a signature initiative by the Help on Hunger Foundation that brings people together to eat for a cause. Now in its third year, the event coincides with <strong>World Food Day</strong>, marking six years of the Foundation’s impactful work in fighting hunger.</p>
    <p><em>Every plate served is a plate shared</em> — participants’ contributions directly support:</p>
    <ul>
      <li>Daily meals for the homeless</li>
      <li>Grocery kits for leprosy-affected families</li>
      <li>Nutritious snacks for underprivileged children</li>
    </ul>
    <p>Moi Virundhu is more than a meal; it’s a celebration of <strong>community, compassion, and solidarity</strong>.</p>
    <p>This year, we invite you to join this shared table of hope. Together, let’s strengthen the mission of <strong>Zero Hunger</strong> and create a world where no one goes to bed hungry.</p>
  `,
  },
  {
    url: "amg-experience-chennai-oct-2025",
    id: 189,
    RegisterLink: "",
    metaTitleEvent:
      "AMG Experience Chennai / Mercedes-AMG Driving Event / evo India",
    metaDescriptionEvent:
      "Join the AMG Experience at Madras International Circuit, Chennai – a high-performance driving event by Mercedes-AMG and evo India. Feel the thrill of racing with expert coaching, luxury hospitality, and iconic AMG machines.",
    conicallinkEvent: "/eventsdetails/189",
    siteLink:
      "https://www.district.in/events/amg-experience-chennai-buy-tickets",
    EventsCalendarTitle: "AMG Experience Chennai",
    EventsCalendarContent:
      "The AMG Experience is Mercedes-AMG’s signature high-performance driving program",
    EventsCalendarMonth: "11 – 12 Oct, 2025",
    EventsCalendarTime: "7:30 AM",
    EventsCalendarCategory: "Auto / Motorsports",
    image: "/images/HomePage-Images/Events/Newevents/308.jpg",
    link: "/events",
    location: "Madras International Circuit, Chennai",
    language: "English",
    hours: "10 Hours",
    ageLimit: "18 Yrs & Above",
    rleigion: "",
    aboutFull: `
      <p>The AMG Experience is Mercedes-AMG’s signature high-performance driving program, curated by the evo India team – expert automotive journalists with years of experience in delivering unforgettable driving events. Backed by deep motorsport expertise and flawless execution, every AMG Experience is crafted to be both thrilling and immersive.</p>

    <p>At the Madras International Circuit, Chennai – one of India’s most iconic and fastest racetracks – the action goes full throttle. Participants can push limits with high-speed lap runs, feel the rush of drag launches on the straight, and test precision with drift and autocross challenges in dynamic zones. Get behind the wheel of AMG icons such as the Mercedes-AMG C 63 S E Performance, SL 55 Roadster, and S 63 E Performance, and discover their unmatched acceleration, advanced chassis dynamics, and race-tuned engineering — all under expert supervision.</p>

    <p>To complement the adrenaline, the program includes luxury hospitality, exclusive AMG-branded collectibles, tailored coaching from certified instructors, and professional photo/video coverage to capture every unforgettable moment.</p>
  `,
  },
  {
    url: "the-october-theatre-fest-concert-in-chennai",
    id: 190,
    RegisterLink: "",
    metaTitleEvent:
      "The October Theatre Fest / Concert in Chennai / Super Chennai",
    metaDescriptionEvent:
      "Immerse yourself in The October Theatre Fest in Chennai – a fusion of theatre, music, and art at Sir Mutha Venkatasubba Rao Concert Hall.",
    conicallinkEvent: "/eventsdetails/190",
    siteLink:
      "https://www.district.in/events/the-october-theatre-fest-oct24-2025-buy-tickets",
    EventsCalendarTitle: "The October Theater Feast In Chennai",
    EventsCalendarContent:
      "From 24th to 26th October 2025, the Sir Mutha Venkatasubba Rao Concert Hall,",
    EventsCalendarMonth: "24 – 26 Oct 2025",
    EventsCalendarTime: "2hrs 30 Minutes",
    EventsCalendarCategory: "Theatre / Cultural",
    image: "/images/HomePage-Images/Events/Newevents/313.jpg",
    link: "/events",
    location: "Sir Mutha Venkatasubba Rao Concert Hall, Chennai",
    language: "Multilingual",
    hours: "2hrs 30 Minutes",
    ageLimit: "5 Yrs and Above",
    rleigion: "",
    aboutFull: `
    <p>From 24th to 26th October 2025, the Sir Mutha Venkatasubba Rao Concert Hall, Chennai, will come alive as a vibrant stage for theatre, music, dance, art, and more.</p>

    <p>Here’s what awaits you:</p>
    <ul>
      <li><strong>Stage Plays:</strong> Acclaimed English productions from top groups like Akvarious.</li>
      <li><strong>Hands-on Workshops:</strong> Explore dance, art journaling, lettering, puppetry, astronomy, and other interactive sessions for all ages.</li>
      <li><strong>Live Acts:</strong> Indie bands, open mics, and dance showcases in buzzing outdoor venues.</li>
      <li><strong>Food & Lifestyle Market:</strong> Curated food counters, craft brands, and art collectives for a unique shopping and dining experience.</li>
      <li><strong>Special Add-ons:</strong> Engaging art installations and a puppy adoption drive on the last day.</li>
      <li><strong>Art Showcase:</strong> A dedicated exhibition spotlighting the rich sculptural legacy of Mahabalipuram.</li>
    </ul>

    <p>The October Theatre Fest is more than an event — it’s a 3-day cultural carnival of art, creativity, and community. Whether you’re passionate about theatre, eager to try workshops, or simply looking for a vibrant weekend, this is the place to be.</p>

    <p>Join us for Chennai’s grand celebration of arts!</p>
  `,
  },

  {
    clickHere: "hello everyOne",
    url: "agricultural-festival-traditional-farming-tamil-nadu-2025",
    id: 191,
    RegisterLink: "",
    metaTitleEvent:
      "Agricultural Festival / Traditional Farming / Tamil Nadu 2025",
    metaDescriptionEvent:
      "Celebrate Agricultural Festival 2025 in Tamil Nadu with traditional farming, native crops, organic practices, cultural heritage, and rural lifestyle.",
    conicallinkEvent: "/eventsdetails/191",
    siteLink: "https://www.instagram.com/tnhorticulture/p/DO3H3SpiUra/",
    EventsCalendarTitle: "Velaan Agricultural Festival 2025",
    EventsCalendarContent:
      "The Velaan Agricultural Festival 2025 is a grand celebration of farming and agrarian heritage",
    EventsCalendarMonth: "27 – 28 Sept 2025",
    EventsCalendarTime: "",
    EventsCalendarCategory: "Expo / Agriculture",
    image: "/images/HomePage-Images/Events/Newevents/312.jpg",
    link: "/events",
    location: "Chennai Trade Centre, Nandambakkam, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>The Velaan Agricultural Festival 2025 is a grand celebration of farming and agrarian heritage, designed to highlight both traditional practices and modern innovations in agriculture. This festival unites farmers, agricultural experts, and industry stakeholders to share knowledge, experiences, and advancements. Visitors will have the opportunity to explore a wide range of agricultural products, tools, and techniques, gaining valuable insights into contemporary and time-honored farming methods.</p>

    <p><strong>Highlights:</strong></p>
    <ul>
      <li>Exhibitions of agricultural products, technologies, and tools</li>
      <li>Interactive sessions with farmers and agricultural experts</li>
      <li>Opportunities to purchase products and discover innovative farming solutions</li>
      <li>Displays of grains, seeds, and processed agricultural goods</li>
    </ul>
      </br>
  `,
  },
  {
    url: "kadalora-kadhaigal-storytelling-event-kasimedu",
    id: 192,
    RegisterLink: "",
    metaTitleEvent: " Kadalora Kadhaigal / Storytelling event / Kasimedu",
    metaDescriptionEvent:
      "Kadalora Kadhaigal, a storytelling event in Kasimedu, brings tales of the sea, culture, and community, showcasing the voices and heritage of coastal life.",
    conicallinkEvent: "/eventsdetails/192",
    siteLink: "https://tickets.kynhood.com/event/68cba11f4817aa3768820af3",
    EventsCalendarTitle: "Kadalora Kadhaigal testing",
    EventsCalendarContent:
      "Guided 90-minute coastal trail with Saravana Bharathi",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "6:00 AM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/319.jpg",
    link: "/events",
    location: "Kasimedu Fish Market, Royapuram",
    language: "",
    hours: "1 hour 30 minutes",
    ageLimit: "",
    rleigion: "",
    aboutFull: `✨ Highlights:

Guided 90-minute coastal trail with Saravana Bharathi
A storytelling event where you meet seasoned fishermen & hear gripping seafaring tales
Explore unique fish varieties & traditional fishing practices
Walk through the vibrant fish market and shop the freshest catch
Immerse yourself in the authentic coastal lifestyle

📌 Things to Note:

Be at the start point by 6:00 AM sharp
Two-wheeler parking available; car parking very limited
Best to take a cab/auto for easy arrival
Wear comfortable shoes and carry drinking water
Bring your own bag if you plan to buy fresh fish
Come with a curious spirit—stories will keep you hooked all day! `,
  },
  {
    url: "wild-milan-glam-glitter-lifestyle-exhibition-chennai",
    id: 193,
    RegisterLink: "",
    metaTitleEvent:
      "Wild Milan / Glam & Glitter / Lifestyle Exhibition in Chennai",
    metaDescriptionEvent:
      "Visit Wild Milan’s Glam & Glitter exhibition in Chennai—a dazzling lifestyle showcase featuring fashion, decor, art, and sparkle under one roof.",
    conicallinkEvent: "/eventsdetails/193",
    siteLink: "https://tickets.kynhood.com/event/68c00cd61b555f7e0a1f45eb",
    EventsCalendarTitle: "Wild Milan   ",
    EventsCalendarContent: "Glam & Glitter Edit by Wild Milan Exhibitions",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Exhibition",
    image: "/images/HomePage-Images/Events/Newevents/320.jpg",
    link: "/events",
    location: "Pakwan Banquet Hall, T. Nagar, Chennai",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    
    
    ✨ Event Highlights:
A Two-Day Lifestyle Exhibition in Chennai – Showcasing Fashion, Lifestyle, and Creative Elegance

Featuring designer apparel, ethnic outfits, statement jewelry, chic accessories, and home décor

A one-stop destination for festive shopping, weddings, and special occasions

Explore exclusive collections from emerging designers and boutique brands

Experience glamour, sophistication, and sparkle in every stall

Perfect to revamp your wardrobe, discover unique pieces, or enjoy retail indulgence

📌 Why Attend?

Discover fresh fashion trends and luxury shopping

Connect with talented creators and innovative labels

Treat yourself to two unforgettable days of style and inspiration


Wild Milan presents the Glam & Glitter Edit, a two-day exhibition happening on Saturday, 4th October to Sunday, 5th October, starting 10:00 AM onwards at T. Nagar.

`,
  },
  {
    url: "kottukkaali-directors-cut-sequels-big-screening",
    id: 194,
    RegisterLink: "",
    metaTitleEvent:
      "Director’s Cut & Sequel’s / Kottukkaali / Big Screening Event",
    metaDescriptionEvent:
      "Explore Directors Cut and Sequels Kottukkaali Big Screening Event with indie filmmakers, their stories, and upcoming sequels in one cinematic experience.",
    conicallinkEvent: "/eventsdetails/194",
    siteLink: "https://tickets.kynhood.com/event/68d02a209699e3aaa73829f0",
    EventsCalendarTitle: "Kottukkaali",
    EventsCalendarContent: "Glam & Glitter Edit by Wild Milan Exhibitions",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "2:00 PM",
    EventsCalendarCategory: "Film",
    image: "/images/HomePage-Images/Events/Newevents/321.jpg",
    link: "/events",
    location: "Tagore Film Centre",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    ✨ Event Highlights:

Exclusive Director’s Cut screening of Kottukkaali, never shown before

Uncensored full-length film experience as envisioned by the filmmaker
Big Screening Event with post-screening interaction with the director and film crew
Refreshment break with food and drinks available
Networking zone for cinema enthusiasts and attendees

🎟 Why Attend:

Witness a rare cinematic experience for true film lovers
Gain insights into the filmmaking process during the discussion
Enjoy an immersive event designed for serious audience engagement
⚠ Note: Seats are limited — secure your spot early!
BOOK NOW!
    `,
  },

  {
    url: "legacy-roasters-south-indian-filter-coffee-mylapore",
    id: 195,
    RegisterLink: "",
    metaTitleEvent: "Legacy Roasters / South Indian Filter Coffee / Mylapore",
    metaDescriptionEvent:
      "Discover the art of South Indian filter coffee at Legacy Roasters in Mylapore with tasting sessions, roast stories, and immersive coffee culture.",
    conicallinkEvent: "/eventsdetails/195",
    siteLink: "https://tickets.kynhood.com/event/68c3a9328ec2e6b59264d889",
    EventsCalendarTitle: "Legacy Roasters of Mylapore",
    EventsCalendarContent:
      "Guided Coffee Walk through the historic streets of Mylapore",
    EventsCalendarMonth: "4 Oct 2025",
    EventsCalendarTime: "4:30 PM",
    EventsCalendarCategory: "Comedy",
    image: "/images/HomePage-Images/Events/Newevents/322.jpg",
    link: "/events",
    location:
      "Legacy Roasters, Mylapore (Near Rasi Silks, Kapaleeswarar Temple)",
    language: "",
    hours: "1 hour",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
✨ Event Highlights:

Guided Coffee Walk through the historic streets of Mylapore with Dr. Vignesh Raj, coffee enthusiast

Explore the heritage of South Indian filter coffee and the secrets behind the perfect brew

Meet local coffee-roasting families and learn about age-old techniques and traditions

Discover how craft and culture blend in every cup

Experience stories behind each coffee bean and its journey through generations

A unique cultural walk ideal for coffee lovers, curious travelers, and local culture enthusiasts

📌 Why Attend:

Sip and learn about Chennai’s rich coffee heritage

Engage with locals preserving traditional coffee practices

Take home not just coffee, but memorable stories and experiences

☕ Come walk, sip, and connect!
    `,
  },
  {
    url: "war-and-peace-book-show-launch",
    id: 196,
    RegisterLink: "",
    metaTitleEvent: "War And Peace / Chennai Book Show / Launch Event",
    metaDescriptionEvent:
      "War And Peace premieres at the Chennai book show & launch event: enjoy author dialogue, readings, signings and a night devoted to great literature.",
    conicallinkEvent: "/eventsdetails/196",
    siteLink: "https://tickets.kynhood.com/event/68c7b129cdc759eaba6994c1",
    EventsCalendarTitle: "War And Peace",
    EventsCalendarContent:
      "The Queen's Memoir by Mayam (a deep dive into power dynamics)",
    EventsCalendarMonth: "5 Oct 2025",
    EventsCalendarTime: "5:00 PM",
    EventsCalendarCategory: "Yoga",
    image: "/images/HomePage-Images/Events/Newevents/323.jpg",
    link: "/events",
    location: "LBR Towers, 11th Floor, Teynampet",
    language: "",
    hours: "1 hour",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
      ✨ Event Highlights:

Book Launches: The Queen's Memoir by Mayam (a deep dive into power dynamics) and The Yogini Detective's Soupy Secrets by Shanti Arunkumar (a fun mystery infused with mindfulness)

Open Mic Session: Share your own stories, poems, or reflections on the theme of war and peace at the Chennai Book Show, Launch Event.

Yoga Session: Relax, rejuvenate, and center yourself with a short, stress-free yoga practice

Soulful Soup Tasting: Enjoy delicious and unique soups to complement the literary experience

Community & Introspection: Connect with like-minded individuals, reflect, and find your inner zen

📌 Why Attend:

Step away from the daily grind and enjoy a blend of literature, wellness, and community

Engage in creative expression and mindful activities

Experience a unique, interactive book launch like no other
    `,
  },
  {
    url: "kalaivilasam-showcase-creative-arts-lifestyle",
    id: 197,
    RegisterLink: "",
    metaTitleEvent: "Kalaivilasam / Showcase Event / Creative Arts & Lifestyle",
    metaDescriptionEvent:
      "Kalaivilasam brings a lively creative arts & lifestyle showcase event featuring stalls of art, crafts, fashion, décor & unique handmade products.",
    conicallinkEvent: "/eventsdetails/197",
    siteLink: "https://tickets.kynhood.com/event/68c10e5b946152966c9fcd88",
    EventsCalendarTitle: "Kalaivilasam",
    EventsCalendarContent:
      "Two-day vibrant pop-up celebrating creativity, talent, and local makers",
    EventsCalendarMonth: "11 – 13 Nov 2025",
    EventsCalendarTime: "10:00 AM",
    EventsCalendarCategory: "Pop-up Market",
    image: "/images/HomePage-Images/Events/Newevents/324.jpg",
    link: "/events",
    location: "Vibgyor Space, Anna Nagar",
    language: "",
    hours: "1 hour",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
      ✨ Event Highlights:

Two-day vibrant pop-up celebrating creativity, talent, and local makers

Platform for artists, crafters, fashion designers, lifestyle brands, decor creators, and gift vendors to showcase their work
Colorful stalls, festive décor, and lively atmosphere for visitors and participants alike — part of the Creative Arts & Lifestyle / Showcase Event

Opportunity to connect with the community and engage with a supportive audience

More than just shopping — a celebration of creativity, collaboration, and inspiration

📌 Why Attend or Participate:

Be part of a community-driven creative experience

Network with like-minded local artisans and entrepreneurs

Let your art, craft, or brand shine in a bustling, welcoming environment

Stall bookings are now open — don’t miss your chance to join!
    `,
  },
  {
    url: "little-green-thumbs-gardening-workshop",
    id: 198,
    RegisterLink: "",
    metaTitleEvent: "Little Green Thumbs / Gardening Workshop / Nature Lovers",
    metaDescriptionEvent:
      "Little Green Thumbs invites nature lovers to a fun gardening workshop in Chennai. Kids plant seeds, learn about growth, and take home a sapling.",
    conicallinkEvent: "/eventsdetails/198",
    siteLink: "https://tickets.kynhood.com/event/68cd2802fb750f65b481900b",
    EventsCalendarTitle: "LITTLE GREEN THUMBS",
    EventsCalendarContent:
      "Interactive gardening session for young nature enthusiasts and explorers",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "10:00 AM – 1:00 PM",
    EventsCalendarCategory: "Hands-on Gardening Workshop",
    image: "/images/HomePage-Images/Events/Newevents/325.jpg",
    link: "/events",
    location:
      "Deep Blue Stories, Muktha, No. 27, Cholamandal Artists Village, Injambakkam, ECR, Chennai",
    language: "",
    hours: "3 hours",
    ageLimit: "5+ years",
    rleigion: "",
    aboutFull: `
      ✨ Event Highlights:

Interactive gardening session for young nature enthusiasts and explorers

Gardening Workshop / Nature Lovers — Learn the secrets of soil and plant your own seeds
Hands-on experience nurturing plants from seed to growth

Morning filled with creativity, outdoor learning, and fun

Messy, memorable, and educational experience for children

📌 Why Attend:

Encourage children to connect with nature

Foster curiosity, responsibility, and green skills

Small group for personalized attention — spaces are limited

📞 Registration: Call or WhatsApp 9488672158 / 9176350535 
    `,
  },
  {
    url: "la-nuit-blanche-moulin-rouge-cultural-night",
    id: 199,
    RegisterLink: "",
    metaTitleEvent: "La Nuit Blanche / Moulin Rouge / Cultural Night Event",
    metaDescriptionEvent:
      "Enjoy La Nuit Blanche, a Moulin Rouge cultural night event featuring live performances, music, dance, and a glamorous Parisian-inspired evening.",
    conicallinkEvent: "/eventsdetails/199",
    siteLink: "https://tickets.kynhood.com/event/68ad9ba3cd2a93229c0883ce",
    EventsCalendarTitle: "La Nuit Blanche - Édition Moulin Rouge",
    EventsCalendarContent:
      "La Nuit Blanche (“The White Night”) is an all-night arts festival originating in Paris in 2002",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "2:00 PM – 3:00 AM",
    EventsCalendarCategory: "Entertainment",
    image: "/images/HomePage-Images/Events/Newevents/326.jpg",
    link: "/events",
    location: "Alliance Française of Madras",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
     ✨ Event Overview:

La Nuit Blanche (“The White Night”) is an all-night arts festival originating in Paris in 2002, now celebrated worldwide

Cultural spaces remain open late, offering unique experiences in art, music, theatre, exhibitions, and performances

At AF Madras, it’s a highly anticipated cultural celebration with immersive art and festive experiences

✨ Moulin Rouge Theme:

Inspired by the legendary Parisian cabaret since 1889, known for creativity, joy, and inclusiveness

Famous for pioneering the can-can dance and inspiring artists like Toulouse-Lautrec

AF Madras recreates its glamorous, rhythmic, and electric spirit for a night of artistic innovation

🎭 Highlights:

7 creatively transformed spaces at Alliance Française of Madras

30+ exciting performances across the Cultural Night Event

Music, dance, theatre, art exhibitions, and more

French cabaret flair infused throughout the festival

📌 Why Attend:

Immerse yourself in art, culture, and festive experiences until dawn

Experience a Parisian-inspired night of creativity in Chennai Venue: Alliance Française of Madras
    `,
  },
  {
    url: "navratri-celebration-traditional-beats-festive-vibes",
    id: 200,
    RegisterLink: "",
    metaTitleEvent: "Navratri Celebration | Traditional Beats & Festive Vibes",
    metaDescriptionEvent:
      "Step into the spirit of Navratri Celebration with vibrant garba, dandiya nights, cultural music, and festive rhythms that light up Chennai.",
    conicallinkEvent: "/eventsdetails/200",
    siteLink: "https://tickets.kynhood.com/event/68cd2cfafb750f65b4819034",
    EventsCalendarTitle: "Navratri Celebration Camp",
    EventsCalendarContent:
      "La Nuit Blanche (“The White Night”) is an all-night arts festival originating in Paris in 2002",
    EventsCalendarMonth: "1 – 3 Oct 2025",
    EventsCalendarTime: "10:00 AM – 1:00 PM",
    EventsCalendarCategory: "Navratri Celebration Camp",
    image: "/images/HomePage-Images/Events/Newevents/317.jpg",
    link: "/events",
    location:
      "Deep Blue Stories, Muktha, No. 27, Cholamandal Artists Village, Injambakkam, ECR, Chennai",
    language: "",
    hours: "",
    ageLimit: "5+ years",
    rleigion: "",
    aboutFull: `
    ✨ Event Highlights:

Join us for a three-day Navratri Celebration filled with stories, art, dance, and cultural fun.

Learn about Navratri traditions and the significance behind the festival

Hands-on craft activities including DIY diyas, rangoli, and themed artworks

Garba and Dandiya sessions to teach joyful dance moves

Prepare and enjoy traditional snacks as part of the celebration

Explore the tradition of setting up a Golu

Foster creativity, cultural understanding, and social interaction in a fun environment 

📌 Why Attend:

Perfect for kids to celebrate the festival actively

Encourage artistic expression, movement, and cultural learning

Small group with limited spaces, ensuring personal attention    
    `,
  },

  {
    url: "singles-mixer-womens-concert-social-evening",
    id: 201,
    RegisterLink: "",
    metaTitleEvent:
      "Singles Mixer / Musical Evening for Women / Social Gathering",
    metaDescriptionEvent:
      "Celebrate a lively evening with a singles mixer, musical evening for women, and a social gathering filled with music, fun, and meaningful connections.",
    conicallinkEvent: "/eventsdetails/201",
    siteLink: "https://tickets.kynhood.com/event/68c7a08a7d5b8041e4a7a916",
    EventsCalendarTitle: "Singles' Mixer",
    EventsCalendarContent:
      "Women hosts ensure a comfortable and friendly environment at the Musical Evening for Women",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "6:00 PM – 8:30 PM",
    EventsCalendarCategory: "Music",
    image: "/images/HomePage-Images/Events/Newevents/315.jpg",
    link: "/events",
    location: "Kis Cafe, Adyar, Chennai",
    language: "",
    hours: "",
    ageLimit: "25–40 years",
    rleigion: "",
    aboutFull: `
    ✨ Event Highlights:

Women hosts ensure a comfortable and friendly environment at the Musical Evening for Women / Social Gathering.
Fun and unique icebreaker activities to get conversations started
Singles’ mixer / speed dating experience in a safe and lively café setting
Curated snack box included: welcome drink, 1–2 appetizers, and dessert (additional menu items available to order)
Music & ambiance: Great playlist and Instagram-worthy décor for photos

📌 Why Attend:

Meet new people, make friends, or potentially find your special someone

Enjoy a fun, social evening in a relaxed, safe setting

Personalized experience: Hosts will contact attendees for personality questionnaires to curate the event better. 
    `,
  },
  {
    url: "chengai-mini-marathon-2025",
    id: 202,
    RegisterLink: "",
    metaTitleEvent: "Chengai Mini Marathon / Chennai Running Event 2025",
    metaDescriptionEvent:
      "Participate in the Chengai Mini Marathon, a premier Chennai Running Event 2025 promoting fitness, wellness, and community spirit for all ages.",
    conicallinkEvent: "/eventsdetails/202",
    siteLink: "https://tickets.kynhood.com/event/68ad826cf33b64ec4246e9a8",
    EventsCalendarTitle: "Chengai Mini Marathon",
    EventsCalendarContent:
      "Top 10 winners in each category will receive trophies/shields",
    EventsCalendarMonth: "11 Oct 2025",
    EventsCalendarTime: "6:00 PM – 8:30 PM",
    EventsCalendarCategory: "Marathon",
    image: "/images/HomePage-Images/Events/Newevents/328.jpg",
    link: "/events",
    location: "Near St. Columba's Hr. Sec. School, Chengalpattu",
    language: "",
    hours: "",
    ageLimit: "25–40 years",
    rleigion: "",
    aboutFull: `
    ✨ Event Highlights:

Top 10 winners in each category will receive trophies/shields

All participants get medals, certificates, t-shirts, gift vouchers, breakfast, and a water bottle

Categories of Run:

3K Runs (U12 & U18): Timed and Non-Timed

5K Runs (U35, U45, 46+): Timed and Non-Timed

7K Timed Run (19+ Open)

🎯 Program Schedule:

Zumba warm-up session to kickstart the Chennai Running Event 2025

Marathon race across different categories

Stretching session post-run

Kids’ entertainment program along with breakfast

Finishing ceremony & prize distribution

📌 Why Participate:

Engage in a healthy and fun-filled community event

Celebrate fitness with awards, souvenirs, and refreshments

Ideal for all age groups, from kids to adults
    `,
  },
  {
    url: "rising-stars-tamil-nadu-yoga-championship-2025",
    id: 203,
    RegisterLink: "",
    metaTitleEvent: "Rising Stars / Tamil Nadu Yoga Championship / 2025",
    metaDescriptionEvent:
      "Tamil Nadu Yoga Championship 2025 brings together rising stars and young achievers for a spirited contest of flexibility, focus, and endurance.",
    conicallinkEvent: "/eventsdetails/203",
    siteLink: "https://tickets.kynhood.com/event/68ad826cf33b64ec4246e9a8",
    EventsCalendarTitle:
      "Tamilnadu Open State Level Inter School Yoga Championship- 2025",
    EventsCalendarContent:
      "Arranged by ABS Group of Schools to display yoga proficiency, strength, and versatility",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "6:00 PM – 8:30 PM",
    EventsCalendarCategory: "Yoga",
    image: "/images/HomePage-Images/Events/Newevents/329.jpg",
    link: "/events",
    location:
      "ABS Global Smart School, Avadi Venue: ABS Global Smart School, Avadi",
    language: "",
    hours: "",
    ageLimit: "25–40 years",
    rleigion: "",
    aboutFull: `
    ✨ Event Overview:

Arranged by ABS Group of Schools to display yoga proficiency, strength, and versatility

🏆 Categories (Boys & Girls):

Std I & II

Std III – V

Std VI – VII

Std VIII – IX

Std XI – XII

Open Category (No Age Limit)

🧘 Asana Divisions:

Forward Bends

Backward Bends

Leg Balance Poses

Twisting Poses

Hand Balance Poses

🎖 Awards & Recognition:

Winners: Certificates + Medals + Trophies

Champion of Champions (Top 3 overall winners): Trophy + Medal + Certificate

📌 Why Participate:

Rising Stars and Yoga championship - Showcase your yoga skills and discipline

Compete with talented students from across Tamil Nadu

Earn recognition, awards, and a chance to become Champion of Champions
    `,
  },
  {
    url: "sports-aquatic-championship",
    id: 204,
    RegisterLink: "",
    metaTitleEvent: "Aquatic Championship 2025 | Swimming Competition Event",
    metaDescriptionEvent:
      "The 2025 Aquatic Championship highlights competitive swimming with intense races, young talent, and a celebration of sports aquatic excellence.",
    conicallinkEvent: "/eventsdetails/204",
    siteLink: "https://tickets.kynhood.com/event/68c0090b1b555f7e0a1f45e6",
    EventsCalendarTitle: "Aquatic Championship 2025",
    EventsCalendarContent:
      "Swimming Competition Event: Freestyle, Backstroke, Breaststroke, Butterfly, Individual Medley.",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "7:30 AM – 4:30 PM",
    EventsCalendarCategory: "Aquatic Sports Championship",
    image: "/images/HomePage-Images/Events/Newevents/339.jpg",
    link: "/events",
    location: "SDAT Aquatic Complex, Velachery",
    language: "",
    hours: "9 hours",
    ageLimit: "5+ years",
    rleigion: "",
    aboutFull: `
    ✨ Championship Highlights:

Swimming Competition Event: Freestyle, Backstroke, Breaststroke, Butterfly, Individual Medley, Freestyle Relay

Categories: Boys & Girls, age groups from U7 to Open

Awards & Recognition:

Customized medals for participants

Certificates of achievement

Individual & overall championship trophies

📌 Why Participate:

Test your speed, skill, and stamina in a professional aquatic setting

Compete with swimmers from various age groups and skill levels

Celebrate your achievements with medals, certificates, and trophies 
    `,
  },
  {
    url: "diwali-workshop-festival-of-lights-celebration",
    id: 205,
    RegisterLink: "",
    metaTitleEvent:
      "Diwali Workshop / Festival of Lights Celebration / Super Chennai",
    metaDescriptionEvent:
      "Celebrate the Festival of Lights with a Diwali workshop full of crafts, diya painting, rangoli, and fun activities for kids to enjoy the festive spirit.",
    conicallinkEvent: "/eventsdetails/205",
    siteLink: "https://tickets.kynhood.com/event/68cd2a84fb750f65b4819022",
    EventsCalendarTitle: "Diwali Workshop For Kids",
    EventsCalendarContent:
      "A 2-day Diwali Workshop / Festival of Lights Celebration filled with fun, creativity, and festive vibes",
    EventsCalendarMonth: "18 – 19 Oct 2025",
    EventsCalendarTime: "10:00 AM – 1:00 PM",
    EventsCalendarCategory: "Workshop",
    image: "/images/HomePage-Images/Events/Newevents/338.jpg",
    link: "/events",
    location:
      "Deep Blue Stories, Muktha, No. 27, Cholamandal Artists Village, Injambakkam, ECR, Chennai",
    language: "",
    hours: "",
    ageLimit: "5+ years",
    rleigion: "",
    aboutFull: `
    ✨ Workshop Highlights:

A 2-day Diwali Workshop / Festival of Lights Celebration filled with fun, creativity, and festive vibes

Kids will explore Diwali-themed crafts, decorations, and traditional art

Learn while enjoying hands-on creative activities that bring out imagination

Festive treats and snacks to keep the little ones energized

Option to join one day or both days for the full festive experience

🏮 Why Join?

A joyful way for kids to celebrate and connect with the festival of lights

Encourages creativity, cultural bonding, and festive excitement

Limited seats — ensure your child’s spot before it’s filled!
    `,
  },
  {
    url: "the-art-affair-clay-mirror-art-craft",
    id: 206,
    RegisterLink: "",
    metaTitleEvent:
      "The Art Affair Clay Workshop / Mirror Art & Craft / Super Chennai",
    metaDescriptionEvent:
      "The Art Affair Clay Workshop invites craft lovers to shape clay into elegant mirror art & craft pieces. Join hands-on learning, creativity, and a take-home keepsake.",
    conicallinkEvent: "/eventsdetails/206",
    siteLink: "https://tickets.kynhood.com/event/68cd2a84fb750f65b4819022",
    EventsCalendarTitle:
      "Clay Mirror Art/ Dot Mandala Workshop - By Sanat Crafts n Canvas",
    EventsCalendarContent:
      "Discover the traditional charm of clay mirror artistry at The Art Affair Clay Workshop.",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "4:00 PM – 6:00 PM",
    EventsCalendarCategory: "Workshop",
    image: "/images/HomePage-Images/Events/Newevents/338.jpg",
    link: "/events",
    location: "Game On Café, T Nagar",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    ✨ Workshop Experience:

Discover the traditional charm of clay mirror artistry at The Art Affair Clay Workshop.🌸
Learn fundamentals of clay modeling and mirror embedding
Get step-by-step instruction to create your own unique piece
Play with textures, motifs, and color blends to enhance your design
Carry home a handmade clay mirror artwork as your keepsake

🖌️ What’s Included:

All materials, tools, paints, clay & mirrors supplied at the venue

No prior skills required – just bring creativity and excitement
    `,
  },
  {
    url: "handwriting-competition-students-contest-2025",
    id: 207,
    RegisterLink: "",
    metaTitleEvent:
      "Handwriting Competition / Students Contest 2025 / Super Chennai",
    metaDescriptionEvent:
      "Join the Handwriting Competition Students Contest 2025, a platform for students to exhibit artistic penmanship and writing talent.",
    conicallinkEvent: "/eventsdetails/207",
    siteLink: "https://tickets.kynhood.com/event/68c7e7b77d5b8041e4a7a9d3",
    EventsCalendarTitle: "State Level Handwriting Competition- 2025",
    EventsCalendarContent:
      "Competition Details – State Level Handwriting Championship 2025",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "4:00 PM – 6:00 PM",
    EventsCalendarCategory: "Handwriting Competition",
    image: "/images/HomePage-Images/Events/Newevents/336.jpg",
    link: "/events",
    location: "ABS Global Smart School, Avadi",
    language: "",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
✍️ Competition Details – State Level Handwriting Championship 2025

Tamil Handwriting:

LKG – UKG (12:30 – 1:00 PM): A to Z letters
I – II Std (12:30 – 1:00 PM): Short Tamil sentences (2–5 words)
III – IV Std (12:30 – 1:00 PM): Short Tamil sentences (2–5 words)
V – VI Std (12:30 – 1:00 PM): Tamil passage writing
VII – VIII Std (12:30 – 1:00 PM): Tamil passage writing
IX – XII Std (12:30 – 1:00 PM): Tamil passage writing

English Handwriting:

LKG – UKG (12:00 – 12:30 PM): A to Z alphabets
I – II Std (12:00 – 12:30 PM): Five-letter English words / simple sentences
III – IV Std (12:00 – 12:30 PM): Five-letter English words / simple sentences
V – VI Std (12:00 – 12:30 PM): English passage writing
VII – VIII Std (12:00 – 12:30 PM): English passage writing
IX – XII Std (12:00 – 12:30 PM): English passage writing

🏆 Awards & Recognition - Students contest 2025 :

Top 5 Winners (per category): Trophy + Certificate
All Participants: Medal + Participation Certificate + Gift Voucher

    `,
  },
  {
    url: "3d-miniature-art-craft-workshop",
    id: 208,
    RegisterLink: "",
    metaTitleEvent: "3D Miniature Art & Craft Workshop / Creative Session ",
    metaDescriptionEvent:
      "Discover the joy of crafting mini wonders at the 3D miniature art & craft workshop—perfect for hobbyists and creative minds alike.",
    conicallinkEvent: "/eventsdetails/208",
    siteLink: "https://tickets.kynhood.com/event/68c7e7b77d5b8041e4a7a9d3",
    EventsCalendarTitle:
      "3D Miniature & Quill Art Workshop - by Aesthete Artistry",
    EventsCalendarContent:
      "Art & Craft Workshop: A creative experience blending tradition and fun",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "10:15 AM",
    EventsCalendarCategory: "Art Workshop",
    image: "/images/HomePage-Images/Events/Newevents/331.jpg",
    link: "/events",
    location: "Game On Café, T. Nagar, Chennai",
    language: "",
    hours: "",
    ageLimit: "8+ years",
    rleigion: "",
    aboutFull: `
    ✨ Workshop Highlights:

Art & Craft Workshop: A creative experience blending tradition and fun  
Getbhanufied presents The Art Affair 2.0
Two-in-One Creativity: Learn to design a 3D miniature fridge magnet & a quilled art frame in one session
Hands-on Learning: Guided steps for beginners, no prior experience required
Complete Kit Provided: All tools, craft materials, and supplies included
Take-Home Creations: Carry back not one but two handcrafted masterpieces
Special Benefits: Early registrations enjoy exclusive discounts
Relax & Enjoy: An engaging session to create, connect, and have fun
    `,
  },
  {
    url: "tapestry-weaving-workshop-craft-creation",
    id: 209,
    RegisterLink: "",
    metaTitleEvent: "Tapestry Weaving Workshop / Ort to Art / Craft Creation ",
    metaDescriptionEvent:
      "Join the Tapestry Weaving Workshop by Ort to Art, a hands-on Craft Creation experience where you design unique handmade pieces with traditional weaving skills.",
    conicallinkEvent: "/eventsdetails/209",
    siteLink: "https://tickets.kynhood.com/event/68c7e7b77d5b8041e4a7a9d3",
    EventsCalendarTitle: "Tapestry Weaving Workshop - By Ort to Art",
    EventsCalendarContent:
      "Step into the fascinating world of hand-weaving and experience craft creation",
    EventsCalendarMonth: "12 Oct 2025",
    EventsCalendarTime: "10:30 AM",
    EventsCalendarCategory: "Art Workshop",
    image: "/images/HomePage-Images/Events/Newevents/332.jpg",
    link: "/events",
    location: "Game On Café, T. Nagar, Chennai",
    language: "",
    hours: "",
    ageLimit: "10+ years",
    rleigion: "",
    aboutFull: `
    ✨ Presented by: Getbhanufied – The Art Affair 2.0

🔹 Workshop Experience:

Step into the fascinating world of hand-weaving and experience craft creation by making an artwork that’s truly personal
Learn the fundamentals of loom setup & usage
Explore texture-making & weaving patterns
Practice color mixing & decorative knotting methods
Guidance on designing your own woven style

🎨 End Outcome:
Walk away with a completed woven wall décor
Gain skills to continue weaving independently at home

🌿 Good to Know:
Perfect for beginners as well as craft lovers
All supplies & tools provided
No prior knowledge needed—just bring your enthusiasm
🎟 Note: Seats are limited—secure your spot early! `,
  },

  //   {
  //   url: "3d-printing-workshop-business-skills-customized-gifts",
  //   id: 210,
  //   RegisterLink: "",
  //   metaTitleEvent: "3D Printing Workshop / Business Skills / Customized Gifts",
  //   metaDescriptionEvent:
  //     "Explore 3D printing like never before! This workshop teaches business skills and the art of crafting customized gifts for today’s creative market.",
  //   conicallinkEvent: "/eventsdetails/210",
  //   siteLink: "https://in.bookmyshow.com/events/3d-printing-business-workshop/ET00426919",
  //   EventsCalendarTitle: "3D Printing Workshop – Business Skills & Customized Gifts",
  //   EventsCalendarContent:
  //     "Explore 3D printing like never before! Learn business skills and the art of crafting customized gifts.",
  //   EventsCalendarMonth: "19 Oct 2025",
  //   EventsCalendarTime: "11:00 AM",
  //   EventsCalendarCategory: "Business Workshop",
  //   image: "/images/HomePage-Images/Events/Newevents/3dprinting.jpg",
  //   link: "/events",
  //   location: "DYNAMIC SS ENTERPRISES, Chennai",
  //   language: "Tamil, English",
  //   hours: "2 Hours",
  //   ageLimit: "All ages",
  //   rleigion: "",
  //   aboutFull: `
  //   🔹 About the Event:
  //   Are you ready to explore the boundless possibilities of 3D printing? Join our hands-on 3D printing workshop to gain practical skills and unlock profitable 3D printing business opportunities.

  //   💡 Why Choose 3D Printing?
  //   - Diverse Applications: 3D printing is transforming industries such as medical, automotive, aerospace, electronics, jewelry, toys, customized gifts, and consumer products.
  //   - Low Startup Cost: Launch your 3D printing business with minimal investment using readily available materials and technology.
  //   - Home-Based Opportunities: Start a home-based 3D printing business and tap into this fast-growing market.

  //   👩‍🏫 Who Can Attend?
  //   - Professionals looking to upskill in 3D printing for career growth
  //   - 3D artists, hobbyists, architects, and students interested in launching a business
  //   - Anyone eager to learn 3D printing and explore entrepreneurial opportunities

  //   🎯 Key Takeaways:
  //   - Hands-on experience in 3D printing techniques
  //   - Understanding materials, design, and production for 3D products
  //   - Insights on how to start and scale a profitable 3D printing business

  //   📅 Event Details:
  //   Date: Sun, 19 Oct 2025
  //   Time: 11:00 AM
  //   Duration: 2 Hours
  //   Languages: Tamil, English
  //   Venue: DYNAMIC SS ENTERPRISES, Chennai

  //   🎟 Note: Limited seats available—book early to secure your spot!
  //   `
  // },
  // {
  //   url: "waffle-workshop-learn-baking-sweet-creations",
  //   id: 211,
  //   RegisterLink: "",
  //   metaTitleEvent: "Waffle Workshop / Learn Baking / Sweet Creations",
  //   metaDescriptionEvent:
  //     "Join the Waffle Workshop to explore the joy of baking and creating sweet creations. Learn recipes, techniques, and toppings to make golden, delicious waffles at home.",
  //   conicallinkEvent: "/eventsdetails/211",
  //   siteLink: "https://in.bookmyshow.com/events/waffle-making-workshop-feb-22/ET00322043",
  //   EventsCalendarTitle: "Waffle Workshop – Learn Baking & Sweet Creations",
  //   EventsCalendarContent:
  //     "Join the Waffle Workshop and learn to make delicious eggless waffles with a variety of flavors and toppings.",
  //   EventsCalendarMonth: "29 Oct 2025",
  //   EventsCalendarTime: "11:00 AM",
  //   EventsCalendarCategory: "Cooking Workshop",
  //   image: "/images/HomePage-Images/Events/Newevents/waffleworkshop.jpg",
  //   link: "/events",
  //   location: "Reema's Swad Cooking Classes, Chennai",
  //   language: "English",
  //   hours: "3 Hours",
  //   ageLimit: "16+ years",
  //   rleigion: "",
  //   aboutFull: `
  //   🍽️ About the Event:
  //   Join Reema's Swad Cooking Classes for a fun and interactive vegetarian & eggless waffle-making workshop!
  //   Learn how to make delicious waffles with a variety of flavors and toppings that are perfect for every sweet tooth.

  //   👩‍🍳 What You Will Learn:
  //   - Classic Honey Waffles
  //   - Oreo Waffles
  //   - Chocolate Overloaded / Nutella Waffles
  //   - Blueberry & Strawberry Cream Cheese Waffles
  //   - Coffee Mousse Waffles
  //   - Ice Cream Waffles
  //   - Bubblegum Waffles – Special extra recipe

  //   🍯 Workshop Highlights:
  //   Discover the secrets to creating perfect eggless waffles that are crispy on the outside, fluffy inside, and visually irresistible!
  //   All ingredients and tools are provided—just bring your enthusiasm for baking.

  //   📅 Event Details:
  //   Date: Wed, 29 Oct 2025
  //   Time: 11:00 AM
  //   Duration: 3 Hours
  //   Language: English
  //   Venue: Reema's Swad Cooking Classes, Chennai
  //   Age Limit: 16+ years

  //   🎟 Note: Limited seats available—register early to reserve your spot!
  //   `
  // },

  // {
  //   url: "sit-down-ashish-standup-comedy-show",
  //   id: 212,
  //   RegisterLink: "",
  //   metaTitleEvent: "Sit Down Ashish ft. Ashish Vidyarthi | Standup Comedy Show",
  //   metaDescriptionEvent:
  //     "Sit Down Ashish is not just standup comedy—it’s a heartfelt blend of life lessons, witty anecdotes, and laughter with Ashish Vidyarthi on stage, making every moment relatable and inspiring.",
  //   conicallinkEvent: "/eventsdetails/212",
  //   siteLink: "https://in.bookmyshow.com/events/sit-down-ashish-ft-ashish-vidyarthi/ET00464671",
  //   EventsCalendarTitle: "Standup Comedy Night with Ashish Vidyarthi",
  //   EventsCalendarContent:
  //     "Join Ashish Vidyarthi’s hilarious stand-up comedy show — a mix of laughter, life stories, and heartwarming humor.",
  //   EventsCalendarMonth: "26 Oct 2025",
  //   EventsCalendarTime: "8:00 PM",
  //   EventsCalendarCategory: "Comedy Show",
  //   image: "/images/HomePage-Images/Events/Newevents/sitdownashish.jpg",
  //   link: "/events",
  //   location: "Trinity Studio, Kodambakkam, Chennai",
  //   language: "Hindi",
  //   hours: "1 hour 30 minutes",
  //   ageLimit: "3+ years",
  //   rleigion: "",
  //   aboutFull: `
  //   🎭 About the Event:
  //   Get ready for an evening of laughter with Ashish Vidyarthi’s Stand-Up Comedy Special – “Sit Down Ashish!”

  //   Join him as he shares a funny and candid take on his life — from his early days in Delhi to his journey through the “city of dreams,” Mumbai.
  //   Over 30 years, Ashish has acted in 300+ films across 11 languages, and now, he brings those experiences to the stage in a hilarious, heartwarming performance.

  //   🤩 What to Expect:
  //   - Witty anecdotes from his acting career
  //   - Relatable stories about life, success, and struggles
  //   - Jokes about his quirks — from his weight to his gait!
  //   - An evening of pure laughter for all ages

  //   💬 Highlight:
  //   In a world where we take life too seriously, Ashish shows us how to embrace the funny side of everything — even our imperfections.
  //   When people say, “Sit Down Ashish,” he turns it into a reason to laugh harder!

  //   📅 Event Details:
  //   Date: Sun, 26 Oct 2025
  //   Time: 8:00 PM
  //   Duration: 1 hour 30 minutes
  //   Age Limit: 3+ years
  //   Language: Hindi
  //   Category: Comedy
  //   Venue: Trinity Studio, Kodambakkam, Chennai

  //   🔑 Keywords:
  //   Ashish Vidyarthi comedy show, Stand-up comedy in Chennai, Celebrity comedy show, Comedy special India, Funny anecdotes, Family-friendly comedy show

  //   🎟 Note: Seats are limited — bring your friends and family for an unforgettable laughter-filled evening!
  //   `
  // },

  {
    url: "halloween-night-music-show-club-gigs",
    id: 213,
    RegisterLink: "",
    metaTitleEvent: "Halloween Night / Music Show / Blues Conscience Club Gig",
    metaDescriptionEvent:
      "Get ready for Halloween Night with Blues Conscience—an electrifying music show and club gig filled with high-energy tunes, spooky vibes, and non-stop fun.",
    conicallinkEvent: "/eventsdetails/213",
    siteLink:
      "https://in.bookmyshow.com/events/halloween-night-ft-blues-conscience/ET00464591",
    EventsCalendarTitle: "Halloween Night Music Show with Blues Conscience",
    EventsCalendarContent:
      "Join Blues Conscience this Halloween for an unforgettable night of blues, rock, and soulful melodies at Hard Rock Cafe.",
    EventsCalendarMonth: "31 Oct 2025",
    EventsCalendarTime: "8:30 PM",
    EventsCalendarCategory: "Music Show",
    image: "/images/HomePage-Images/Events/Newevents/436.jpg",
    link: "/events",
    location: "Hard Rock Cafe, Nungambakkam, Chennai",
    language: "English",
    hours: "2 Hours",
    ageLimit: "21+ years",
    rleigion: "",
    aboutFull: `
  This Halloween, immerse yourself in the soulful sounds of Blues Conscience on a musical journey like no other. With 16+ years of performing together, the band captures the essence of the blues while effortlessly weaving in elements of rock, pop, and country.

Honoring legends such as Buddy Guy, BB King, Eric Clapton, and Stevie Ray Vaughan, their performance moves seamlessly from heartfelt covers to powerful original compositions, telling stories of love, passion, and the raw emotions of life.

Dressed to impress in sharp suits and stylish hats, their stage presence commands attention, complemented by electrifying solos, tight rhythms, and melodies that touch the soul.

Come and experience a night of timeless music, captivating storytelling, and high-energy performance as Blues Conscience makes this Halloween a truly memorable celebration of music and spirit. 
  `,
  },

  {
    url: "abishek-wants-to-enjoy-life-a-comedy-special",
    id: 214,
    RegisterLink: "",
    metaTitleEvent:
      "Abishek Wants to Enjoy Life / Comedy Special / Stand-Up Show",
    metaDescriptionEvent:
      "Join Abishek for his hilarious comedy special — 'Abishek Wants to Enjoy Life' — a fun-filled take on life, love, and everything in between, packed with wit and laughter.",
    conicallinkEvent: "/eventsdetails/214",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/abishek-wants-to-enjoy-life-a-comedy-special",
    EventsCalendarTitle: "Abishek Wants to Enjoy Life – A Comedy Special",
    EventsCalendarContent:
      "Laugh out loud with Abishek in his new comedy special that explores the lighter side of life, relationships, and everyday chaos.",
    EventsCalendarMonth: "25 Oct 2025",
    EventsCalendarTime: "3:00 PM",
    EventsCalendarCategory: "Comedy Show",
    image: "/images/HomePage-Images/Events/Newevents/260.jpg",
    link: "/events",
    location: "The Music Academy, Chennai",
    language: "English, Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "16+ years",
    rleigion: "",
    aboutFull: `
  😂 About the Event:
  Get ready for a laughter riot with Abishek’s stand-up special — "Abishek Wants to Enjoy Life".  
  A show that dives deep into the hilarious struggles of adulting, relationships, and the constant pursuit of happiness.

  🎤 What to Expect:
  - Relatable jokes about everyday life  
  - Witty takes on friendships, work, and modern relationships  
  - Perfect blend of Tamil and English humor  
  - Full-on entertainment from start to finish  

  🌟 About Abishek:
  Known for his charming stage presence and quick wit, Abishek’s comedy is all about finding humor in the ordinary.  
  His storytelling will have you nodding, laughing, and thinking — all at once.

  📅 Event Details:
  Date: Sat, 25 Oct 2025  
  Time: 3:00 PM  
  Duration: 1 hour 30 minutes  
  Age Limit: 16+ years  
  Language: English, Tamil  
  Category: Comedy  
  Venue: The Music Academy, Chennai  

  🎭 Why You Should Attend:
  - A refreshing, feel-good comedy experience  
  - Great for friends, couples, and anyone who needs a laugh break  
  - Perfect weekend afternoon entertainment  

  🎟 Note: Limited seats available — book now and enjoy a laugh-filled Saturday with Abishek!
  `,
  },

  {
    url: "vijay-prakash-live-music-concert-chennai",
    id: 215,
    RegisterLink: "",
    metaTitleEvent:
      "Vijay Prakash Music Concert / Live in Chennai / Super Chennai",
    metaDescriptionEvent:
      "Chennai welcomes the Vijay Prakash Music Concert 2025—enjoy live performances, soulful renditions, and an electrifying musical journey.",
    conicallinkEvent: "/eventsdetails/215",
    siteLink:
      "https://www.district.in/events/vijay-prakash-live-in-chennai-nov22-2025-buy-tickets",
    EventsCalendarTitle: "Vijay Prakash Live in Chennai – Vijayotsavam 2025–26",
    EventsCalendarContent:
      "Experience the magic of Vijay Prakash live in Chennai – a night of iconic Tamil melodies and unforgettable music.",
    EventsCalendarMonth: "22 Nov 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Music Concert",
    image: "/images/HomePage-Images/Events/Newevents/387.jpg",
    link: "/events",
    location: "Express Avenue Mall, Chennai",
    language: "Tamil",
    hours: "—",
    ageLimit: "All ages",
    rleigion: "",
    aboutFull: `
  Get ready for a grand musical extravaganza as Vijayotsavam 2025–26 brings the soulful magic of Vijay Prakash to Chennai.

One of the most celebrated playback singers of our generation, Vijay Prakash is renowned for his mesmerizing voice and electrifying stage presence. With a career spanning decades, he has collaborated with musical legends like A.R. Rahman, Harris Jayaraj, Yuvan Shankar Raja, and Ilaiyaraaja, delivering some of the most memorable tracks in Tamil cinema.

His Tamil hits include chart-toppers like Hosanna (Vinnaithaandi Varuvaayaa), Kadhal Anukkal (Enthiran), Aathichudi (TN 07 AL 4777), Pookkal Pookkum (Madharasapattinam), Manamaganin Sathiyam (Paradesi), and Aararo Aariraro (Raja Rani). From heartfelt love songs to high-energy numbers, his music resonates with audiences, becoming the soundtrack of youthful summers across Tamil Nadu.

Presented by Noizz Entertainment, a leader in crafting unforgettable live experiences, Vijayotsavam promises world-class production, seamless event management, and an unmatched concert atmosphere. Known for drawing crowds of 10,000+ and delivering flawless performances, Noizz ensures every show is a memorable celebration of music.

The Chennai edition of Vijayotsavam 2025–26 promises an evening of iconic Tamil melodies, crowd-favorite anthems, and a powerful live performance by Vijay Prakash. Stay tuned for announcements on other special guest performers joining the legend on stage.

  `,
  },

  {
    url: "dhandho-ft-munawar-faruqui-comedy-show",
    id: 216,
    RegisterLink: "",
    metaTitleEvent:
      "Gen - Z / Munawar Faruqui Live / Stand-Up Comedy Show",
    metaDescriptionEvent:"Get ready for Gen-Z energy and roaring laughter with Munawar Faruqui Live – a stand-up comedy show full of truth, humour, and unstoppable entertainment.",
    conicallinkEvent: "/eventsdetails/216",
    siteLink:
      "https://in.bookmyshow.com/events/dhando-ft-munawar-faruqui/ET00425264",
    EventsCalendarTitle: "Gen-Z Laugh Riot with Munawar Faruqui Live",
    EventsCalendarContent:
      "Experience Munawar Faruqui live in Chennai — a night full of humor, wit, and relatable stories.",
    EventsCalendarMonth: "7 Nov 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Comedy Show",
    image: "/images/HomePage-Images/Events/Newevents/395.jpg",
    link: "/events",
    location: "Rasika Ranjani Sabha, Chennai",
    language: "Hindi",
    hours: "1 hour 30 minutes",
    ageLimit: "16+ years",
    rleigion: "",
    aboutFull:
      "Get ready to experience Munawar Faruqui live in your city! This is your chance to enjoy a night full of laughter, clever jokes, and a performance that promises to keep you entertained from start to finish.\n\nExpect sharp wit, hilarious observations, and engaging storytelling as Munawar delivers comedy like no other. It’s an evening packed with fun, energy, and unforgettable moments you won’t want to miss!",
  },

  {
    url: "the-f16s-live-in-chennai",
    id: 217,
    RegisterLink: "",
    metaTitleEvent:
      "The F16s Live Music Show / Indie Rock Concert / Chennai 2025",
    metaDescriptionEvent:
      "Catch The F16s live at Hard Rock Cafe, Chennai — experience indie rock soundscapes, soulful vocals, and unforgettable music performances.",
    conicallinkEvent: "/eventsdetails/217",
    siteLink: "https://in.bookmyshow.com/events/the-f16s/ET00465161",
    EventsCalendarTitle: "The F16s – Live Indie Rock Concert",
    EventsCalendarContent:
      "Join The F16s live in Chennai for a night of indie rock, melodic guitar riffs, and soulful vocals by Josh Fernandez.",
    EventsCalendarMonth: "15 Nov 2025",
    EventsCalendarTime: "9:00 PM",
    EventsCalendarCategory: "Live Music / Indie Rock",
    image: "/images/HomePage-Images/Events/Newevents/392.jpg",
    link: "/events",
    location: "Hard Rock Cafe, Nungambakkam, Chennai",
    language: "English",
    hours: "2 hours",
    ageLimit: "21+ years",
    rleigion: "",
    aboutFull:
      "The music of The F16s creates vivid soundscapes, featuring melodic guitar riffs, introspective indie rock songs, and the soulful vocals of Josh Fernandez. Their tracks explore modern life, identity, love, and relationships, connecting deeply with fans of Indian independent music, indie rock bands in India, and original indie music.\n\nRepresenting a fresh wave in Indian indie rock, The F16s blend reflective songwriting with contemporary alternative rock. Their commitment to artistic growth and their ability to evoke emotions through music have earned them a loyal following and critical acclaim. For those exploring top indie bands in Chennai or best independent music artists in India, The F16s are a rising force in the global alternative music scene.",
  },

//   {
//     url: "do-you-know-who-i-am-daniel-fernandes",
//     id: 218,
//     RegisterLink: "",
//     metaTitleEvent:
//       "Do You Know Who I Am? / Daniel Fernandes Comedy Show / Chennai 2025",
//     metaDescriptionEvent:
//       "Watch Daniel Fernandes live in Chennai with his comedy special ‘Do You Know Who I Am?’ — a hilarious and heartfelt performance filled with sharp wit and storytelling.",
//     conicallinkEvent: "/eventsdetails/218",
//     siteLink:
//       "https://in.bookmyshow.com/events/do-you-know-who-i-am-by-daniel-fernandes/ET00456561",
//     EventsCalendarTitle: "Do You Know Who I Am? by Daniel Fernandes",
//     EventsCalendarContent:
//       "Catch Daniel Fernandes live in Chennai for his third comedy special — ‘Do You Know Who I Am?’ — a witty, thought-provoking stand-up show full of laughter and insight.",
//     EventsCalendarMonth: "8 Oct 2025",
//     EventsCalendarTime: "6:00 PM",
//     EventsCalendarCategory: "Comedy / Stand-up Show",
//     image: "/images/HomePage-Images/Events/Newevents/389.jpg",
//     link: "/events",
//     location: "Medai – The Stage, Alwarpet, Chennai",
//     language: "English",
//     hours: "1 hour 30 minutes",
//     ageLimit: "16+ years",
//     rleigion: "",
//     aboutFull: `
//   Get ready for an unforgettable evening in Chennai with Daniel Fernandes, one of India’s leading stand-up comedians, as he brings his third comedy special to the city. Do You Know Who I Am? is a unique celebration of life, laughter, and personal stories told in Daniel’s signature style. After a major life event, he transformed his thoughts and hilarious insights into a performance that connects with fans of Indian stand-up comedy, popular comedy shows, and famous Indian comedians.

// This comedy show delivers witty storytelling, sharp observations, and side-splitting humor — offering a fresh and entertaining experience. Don’t miss the chance to see Daniel Fernandes in Chennai and enjoy one of the most talked-about comedy events.

//   `,
//   },

  {
    url: "dhak-dhak-storytelling-special-amandeep-singh",
    id: 219,
    RegisterLink: "",
    metaTitleEvent:
      "Chennai Entertainment / Dhak Dhak / Storytelling Show ",
    metaDescriptionEvent:
      "Dhak Dhak brings a soulful storytelling show to Chennai. Enjoy live entertainment filled with poetry, emotions, and unforgettable narratives.",
    conicallinkEvent: "/eventsdetails/219",
    siteLink:
      "https://in.bookmyshow.com/events/dhak-dhak-a-storytelling-special-chennai/ET00462027",
    EventsCalendarTitle: "Dhak Dhak – A Storytelling Experience in Chennai",
    EventsCalendarContent:
      "Join Amandeep Singh live in Chennai for Dhak Dhak – A Storytelling Special. A heart-touching evening filled with soulful stories, poetry, and emotions of love and self-discovery.",
    EventsCalendarMonth: "30 Nov 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Storytelling / Spoken Word / Live Show",
    image: "/images/HomePage-Images/Events/Newevents/445.jpg",
    link: "/events",
    location: "Tag Auditorium, Chennai",
    language: "English, Hindi",
    hours: "1 hour 35 minutes",
    ageLimit: "12+ years",
    rleigion: "",
    aboutFull:
      "You know your heart is constantly beating, right? ‘Dhak-Dhak… Dhak-Dhak’—even as you read this, it’s beating for you. Normally, the heart never stops, but when a dream suddenly appears, it can make the rhythm falter. Just like in our rush to get through life, we often forget the small, beautiful moments of love hidden within ourselves.\n\nDhak-Dhak is a wild love story that gives you a reason to cherish yourself—a reason to dive in completely, just for you. Come with your friend, your love, and your heart, and experience the magic of Amandeep Singh, India’s OG storyteller, whose storytelling shows the value of every single breath. After multiple sold-out shows in over 30 cities across India, Australia, and the UK, Amandeep Singh is coming to your city to take you on a memorable evening full of stories, poems, and love.",
  },
  {
    url: "aquatic-championship-2025",
    id: 220,
    RegisterLink: "",
    metaTitleEvent:
      "Aquatic Championship 2025 / Swimming Competition / Velachery",
    metaDescriptionEvent:
      "Join Vincera Sports Aquatic Championship 2025 at SDAT Aquatic Complex, Velachery — a full day of competitive swimming events across multiple categories and age groups.",
    conicallinkEvent: "/eventsdetails/220",
    siteLink: "https://tickets.kynhood.com/event/68c0090b1b555f7e0a1f45e6",
    EventsCalendarTitle: "Vincera Sports Aquatic Championship 2025",
    EventsCalendarContent:
      "Dive into an action-packed day of swimming competitions including freestyle, backstroke, breaststroke, butterfly, and medley events.",
    EventsCalendarMonth: "26 Oct 2025",
    EventsCalendarTime: "7:30 AM",
    EventsCalendarCategory: "Sports / Swimming",
    image: "/images/HomePage-Images/Events/Newevents/411.jpg",
    link: "/events",
    location: "SDAT Aquatic Complex, Velachery, Chennai",
    language: "",
    hours: "9 Hrs",
    ageLimit: "5+ years",
    religion: "",
    aboutFull:
      "Vincera Sports Aquatic Championship 2025\n\nDive into an action-packed day filled with speed, technique, and endurance!\n\nChampionship Events:\nFreestyle | Backstroke | Breaststroke | Butterfly | Individual Medley | Freestyle Relay\n\nParticipant Categories:\nBoys & Girls | Age Groups: U7 to Open\n\nAwards & Recognition:\n- Personalized Medals\n- Achievement Certificates\n- Individual Event & Overall Championship Trophies",
  },

  {
    url: "halloween-party-chennai-nightlife-2025",
    id: 221,
    RegisterLink: "",
    metaTitleEvent: "Halloween Party 2025: Chennai’s Ultimate Nightlife Event",
    metaDescriptionEvent:
      "Don’t miss the Halloween Party in Chennai – enjoy a night of music, costumes, spooky fun, and unforgettable nightlife events on October 31, 2025.",
    conicallinkEvent: "/eventsdetails/221",
    siteLink: "https://tickets.kynhood.com/event/68da276af143122f5b3d2732",
    EventsCalendarTitle: "Halloween Party",
    EventsCalendarContent:
      "Get ready for a spine-tingling yet fun-filled Halloween celebration at Muktha, No. 27, Cholamandal Artists Village, Injambakkam!",
    EventsCalendarMonth: "31 Oct 2025",
    EventsCalendarTime: "4:00 PM Onwards",
    EventsCalendarCategory: "Nightlife Events",
    image: "/images/HomePage-Images/Events/Newevents/413.jpg",
    link: "/events",
    location: "Muktha, No. 27, Cholamandal Artists Village, Injambakkam",
    language: "",
    hours: "",
    ageLimit: "5+ years",
    religion: "",
    aboutFull:
      "Get ready for a spine-tingling yet fun-filled Halloween celebration at Muktha, No. 27, Cholamandal Artists Village, Injambakkam! Join us on October 31st and November 1st, from 4 PM to 7 PM for a family-friendly extravaganza packed with festive delights.\n\nEnjoy a classic Trick-or-Treat adventure around the neighbourhood, Halloween-inspired crafts, exciting games and challenges for all ages, and a tasty assortment of spooky treats. This is one of the must-attend Nightlife Events of the season. Dress up in your most imaginative or favourite costume to fully embrace the Halloween spirit.\n\nBring your friends and family for an unforgettable evening of fun, laughter, and eerie excitement. Don’t miss this chance to make memories that are delightfully spooky and magical!",
  },

  {
    url: "chennai-cultural-namma-veetu-kalyanam-kalyana-virunthu",
    id: 222,
    RegisterLink: "",
    metaTitleEvent: "Namma Veetu Kalyanam – A Chennai Cultural Wedding Event",
    metaDescriptionEvent:
      "Celebrate tradition at Namma Veetu Kalyanam, a Chennai cultural wedding event with live music, rituals, and a grand kalyana virunthu feast.",
    conicallinkEvent: "/eventsdetails/222",
    siteLink: "https://tickets.kynhood.com/event/68e8d0f46f52e657e6ba9bea",
    EventsCalendarTitle: "Namma Veetu Kalyanam",
    EventsCalendarContent:
      "Celebrate the spirit of Kalyana Virunthu, Chennai Cultural style, at VGP Universal Kingdom.",
    EventsCalendarMonth: "26 Oct 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Chennai Cultural / Kalyana Virunthu",
    image: "/images/HomePage-Images/Events/Newevents/414.jpg",
    link: "/events",
    location: "VGP Universal Kingdom, Injambakkam",
    language: "",
    hours: "3 Hrs",
    ageLimit: "",
    religion: "",
    aboutFull:
      "At the Kannungala chapter’s fake wedding party, there might not be a bride or groom, but we guarantee the united, full-of-vibes energy when we all come together. Celebrate the spirit of Kalyana Virunthu, Chennai Cultural style!\n\nThis is your house wedding, this is our house wedding! Everyone come join the celebration!",
  },

  {
    url: "storytelling-workshop-t-nagar-transformation-vikram-sridhar",
    id: 223,
    RegisterLink: "",
    metaTitleEvent:
      "Storytelling Workshop: T Nagar Transformation with Vikram Sridhar",
    metaDescriptionEvent:
      "Experience the Storytelling Workshop by Vikram Sridhar — a T Nagar transformation walk blending tales of culture, people, and Chennai’s vibrant heritage.",
    conicallinkEvent: "/eventsdetails/223",
    siteLink: "https://tickets.kynhood.com/event/68ee834ba1e3f9ac7d5988eb",
    EventsCalendarTitle: "A Story Walk through T. Nagar",
    EventsCalendarContent:
      "Embark on a unique Storytelling Workshop — a Story Walk through T Nagar with Vikram Sridhar.",
    EventsCalendarMonth: "26 Oct 2025",
    EventsCalendarTime: "7:00 AM",
    EventsCalendarCategory: "Storytelling Workshop / T Nagar transformation",
    image: "/images/HomePage-Images/Events/Newevents/415.jpg",
    link: "/events",
    location: "Shri Balaajee Bhavan, T Nagar",
    language: "",
    hours: "1 Hr 30 Mins",
    ageLimit: "Open to all ages",
    religion: "",
    aboutFull:
      "Embark on a unique Storytelling Workshop — a Story Walk through T Nagar with Vikram Sridhar, a gifted storyteller who brings the neighborhood to life. Beginning at Balaajee Bhavan, this early morning experience offers a fresh perspective on the area—through tales drawn from its history, culture, and everyday moments.\n\nDiscover hidden gems, forgotten landmarks, and fascinating anecdotes, as each step uncovers the true spirit of T Nagar. Experience the T Nagar transformation firsthand. Ideal for heritage enthusiasts, curious explorers, and anyone looking to connect deeply with Chennai.\n\nOpen to all ages\nLimited spots available | Registration required\n\nJoin us to stroll, listen, and start your day immersed in stories that stay with you.",
  },

  {
    url: "surf-and-slice-coastal-beach-party-ultimate-festival",
    id: 224,
    RegisterLink: "",
    metaTitleEvent: "Join the Surf & Slice Beach Party Festival",
    metaDescriptionEvent:
      "Catch Surf & Slice — a coastal beach party with live music, DJs, delicious food, and vibrant seaside vibes for an unforgettable festival experience by the shore.",
    conicallinkEvent: "/eventsdetails/224",
    siteLink: "https://tickets.kynhood.com/event/68da2a82f143122f5b3d2783",
    EventsCalendarTitle: "Surf & Slice",
    EventsCalendarContent:
      "Surf, Serve, Sunset: A Coastal Beach Party Evening at Karikatukuppam for an unforgettable experience of waves, games, and pure good vibes.",
    EventsCalendarMonth: "26 Oct 2025",
    EventsCalendarTime: "3:00 PM",
    EventsCalendarCategory: "Coastal Beach Party",
    image: "/images/HomePage-Images/Events/Newevents/422.jpg",
    link: "/events",
    location: "Karikatukuppam Beach, Kovalam",
    language: "",
    hours: "4 Hrs",
    ageLimit: "",
    religion: "",
    aboutFull:
      "Surf, Serve, Sunset: A Coastal Beach Party Evening at Karikatukuppam\n\nLooking for a refreshing way to spend your summer evening? Join us on 26th October at Karikatukuppam Beach for an unforgettable experience of waves, games, and pure good vibes at this tranquil, offbeat paradise.\n\nPerfect for both kids and the young at heart, enjoy the thrill of riding your first wave, challenge friends to a fun beach volleyball match, and indulge in freshly baked unlimited pizzas. As the sun sets, the golden hour comes alive with laughter, music, and memories you’ll want to hold onto forever.\n\nThis isn’t just another beach outing — it’s a mini getaway from the everyday. With limited spots, it’s a cozy gathering where strangers become teammates and friends. Whether you’re here for the surf, the slice, or the sunset, an unforgettable evening awaits.",
  },

  {
    url: "chennai-music-festival-live-drumming-rhythm-experience",
    id: 225,
    RegisterLink: "",
    metaTitleEvent:
      "Chennai Music Festival - Live Drumming Event Rhythm Experience",
    metaDescriptionEvent:
      "Feel the pulse of Chennai Music Festival — enjoy live drumming, electrifying percussion, rhythm workshops, and an immersive Rhythm Experience for all music lovers.",
    conicallinkEvent: "/eventsdetails/225",
    siteLink: "https://tickets.kynhood.com/event/68e7511d01f615b5a1ae993f",
    EventsCalendarTitle: "Drums Circle - The Beats of Africa",
    EventsCalendarContent:
      "Prepare yourself for an energetic and immersive African Drum Circle Experience at VGP, part of the Chennai Music Festival.",
    EventsCalendarMonth: "26 Oct 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Chennai Music Festival / Live Drumming Event",
    image: "/images/HomePage-Images/Events/Newevents/424.jpg",
    link: "/events",
    location: "Heritage Beach lawn, VGP Golden Beach Ressort",
    language: "",
    hours: "2 Hrs",
    ageLimit: "",
    religion: "",
    aboutFull:
      "Feel the Beat – African Drum Circle at VGP! Part of the Chennai Music Festival\n\nPrepare yourself for an energetic and immersive evening as the African Drum Circle Experience comes to VGP! This isn’t just a performance — it’s a hands-on celebration of rhythm, unity, and community. Whether you’re an experienced drummer or picking up a drum for the first time, you’ll get to play along, feel the vibrations, and join the circle of music.\n\nWhy Participate?\n\n- Interactive & Fun: Dive into the excitement of live African drumming in a fully engaging session.\n- Mind & Mood Boost: Drumming helps relieve stress, sharpen focus, and elevate your spirits.\n- Everyone Welcome: No experience required — just bring your energy and enthusiasm!\n\nCome as you are, connect with others, and leave inspired, refreshed, and full of rhythm. Join this vibrant journey of music, wellness, and togetherness!",
  },

  {
    url: "dance-party-retro-music-dj-shane-chennai",
    id: 226,
    RegisterLink: "",
    metaTitleEvent: "Dance Party & DJ Events at Flashback Saturdays",
    metaDescriptionEvent:
      "Dance the night away at Flashback Saturdays with DJ Shane — retro music, high-energy DJ events, and the ultimate dance party experience in Chennai.",
    conicallinkEvent: "/eventsdetails/226",
    siteLink: "https://tickets.kynhood.com/event/68e6153101f615b5a1ae8cb0",
    EventsCalendarTitle: "Flashback Saturdays Ft. DJ Shane",
    EventsCalendarContent:
      "Brace yourself for an electrifying Retro Dance Party night at Hard Rock Cafe Chennai with DJ Shane.",
    EventsCalendarMonth: "25 Oct 2025",
    EventsCalendarTime: "8:30 PM",
    EventsCalendarCategory: "Retro Dance Party",
    image: "/images/HomePage-Images/Events/Newevents/428.jpg",
    link: "/events",
    location: "HardRockCafe, Nungambakkam",
    language: "",
    hours: "2 Hrs",
    ageLimit: "21+ years",
    religion: "",
    aboutFull:
      "Flashback Saturdays with DJ Shane\n\nBrace yourself for an electrifying night where every beat hits just right and every track feels brand new! Hard Rock Cafe Chennai presents DJ Shane, delivering a high-energy musical journey filled with iconic hits and non-stop grooves. Experience a Retro Dance Party like no other!\n\nFrom Bollywood mashups to international chart-toppers, DJ Shane will spin a vibrant mix of tracks that’ll keep you on your feet all night. Expect surprise drops, reimagined favorites, and a contagious energy that grows with every beat.",
  },

  {
    url: "acting-workshop-fun-theatre-experience-for-kids",
    id: 227,
    RegisterLink: "",
    metaTitleEvent: "Acting Workshop - Fun Theatre Experience for Kids",
    metaDescriptionEvent:
      "Step into the world of theatre at this Acting Workshop – an immersive kids’ experience filled with games, acting exercises, and creative learning.",
    conicallinkEvent: "/eventsdetails/227",
    siteLink: "https://tickets.kynhood.com/event/68dbefd832d15176f5c9a739",
    EventsCalendarTitle: "Children Theatre - Workshop",
    EventsCalendarContent:
      "A theatre workshop for children focusing on building self-confidence, communication skills, and creative expression through performance.",
    EventsCalendarMonth: "26 Oct 2025",
    EventsCalendarTime: "9:00 AM",
    EventsCalendarCategory: "Acting Workshop",
    image: "/images/HomePage-Images/Events/Newevents/438.jpg",
    link: "/events",
    location: "IDAM - The Art and Cultural Space",
    language: "",
    hours: "4 Hrs",
    ageLimit: "5+ years",
    religion: "",
    aboutFull:
      "Theatre provides a unique platform for children to express themselves freely. It helps them conquer fears, develop patience, foster respect and responsibility, enhance communication skills, and much more. Whether through storytelling, addressing an audience, or embodying a character, theatre opens doors to endless possibilities. This Acting Workshop will guide them through each step of performance.\n\nFacial Expression:\nChildren will explore a wide range of emotions—from happiness and anger to surprise and disgust—and learn how expressions influence others.\n\nBody Movement:\nUsing gestures and movement, they will discover the importance of non-verbal communication in performance and storytelling.\n\nVoice:\nParticipants will practice using their voices effectively, from natural sounds to articulate speech, building confidence and creativity.\n\nStorytelling:\nThrough oral narration, children will develop skills to craft and share engaging stories.\n\nWorkshop Benefits:\n- Enhanced communication and stage presence\n- Boosted self-confidence through collaborative activities\n- Exposure to the excitement and energy of drama\n- Opportunities for creative expression through writing and performance\n- Practical techniques to create and tell compelling stories",
  },

  // NEW NOV EVENTS##############

  {
    url: "madras-driven-drift-night-motor-nights",
    id: 228,
    RegisterLink:
      "https://www.district.in/events/madras-driven-og-motorsports-drift-night-and-car-meet-2-presented-by-team-bad-villain-nov8-2025-buy-tickets",
    metaTitleEvent:
      "Madras Driven, OG Motorsports, & Team Bad Villain - Drift Night 2",
    metaDescriptionEvent:
      "Following the huge success of Drift Night 1, this sequel turns Phoenix Marketcity Chennai into an ultimate motorsport playground with pro drift displays, a premium car showcase, and a live performance by rapper/artist Asal Kolaar.",
    conicallinkEvent: "/eventsdetails/228",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/madras-driven-drift-night-motor-nights",
    EventsCalendarTitle: "Madras Motor Nights / Drift Night 2",
    EventsCalendarContent:
      "Chennai’s most exciting Drift Night with pro drift displays, a premium car showcase, live music, and adrenaline-pumping activities.",
    EventsCalendarMonth: "8 Nov 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Motorsport / Car Meet",
    image: "/images/HomePage-Images/Events/Newevents/403.jpg",
    link: "/events",
    location: "L2 & L3, Palladium Parking, Phoenix Marketcity, Chennai",
    language: "",
    hours: "3 Hrs",
    ageLimit: "",
    religion: "",
    aboutFull:
      "Following the huge success of Drift Night 1, this sequel turns Phoenix Marketcity Chennai into an ultimate motorsport playground. For the first time ever, the event features rapper/artist Asal Kolaar live on stage. The evening blends thrilling drift demonstrations with a showcase of premium cars, offering an engaging experience for both car enthusiasts and casual visitors. Expect an evening filled with tyre smoke, roaring engines, and unforgettable moments.\n\nPremium Car Showcase – Over 100 carefully selected sports cars, supercars, and luxury vehicles will be on display. From timeless classics to the latest engineering marvels, this collection celebrates top-tier automotive craftsmanship.\n\nPro Drift Display – Watch skilled drivers perform precision drifting, demonstrating their mastery over speed, control, and technique. This edition features even more cars and professional drifters than before.\n\nDrift Ride Experience – Experience the thrill up close by riding shotgun with professional drivers. Feel the forces, smell the burning rubber, and see why drifting is considered the art of automotive performance.\n\nBurnout Arena – A special zone where raw power meets asphalt. High-performance vehicles put on controlled burnout displays, creating an electrifying spectacle for the audience.\n\nFun & Activities:\n- Live music and DJ performances by Asal Kolaar, DJ Sne, Tamizh Aadhavan, and more\n- Hands-on racing simulators\n- Drift go-karts, pitstop challenges, and interactive games\n- Stalls from top automotive brands\n- Meet professional drivers and social media influencers\n- Food and beverage counters\n- Dedicated zones for photography and content creation",
  },

  {
    url: "hey-minaleyyy-live-music-show-chennai-nov9-2025",
    id: 230,
    RegisterLink:
      "https://www.district.in/events/hey-kadhaleyy-hey-minaleyyy-nov9-2025-buy-tickets",
    metaTitleEvent:
      "Hey Minaleyyy: Haricharan & Sireesha Bhagavathula Live Music Show",
    metaDescriptionEvent:
      "O2 Events presents 'Hey Minaleyyy,' a grand musical evening in Chennai celebrating 20 years of Haricharan’s journey, featuring Sireesha Bhagavathula and the Drums Kumaran Collective.",
    conicallinkEvent: "/eventsdetails/230",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/hey-minaleyyy-live-music-show-chennai-nov9-2025",
    EventsCalendarTitle: "Hey Minaleyyy - Haricharan Live Concert",
    EventsCalendarContent:
      "A memorable musical evening celebrating 20 years of Haricharan's journey, featuring Sireesha Bhagavathula and the Drums Kumaran Collective, performing iconic romantic hits.",
    EventsCalendarMonth: "9 Nov 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Live Music Show / Romantic Songs",
    image: "/images/HomePage-Images/Events/Newevents/406.jpg",
    link: "/events",
    location: "Music Academy, Chennai",
    language: "Tamil",
    hours: "2.5 Hrs",
    ageLimit: "",
    religion: "",
    aboutFull:
      "O2 Events proudly presents a memorable musical evening in Chennai, celebrating 20 glorious years of Haricharan’s journey — one of the most beloved voices of South Indian cinema.\n\nThe stage will be illuminated by Haricharan’s soulful performances, complemented by the captivating vocals of Sireesha Bhagavathula, renowned for her mesmerizing film and concert renditions. Adding dynamic energy to the night, the Drums Kumaran Collective will dazzle the audience with their electrifying rhythms and fusion beats.\n\nThis grand celebration promises a harmonious mix of melody, rhythm, and nostalgia, taking the audience on a two-decade-long musical journey. Expect an enchanting evening of iconic hits, collaborative performances, and a heartfelt tribute to Haricharan’s extraordinary artistry.",
  },

  {
    url: "kalanjali-2025-vani-mahal-live-music-gigs",
    id: 231,
    RegisterLink:
      "https://www.district.in/events/kalanjali-2025-nov1-2025-buy-tickets",
    metaTitleEvent:
      "Kalanjali 2025: Performing Arts Festival with Santoor Maestro Rahul Sharma",
    metaDescriptionEvent:
      "Heartfulness International School – Omega Branch presents Kalanjali 2025, their annual festival of performing arts, featuring a special performance by renowned Santoor virtuoso, Shri Rahul Sharma.",
    conicallinkEvent: "/eventsdetails/231",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/kalanjali-2025-vani-mahal-live-music-gigs",
    EventsCalendarTitle: "Kalanjali 2025 - Performing Arts Festival",
    EventsCalendarContent:
      "Annual festival of performing arts by Heartfulness International School, featuring a special Santoor performance by renowned maestro Shri Rahul Sharma.",
    EventsCalendarMonth: "1 Nov 2025",
    EventsCalendarTime: "5:30 PM",
    EventsCalendarCategory: "Classical / Performing Arts",
    image: "/images/HomePage-Images/Events/Newevents/407.jpg",
    link: "/events",
    location: "Vani Mahal, Chennai",
    language: "Indian Classical",
    hours: "2.5 Hrs",
    ageLimit: "",
    religion: "",
    aboutFull:
      "The students of Heartfulness International School – Omega Branch proudly present Kalanjali 2025, the annual festival of performing arts that honors heritage, creativity, and timeless excellence.\n\nMore than just a showcase, Kalanjali reflects our commitment to holistic education. Led by students, the festival immerses young minds in the performing arts, encourages leadership, and strengthens their connection to India’s rich cultural traditions.\n\nThis year, Kalanjali will shine brighter than ever with a special performance by the renowned Shri Rahul Sharma, Santoor virtuoso and son of the legendary Padma Vibushan Pandit Shivkumar Sharma, promising an unforgettable evening celebrating the essence of Indian arts and culture.",
  },

  // {
  //   url: "the-f16s-indie-rock-concert",
  //   id: 232,
  //   RegisterLink:
  //     "https://www.district.in/events/the-f16s-nov15-2025-buy-tickets",
  //   metaTitleEvent: "The F16s Live in Chennai - Indie Rock Concert",
  //   metaDescriptionEvent:
  //     "Catch The F16s, torchbearers of Indian indie rock, live at Hard Rock Cafe Chennai. Experience their striking soundscape, rich guitar melodies, and soulful voice of Josh Fernandez.",
  //   conicallinkEvent: "/eventsdetails/232",
  //   siteLink:
  //     "https://www.superchennai.com/events-in-chennai/the-f16s-indie-rock-concert",
  //   EventsCalendarTitle: "The F16s - Indie Rock Concert",
  //   EventsCalendarContent:
  //     "An electrifying live music performance by The F16s, a leading band in the Indian independent music scene, known for their indie-rock energy and heartfelt songwriting.",
  //   EventsCalendarMonth: "15 Nov 2025",
  //   EventsCalendarTime: "9:00 PM",
  //   EventsCalendarCategory: "Indie Rock / Live Music",
  //   image: "/images/HomePage-Images/Events/Newevents/408.jpg",
  //   link: "/events",
  //   location: "Hard Rock Cafe Chennai, Chennai",
  //   language: "English",
  //   hours: "2 Hrs",
  //   ageLimit: "",
  //   religion: "",
  //   aboutFull:
  //     "The music of The F16s weaves a striking soundscape, defined by rich guitar melodies, reflective lyricism, and the soulful voice of Josh Fernandez. Their tracks explore themes of modern life, love, and identity, resonating deeply with a generation in search of genuine musical expression.\n\nAs torchbearers of a new wave in Indian independent music, The F16s blend heartfelt songwriting with contemporary indie-rock energy. Their relentless pursuit of artistic evolution and their gift for stirring emotion through music have earned them a loyal following and critical praise. On the global alternative stage, The F16s continue to rise as a powerful presence.",
  // },

  {
    url: "ashwin-srinivas-english-standup-comedy-chennai-2025",
    id: 233,
    RegisterLink:
      "https://www.district.in/events/ashwin-srinivas-live-english-standup-comedy-show-feb9-2025-buy-tickets",
    metaTitleEvent: "Ashwin Srinivas Live - English Stand-Up Comedy Show",
    metaDescriptionEvent:
      "Get ready for a laughter riot! Ashwin Srinivas is bringing one full hour of English stand-up comedy to Trinity Studio with sharp punchlines and hilarious, relatable stories.",
    conicallinkEvent: "/eventsdetails/233",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/ashwin-srinivas-english-standup-comedy-chennai-2025",
    EventsCalendarTitle: "Ashwin Srinivas Live - Stand-Up Comedy",
    EventsCalendarContent:
      "An hour-long English stand-up comedy show by Ashwin Srinivas, featuring sharp punchlines, relatable stories, and hilarious takes on everyday life.",
    EventsCalendarMonth: "8 Nov 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Stand-Up Comedy",
    image: "/images/HomePage-Images/Events/Newevents/464.jpg",
    link: "/events",
    location: "Trinity Studio, Kodambakkam, Chennai",
    language: "English",
    hours: "1 Hr",
    ageLimit: "",
    religion: "",
    aboutFull:
      "Ashwin Srinivas is bringing one full hour of jokes and laughter to Trinity Studio – the perfect place to enjoy your favorite acts. Get ready for a laughter riot that will leave you grinning ear to ear.\n\nExpect sharp punchlines, relatable stories, and hilarious takes on everyday life. Whether you’re a comedy lover or just looking for a fun night out, this show guarantees non-stop entertainment. Come down, sit back, and let the good vibes roll!",
  },

  {
    url: "nyima-live-music-tour-2025",
    id: 234,
    RegisterLink:
      "https://www.district.in/events/nyima-tour-chennai-nov15-2025-buy-tickets",
    metaTitleEvent:
      "Nyima Tour Chennai - Live Indie Music by Indian Female Artists",
    metaDescriptionEvent:
      "Femme Music presents the 'Nyima Tour' in Chennai, celebrating the release of their debut compilation 'Nyima Vol. I' with live performances by Anjali Manoharan, Tabitha Kagoo, and Sahana Naresh.",
    conicallinkEvent: "/eventsdetails/234",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/nyima-live-music-tour-2025",
    EventsCalendarTitle: "Nyima Tour - Indie Live Music Night",
    EventsCalendarContent:
      "A live music night featuring talented Indian female indie artists Anjali Manoharan, Tabitha Kagoo, and Sahana Naresh, presented by Femme Music to celebrate the 'Nyima Vol. I' compilation.",
    EventsCalendarMonth: "15 Nov 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Indie Music / Live Music",
    image: "/images/HomePage-Images/Events/Newevents/409.jpg",
    link: "/events",
    location: "Vinyl & Brew, Chennai",
    language: "English",
    hours: "3 Hrs",
    ageLimit: "",
    religion: "",
    aboutFull:
      "Femme Music is an independent record label focused on nurturing and promoting Indian female indie artists on both national and international stages. Our vision is to reshape how India’s music scene is perceived by spotlighting English-language, women-led indie music and offering artists a sustainable career path in the industry.\n\nTo celebrate the release of our debut 11-track compilation ‘Nyima Vol. I’ on 28th November, we’re heading out on a 4-city tour featuring the extraordinary talent showcased on the album.\n\nChennai Lineup\n1. Anjali Manoharan – A gifted vocalist and multi-instrumentalist, admired for her improvisational flair, songwriting strength, and compositional ability.\n2. Tabitha Kagoo – A Goa-based singer-songwriter, recognized for her raw yet tender sound and deeply personal songwriting.\n3. Sahana Naresh – Born in Chennai, a multilingual, genre-blending singer-songwriter and trained Hindustani classical vocalist. Her songs touch on themes of shared humanity, social realities, and the courage to live truthfully.",
  },

  //#########################################################
  //############### NOVEMEBER NEW EVENTS ####################
  //#########################################################

  {
    url: "vijay-prakash-live-concert",
    id: 235,
    RegisterLink:
      "https://in.bookmyshow.com/events/vijay-prakash-live-in-chennai/ET00463505",
    metaTitleEvent:
      "Vijay Prakash Concert / Musical Evening / Live in Chennai",
    metaDescriptionEvent:"Enjoy a Vijay Prakash concert, a musical evening in Chennai, featuring soulful hits, electrifying performances, and an unforgettable live experience",
    conicallinkEvent: "/eventsdetails/235",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/vijay-prakash-live-concert",
    EventsCalendarTitle: "Musical Evening with Vijay Prakash",
    EventsCalendarContent:
      "Experience an unforgettable evening of music as Vijay Prakash performs his greatest Tamil, Hindi, Telugu, and Kannada hits live at Express Avenue, Chennai. Presented by Noizz Entertainment, this grand concert promises soulful melodies and electrifying performances.",
    EventsCalendarMonth: "22 Nov 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "Musical Evening / Live in Chennai",
    image: "/images/HomePage-Images/Events/Newevents/387.jpg",
    link: "/events",
    location: "Express Avenue, Pattullos, Chennai",
    language: "Tamil, Hindi, Telugu, Kannada",
    hours: "4 Hours",
    ageLimit: "All age groups",
    religion: "",
    aboutFull:
      "Vijayotsavam 2025–26, a grand musical celebration featuring the legendary Vijay Prakash, is set to dazzle Chennai on 22nd November 2025 at Express Avenue Mall. Renowned for his soulful voice and dynamic stage presence, Vijay Prakash has delivered timeless hits across Tamil cinema, collaborating with icons like A.R. Rahman, Harris Jayaraj, Yuvan Shankar Raja, and Ilaiyaraaja.\n\nHis popular tracks such as Hosanna, Kadhal Anukkal, Aathichudi, Pookkal Pookkum, Manamaganin Sathiyam, and Aararo Aariraro have become synonymous with emotion and energy, resonating deeply with audiences.\n\nPresented by Noizz Entertainment, a leader in delivering world-class live events, this concert promises top-notch production, flawless execution, and an unforgettable atmosphere. With a reputation for organizing spectacular shows that attract massive crowds, Noizz ensures fans get nothing but the best.\n\nThe Chennai edition of Vijayotsavam will be an evening filled with iconic Tamil melodies, beloved summer anthems, and a powerful live performance from Vijay Prakash. Stay tuned for announcements about special guest performers who will be joining him on stage.",
  },


  {
    url: "faiyaaz-hussain-tamil-comedy-live",
    id: 236,
    RegisterLink:
      "https://in.bookmyshow.com/events/survivor-s-suilt/ET00441260",
    metaTitleEvent:
      "Tamil Comedy / Survivor’s Guilt / Faiyaaz Hussain Live",
    metaDescriptionEvent:"Enjoy an evening of Tamil comedy with Faiyaaz Hussain in Survivor’s Guilt, featuring sharp humour, storytelling, and interactive performances.",
    conicallinkEvent: "/eventsdetails/236",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/faiyaaz-hussain-tamil-comedy-live",
    EventsCalendarTitle: "Survivor’s Guilt – Tamil Comedy by Faiyaaz Hussain",
    EventsCalendarContent:
      "Faiyaaz Hussain returns with his latest Tamil comedy special 'Survivor’s Guilt', a raw, funny, and thought-provoking hour filled with sharp humour, storytelling, and crowd interaction. Live at The Music Academy Mini Hall, Chennai.",
    EventsCalendarMonth: "15 Nov 2025",
    EventsCalendarTime: "3:00 PM",
    EventsCalendarCategory: "Tamil Comedy / Stand-up Show",
    image: "/images/HomePage-Images/Events/Newevents/388.jpg",
    link: "/events",
    location: "The Music Academy Mini Hall, Chennai",
    language: "Tamil",
    hours: "1 hour 30 minutes",
    ageLimit: "18+",
    religion: "",
    aboutFull:
      "Faiyaaz Hussain returns to the stage with his brand-new solo hour Survivor’s Guilt, following the roaring success of his debut tour Faiyaaz Hussain Live. This new set dives deep into real-life experiences, offering a tightly written, introspective narrative layered with sharp wit and spontaneous crowd interactions.\n\nSurvivor’s Guilt is for anyone who has ever laughed through pain, felt out of place in a chaotic world, or questioned the absurdity of adulthood. Raw, honest, and hilariously uncomfortable, this show promises an unforgettable ride through the comic lens of one of the most original voices in stand-up today.",
  },

  {
    url: "sutej-singh-irl-live-in-chennai-2025-buy-tickets",
    id: 238,
    RegisterLink:
      "https://in.bookmyshow.com/events/sutej-singh-irl-its-really-live/ET00463876",
    metaTitleEvent:
      "Sutej Singh Concert / Live Music Tour 2025 / Super Chennai",
    metaDescriptionEvent:"Experience the electrifying Sutej Singh concert live on his IRL tour 2025, featuring progressive rock, stunning guitar solos and a night of pure musical brilliance.",
    conicallinkEvent: "/eventsdetails/238",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/sutej-singh-concert-live-music-tour",
    EventsCalendarTitle: "Sutej Singh Concert Live – IRL Music Tour 2025",
    EventsCalendarContent:
      "Experience an epic live performance by Sutej Singh at The Madras Taproom, Chennai, as part of his Restless | Relentless India Tour. Enjoy progressive rock brilliance, soaring guitar solos, and immersive soundscapes at this unforgettable live show.",
    EventsCalendarMonth: "15 Nov 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Live Music Tour 2025 / Concert",
    image: "/images/HomePage-Images/Events/Newevents/390.jpg",
    link: "/events",
    location: "The Madras Taproom, Chennai",
    language: "English",
    hours: "4 Hours",
    ageLimit: "21+",
    religion: "",
    aboutFull:
      "Sutej Singh is all set to make his highly anticipated Chennai debut as part of his multi-city Restless | Relentless India Tour, live at It’s Really Live — the city’s newest and most exciting live event series. Known for curating high-energy experiences featuring cutting-edge talent across music, comedy, and performance, It’s Really Live brings together great vibes, innovative artistry, and unforgettable nights.\n\nA nominal cover charge of ₹500 per person is payable at the venue and is fully redeemable against food and drinks.\n\nWidely regarded as one of India’s finest progressive rock guitarists, Sutej first shot to fame with his debut album The Emerging, which topped the Apple Music India Rock Charts. His track Land of Gold was featured as a Rolling Stone India Editor’s Choice, while his latest record Restless | Relentless is being hailed as one of the boldest prog rock albums to come out of the country.\n\nDrawing influence from guitar legends like John Petrucci and David Gilmour, Sutej’s music is a fusion of technical brilliance and cinematic emotion — marked by soaring solos, immersive soundscapes, and unmatched live energy.\n\nWhether you're a fan of prog, metal, or just great musicianship, this is the gig you've been waiting for. Chennai, the movement is here. The stage is yours.",
  },

  {
    url: "daniel-fernandes-live-english-standup-comedy-laugh-riot",
    id: 239,
    RegisterLink:
      "https://in.bookmyshow.com/events/do-you-know-who-i-am-by-daniel-fernandes/ET00456561",
    metaTitleEvent:
      "Daniel Fernandes Live / English Standup Comedy / Laugh Riot",
    metaDescriptionEvent:"Enjoy a hilarious ride with Daniel Fernandes performing English standup comedy live on stage—sharp humor, bold topics, and non-stop laughter guaranteed!",
    conicallinkEvent: "/eventsdetails/239",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/daniel-fernandes-live-english-standup-comedy-show",
    EventsCalendarTitle: "Daniel Fernandes Live English Standup Comedy Show",
    EventsCalendarContent:
      "Join Daniel Fernandes live in Chennai for his English stand-up special 'Do You Know Who I Am?' – an introspective yet hilarious show that blends sharp humour, real-life reflections, and witty storytelling.",
    EventsCalendarMonth: "8 Nov 2025",
    EventsCalendarTime: "6:00 PM",
    EventsCalendarCategory: "English Standup Comedy / Live Show",
    image: "/images/HomePage-Images/Events/Newevents/389.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet, Chennai",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "16+",
    religion: "",
    aboutFull:
      "Daniel Fernandes is back on tour with his third comedy special, Do You Know Who I Am?, a unique and personal take on life told in his signature style. Sparked by a major personal event, Daniel found himself navigating a world that suddenly felt unfamiliar. While most would turn to therapy, he chose the stage instead — because that’s how you game the system!\n\nThis show dives into deeper waters, blending introspection with sharp humour, and offers a comedy experience that’s as unexpected as it is entertaining. Get ready for a fun night out that might just be a little different from what you imagined.",
  },

  {
    url: "ashwyn-singh-standup-comedy-live",
    id: 241,
    RegisterLink:
      "https://in.bookmyshow.com/events/ashwyn-singh-wrong-singh-to-say-tour-goa/ET00453922",
    metaTitleEvent: "Wrong Singh to Say Tour | Standup Comedy Special | Super chennai",
    metaDescriptionEvent:
      "Laugh your heart out with Ashwyn Singh live on stage in the Wrong Singh to Say standup comedy Special. An evening of sharp humor and relatable comedy awaits.",
    conicallinkEvent: "/eventsdetails/241",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/ashwyn-singh-standup-comedy-live",
    EventsCalendarTitle: "Wrong Singh to Say Tour – Comedy Night 2025",
    EventsCalendarContent:
      "Ashwyn Singh brings his brand-new comedy hour to Chennai, diving headfirst into the chaos, contradictions, and conversations of our times.",
    EventsCalendarMonth: "28 Nov 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Standup Comedy Special / English",
    image: "/images/HomePage-Images/Events/Newevents/391.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "16+",
    religion: "",
    aboutFull:
      "Ashwyn Singh is back with his brand-new comedy hour, 'Wrong Singh to Say' Tour, diving headfirst into the chaos, contradictions, and conversations of our times.\n\nIn a world where saying the wrong thing can sometimes feel like the only honest thing to say, Ashwyn explores what happens when comedians are forced to navigate shifting norms, collective outrage, and the ever-blurring lines of free speech. \n\nWith sharp insight and plenty of laughs, he unpacks what makes us angry, questions the nature of moral outrage, and asks what healthy disagreement really looks like in a democracy. And of course, there’s music—because there’s always music. This is Ashwyn’s take on the world and what it means to be human in 2025: thoughtful, funny, and refreshingly real.",
  },

  {
    url: "gaurav-kapoor-live-comedy-show-2025",
    id: 244,
    RegisterLink:
      "https://in.bookmyshow.com/events/gaurav-kapoor-live-bengaluru/ET00331714",
    metaTitleEvent: "Gaurav Kapoor Comedy Show / Live Stand-Up Experience 2025",
    metaDescriptionEvent:
      "Enjoy a hilarious Gaurav Kapoor comedy show live in Chennai. Relatable humor, sharp wit, and non-stop laughs await you at this live stand-up experience.",
    conicallinkEvent: "/eventsdetails/244",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/gaurav-kapoor-live-comedy-show-2025",
    EventsCalendarTitle: "Gaurav Kapoor Live – Comedy Show 2025",
    EventsCalendarContent:
      "Come experience the hilarious and highly relatable comedy of Gaurav Kapoor in his live show, recognized as one of the funniest and most prolific stand-up comedians in the country.",
    EventsCalendarMonth: "21 Nov 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Gaurav Kapoor Comedy Show / Hindi",
    image: "/images/HomePage-Images/Events/Newevents/393.jpg",
    link: "/events",
    location: "Rasika Ranjani Sabha: Chennai",
    language: "Hindi",
    hours: "1 Hour",
    ageLimit: "18+",
    religion: "",
    aboutFull:
      "Come experience the hilarious and highly relatable comedy of Gaurav Kapoor in his live show. Recognized as one of the funniest and most prolific stand-up comedians in the country, Gaurav has built a massive following through his popular Vlogs, boasting over 1 million subscribers on YouTube and 300K followers on Instagram.\n\nHis Amazon Prime special, rated 8.2 on IMDb, has only added to his growing fame. Known for his energetic live performances and brutally honest storytelling, Gaurav is quickly becoming a household name. Though his journalism degree and days working in retail feel like distant memories, he jokes that he still remembers all the keyboard shortcuts—just in case.",
  },

  {
    url: "green-kidathon-2025-kids-marathon",
    id: 245,
    RegisterLink:
      "https://in.bookmyshow.com/events/green-kidathon-stadium-run-oct-2025/ET00459666",
    metaTitleEvent: "Green Kidathon 2025 / Kids Marathon Challenge / Super Chennai",
    metaDescriptionEvent:"Young athletes take center stage at Green Kidathon 2025, a kids marathon celebrating fun, fitness, teamwork, and healthy competition for all participants.",
    conicallinkEvent: "/eventsdetails/245",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/green-kidathon-2025-kids-marathon",
    EventsCalendarTitle: "Fun & Fitness at Green Kidathon 2025",
    EventsCalendarContent:
      "Kalam Event Management presents the Green Kidathon Stadium Run this November 2025 at Jawaharlal Nehru Stadium, featuring multiple categories and distances for children.",
    EventsCalendarMonth: "2 Nov 2025",
    EventsCalendarTime: "5:55 AM",
    EventsCalendarCategory: "Kids Marathon Challenge / Fitness",
    image: "/images/HomePage-Images/Events/Newevents/394.jpg",
    link: "/events",
    location: "Jawaharlal Nehru Stadium Chennai",
    language: "English, Tamil",
    hours: "2 hours 30 minutes",
    ageLimit: "3+",
    religion: "",
    aboutFull:
      "Kalam Event Management presents the Green Kidathon Stadium Run this November 2025 at Jawaharlal Nehru Stadium Ground B, Chennai, with Decathlon as the sports partner and BookNGo.live as the sponsor. The event date has been rescheduled from 2nd October due to the CM Trophy.\n\nRace Details:\nThe event features multiple categories and distances:\n* 75 meters: LKG/UKG\n* 100 meters: 1st to 4th Standards\n* 400m and 800m: 5th to 8th Standards\n* 1 km: 9th and 10th Standards\n* 2 km: Open category and walkathon\n\nSchedule:\n* Event Start Time: 6:00 AM to 7:15 AM\n* BIB Collection: Decathlon Pondy Bazaar on 1st November from 12:00 PM to 7:00 PM.\n\nAwards & Takeaways:\n* The top five winners in each category will receive trophies.\n* All participants will be awarded certificates, medals, T-shirts, water bottles, BIBs, and refreshments.\n\nImportant Note:\nParticipants are advised to arrive 30 minutes before their event for registration and must carry their school ID and proof of booking.",
  },

  // {
  //   url: "travis-scott-circus-maximus-stadium-tour-india-mumbai",
  //   id: 246,
  //   RegisterLink:
  //     "https://in.bookmyshow.com/events/travis-scott-circus-maximus-stadium-tour-india/ET00450624",
  //   metaTitleEvent: "Travis Scott Live in Mumbai: CIRCUS MAXIMUS India Tour",
  //   metaDescriptionEvent:
  //     "Travis Scott, the chart-topping, GRAMMY-nominated cultural powerhouse, is set for his historic debut in India with the CIRCUS MAXIMUS tour at Mahalaxmi Racecourse, Mumbai.",
  //   conicallinkEvent: "/eventsdetails/246",
  //   siteLink:
  //     "https://www.superchennai.com/events-in-chennai/travis-scott-circus-maximus-stadium-tour-india",
  //   EventsCalendarTitle: "Travis Scott: CIRCUS MAXIMUS Tour India",
  //   EventsCalendarContent:
  //     "Visionary artist Travis Scott makes his long-awaited debut in India with a live concert known for its explosive performance, mosh-pit energy, and cutting-edge stage production.",
  //   EventsCalendarMonth: "TBD 2025",
  //   EventsCalendarTime: "TBD",
  //   EventsCalendarCategory: "Live Concert / Hip-Hop / Music Festival",
  //   image: "/images/HomePage-Images/Events/Newevents/travisscott2025.jpg",
  //   link: "/events",
  //   location: "Mahalaxmi Racecourse, Mumbai",
  //   language: "English",
  //   hours: "3 hours",
  //   ageLimit: "18+",
  //   religion: "",
  //   aboutFull:
  //     "Travis Scott — visionary artist, chart-topping hitmaker, and cultural powerhouse — is set to make his long-awaited debut in India with a live concert at Mumbai’s iconic Mahalaxmi Racecourse.\n\nKnown for his explosive performances, mosh-pit energy, and cutting-edge stage production, Travis brings an experience that transcends a typical live show. This will be a landmark moment for Indian hip-hop fans.\n\nThe diamond-certified, GRAMMY-nominated rapper has delivered some of the most influential albums of our time, including 'UTOPIA', the biggest-selling hip-hop release of 2023. With a global reputation for selling out stadiums and redefining live music, this historic performance promises to be one of the most anticipated concerts India has ever seen.",
  // },

  {
    url: "munawar-faruqui-live-genz-comedy-show",
    id: 247,
    RegisterLink:
      "https://in.bookmyshow.com/events/dhando-ft-munawar-faruqui/ET00425264",
    metaTitleEvent: "Gen-Z Laugh Riot with Munawar Faruqui Live",
    metaDescriptionEvent:
      "Get ready for Gen-Z energy and roaring laughter with Munawar Faruqui Live – a stand-up comedy show full of truth, humour, and unstoppable entertainment.",
    conicallinkEvent: "/eventsdetails/247",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/munawar-faruqui-live-genz-comedy-show",
    EventsCalendarTitle: "DHANDO ft. Munawar Faruqui",
    EventsCalendarContent:
      "Get ready for an unforgettable evening as Munawar Faruqui brings his razor-sharp wit and signature storytelling to your city.",
    EventsCalendarMonth: "7 Nov 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "Stand-Up Comedy Show / Hindi / Gen - Z",
    image: "/images/HomePage-Images/Events/Newevents/395.jpg",
    link: "/events",
    location: "Rasika Ranjani Sabha: Chennai",
    language: "Hindi",
    hours: "1 hour 30 minutes",
    ageLimit: "16+",
    religion: "",
    aboutFull:
      "Get ready for an unforgettable evening as Munawar Faruqui brings his razor-sharp wit and signature storytelling to your city. Known for his clever humour and thought-provoking content, Munawar’s live performance promises laughter, insight, and a whole lot of entertainment. \n\nDon’t miss the chance to catch one of the most exciting voices in comedy live on stage! The show is titled 'DHANDO'.",
  },
  {
    url: "praveen-kumar-8-standup-comedy",
    id: 248,
    RegisterLink:
      "https://in.bookmyshow.com/events/8-by-praveen-kumar/ET00408394",
    metaTitleEvent: "Stand-Up Comedy / Live Show / 8 Stories by Praveen Kumar ",
    metaDescriptionEvent:
      'Stand-up comedy live with Praveen Kumar in "8 Stories" – 8 hilarious chapters filled with humor, life tales, and Rajinikanth-inspired fun.',
    conicallinkEvent: "/eventsdetails/248",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/praveen-kumar-8-standup-comedy",
    EventsCalendarTitle: "Praveen Kumar Live – 8 Chapters of Laughter",
    EventsCalendarContent:
      "Step into the world of '8' — Praveen Kumar’s eighth stand-up special, inspired by Superstar Rajinikanth’s Baasha, featuring 8 hilarious stories from his own life.",
    EventsCalendarMonth: "15 Nov 2025",
    EventsCalendarTime: "4:00 PM",
    EventsCalendarCategory: "Stand-Up Comedy / Tamil / Live Show",
    image: "/images/HomePage-Images/Events/Newevents/396.jpg",
    link: "/events",
    location: "Medai - The Stage, Alwarpet: Chennai",
    language: "Tamil",
    hours: "1 hour 40 minutes",
    ageLimit: "5+",
    religion: "",
    aboutFull:
      "Step into the world of '8' — Praveen Kumar’s eighth stand-up special, inspired by his all-time favourite, Superstar Rajinikanth. Just as Rajinikanth divided life into eight chapters in *Baasha*, Praveen brings you eight hilarious stories from eight unique stages of his own life, filled with humour, nostalgia, and relatable moments.\n\nOne of India’s top stand-up comedians, Praveen has garnered over 15 million views on YouTube and was also seen as a judge on Amazon Prime Video’s hit comedy series *Comicstaan*. \n\nThis is a clean, family-friendly show open to audiences aged 5 and above—perfect for a fun night out with the whole gang.",
  },

  {
    url: "sounds-of-india-vir-das-live-comedy-show",
    id: 250,
    RegisterLink:
      "https://in.bookmyshow.com/events/vir-das-sounds-of-india/ET00462287",
    metaTitleEvent: "Sounds of India / Vir Das Live / Comedy Show 2025",
    metaDescriptionEvent:
      "Vir Das brings 'Sounds of India' to life – a live comedy show that explores India's rich cultural tapestry through humor. Secure your seats now!",
    conicallinkEvent: "/eventsdetails/250",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/sounds-of-india-vir-das-live-comedy-show",
    EventsCalendarTitle: "Sounds of India – Live Comedy Show by Vir Das",
    EventsCalendarContent:
      "Experience a one-of-a-kind comedy event as International Emmy-winning comedian Vir Das presents a uniquely immersive audio-visual stand-up show.",
    EventsCalendarMonth: "29 Nov 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Comedy Show / English / Live Show",
    image: "/images/HomePage-Images/Events/Newevents/397.jpg",
    link: "/events",
    location: "Sir Mutha Venkatasubba Rao Concert Hall: Chennai",
    language: "English",
    hours: "2 hours 30 minutes",
    ageLimit: "16+",
    religion: "",
    aboutFull:
      "Experience a one-of-a-kind comedy event as International Emmy-winning comedian Vir Das presents a uniquely immersive audio-visual stand-up show titled 'Sounds of India'.\n\nBlending humour with the everyday sounds of India, this special performance takes audiences on a nostalgic journey through the vibrant rhythms and subtle nuances that define life across the country. \n\nWith his signature wit and sharp observations, Vir Das transforms familiar sounds into a celebration of culture, identity, and the shared experiences that connect us all. Get ready to laugh, listen, and reconnect with your roots like never before.",
  },

  {
    url: "paradox-kalai-magic-show",
    id: 251,
    RegisterLink:
      "https://in.bookmyshow.com/events/paradox-by-magician-kalai/ET00439561",
    metaTitleEvent: "Paradox by Kalai / Magic Show / Storytelling Live",
    metaDescriptionEvent:
      "Witness Kalai’s Paradox live, a unique fusion of illusion and storytelling that takes you on an emotional and magical journey filled with surprises and enchantment.",
    conicallinkEvent: "/eventsdetails/251",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/paradox-kalai-magic-show",
    EventsCalendarTitle: "Paradox by Kalai – Live Magic Show with Storytelling",
    EventsCalendarContent:
      "The Paradox is a thrilling, hilarious, and mind-bending experience that fuses magic, mentalism, comedy, storytelling, and a touch of philosophy by internationally acclaimed illusionist Kalai.",
    EventsCalendarMonth: "8 Nov 2025",
    EventsCalendarTime: "6:17 PM",
    EventsCalendarCategory: "Magic Show / Storytelling Live / Comedy",
    image: "/images/HomePage-Images/Events/Newevents/398.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "12+",
    religion: "",
    aboutFull:
      "The Paradox is not your average magic show—it’s a thrilling, hilarious, and mind-bending experience that fuses magic, mentalism, comedy, storytelling, and a touch of philosophy. \n\nCreated and performed by internationally acclaimed illusionist Kalai, this one-of-a-kind show challenges your perception of reality while keeping you entertained from start to finish. As Kalai weaves impossible feats with sharp humour and audience interaction, you'll find yourself questioning what’s real and what’s illusion.\n\nWith each twist, *The Paradox* pulls you deeper into a world where the unbelievable becomes real—sometimes just inches from your eyes. Be warned: you might just become part of the act in a moment you never saw coming.\n\nHaving performed over 3,000 shows in 28 countries and amazed celebrities like Dhoni, Dulquer Salmaan, Nayanthara, and Grandmaster Anand, Kalai brings his global magic legacy back to India after an eight-year run as a headline act with Carnival Cruise Lines in the U.S. *The Paradox* is more than a show—it’s an unforgettable journey filled with laughter, awe, and mysteries that linger long after the final curtain.",
  },

  {
    url: "pencil-power-drawing-competition-online-winter-edition-2025",
    id: 253,
    RegisterLink:
      "https://in.bookmyshow.com/events/pencil-power-drawing-competition-ppdc-online/ET00435141",
    metaTitleEvent:
      "Pencil Power Drawing Competition (PPDC) – Online Winter Edition 2025",
    metaDescriptionEvent:
      "Pencil Power Drawing Competition (PPDC) is back online! Showcase your art, win cash prizes, medals, and national recognition from the comfort of your home. Register now!",
    conicallinkEvent: "/eventsdetails/253",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/pencil-power-drawing-competition-online-winter-edition-2025",
    EventsCalendarTitle: "Pencil Power Drawing Competition (PPDC) - Online",
    EventsCalendarContent:
      "The Pencil Power Drawing Competition (PPDC) – 2025 is back with its online Winter Edition, offering aspiring artists a chance to showcase their talent and win exciting prizes.",
    EventsCalendarMonth: "20 Nov 2025",
    EventsCalendarTime: "Online Anytime",
    EventsCalendarCategory: "Drawing Competition / Online Event / Art",
    image: "/images/HomePage-Images/Events/Newevents/399.jpg",
    link: "/events",
    location: "Online (Across India)",
    language: "English, Hindi",
    hours: "Online Submissions",
    ageLimit: "Open to all ages",
    religion: "",
    aboutFull:
      'The Pencil Power Drawing Competition (PPDC) – 2025 is back with its online Winter Edition, offering aspiring artists a chance to showcase their talent, win medals, earn national recognition, and compete for exciting cash prizes — all from the comfort of home.\n\n Competition Details:\n Open to participants across India.\n  Allows submission of up to three artworks per application, anytime online.\n Last date to register is 20th November 2025.\n\n Process: \nOnce registered and the fee is paid, participants will receive a joining link via email or mobile within 2–3 working days. The competition will be conducted through the official platform shared by the organizers. For more information and to participate, simply search "Pencil Power Drawing Competition" on BookMyShow or Google.',
  },

  {
    url: "cinderella-pop-musical-modern-fairy-tale-live-show",
    id: 255,
    RegisterLink: "https://in.bookmyshow.com/events/cinderella/ET00465663",
    metaTitleEvent: "Cinderella / A Pop Musical / Modern Fairy Tale Live Show",
    metaDescriptionEvent:
      "Cinderella a Pop Musical Modern Fairy Tale Live Show featuring vibrant performances, live music, and magical family-friendly entertainment.",
    conicallinkEvent: "/eventsdetails/255",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/cinderella-pop-musical-modern-fairy-tale-live-show",
    EventsCalendarTitle: "Cinderella a Pop Musical Modern Fairy Tale Live Show",
    EventsCalendarContent:
      "Experience Cinderella: A Pop Fairy Tale, a contemporary reimagining of the beloved classic by the Madras Musical Association (MMA), blending timeless storytelling with modern pop music.",
    EventsCalendarMonth: "31 Oct 2025",
    EventsCalendarTime: "7:00 PM",
    EventsCalendarCategory: "A Pop Musical / Contemporary / Live Show",
    image: "/images/HomePage-Images/Events/Newevents/401.jpg",
    link: "/events",
    location: "Museum Theatre: Chennai",
    language: "English",
    hours: "1 hour 30 minutes",
    ageLimit: "3+",
    religion: "",
    aboutFull:
      "Experience Cinderella: A Pop Fairy Tale, a contemporary reimagining of the beloved classic presented by the Madras Musical Association (MMA). This vibrant musical blends timeless storytelling with modern pop music and dynamic choreography, creating a fresh and engaging experience for audiences of all ages.\n\nDirected by Deepa Nambiar and musically overseen by Augustine Paul, the show features the acclaimed MMA Choir performing alongside a live band, delivering powerful vocals and stunning visuals. \n\nDesigned to captivate families, theatre lovers, and music enthusiasts alike, this production offers an immersive journey that beautifully fuses classic narrative with the energy and flair of today’s musical expression.\n\nEvent Dates: Fri 31 Oct 2025 - Sat 1 Nov 2025",
  },

  {
    url: "kavyam-dance-show-with-live-concert-in-chennai",
    id: 256,
    RegisterLink: "https://in.bookmyshow.com/events/kavyam/ET00466767",
    metaTitleEvent: "Kavyam Live Concert Chennai / Dance Show / Super Chennai",
    metaDescriptionEvent:
      "Kāvyam is a unique dance show and live concert in Chennai where movement meets music, stillness meets sound, tradition meets performance.",
    conicallinkEvent: "/eventsdetails/256",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/kavyam-dance-show-with-live-concert-in-chennai",
    EventsCalendarTitle: "Kāvyam Dance Show with Live Concert in Chennai",
    EventsCalendarContent:
      "Timeless compositions by legendary masters find new life through the expressive language of Bharatanatyam in the *Kāvyam* performance, conceived and choreographed by Shijith Nambiar.",
    EventsCalendarMonth: "1 Nov 2025",
    EventsCalendarTime: "6:30 PM",
    EventsCalendarCategory: "Dance Show / Classical / Live Concert Chennai",
    image: "/images/HomePage-Images/Events/Newevents/439.jpg",
    link: "/events",
    location: "Bharatiya Vidya Bhavan, Mylapore: Chennai",
    language: "Classical",
    hours: "2 Hours",
    ageLimit: "5+",
    religion: "",
    aboutFull:
      "Kāvyam is poetry set in motion — a journey that begins within, expanding into silence while painting a spectrum of emotions and experiences. The performance features timeless compositions by legendary masters brought to life through the expressive language of Bharatanatyam.\n\nThe production is conceptualized and choreographed by Shijith Nambiar and performed by Parvathy Menon and ensemble.\n\nIt delves into the harmonious blend of sound and stillness, movement and meaning, tradition and transcendence, offering a unique dance show and live concert experience.",
  },

  {
    url: "akshay-srivastava-live-standup-comedy-show-chennai",
    id: 257,
    RegisterLink:
      "https://in.bookmyshow.com/events/akshay-srivastava-live-standup-comedy/ET00430844",
    metaTitleEvent: "Akshay Srivastava Live / A Stand-Up Comedy Show / Super Chennai",
    metaDescriptionEvent:"Akshay Srivastava Live brings witty storytelling, fresh jokes, and relatable humour in Hindi and English for a laughter-filled stand-up comedy evening.",
    conicallinkEvent: "/eventsdetails/257",
    siteLink:
      "https://www.superchennai.com/events-in-chennai/akshay-srivastava-live-standup-comedy-show-chennai",
    EventsCalendarTitle: "akshay-srivastava-live-stand-up-comedy-show",
    EventsCalendarContent:
      "After the release of his 64-minute YouTube special 'Quiggy The Delivery App', Akshay Srivastava returns with an all-new stand-up comedy show!",
    EventsCalendarMonth: "1 Nov 2025",
    EventsCalendarTime: "8:00 PM",
    EventsCalendarCategory: "Standup Comedy / Hindi, English",
    image: "/images/HomePage-Images/Events/Newevents/440.jpg",
    link: "/events",
    location: "Trinity Studio: Kodambakkam",
    language: "Hindi, English",
    hours: "1 hour 30 minutes",
    ageLimit: "16+",
    religion: "",
    aboutFull:
      "Akshay Srivastava - Live\n\nAfter the release of his 64-minute YouTube special *Quiggy The Delivery App*, Akshay Srivastava returns with an all-new stand-up comedy show!\n\nWhether you’re feeling low, heartbroken, stressed, or simply love a clever punchline — this show is made for you. Expect sharp wit, high-energy humor, and plenty of laughs (just don’t bring the negativity along!).\n\nCome for the comedy, stay for the madness.\nGrab your tickets now and watch Akshay live on stage!",
  },

 

 
// {
//   url: "djembe-drums-live-circle-interactive-show",
//   id: 260,
//   RegisterLink:
//     "https://in.bookmyshow.com/events/the-drum-circle-experience-djembe-drums/ET00453218",
//   metaTitleEvent:
//     "Djembe Drums | Live Circle Interactive Show | Super Chennai",
//   metaDescriptionEvent:"Feel the pulse of live music with Djembe Drums in an interactive circle experience designed for all ages and skill levels. No prior experience needed.",
//   conicallinkEvent: "/eventsdetails/260",
//   siteLink:
//     "https://www.superchennai.com/events-in-chennai/djembe-drums-live-circle-interactive-show",
//   EventsCalendarTitle: "The Drum Circle Experience - Djembe Drums",
//   EventsCalendarContent:
//     "Join this high-energy Djembe drumming session to learn the art of African drumming. All ages welcome to connect, create, and celebrate through rhythm. Drums provided.",
//   EventsCalendarMonth: "1 Nov 2025",
//   EventsCalendarTime: "6:00 PM",
//   EventsCalendarCategory: "Instrumental / Fusion / Live Session",
//   image: "/images/HomePage-Images/Events/Newevents/441.jpg",
//   link: "/events",
//   location: "Trinity Studio: Kodambakkam",
//   language: "English",
//   hours: "1 Hour",
//   ageLimit: "All age groups",
//   religion: "",
//   aboutFull:
//     "The Drum Circle Experience - Djembe Drums\n\nBy popular demand, we’re returning to your city!\nFeel the rhythm! Feel your pulse! Join us for an exciting Drum Circle experience right in your city. All drums will be available at the venue.\n\nFor the first time, you can fully immerse yourself in the jamming session and the entire experience. Whether you’re an experienced drummer or have never played a drum before, this one-hour session welcomes everyone of all ages who wants to connect, create, and celebrate through rhythm.\n\nCome and learn the art of African drumming in this high-energy djembe session. Let the beats unite us. Let’s drum, dance, and vibe together!\n\nNote: Please remove all accessories (rings or other wearables) from your fingers to avoid injury during the session. Djembe Drums Live Circle Interactive Show is a live music experience where movement meets music, stillness meets sound, tradition meets performance."
// },

{
  url: "gopi-funchurian-tamil-stand-up-comedy-badava-gopi",
  id: 261,
  RegisterLink:
    "https://in.bookmyshow.com/events/gopi-funchurian-by-badava-gopi/ET00389499",
  metaTitleEvent:
    "Badava Gopi / Tamil Stand-Up Comedy / Mimicry Show",
  metaDescriptionEvent:"Badava Gopi brings Gopi Funchurian live—a Tamil stand-up comedy show packed with satire, mimicry and laughter that keeps you entertained from start to finish.",
  conicallinkEvent: "/eventsdetails/261",
  siteLink:
    "https://www.superchennai.com/events-in-chennai/gopi-funchurian-tamil-stand-up-comedy-badava-gopi",
  EventsCalendarTitle: "Gopi Funchurian Tamil Stand-Up Comedy by Badava Gopi",
  EventsCalendarContent:
    "A rib-tickling Tamil stand-up extravaganza featuring Badava Gopi's spectacular mimicry and hilarious, WOW-certified jokes. Don't miss this fun-packed show!",
  EventsCalendarMonth: "2 Nov 2025",
  EventsCalendarTime: "3:30 PM",
  EventsCalendarCategory: "Comedy / Stand-Up / Mimicry",
  image: "/images/HomePage-Images/Events/Newevents/442.jpg",
  link: "/events",
  location: "Medai - The Stage, Alwarpet: Chennai",
  language: "Tamil",
  hours: "1 hour 30 minutes",
  ageLimit: "12yrs +",
  religion: "",
  aboutFull:
    "Gopi Funchurian By Badava Gopi\n\nCome witness Badavagopi’s spectacular mimicry performance LIVE and be mesmerized by the sounds and effects filling the hall. Enjoy hilarious jokes and impressions that were WOW-certified by former President APJ Gopi Funchurian. This rib-tickling extravaganza, packed with fun and entertainment, is a must-see you definitely shouldn’t miss!\n\nBadava Gopi brings Gopi Funchurian live—a Tamil stand-up comedy show packed with satire, mimicry and laughter that keeps you entertained from start to finish."
},

{
  "url": "aqua-sound-bath-immersion-water-sound-healing",
  "id": 262,
  "RegisterLink": "https://in.bookmyshow.com/events/aqua-sound-bath-immersion/ET00466420",
  "metaTitleEvent": "Aqua Sound Bath Immersion / Water Sound Healing / Super Chennai",
  "metaDescriptionEvent": "Dive into Aqua Sound Bath Immersion, where water sound healing harmonizes your energy through floating vibrations, singing bowls, and restorative sound therapy.",
  "conicallinkEvent": "/eventsdetails/262",
  "siteLink": "https://www.superchennai.com/events-in-chennai/aqua-sound-bath-immersion-water-sound-healing",
  "EventsCalendarTitle": "Aqua Sound Bath Immersion and Water Sound Healing",
  "EventsCalendarContent": "Experience a one-of-a-kind floating sound bath where water and the resonance of singing bowls and gongs combine for profound relaxation and energy rebalancing.",
  "EventsCalendarMonth": "2 Nov 2025",
  "EventsCalendarTime": "2:00 PM",
  "EventsCalendarCategory": "Wellness / Sound Healing / Meditation",
  "image": "/images/HomePage-Images/Events/Newevents/443.jpg",
  "link": "/events",
  "location": "Blues by Tiki Taka: Chennai",
  "language": "English",
  "hours": "1 Hour",
  "ageLimit": "8yrs +",
  "religion": "",
  "aboutFull": "Aqua Sound Bath Immersion – A Floating Path to Wellness\n\nImmerse yourself in a one-of-a-kind floating sound bath, where the restorative qualities of water blend with the calming resonance of singing bowls and gongs.\n\nDrift effortlessly as soothing vibrations flow through your body, quieting the mind, releasing emotional tensions, and rebalancing your energy. The water naturally enhances each sound, allowing vibrations to reach deeper layers, fostering profound relaxation, emotional release, and a reset for your nervous system.\n\nAqua Sound Bath Immersion is a water sound healing experience that harmonizes your energy through floating vibrations, singing bowls, and restorative sound therapy."
},


{
  "url": "gokul-kumar-live-stand-up-comedy",
  "id": 263,
  "RegisterLink": "http://in.bookmyshow.com/events/gokul-kumar-live/ET00447027",
  "metaTitleEvent": "Gokul Kumar Live / Stand Up Comedy Chennai / Super Chennai",
  "metaDescriptionEvent": " Enjoy a laughter-packed evening with Gokul Kumar Live, the ultimate stand up comedy Chennai event. Fresh jokes, sharp humor, and live entertainment await!",
  "conicallinkEvent": "/eventsdetails/263",
  "siteLink": "https://www.superchennai.com/events-in-chennai/gokul-kumar-live-stand-up-comedy",
  "EventsCalendarTitle": "Gokul Kumar Live – Stand Up Comedy in Chennai",
  "EventsCalendarContent": "Following his successful standup videos, Gokul Kumar takes his fresh, witty, and laugh-out-loud observations on a nationwide tour. Catch him live!",
  "EventsCalendarMonth": "15 Nov 2025",
  "EventsCalendarTime": "6:00 PM",
  "EventsCalendarCategory": "Comedy / Stand-Up",
  "image": "/images/HomePage-Images/Events/Newevents/446.jpg",
  "link": "/events",
  "location": "Punch - Unpaid Therapist: Chennai",
  "language": "English",
  "hours": "1 Hour",
  "ageLimit": "16yrs +",
  "religion": "",
  "aboutFull": "Gokul Kumar - Live\n\nFollowing the success of his standup videos, Gokul Kumar is now taking his comedy on a nationwide tour. His performance is packed with witty, fresh, and laugh-out-loud observations about everyday life. Don’t miss the chance to see him live—he promises that his humor is even more hilarious in person.\n\nEnjoy a laughter-packed evening with Gokul Kumar Live, the ultimate stand up comedy Chennai event. Fresh jokes, sharp humor, and live entertainment await!"
},

{
  "url": "thanga-magan-50-music-show-celebrating-superstar",
  "id": 264,
  "RegisterLink": "https://in.bookmyshow.com/events/thanga-magan-50-celebrating-superstar/ET00466446",
  "metaTitleEvent": "Thanga Magan 50 / Music Show in Chennai / Celebrating Superstar",
  "metaDescriptionEvent": " Thanga Magan 50 brings a live music show in Chennai honoring the Superstar’s legacy with legendary songs, star performers and a grand musical tribute. ",
  "conicallinkEvent": "/eventsdetails/264",
  "siteLink": "https://www.superchennai.com/events-in-chennai/thanga-magan-50-music-show-celebrating-superstar",
  "EventsCalendarTitle": "Thanga Magan 50 – Music Show Celebrating the Superstar",
  "EventsCalendarContent": "An unforgettable musical tribute to Superstar Rajinikanth's 50 years in cinema, featuring iconic songs revived by SPB Charan and Yugendran Vasudevan, and led by Udhaya Ragam U.K. Murali.",
  "EventsCalendarMonth": "16 Nov 2025",
  "EventsCalendarTime": "5:00 PM",
  "EventsCalendarCategory": "Music Show / Tribute / Film Music",
  "image": "/images/HomePage-Images/Events/Newevents/447.jpg",
  "link": "/events",
  "location": "Kamarajar Arangam: Chennai",
  "language": "Tamil",
  "hours": "5 Hours",
  "ageLimit": "5yrs +",
  "religion": "",
  "aboutFull": " Thanga Magan 50: Celebrating Superstar\n\nSUPERSTAR RAJINIKANTH’S 50 YEARS OF CINEMATIC GLORY – Celebrate a journey of unmatched style, charisma, timeless hits, and unstoppable magic!\n\nBe part of an unforgettable musical tribute as SPB Charan and Yugendran Vasudevan revive the iconic songs of Thalaivar, bringing alive the energy, nostalgia, and spirit that have defined generations. Relive the evergreen melodies of SPB and Malaysia Vasudevan, legends who shared a deep bond with Rajinikanth and sang his most celebrated hits.\n\nThe spectacular orchestra is led by Udhaya Ragam U.K. Murali and his extraordinary team, promising an immersive live experience.\n\nGet ready to cheer, whistle, and revel in the magic LIVE ON STAGE!\nONE STAGE. COUNTLESS MEMORIES. PURE RAJINI POWER!\n\nBOOK YOUR TICKETS NOW – DON’T MISS OUT! Thanga Magan 50 brings a live music show in Chennai honoring the Superstar’s legacy with legendary songs, star performers and a grand musical tribute."
},

{
  "url": "hindi-music-concert-nightingale-sisters",
  "id": 265,
  "RegisterLink": "https://in.bookmyshow.com/events/nightingale-sisters/ET00466402",
  "metaTitleEvent": "Hindi Music Concert / Nightingale Sisters / Super Chennai",
  "metaDescriptionEvent": "Nightingale Sisters bring a live Hindi music concert to Chennai, celebrating evergreen hits with a stunning orchestra and powerful vocals. Book your seats now!",
  "conicallinkEvent": "/eventsdetails/265",
  "siteLink": "https://www.superchennai.com/events-in-chennai/hindi-music-concert-nightingale-sisters",
  "EventsCalendarTitle": "Nightingale Sisters – Live Hindi Music Concert in Chennai",
  "EventsCalendarContent": "A soulful tribute celebrating the legendary voices of Lata Mangeshkar & Asha Bhonsle, featuring popular and talented singers, accompanied by Udhaya Ragam U.K. Murali's grand orchestra.",
  "EventsCalendarMonth": "9 Nov 2025",
  "EventsCalendarTime": "6:00 PM",
  "EventsCalendarCategory": "Music Concert / Bollywood / Tribute",
  "image": "/images/HomePage-Images/Events/Newevents/448.jpg",
  "link": "/events",
  "location": "Vani Mahal: Chennai",
  "language": "Hindi",
  "hours": "3 Hours",
  "ageLimit": "5yrs +",
  "religion": "",
  "aboutFull": "NIGHTINGALE SISTERS\n\nABBAS CULTURAL PROUDLY PRESENTS NIGHTINGALE SISTERS: A soulful tribute celebrating the legendary voices of LATA MANGESHKAR & ASHA BHONSLE - Two Icons who defined generations of Indian Music. The event will take audiences on a melodious journey through their timeless classics, blending golden era nostalgia with heartfelt performances by Popular and Talented singers SHRUTI BHIDE, SHIFA ANSARI, SAMANVITHA SHARMA, ANUSHA KARTHICK and SMRITI BANERJEE.\n\nThrough songs, stories and stunning renditions, Nightingale Sisters honors their unmatched contribution to Indian Cinema and the emotions they have stirred in millions of hearts!!! The Grand orchestration for the event is by UDHAYA RAGAM U.K.MURALI's band of wonderful musicians.\n\nDON'T MISS THIS EVERGREEN EVENING!! GRAB YOUR TICKETS NOW!!! Nightingale Sisters bring a live Hindi music concert to Chennai, celebrating evergreen hits with a stunning orchestra and powerful vocals."
},

{
  "url": "arvind-sunder-live-best-comedy-show",
  "id": 265,
  "RegisterLink": "https://in.bookmyshow.com/events/arvind-sundar/ET00426453",
  "metaTitleEvent": "Arvind Sunder Live | Best Comedy Show | Super Chennai",
  "metaDescriptionEvent": "Arvind Sunder brings the best comedy show experience to Chennai with a power-packed live show full of fun, wit, and laughter. Get your tickets now!",
  "conicallinkEvent": "/eventsdetails/265",
  "siteLink": "https://www.superchennai.com/events-in-chennai/arvind-sunder-live-best-comedy-show",
  "EventsCalendarTitle": "Arvind Sunder Live – Best Comedy Show in Chennai",
  "EventsCalendarContent": "Arvind Sunder returns with a solo show blending storytelling and sharp observations, crafted from 8+ years of experience. Guaranteed laughter awaits!",
  "EventsCalendarMonth": "8 Nov 2025",
  "EventsCalendarTime": "8:00 PM",
  "EventsCalendarCategory": "Comedy / Stand-Up",
  "image": "/images/HomePage-Images/Events/Newevents/449.jpg",
  "link": "/events",
  "location": "Punch - Unpaid Therapist: Chennai",
  "language": "Hindi, English",
  "hours": "1 Hour",
  "ageLimit": "16yrs +",
  "religion": "",
  "aboutFull": "Arvind Sunder - Live\n\nArvind Sunder returns with his solo performance following his hit “Delhi Vs Bangalore,” which has amassed over 600,000 views on YouTube and more than 5 million on Instagram.\n\nThis show blends storytelling, sharp observations, and personal experiences into a full hour of laughter. Crafted from over 8 years of experience, it promises a truly unique and entertaining experience.\n\nThree Reasons to Attend:\n\n1. Carefully Curated Jokes – Every joke has been tested in three different cities and perfected for maximum laughs.\n\n2. Guaranteed Laughter – Who doesn’t want a hearty dose of fun?\n\n3. A Unique Experience – An hour of comedy you won’t find anywhere else.\n\nArvind Sunder brings the best comedy show experience to Chennai with a power-packed live show full of fun, wit, and laughter. Get your tickets now!"
},


{
  "url": "flamenco-music-hands-of-time-workshop",
  "id": 266,
  "RegisterLink": "https://tickets.kynhood.com/event/690b1cbd01381741f130cd9e",
  "metaTitleEvent": "Flamenco Music | Hands of Time Workshop | Super Chennai",
  "metaDescriptionEvent": "Join the Hands of Time Workshop and explore Flamenco music through rhythm, passion, and artistry in a captivating, soulful, and immersive learning experience.",
  "conicallinkEvent": "/eventsdetails/266",
  "siteLink": "https://www.superchennai.com/events-in-chennai/flamenco-music-hands-of-time-workshop",
  "EventsCalendarTitle": "Hands of Time Workshop – Flamenco Music Experience in Chennai",
  "EventsCalendarContent": "Social Spirit, in collaboration with Musée Musical, presents Hands of Time — an engaging Flamenco rhythm workshop led by Martín Zlotnicki. Dive into Alegría, Bulería, and Tangos through rhythm, clapping, and expression.",
  "EventsCalendarMonth": "15 Nov 2025",
  "EventsCalendarTime": "11:00 AM",
  "EventsCalendarCategory": "Music / Workshop",
  "image": "/images/HomePage-Images/Events/Newevents/hands-of-time.jpg",
  "link": "/events",
  "location": "Musée Musical, Triplicane",
  "language": "English",
  "hours": "2 Hours",
  "ageLimit": "All Ages",
  "religion": "",
  "aboutFull": "Hands of Time Workshop – Flamenco Music Experience\n\nSocial Spirit, in collaboration with Musée Musical, proudly presents Hands of Time, an engaging workshop on Flamenco rhythms conducted by Martín Zlotnicki.\n\nStep into the pulse of Flamenco in this interactive rhythm session guided by the talented guitarist Martín Zlotnicki.\n\nDesigned for guitarists, instrumentalists, and anyone captivated by Flamenco’s energy, this workshop explores three iconic styles — Alegría, Bulería, and Tangos.\n\nThrough palmas (hand clapping) and hands-on rhythm practices, participants will uncover the compás (rhythmic framework) of each form, gaining a deeper sense of how to feel, blend, and express these beats through both movement and music.\n\nNo prior experience or age restriction — all you need is enthusiasm, concentration, and your instrument.\n\nJoin the Hands of Time Workshop and explore Flamenco music through rhythm, passion, and artistry in a captivating, soulful, and immersive learning experience."
},

{
  "url": "floating-yoga-fitness-on-water-workshop",
  "id": 267,
  "RegisterLink": "https://tickets.kynhood.com/event/690c88a408b6eb9349f090b8",
  "metaTitleEvent": "Floating Yoga | Fitness on Water Workshop | FLAABH FIT | Super Chennai",
  "metaDescriptionEvent": "Join the floating yoga workshop by FLAABH FIT — experience fitness on water with balance, core strength, and tranquility. A water-wellness event like no other.",
  "conicallinkEvent": "/eventsdetails/267",
  "siteLink": "https://www.superchennai.com/events-in-chennai/floating-yoga-fitness-on-water-workshop",
  "EventsCalendarTitle": "Flaabh Fit – India’s First Floating Fitness Experience",
  "EventsCalendarContent": "Experience India’s first on-water fitness program blending yoga, pilates, and core training on floating boards. Balance, strength, and mindfulness await!",
  "EventsCalendarMonth": "16 Nov 2025",
  "EventsCalendarTime": "7:30 PM",
  "EventsCalendarCategory": "Fitness / Yoga",
  "image": "/images/HomePage-Images/Events/Newevents/flaabh-fit.jpg",
  "link": "/events",
  "location": "Flaabh Fit Studio, Teynampet",
  "language": "English",
  "hours": "1 Hour",
  "ageLimit": "All Ages",
  "religion": "",
  "aboutFull": "Flaabh Fit – India’s First Floating Fitness Experience\n\nDive into a new wave of workouts with Flaabh Fit, India’s first on-water fitness program that blends balance, strength, and mindfulness on floating boards in a tranquil pool setting.\n\nCombining yoga, pilates, and core training, each session helps you:\n Boost balance and posture\n Build strength and flexibility\n Sharpen focus and coordination\n  Relieve stress and refresh your mind\n\nIt’s more than a workout — it’s a mind-body flow on water, perfect for both beginners and fitness lovers.\n\nJoin the floating yoga workshop by FLAABH FIT and experience fitness on water with balance, core strength, and tranquility. A water-wellness event like no other."
},

{
  "url": "kendo-training-martial-arts-workshop-start-today",
  "id": 268,
  "RegisterLink": "https://tickets.kynhood.com/event/6901e1a7f557630ef1f86490",
  "metaTitleEvent": "Kendo Training | Martial Arts Workshop | Start Today | Super Chennai",
  "metaDescriptionEvent": "Start your journey with Kendo Training, a martial arts workshop blending fitness, mindfulness, and traditional sword techniques crafted for modern learners.",
  "conicallinkEvent": "/eventsdetails/268",
  "siteLink": "https://www.superchennai.com/events-in-chennai/kendo-training-martial-arts-workshop-start-today",
  "EventsCalendarTitle": "Start Kendo Today – Martial Arts Workshop in Chennai",
  "EventsCalendarContent": "Learn the art of Kendo — explore its history, techniques, and discipline in this introductory martial arts workshop for beginners.",
  "EventsCalendarMonth": "12 Nov 2025",
  "EventsCalendarTime": "11:00 AM",
  "EventsCalendarCategory": "Martial Arts / Workshop",
  "image": "/images/HomePage-Images/Events/Newevents/start-kendo.jpg",
  "link": "/events",
  "location": "Thousand Lights, Chennai",
  "language": "English",
  "hours": "2 Hours",
  "ageLimit": "All Ages",
  "religion": "",
  "aboutFull": " Sun, 2 Nov  to  Sun, 30 Nov  Start Kendo Today – Martial Arts Workshop\n\nThis session offers an introductory experience to Kendo, where participants will first explore the history and origins of this disciplined Japanese martial art.\n\nThey’ll then learn the fundamentals of handling a Shinai (bamboo sword), the basic striking techniques, and the core rules of the sport.\n\nTo wrap up, participants will engage in a series of standard Kendo drills practiced by players to enhance skill, precision, and discipline.\n\nStart your journey with Kendo Training, a martial arts workshop blending fitness, mindfulness, and traditional sword techniques crafted for modern learners."
},






// PUT HERE NEW EVENTS -----------------------------------------------------------




  //##############################################################
  // ##################   OLD EVENTS  ############################
  // #############################################################
  {
    clickHere: "hello everyOne",
    url: "chennai-esports-global-championship-(CEGC)-2025",
    id: 192,
    RegisterLink: "",
    metaTitleEvent:
      "Agricultural Festival / Traditional Farming / Tamil Nadu 2025",
    metaDescriptionEvent:
      "Celebrate Agricultural Festival 2025 in Tamil Nadu with traditional farming, native crops, organic practices, cultural heritage, and rural lifestyle.",
    conicallinkEvent: "/eventsdetails/191",
    siteLink: "https://www.instagram.com/p/DPqaXmhkizb/",
    EventsCalendarTitle: "Chennai Esports Global Championship (CEGC) 2025",
    EventsCalendarContent:
      "Chennai is set to host India’s largest esports event this November — the Chennai Esports..",
    EventsCalendarMonth: "14 Nov – 16 Nov, 2025",
    EventsCalendarTime: "7pm - 9pm",
    EventsCalendarCategory: "Game",
    image: "/images/HomePage-Images/Events/Newevents/368.jpg",
    link: "/events",
    location: "Jawaharlal Nehru Indoor Stadium, Chennai",
    language: "Sports Development Authority of Tamil Nadu (SDAT) & Skyesports",
    hours: "",
    ageLimit: "",
    rleigion: "",
    aboutFull: `
    <p>
    Chennai is set to host India’s largest esports event this November — the Chennai Esports Global Championship (CEGC). This grand international tournament will feature top-level competitions in Counter-Strike 2 (CS2) and Battlegrounds Mobile India (BGMI), bringing together global gamers and esports enthusiasts under one roof.
    </p>
    <ul>
      <li>CS2 Tournament: November 7–9, 2025 with a $50,000 prize pool</li>
      <li>BGMI Tournament: November 14–16, 2025 with a ₹50 lakh prize</li>
    
    </ul>
      </br>
  `,
  },
];

export const panesContent = [
  {
    id: 62323,
    name: "Broadway Bus Stand Chennai Redevelopment",
    slug: "broadway-bus-stand-redevelopment",
    para: "Trending Chennai",
    TrendingCalendarMonth: "February 2026",
    TrendingCalendarTime: "—",
    TrendingCalendarCategory: "Infrastructure & Urban Development",
    image: "/images/trendingChennai/brodway-banner.jpeg",
    Homeimage: "/images/trendingChennai/brodway-main.jpeg",
    link: "/broadway-bus-stand-redevelopment",
    duration: "30 Months (Estimated Completion)",
    ageRestriction: "Not applicable",
    language: "Tamil & English",
    genre: "Infrastructure, Transport, Urban Development",
    venue: "Broadway Bus Stand (Parry’s Corner), Chennai",

    trendingDetails: `
<p>
<b>Chennai’s iconic Broadway Bus Stand begins a massive transformation! 🏗️✨</b><br/>
The historic terminus is undergoing a ₹822.70 crore redevelopment to become a modern multi-modal transport hub integrating transit, retail, office spaces, and structured parking.
</p>

<p>
To facilitate construction, bus operations were temporarily shifted from <b>January 24, 2026</b>. North-bound buses now operate from Ibrahim Salai (Royapuram), while south-bound services function from Island Grounds.
</p>

<h4>🏗️ Project Overview</h4>
<ul>
  <li>Total Project Cost: ₹822.70 crore</li>
  <li>9-level multi-storey parking structure</li>
  <li>8-storey modern bus terminal</li>
  <li>Commercial, retail & office spaces integrated within the complex</li>
</ul>

<h4>🚌 Capacity & Infrastructure</h4>
<ul>
  <li>97 bus bays across two floors</li>
  <li>Parking for 3,700+ vehicles</li>
  <li>30 lifts & 27 escalators</li>
  <li>Electric vehicle charging stations</li>
  <li>Seamless metro connectivity</li>
</ul>

<h4>⏳ Timeline & Objective</h4>
<p>
Scheduled for completion in approximately 30 months, the project will replace the 1960s-era terminus with a commuter-friendly, world-class facility.
</p>

<ul>
  <li>Reduces congestion in Parry’s Corner</li>
  <li>Enhances urban mobility</li>
  <li>Creates a seamless multi-modal transport experience</li>
</ul>

<p>
🏙 <b>A landmark infrastructure upgrade set to redefine public transport in central Chennai.</b>
</p>
`,

    TrendingLink: "",
    YoutubeLink: "",
    meta: {
      title:
        "Broadway Bus Stand Chennai Redevelopment – Trending Chennai Update",
      desc: "Broadway Bus Stand Chennai undergoes ₹822 crore redevelopment into a modern multi-modal hub with parking, retail, and metro connectivity. Now trending Chennai",
      url: "https://www.superchennai.com/trending-chennai/broadway-bus-stand-redevelopment",
    },
  },

  {
    id: 62322,
    name: "Korukkupet Rail Overbridge",
    slug: "korukkupet-rail-overbridge-chennai",
    para: "Trending Chennai",
    TrendingCalendarMonth: "February 2026",
    TrendingCalendarTime: "—",
    TrendingCalendarCategory: "Infrastructure & Urban Development",
    image: "/images/trendingChennai/madhya-kailash-flyover-iiner.jpeg",
    Homeimage: "/images/trendingChennai/madhya-kailash-flyover-iiner.jpeg",
    link: "/korukkupet-rail-overbridge",
    duration: "—",
    ageRestriction: "Not applicable",
    language: "Tamil & English",
    genre: "Infrastructure, Transport, Urban Development",
    venue: "Korukkupet–Manali Road (Level Crossing 2B), North Chennai",

    trendingDetails: `
<p>
<b>North Chennai gets a major traffic upgrade! 🚧✨</b><br/>
The Korukkupet Rail Overbridge at Korukkupet–Manali Road (Level Crossing 2B) was inaugurated on <b>February 12, 2026</b> by Hon’ble Chief Minister M. K. Stalin.
</p>

<p>
Built to replace the busy railway level crossing, the new flyover ensures seamless vehicle movement and improved road safety for thousands of daily commuters.
</p>

<h4>📍 Project Highlights</h4>
<ul>
  <li>Location: Korukkupet–Manali Road, North Chennai</li>
  <li>Length: 840 metres</li>
  <li>Railway Span: 72 metres</li>
  <li>Carriageway Width: 8.40 metres</li>
  <li>Project Cost: ₹96.04 crore</li>
</ul>

<h4>🚦 Traffic & Connectivity Benefits</h4>
<p>
The overbridge eliminates long waiting times at Level Crossing 2B, significantly reducing congestion and enhancing safety.
</p>

<ul>
  <li>Faster travel between Korukkupet, Tondiarpet, and Kodungaiyur</li>
  <li>Reduced vehicle idling and traffic buildup</li>
  <li>Smoother daily commute for residents and transport vehicles</li>
</ul>

<p>
🏙 <b>A crucial infrastructure milestone strengthening North Chennai’s transport network and supporting uninterrupted urban mobility.</b>
</p>
`,

    TrendingLink: "",
    YoutubeLink: "",
    meta: {
      title: "Trending Chennai : Korukkupet Bridge Opens Infrastructure Update",
      desc: "The new Korukkupet bridge in North Chennai replaces Level Crossing 2B to ease traffic congestion. A ₹96 crore infrastructure project now trending in Chennai.",
      url: "https://www.superchennai.com/trending-chennai/korukkupet-bridge",
    },
  },

  {
    id: 2325,
    name: "Madhya Kailash L-Shaped Flyover",
    slug: "madhya-kailash-l-shaped-flyover-chennai",
    para: "New in Chennai",
    TrendingCalendarMonth: "February 2026",
    TrendingCalendarTime: "—",
    TrendingCalendarCategory: "Infrastructure & Urban Development",
    image: "/images/trendingChennai/L SHAPE-banner.jpeg",
    Homeimage: "/images/trendingChennai/L SHAPE-banner.jpeg",
    link: "/madhya-kailash-l-shaped-flyover",
    duration: "—",
    ageRestriction: "Not applicable",
    language: "Tamil & English",
    genre: "Infrastructure, Architecture, Transport",
    venue: "Madhya Kailash Junction, Adyar, Chennai",

    trendingDetails: `
<p>
<b>Where culture meets modern infrastructure! ✨</b><br/>
The Madhya Kailash ‘L’-shaped flyover is more than a traffic solution — its architectural concept is inspired by <b>Muthamizh</b> (Iyal, Isai, and Natakam), symbolizing structure, rhythm, and movement.
</p>

<p>
This iconic project blends Tamil heritage with contemporary urban design, making it one of Chennai’s most unique flyovers.
</p>

<h4>📍 Project Overview</h4>
<ul>
  <li>Inaugurated by: Hon’ble Chief Minister M. K. Stalin</li>
  <li>Date: February 15, 2026</li>
  <li>Location: Adyar – connecting Sardar Patel Road and OMR</li>
  <li>Length: 652 meters</li>
  <li>Type: Uni-directional L-shaped flyover</li>
  <li>Project Cost: ₹60.68 crore</li>
</ul>

<h4>🚦 Purpose & Traffic Benefit</h4>
<p>
The flyover creates a signal-free corridor for vehicles travelling from Guindy / Adyar towards OMR, significantly reducing congestion at the busy junction.
</p>

<ul>
  <li>Handles nearly 11,000 vehicles per hour</li>
  <li>Minimizes waiting time</li>
  <li>Ensures faster and smoother traffic flow</li>
</ul>

<p>
🏙 <b>A landmark that combines culture, functionality, and smart mobility for modern Chennai.</b>
</p>
`,

    TrendingLink: "",
    YoutubeLink: "",
    meta: {
      title: "Trending Chennai: Madhya Kailash Flyover Traffic Relief",
      desc: "The Madhya Kailash Flyover is Trending Chennai news, easing traffic at Adyar junction and improving connectivity from Guindy to OMR.",
      url: "https://www.superchennai.com/trending-chennai/madhya-kailash-flyover",
    },
  },

  {
    id: 6322,
    name: "Chennai Metro Phase II",
    slug: "chennai-metro-phase-2-update-2026-poonamallee-vadapalani",
    para: "Trending Chennai Update",
    TrendingCalendarMonth: "February 2026",
    TrendingCalendarTime: "Expected Soon",
    TrendingCalendarCategory: "Infrastructure & Transport",
    image: "/images/trendingChennai/source-metro-trending-banner.jpeg",
    Homeimage: "/images/trendingChennai/metro-trending smsall.jpeg",
    link: "/trending-chennai/chennai-metro-phase-2-update-2026-poonamallee-vadapalani",
    duration: "Operational Update",
    ageRestriction: "Not Applicable",
    language: "English & Tamil",
    genre: "Metro Rail, Infrastructure, Urban Development",
    venue: "Poonamallee – Vadapalani Corridor, Chennai",

    trendingDetails: `
<p>
<b>Major progress on Chennai Metro Rail Phase II!</b> 🚇  
As of early February 2026, Chennai Metro Rail Limited (CMRL) is preparing to open the <b>Poonamallee–Vadapalani corridor</b> following approvals from the <b>Railway Board</b>.
</p>

<p>
Trial runs on this stretch have been successfully completed, and <b>Vadapalani</b> is set to play a crucial role as a key interchange station connecting <b>Phase I and Phase II</b>.
</p>

<h4>📌 Key Updates for 2026</h4>
<ul>
  <li>Trial operations between <b>Porur and Vadapalani</b> completed</li>
  <li>Features a <b>5.5 km-long double-decker viaduct</b>, a major engineering highlight</li>
  <li>Railway Board clearance granted in late January 2026</li>
  <li>Final approval from <b>Commissioner of Metro Rail Safety (CMRS)</b> awaited</li>
</ul>

<h4>🏗 Construction & Expansion Progress</h4>
<ul>
  <li>TBM <b>Pelican</b> completed a twin tunnel drive</li>
  <li>TBM <b>Bhavani</b> achieved breakthrough at RK Salai</li>
  <li>Proposed seven-storey commercial complex with four-level mechanical parking near <b>Arumbakkam Metro</b></li>
</ul>

<h4>👥 Passenger Growth & Offers</h4>
<ul>
  <li>Over <b>93 lakh commuters</b> recorded in January 2026</li>
  <li>Daily ridership crossed <b>3.8 lakh passengers</b></li>
  <li><b>20% discount</b> available on QR-based tickets and NCMC cards</li>
</ul>

<p>
⚠️ <b>Note:</b> Certain station-related works along the Poonamallee–Vadapalani stretch are still in progress and are expected to be completed by <b>mid-2026</b>.
</p>
`,

    TrendingLink: "",
    YoutubeLink: "",
    meta: {
      title: "Chennai Metro Rail Phase II Update 2026: Poonamallee–Vadapalani",
      desc: "Latest Chennai Metro Rail Phase II update: Poonamallee–Vadapalani trial runs completed; CMRS approval awaited. Opening expected soon.",
      url: "https://www.superchennai.com/trending-chennai/chennai-metro-phase-2-update-2026-poonamallee-vadapalani",
    },
  },

  {
    id: 7223,
    name: "CREDAI Chennai Fairpro 2026",
    slug: "credai-chennai-fairpro-2026-real-estate-expo",
    para: "Trending Chennai Expo",
    TrendingCalendarMonth: "February 2026",
    TrendingCalendarTime: "10:00 AM – 9:00 PM",
    TrendingCalendarCategory: "Real Estate & Property Expo",
    image: "/images/trendingChennai/credai-trending.jpeg",
    Homeimage: "/images/trendingChennai/credai-trending.jpeg",
    link: "/trending-chennai/credai-chennai-fairpro-2026-real-estate-expo",
    duration: "3 Days",
    ageRestriction: "Open for all",
    language: "English & Tamil",
    genre: "Real Estate, Property, Investment Expo",
    venue: "Chennai Trade Centre, Nandambakkam",

    trendingDetails: `
<p>
<b>Your future home could be waiting for you at CREDAI Chennai Fairpro 2026.</b> 🏡  
Be part of Chennai’s most anticipated real estate expo, bringing together trusted <b>CREDAI developers</b>, premium residential projects, and exclusive offers under one roof.
</p>

<p>
This Chennai expo is the perfect destination to explore <b>apartments, villas, plots</b>, and smart <b>investment opportunities</b>, helping homebuyers and investors compare options and make confident decisions.
</p>

<p>
Taking place from <b>20th to 22nd February 2026</b> at the <b>Chennai Trade Centre, Nandambakkam</b>, this upcoming Chennai expo stands out as a major event for property seekers.
</p>

<h4>🏢 Expo Highlights</h4>
<ul>
  <li>80+ leading CREDAI developers</li>
  <li>500+ residential & investment property options</li>
  <li>Instant bookings and expert consultations</li>
  <li>Flexible payment plans and bank tie-ups</li>
  <li>Special expo-only deals and offers</li>
</ul>

<p>
✨ Walk in, explore endless possibilities, and secure your dream home with confidence.<br/>
Register now for your <b>FREE VIP Pass</b> and take the next step toward making your dream a reality.
</p>

<h4>📅 Event Details</h4>
<ul>
  <li>Dates: 20, 21 & 22 February 2026</li>
  <li>Time: 10:00 AM – 9:00 PM</li>
  <li>Venue: Chennai Trade Centre, Nandambakkam</li>
</ul>
`,

    TrendingLink: "https://credai.eventink.in/register.html ",
    YouTubeLink: "",
    meta: {
      title: "Chennai Expo Alert: CREDAI Fairpro 2026 at Chennai Trade Centre",
      desc: "Don’t miss Chennai’s top real estate expo at the Chennai Trade Centre. CREDAI Fairpro 2026 brings premium homes, offers, and on-spot bookings..",
      url: "https://www.superchennai.com/trending-chennai/credai-chennai-fairpro-2026-real-estate-expo",
    },
  },

//   {
//     id: 41212,
//     name: "ARR Live – Wonderment 2026",
//     slug: "ar-rahman-wonderment-tour-2026",
//     para: "What’s Chennai Trending",
//     TrendingCalendarMonth: "February 2026",
//     TrendingCalendarTime: "06:30 PM",
//     TrendingCalendarCategory: "Live Music Concert",
//     image: "/images/trendingChennai/banner-bookmyshow-6-Recovered.jpg.jpeg",
//     Homeimage: "/images/trendingChennai/ar-small.jpg.jpeg",
//     link: "/trending-chennai/ar-rahman-wonderment-tour-2026",
//     duration: "3 Hours 15 Minutes",
//     ageRestriction: "5 Years & Above",
//     language: "Tamil",
//     genre: "Live Music, Concert, Entertainment",
//     venue: "Jawaharlal Nehru Stadium, Chennai",

//     trendingDetails: `
// <p>
// <b>Step into the magic of A.R. Rahman Live with the spectacular Wonderment Tour.</b> 🎶  
// Experience an unforgettable live music concert in Chennai as the legendary composer takes audiences on an extraordinary musical expedition.
// </p>

// <p>
// More than just a performance, <b>Wonderment</b> is a deeply immersive artistic experience—celebrating love, life, and the limitless power of music. Every melody, stunning visual, and rhythmic beat draws you into a world of awe and inspiration.
// </p>

// <p>
// With state-of-the-art sound, captivating visual storytelling, and A.R. Rahman’s unparalleled musical brilliance, <b>Wonderment – The Tour</b> redefines what a live concert can be.
// </p>

// <h4>📅 Event Details</h4>
// <ul>
//   <li>Date: Saturday, 14 February 2026</li>
//   <li>Time: 6:30 PM</li>
//   <li>Duration: 3 Hours 15 Minutes</li>
//   <li>Age Limit: 5 Years & Above</li>
//   <li>Language: Tamil</li>
//   <li>Venue: Jawaharlal Nehru Stadium, Chennai</li>
// </ul>

// <p>
// ✨ This Tamil music concert in Chennai promises a spellbinding evening where music meets magic, creating memories that stay long after the final note fades.
// </p>

// <p>
// 🎟 <b>Book Now:</b><br/>
// <a href="https://www.district.in/events/the-wonderment-tour-ar-rahman-live-in-chennai-2026-buy-tickets" target="_blank">
// https://www.district.in/events/the-wonderment-tour-ar-rahman-live-in-chennai-2026-buy-tickets
// </a>
// </p>
// `,

//     TrendingLink:
//       "https://www.district.in/events/the-wonderment-tour-ar-rahman-live-in-chennai-2026-buy-tickets",
//     YoutubeLink: "",
//     meta: {
//       title: "What’s Chennai Trending - A.R. Rahman’s Wonderment Tour 2026",
//       desc: "A.R. Rahman’s Wonderment Tour is a top pick in Trending Chennai, offering great music, stunning visuals, and a live show people are enjoying.",
//       url: "https://www.superchennai.com/trending-chennai/ar-rahman-wonderment-tour-2026",
//     },
//   },

  {
    id: 28754,
    name: "Glow Garden Mahabalipuram",
    slug: "glow-garden-mahabalipuram-chennai",
    para: "New in Chennai",
    TrendingCalendarMonth: "Every Day",
    TrendingCalendarTime: "01:00 PM – 05:30 PM | 06:00 PM – 11:00 PM",
    TrendingCalendarCategory: "Family Attraction & Night Tourism",
    image: "/images/trendingChennai/banner-big-1-source.jpg.jpeg",
    Homeimage: "/images/trendingChennai/banner-big-1-source (1).jpg.jpeg",
    link: "/glow-garden-mahabalipuram",
    duration: "2–3 Hours",
    ageRestriction: "Open for all ages",
    language: "Tamil & English",
    genre: "Family, Kids, Light Park, Tourism",
    venue: "Mamallapuram (Mahabalipuram), Tamil Nadu",

    trendingDetails: `
  <p>
  <b>New in Chennai‼️ 🌟</b><br/>
  Glow Garden Mahabalipuram is a spectacular night-time attraction, newly revamped from <b>Maragatha Punga</b> and inaugurated by the <b>Hon’ble Chief Minister of Tamil Nadu</b>.
  </p>

  <p>
   This magical glow park features mesmerizing LED installations of animals, birds, insects, and flowers, creating an international-level experience similar to attractions seen in Singapore ✨
</p>

<h4>🌈 Highlights</h4>
<p>
3D glowing animal figures, LED flower installations, themed zones like <b>Rose Garden</b> and <b>Animal Kingdom</b>, toy train rides, food courts, and multiple interactive zones.
</p>

<h4>🎟 Ticket Details</h4>
<ul>
  <li>Children below 3.3 ft: Free entry</li>
  <li>Day Time (1:00 PM – 5:30 PM): ₹100 – Indoor Glow Garden</li>
  <li>Evening (6:00 PM – 11:00 PM): ₹200 – Indoor & Outdoor Glow Garden + rides</li>
</ul>

<h4>🎢 Rides Included (Evening)</h4>
<ul>
  <li>Toy Train</li>
  <li>Joker Swing</li>
  <li>Bee Carousel</li>
  <li>Carousel</li>
  <li>Crazy Roller</li>
</ul>

<h4>➕ Additional Paid Activities</h4>
<ul>
  <li>Human Gyro</li>
  <li>360° Cycle</li>
  <li>Bungee Trampoline</li>
  <li>Boating</li>
</ul>

<h4>📌 Key Information</h4>
<ul>
  <li>Location: Mamallapuram (Mahabalipuram), Tamil Nadu</li>
  <li>Inauguration Date: February 6, 2026</li>
  <li>Purpose: Developed as a night-time tourist attraction after monuments close</li>
</ul>

<p>
✨ <b>Highly recommended for evening visits</b> — the glowing lights and ambience look absolutely stunning after sunset.<br/>
An ideal spot for a fun, memorable family outing.
</p>
`,

    TrendingLink:
      "https://www.instagram.com/reel/DUfA6bMEvLA/?igsh=MzJqb2g5NTNyMGI1",
    YoutubeLink: "",
    meta: {
      title: "Trending Chennai Spotlight: Glow Garden Opens in Mahabalipuram",
      desc: "Glow Garden Mahabalipuram showcases colourful glow setups, themed gardens, kids’ activities, and charming night views that make it a great place to explore.",
      url: "https://www.superchennai.com/trending-chennai/glow-garden-mahabalipuram",
    },
  },
  {
    id: 5555,
    name: "Karthik Live Music Concert 2026",
    slug: "karthik-live-concert-chennai-2026",
    para: "Trending Chennai Event 2026",
    TrendingCalendarMonth: "February 2026",
    TrendingCalendarTime: "07:30 PM",
    TrendingCalendarCategory: "Live Music Concert",
    image: "/images/trendingChennai/source-karthick-banner.jpeg",
    Homeimage: "/images/trendingChennai/karthick-image.jpeg",
    link: "/trending-chennai/karthik-live-concert-chennai-2026",
    duration: "As per show flow",
    ageRestriction: "5 Years & Above",
    language: "Tamil",
    genre: "Indian Pop | Regional Music",
    venue: "YMCA, Chennai",

    trendingDetails: `
<p>
<b>Karthik</b> is widely regarded as one of India’s most loved and respected playback singers, a voice that has resonated with audiences across generations.
</p>

<p>
Born and raised in Chennai, and classically trained in both <b>Carnatic</b> and <b>Hindustani</b> music, his illustrious journey includes thousands of songs in multiple Indian languages. Celebrated for his emotionally rich vocals, remarkable versatility, and powerful stage presence, Karthik continues to redefine the live music experience.
</p>

<p>
As part of his much-awaited India tour, Karthik brings his music closer to fans across the country. Every performance promises a fully immersive live concert experience, blending nostalgia, heartfelt emotion, and high-energy moments.
</p>

<h4>📅 Event Details</h4>
<ul>
  <li>Date: Saturday, 28 February 2026</li>
  <li>Time: 7:30 PM</li>
  <li>Duration: As per show flow</li>
  <li>Age Limit: 5 Years & Above</li>
  <li>Genre: Indian Pop | Regional Music</li>
  <li>Venue: YMCA, Chennai</li>
</ul>

<p>
✨ This Indian pop and regional music concert in Chennai invites audiences to be part of a musical journey that connects deeply and leaves a lasting impact.
</p>

<p>
🎟 <b>Book Now:</b><br/>
<a href="https://in.bookmyshow.com/events/karthik-live-chennai/ET00466125" target="_blank">
https://in.bookmyshow.com/events/karthik-live-chennai/ET00466125
</a>
</p>
`,

    TrendingLink:
      "https://in.bookmyshow.com/events/karthik-live-chennai/ET00466125",
    YoutubeLink: "",
    meta: {
      title: "Trending Chennai Event 2026 : Karthik Live Music Concert",
      desc: "Don’t miss Chennai’s trending event—Karthik Live 2026 at YMCA. Enjoy his unforgettable voice, chart-topping songs, and an immersive music concert.",
      url: "https://www.superchennai.com/trending-chennai/karthik-live-concert-chennai-2026",
    },
  },

  {
    id: 3333,
    name: "Tata JLR Manufacturing Facility Inauguration",
    slug: "tata-jlr-manufacturing-facility-panapakkam-tamil-nadu",
    para: "Industrial Milestone",
    TrendingCalendarMonth: "February 2026",
    TrendingCalendarTime: "Inaugurated",
    TrendingCalendarCategory: "Industry & Development",
    image: "/images/trendingChennai/tata-jlr-panapakkam-banner.jpeg",
    Homeimage: "/images/trendingChennai/tata-jlr-panapakkam-main.jpeg",
    link: "/tata-jlr-manufacturing-facility-panapakkam",
    duration: "Long-term Industrial Project",
    ageRestriction: "Not Applicable",
    language: "English & Tamil",
    genre: "Industry, Manufacturing, Employment",
    venue: "Panapakkam, Tamil Nadu",

    trendingDetails: `
<p>
<b>A major milestone in Tamil Nadu’s industrial growth!</b> 🏭  
Tamil Nadu Chief Minister <b>M. K. Stalin</b> formally inaugurated the new <b>Tata Jaguar Land Rover (JLR) manufacturing facility</b> at <b>Panapakkam</b>.
</p>

<p>
This greenfield automotive plant is being developed through a phased investment of <b>₹9,000 crore</b>, showcasing a strong commitment to advanced manufacturing and sustainable mobility.
</p>

<p>
The facility is designed to manufacture both <b>internal combustion engine (ICE)</b> vehicles and <b>electric vehicles (EVs)</b>, aligning with the future direction of the global automobile industry.
</p>

<h4>🏭 Key Highlights</h4>
<ul>
  <li>Annual production capacity of up to <b>250,000 vehicles</b></li>
  <li>Manufacturing of ICE and EV models</li>
  <li>Strengthens Tamil Nadu’s position as a leading automotive hub</li>
</ul>

<h4>👷 Employment & Economic Impact</h4>
<ul>
  <li>More than <b>5,000 direct and indirect job opportunities</b></li>
  <li>Boosts local workforce and skill development</li>
  <li>Enhances the regional supplier and ancillary ecosystem</li>
</ul>

<p>
✨ The new Tata JLR plant highlights Tamil Nadu’s continued focus on <b>industrial expansion, innovation, sustainability, and job creation</b>, driving long-term economic growth in and around Panapakkam.
</p>
`,

    TrendingLink:
      "https://www.instagram.com/reel/DUiVIfekvCI/?igsh=NXhsOXMzdW44M2c0",
    YoutubeLink: "",
    meta: {
      title: "Tata JLR Opens New Manufacturing Plant in Panapakkam",
      desc: "A ₹9,000 crore Tata JLR plant opens in Panapakkam, inaugurated by M.K. Stalin, bringing advanced auto production, EV capability and thousands of new local jobs.",
      url: "https://www.superchennai.com/trending-chennai/tata-jlr-manufacturing-plant-panapakkam ",
    },
  },
  {
    id: 1,
    name: "Chennai  Electric Double-Decker PANORAMA RIDE",
    slug: "double-decker-bus-chennai-city-bus-ride",
    para: "Every Day",
    TrendingCalendarMonth: "Every Day",
    TrendingCalendarTime:
      "07:00 AM – 10:00 AM | 03:00 PM – 05:00 PM | 08:00 PM – 10:00 PM",
    TrendingCalendarCategory: "Heritage & City Tour",
    Homeimage: "/images/trendingChennai/doubledeckerbus-image.jpg",
    image: "/images/trendingChennai/doubledeckerbus-image2-source.jpg",
    link: "/chennai-heritage-electric-double-decker-bus-service",
    duration: "Approx. 2 Hours",
    ageRestriction: "Open for all ages",
    language: "English & Tamil",
    genre: "Heritage, Culture, City Tour",
    venue: "Chennai City (Multiple Landmarks)",
    trendingDetails: `
<p>
<b>Experience Chennai like never before!</b> 🌆  
The Heritage Electric Double-Decker Bus is an eco-friendly panoramic city tour showcasing Chennai’s rich history and iconic landmarks.
</p>

<p>
This premium AC electric double-decker service was officially inaugurated by <b>Chief Minister M.K. Stalin</b> during the <b>World Tamil Diaspora Day 2026</b>.  
The service is introduced by the <b>Tamil Nadu Tourism Development Corporation (TTDC)</b> and operated by <b>Switch Mobility (Ashok Leyland)</b>.
</p>

<h4>🚌 Major Attractions Covered</h4>
<p>
Marina Beach, Madras High Court, Secretariat, LIC, Spencer Plaza, Napier Bridge,  
Anna & Kalaignar Memorial, MGR & Jayalalithaa Memorial, Santhome Church, Lighthouse,  
Chennai Port, University of Madras, Vivekananda House, Rajaji Hall, Queen Mary’s College, and many more.
</p>

<h4>✅ Inclusions</h4>
<ul>
  <li>Professional tour guide from boarding to drop-off</li>
  <li>Refreshment & relaxation stop at Hotel Tamil Nadu</li>
  <li>Friendly assistance from drivers, tour helpers, and staff</li>
</ul>

<h4>⚠️ Important Notes</h4>
<ul>
  <li>Alcohol consumption is strictly prohibited</li>
  <li>Travel insurance & medical expenses are not included</li>
  <li>Coach follows only tour manager-approved routes</li>
</ul>

<h4>🎟 Ticket Prices</h4>
<ul>
  <li>Adults: ₹200</li>
  <li>Children (4–10 years): ₹150</li>
</ul>

<p>
✨ Perfect for tourists, families, history lovers, and locals who want to rediscover Chennai from a fresh perspective with comfort, sustainability, and stunning city views.
</p>
`,

    TrendingLink:
      "https://ttdconline.com/tour/details/CHENNAI%20DOUBLE%20DECKER%20PANORAMA%20RIDE/Package",
    YoutubeLink: "https://www.youtube.com/watch?v=Lmae30kTD8s",
    meta: {
      title: "Trending Chennai City Ride on Double Decker Bus, Super Chennai",
      desc: "Enjoy a panoramic Chennai city ride on an electric double-decker bus, showcasing heritage landmarks, cultural icons and scenic coastline.",
      url: "/chennai-heritage-electric-double-decker-bus-service",
    },
  },

  {
    id: 0,
    name: "JIGGLY CAT PUDDING – Viral Cute Dessert in Chennai!",
    slug: "jiggly-cat-pudding-viral-cute-dessert-in-chennai",
    para: "Every Day",
    TrendingCalendarMonth: "Every Day",
    TrendingCalendarTime: "",
    TrendingCalendarCategory: "Desserts",
    image: "/images/trendingChennai/365.jpg",
    Homeimage: "/images/trendingChennai/002.jpg",
    link: "/fake-sangeet-2.0",
    duration: "",
    ageRestriction: "",
    language: "",
    genre: "",
    venue: "@barrocco22.adyar (Adyar branch)",
    trendingDetails: `
      Meet Chennai’s cutest pudding! The Jiggly Cat Pudding wiggles and jiggles when you shake it, making it a fun treat for both kids and adults. With a mild coconut flavor, it’s as delicious as it is adorable — almost too cute to eat!
    `,
    TrendingLink: "https://www.instagram.com/reel/C3heSbhrhMt/?hl=en ",
  },

  {
    id: -1,
    name: "RAINDROP PUDDING – Unique & Minimalist Dessert!",
    slug: "RAINDROP PUDDING – Unique & Minimalist Dessert!",

    para: "Every Day",
    TrendingCalendarMonth: "Every Day",
    TrendingCalendarTime: "",
    TrendingCalendarCategory: "Desserts",
    image: "/images/trendingChennai/367.jpg",
    Homeimage: "/images/trendingChennai/004.jpg",
    link: "/fake-sangeet-2.0",
    duration: "",
    ageRestriction: "",
    language: "",
    genre: "",
    venue: "@barrocco22.adyar (Adyar branch)",
    trendingDetails: `
  Ever wondered what water in dessert form would taste like? That’s exactly the concept behind the Raindrop Pudding. This minimalist dessert focuses on experience over taste, offering a near flavorless, almost magical texture that’s perfect for adventurous foodies.
  Event / Experience Details:

Ideal for those who love trying unique and innovative desserts.
Makes for a fun, conversation-starting treat on your dessert tour in Chennai.
Exclusively available at @barrocco22.adyar (Adyar branch)
☎️ Call to check availability: +91 98849 52226
✅ 100% Veg & Halal
    `,
    TrendingLink: "https://www.instagram.com/reel/C3heSbhrhMt/?hl=en ",
  },

  {
    id: -2,
    name: "Dark Chocolate Napping Teddy Dessert – Viral Dessert in Chennai!",
    slug: "RAINDROP PUDDING – Unique & Minimalist Dessert!",

    para: "Every Day",
    TrendingCalendarMonth: "Every Day",
    TrendingCalendarTime: "",
    TrendingCalendarCategory: "Desserts",
    image: "/images/trendingChennai/364.jpg",
    Homeimage: "/images/trendingChennai/001.jpg",
    link: "/fake-sangeet-2.0",
    duration: "",
    ageRestriction: "",
    language: "",
    genre: "",
    venue: "",
    trendingDetails: `
  The Dark Chocolate Napping Teddy (also called Sleeping Teddy Dessert) is a viral treat straight from London, now delighting Chennai’s dessert scene! This adorable chocolate teddy is crafted with precision, hiding a silky mango mousse layered with biscoff crumbs inside. Every bite combines rich chocolate, creamy mango, and a crunchy biscuit layer, creating a symphony of textures and flavors.

More than just a dessert, it’s a mini experience — whimsical, fun, and irresistibly cute. Its lifelike teddy shape and delicate craftsmanship make it Instagram-perfect, ideal for sharing on social media or gifting to someone special. Whether you’re a dessert lover, a chocolate enthusiast, or simply in search of something unique, this treat brings together playfulness and indulgence in every bite.

✨ Highlights:

Cute teddy design that’s almost too adorable to eat
Smooth mango mousse balanced with crunchy biscoff crumbs
Rich dark chocolate shell for a decadent finish
Perfect for gifting, special occasions, or personal indulgence
Combines visual appeal with delightful textures and flavors
    `,
    TrendingLink: "https://www.instagram.com/p/DOscSLtksy4/",
  },

  {
    id: -3,
    name: "Eventide Coffee – Minimalist Café in Chennai",
    slug: "RAINDROP PUDDING – Unique & Minimalist Dessert!",

    para: "Every Day",
    TrendingCalendarMonth: "Every Day",
    TrendingCalendarTime: "",
    TrendingCalendarCategory: "Desserts",
    image: "/images/trendingChennai/366.jpg",
    Homeimage: "/images/trendingChennai/003.jpg",
    link: "/fake-sangeet-2.0",
    duration: "",
    ageRestriction: "",
    language: "",
    genre: "",
    venue: "Injambakkam, Chennai ",
    trendingDetails: `
          Eventide Coffee is Chennai’s newest minimalist café, designed for those who love calm, cozy spaces paired with curated coffee experiences. Whether you’re a coffee aficionado or just looking for a peaceful spot to unwind, this café offers carefully selected brews, from rich espresso shots to smooth filter coffees, all served with attention to detail.

The interior reflects a modern, minimalist aesthetic, creating the perfect backdrop for catching up with friends, working remotely, or simply enjoying a quiet moment with a cup of coffee. Each drink is crafted to highlight the unique flavors of the beans, making it a treat for both the eyes and the palate.

✨ Highlights:

Curated coffee selections and specialty brews
Minimalist, cozy, and Instagrammable interior
Perfect for relaxing, working, or casual meetups
Focus on quality, flavor, and presentation
    `,
    TrendingLink: "https://maps.app.goo.gl/WJhhy5LzkiW94FNw8 ",
  },
  // {
  //   id: 1,
  //   name: "Coolie",
  //   para: "14th August 2025",
  //   TrendingCalendarMonth: "14th August 2025",
  //   TrendingCalendarTime: "",
  //   TrendingCalendarCategory: "About the movie",
  //   image: "/images/trendingChennai/Coolie-Trending-Detail.jpg",
  //   Homeimage: "/images/trendingChennai/coolie-Trending.jpg",
  //   link: "/fake-sangeet-2.0",
  //   duration: "2D, (Tamil,Kannada,Telugu)",
  //   ageRestriction: "",
  //   language: "",
  //   genre: "2h 49m - Action, Thriller - A",
  //   venue: "French Village, ECR",
  //   trendingDetails: `
  // Coolie is a multilingual movie starring Rajinikanth in the lead role. It is directed by Lokesh Kanagaraj.
  //   `,
  // },

  {
    id: 2,
    name: "LABUBU DOLL",
    slug: "LABUBU DOLL",

    para: "ABOUT LABUBU",
    TrendingCalendarMonth: "selling for nearly $170,000 at auction.",
    TrendingCalendarTime: "",
    TrendingCalendarCategory: "Toy",
    image: "/images/trendingChennai/Labubu-Doll-Detail.jpg",
    Homeimage: "/images/trendingChennai/Labubu-Doll.jpg",
    link: "/tamil-nadu-international-kite-festival",
    duration: "",
    ageRestriction: "",
    language: "",
    genre: "",
    venue: "",
    trendingDetails: `
   Labubu, created by Hong Kong-born artist Kasing Lung and produced by Pop Mart, is a one-of-a-kind collectible character that has captured hearts worldwide. Known for its big eyes, jagged teeth, wild tuft of hair, and mischievous charm, Labubu is part of “The Monsters” series — a whimsical collection of fantasy-inspired creatures.
   Celebrity Endorsement: Labubu became a global trend after Blackpink’s Lisa was spotted carrying one in April 2024. Since then, celebrities like Kim Kardashian and Rihanna have joined the fan list, making it a must-have accessory for pop culture lovers.
   Collector’s Craze: Many editions are released in blind boxes, adding mystery and rarity to every purchase. Limited editions can sell out in minutes and resell for many times their retail value, with one life-size Labubu selling for nearly $170,000 at auction.

   Global Popularity: From Asia to the West, Labubu has become a symbol of quirky fashion, artistic expression, and collector prestige. Fans host trading events, share unboxings online, and proudly showcase their finds

    `,
  },

  {
    id: 3,
    name: "Cake on a Cone ",
    slug: "cake on murder",
    para: "Everyday",
    TrendingCalendarMonth: "Available Daily",
    TrendingCalendarTime: "",
    TrendingCalendarCategory: "Foodie Find / Trending Dessert",
    image: "/images/trendingChennai/inner-page-trending-chennai-2.jpg",
    Homeimage: "/images/trendingChennai/Home-page-trending-chennai-2.jpg",
    link: "/speed-counselling-study-abroad",
    duration: "",
    ageRestriction: "",
    language: "",
    genre: "",
    venue: "Pastry Mania, Halls Rd, Kilpauk, Chennai",
    trendingDetails: `
    Mini cakes just got cooler! 🎂🍦
 Experience Chennai’s viral Cake on a Cone – where crunchy cones are filled with soft cake, creamy layers, and rich sauces inside. Perfect for surprise gifts, celebrations, or a mid-week sweet craving.
 Only at Pastry Mania, Kilpauk.
 Don’t miss this trending dessert!
    `,
  },

  {
    id: 4,
    name: "Jiggly Capybara Panna Cotta",
    slug: "Jiggly Capybara Panna Cotta",

    para: "Everyday",
    TrendingCalendarMonth: "Available Daily",
    TrendingCalendarTime: "12.00 PM - 10. 30 PM",
    TrendingCalendarCategory: "Foods",
    image: "/images/trendingChennai/inner-page-trending-chennai-3.jpg",
    Homeimage: "/images/trendingChennai/Home-page-trending-chennai-3.jpg",
    link: "/speed-counselling-study-abroad",
    duration: "",
    ageRestriction: "",
    language: "",
    genre: "",
    venue: "Only at Lafayette, Nungambakkam,  Chennai",
    trendingDetails: `
   Say hello to the cutest dessert in town – the Jiggly Capybara Panna Cotta! 🐹💛
 Imported straight from Korea’s viral food trends, this eggless, halal-certified dessert is wobbly, jiggly, and adorable.
 Soft, sweet, and silky – this dessert is made for Instagram and made to melt hearts! Whether you're on a dessert date or gifting something adorable, this wobbly treat is just perfect. Please note, it's only available for dine-in – no takeaways. So, reserve your table now on Swiggy or Zomato!
    `,
  },

  // {
  //   id: 5,
  //   name: "Speed Counselling for Everything Study Abroad",
  //   para: "Every Sat | 10:00 AM (IST)",
  //   TrendingCalendarMonth: "Every Sat",
  //   TrendingCalendarTime: "10:00 AM",
  //   TrendingCalendarCategory: "Education",
  //   image:
  //     "/images/trendingChennai/speed-counselling-for-everything-study-abroad-(chennai).jpg",
  //   Homeimage:
  //     "/images/trendingChennai/front/speed-counselling-for-everything-study-abroad-(chennai).jpg",
  //   link: "/speed-counselling-study-abroad",
  //   duration: "15 minutes",
  //   ageRestriction: "All Ages",
  //   language: "English",
  //   genre: "Counselling",
  //   venue: "Alwarpet, Chennai",
  //   trendingDetails: `Let’s clear all your study-abroad questions face-to-face! Together, we’ll plan your study-abroad future. Join us for a speed counselling session at our Edvoy office in Chennai. You get 15 minutes, one-on-one, with our expert for your preferred country—UK, Canada, Germany, wherever. No long waits, no repeated calls, no back-and-forth messages, and no application push. Just straight-up, personalised guidance, fast and extremely effective. You’ll get expert advice on everything you need to know about studying abroad, from university offers and scholarships to education loans and visa. We’ve already helped over 100K students reach their study-abroad goals. With 750+ global university partnerships in 25+ countries and access to 750,000+ courses, we offer a wide variety of options to match your aspirations.`,
  // },

  // {
  //   id: 6,
  //   name: "Basketball Pickup Games at OTO COACH",
  //   para: "Every Saturday | 7:00 PM",
  //   TrendingCalendarMonth: "Every Sat",
  //   TrendingCalendarTime: "07:00 PM",
  //   TrendingCalendarCategory: "Basketball",
  //   image:
  //     "/images/trendingChennai/basketball-pickup-games-at-oto-coach-(age-16+)-1.jpg",
  //   Homeimage:
  //     "/images/trendingChennai/front/basketball-pickup-games-at-oto-coach-(age-16+).jpg",

  //   link: "/basketball-pickup-games-oto-coach",
  //   duration: "N/A",
  //   ageRestriction: "16+",
  //   language: "English",
  //   genre: "Sports",
  //   venue: "OTO COACH, Crescent School, Thousand Lights, Nungambakkam, Chennai",
  //   trendingDetails: `Ready to ball? Join the Basketball Pickup Games at OTO COACH, Chennai’s leading multi-sport academy, every Saturday at 7 PM. Whether you’re looking to stay active, improve your skills, or just enjoy a friendly match, these non-competitive games are perfect for players aged 16 and above. No teams, no pressure—just pure basketball fun in a safe, energetic environment. Bring your A-game, meet new people, and enjoy the sport you love with like-minded players! Entry Fee: ₹250 per session.`,
  // },

  {
    id: 7,
    name: "Fake Sangeet 2.0",
    slug: "Fake_sangeet_event",

    para: "18th July Onwards | 8PM Onwards",
    TrendingCalendarMonth: "18th July 2025",
    TrendingCalendarTime: "08:00 PM",
    TrendingCalendarCategory: "Sangeet Show",
    image: "/images/trendingChennai/fake-sangeet-inner.jpg",
    Homeimage: "/images/trendingChennai/front/fake-sangeet.jpg",
    link: "/fake-sangeet-2.0",
    duration: "",
    ageRestriction: "All Ages",
    language: "English",
    genre: "Entertainment",
    venue: "The Slate & Secret Story, Nungambakkam",
    trendingDetails: `We’re back, bigger, bolder & badder than ever 💥
     This isn’t your average night out—it’s a SANGEET SHOWDOWN without the wedding drama!
     Featuring: DJ • Dhol • Photobooth • Glitters • Decor • Live Singer
     Offline tickets launching soon!  Tickets: Live on ClubInn`,
  },
  {
    id: 8,
    name: "Fake Sangeet 2.0",
    para: "18th July Onwards | 8PM Onwards",
    TrendingCalendarMonth: "18th July 2025",
    TrendingCalendarTime: "08:00 PM",
    TrendingCalendarCategory: "Sangeet Show",
    image: "/images/trendingChennai/fake-sangeet-inner.jpg",
    Homeimage: "/images/trendingChennai/front/fake-sangeet.jpg",
    link: "/fake-sangeet-2.0",
    duration: "",
    ageRestriction: "All Ages",
    language: "English",
    genre: "Entertainment",
    venue: "The Slate & Secret Story, Nungambakkam",
    trendingDetails: `We’re back, bigger, bolder & badder than ever 💥
     This isn’t your average night out—it’s a SANGEET SHOWDOWN without the wedding drama!
     Featuring: DJ • Dhol • Photobooth • Glitters • Decor • Live Singer
     Offline tickets launching soon!  Tickets: Live on ClubInn`,
  },
  {
    id: 9,
    name: "Fake Sangeet 2.0",
    para: "18th July Onwards | 8PM Onwards",
    TrendingCalendarMonth: "18th July 2025",
    TrendingCalendarTime: "08:00 PM",
    TrendingCalendarCategory: "Sangeet Show",
    image: "/images/trendingChennai/fake-sangeet-inner.jpg",
    Homeimage: "/images/trendingChennai/front/fake-sangeet.jpg",
    link: "/fake-sangeet-2.0",
    duration: "",
    ageRestriction: "All Ages",
    language: "English",
    genre: "Entertainment",
    venue: "The Slate & Secret Story, Nungambakkam",
    trendingDetails: `We’re back, bigger, bolder & badder than ever 💥
     This isn’t your average night out—it’s a SANGEET SHOWDOWN without the wedding drama!
     Featuring: DJ • Dhol • Photobooth • Glitters • Decor • Live Singer
     Offline tickets launching soon!  Tickets: Live on ClubInn`,
  },
];

export const prideofchennaidata = [
  {
    id: 1,
    image: "/images/pride-of-chennai/viswanathan-anand.jpg",
    name: "V.Anand",
    profession: "Mayiladuthurai, Tamil Nadu.",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork:
      "Chess Grandmaster, Former World Chess Champion, and India’s first chess superstar.",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        First Indian Grandmaster: Achieved the title in 1988 at the age of 18.
      </>,

      <>
        World Chess Champion: Won the FIDE World Chess Championship in 2000, and
        the undisputed title in 2007, 2008, 2010, and 2012.
      </>,

      <>
        Rapid Chess Specialist: Known as the "Lightning Kid" for his prowess in
        rapid and blitz formats.
      </>,

      <>Highest FIDE Rating: Reached a peak rating of 2817 in March 2011.</>,

      <>Olympic Medalist: Contributed to India's success in Chess Olympiads.</>,

      <>
        FIDE Deputy President: Elected as the Deputy President of FIDE in 2022.
      </>,

      <>
        Mentor: Actively involved in nurturing young chess talent through
        initiatives like the WestBridge Anand Chess Academy.
      </>,

      <>
        Awards: Recipient of the Padma Bhushan (2008) and Padma Shri (2000) for
        his contributions to chess.
      </>,
    ],

    category: "Chess",
  },

  {
    id: 2,
    image: "/images/pride-of-chennai/ajithkumar-photo.jpg",
    name: "Ajith Kumar ",
    profession: "Hyderabad, Telangana",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: "Actor, Motorsport Enthusiast",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Popularly known as “Thala”, one of the leading actors in Tamil cinema.
      </>,

      <>
        Has acted in over 60 films across Tamil and other South Indian
        languages.
      </>,

      <>
        Won several awards including Tamil Nadu State Film Awards and Vijay
        Awards.
      </>,

      <>
        Known for his versatility in roles ranging from action, romance, drama,
        and thriller genres.
      </>,

      <>
        Successfully balanced a career in Indian motorsport, competing in events
        like Formula 2 Championship, Formula Maruti, and MRF Racing Series.
      </>,

      <>
        Received accolades for humanitarian work and supporting social causes.
      </>,

      <>Maintains a massive fan following across Tamil Nadu and worldwide.</>,

      <>
        Recognized for his disciplined lifestyle and fitness regimen, often
        inspiring fans and colleagues.
      </>,
    ],

    category: "Motorsport and Racing",
  },

  {
    id: 3,
    image: "/images/pride-of-chennai/narain-karthikeyan.jpg",
    name: "Narain Karthikeyan",
    profession: "Coimbatore, Tamil Nadu.",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: " Professional Racing Driver (Formula One, Motorsport)",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        India’s first Formula One driver (2005) with Jordan Formula One Team.
      </>,

      <>Competed in 19 Formula One races during his career.</>,

      <>
        Won Formula Asia and British Formula Ford Championships in his early
        career.
      </>,

      <>Represented India in the A1 Grand Prix World Cup of Motorsport.</>,

      <>Raced for HRT Formula One Team in 2011 and 2012.</>,

      <>First Indian to race in NASCAR Camping World Truck Series.</>,

      <>Competed in Superleague Formula and Formula Nippon series.</>,

      <>Awarded the Padma Shri in 2010 for his contribution to motorsport.</>,

      <>Inspired future Indian racers like Jehan Daruvala and Arjun Maini.</>,

      <>Actively promotes and mentors motorsport talent in India.</>,
    ],

    category: "Motorsport and Racing",
  },
  {
    id: 4,
    image: "/images/pride-of-chennai/ravichandran-ashwin-cricket.jpg",
    name: "Ravichandran Ashwin",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Right-arm off-spin bowler, Right-hand lower-order batsman",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Ravichandran Ashwin's achievements include being the fastest Indian to
        500 Test wickets, the only Indian to score a century and take five
        wickets in the same Test on four occasions, holding the record for the
        most Test wickets taken by an Indian bowler in India (383), and being a
        key all-rounder with over 3,000 Test runs and over 750 international
        wickets combined.
      </>,
      <>
        He is also recognized for his unique bowling style, including the
        "carrom ball," and his success across various formats of the game.
      </>,
    ],

    category: "Cricketers",
  },

  {
    id: 5,
    image: "/images/pride-of-chennai/dinesh-karthik-cricket.jpg",
    name: "Dinesh Karthik",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Wicketkeeper-batsman, Right-hand middle-order batsman",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        {" "}
        Dinesh Karthik's achievements as a wicketkeeper-batsman include a
        successful T20 finisher, a notable IPL career where he captained KKR and
        played for RCB, and a comeback into the Indian T20 squad in 2022 for the
        T20 World Cup, earning the tag of a "new finisher".{" "}
      </>,

      <>
        He also has a significant Test and ODI career, though he had to
        re-invent his style later in his career to sustain his performance, and
        has found success as a broadcaster and commentator.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 6,
    image: "/images/pride-of-chennai/murali-vijay-cricket.jpg",
    name: "Murali Vijay",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Opening batsman, Right-hand opener",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Murali Vijay's achievements include playing 61 Test matches, scoring
        3,982 runs with 12 centuries and 15 half-centuries, and being part of
        the Chennai Super Kings' victorious IPL seasons in 2010 and 2011.{" "}
      </>,

      <>
        He also won the 2010 Champions League Twenty20 with CSK and captained
        Kings XI Punjab in the IPL.{" "}
      </>,

      <>
        Vijay also made his mark in domestic cricket, finishing as the highest
        run-scorer in his debut Ranji Trophy season.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 7,
    image: "/images/pride-of-chennai/v-badrinath-cricket.jpg",
    name: "V. Badrinath",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Right-hand middle-order batsman",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Subramaniam Badrinath is an accomplished Indian cricketer, known for his
        strong first-class record and significant contributions to domestic
        cricket and the Indian Premier League (IPL) with the Chennai Super
        Kings.
      </>,

      <>
        Although he had a decorated domestic career with over 10,000 first-class
        runs and several domestic titles, his international career was limited
        to a few Test, ODI, and T20I matches.
      </>,

      <>
        He was a prolific scorer for Tamil Nadu and a brilliant fielder,
        representing India A extensively before his international debut in 2008.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 8,
    image: "/images/pride-of-chennai/kris-srikkanth-cricket.jpg",
    name: "Kris Srikkanth",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Right-hand opening batsman",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Kris Srikkanth was a right-hand opening batsman known for his aggressive
        style and was a key part of India's 1983 Cricket World Cup winning team
        and the 1985 World Championship of Cricket-winning squad.{" "}
      </>,

      <>
        His significant achievements include scoring a quick-fire 123 against
        Pakistan in a 1987 Test match and becoming the first cricketer to score
        a century, take five wickets, and make five catches in the same
        international match.{" "}
      </>,

      <>
        Srikkanth also served as the chairman of the BCCI's selection committee
        in 2011.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 9,
    image: "/images/pride-of-chennai/lakshmipathy-balaji-cricket.jpg",
    name: "Lakshmipathy Balaji",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Right-arm fast-medium bowler",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Lakshmipathy Balaji's career highlights include making his ODI debut in
        2002 and Test debut in 2003, playing for India in 30 ODIs and 8 Tests,
        winning the IPL twice with the Chennai Super Kings (2010) and Kolkata
        Knight Riders (2012), and claiming the first-ever hat-trick in IPL
        history.{" "}
      </>,

      <>
        After his retirement, he transitioned to a coaching role, serving as the
        bowling coach for the Knight Riders and the Chennai Super Kings.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 10,
    image: "/images/pride-of-chennai/sadagoppan-ramesh-cricket.jpg",
    name: "Sadagoppan Ramesh",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Left-hand opening batsman",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Sadagoppan Ramesh (born October 16, 1975, in Chennai) was a left-handed
        opening batsman for India known for his debut and subsequent career in
        Test and ODI cricket. His achievements include scoring 1,367 runs in 19
        Tests, with a high score of 143, and 646 runs in 24 ODIs.
      </>,
      <>
        He also had a notable domestic career, opening for Tamil Nadu and
        reaching the Ranji Trophy finals, and briefly played for Kerala and
        Assam.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 11,
    image: "/images/pride-of-chennai/s-venkataraghavan-cricket.jpg",
    name: "S. Venkataraghavan",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Right-arm off-spin bowler & Test umpire",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        S. Venkataraghavan's achievements include playing 56 Test matches,
        captaining India in the 1975 and 1979 World Cups, and umpiring in 73
        Tests and 52 ODIs, a testament to his diverse and distinguished career.
      </>,

      <>
        A key member of India's spin quartet, his accuracy and strategic acumen
        made him a formidable bowler and a brilliant, respected umpire.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 12,
    image: "/images/pride-of-chennai/w-v-raman-cricket.jpg",
    name: "W. V. Raman",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Right-hand middle-order batsman",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        W. V. Raman's cricketing career achievements include a record-breaking
        1018 runs in the 1988-89 Ranji Trophy season and being the first Indian
        to score an ODI century in South Africa (1992-93).{" "}
      </>,

      <>
        He had a distinguished domestic career, playing for Tamil Nadu for over
        17 years, and made his international debut in 1988.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 13,
    image: "/images/pride-of-chennai/washington-sundar-cricket.jpg",
    name: "Washington Sundar",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "All-rounder – Left-hand batsman & Right-arm off-spin bowler.",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Test Century: Scored 101* in Test cricket, showing his batting skills
        under pressure.
      </>,

      <>
        Gabba Test 2021 Heroics: Scored 62 in India’s historic win at The Gabba.
      </>,

      <>
        Best Bowling Figures: Took 7 wickets for 59 runs against New Zealand in
        2024.
      </>,

      <>
        Nidahas Trophy 2018: Named Player of the Series for all-round
        performance.
      </>,

      <>
        IPL Career: Bought by Gujarat Titans for ₹3.2 crore, contributing as a
        key all-rounder.
      </>,

      <>
        2025 Test against England: Played a match-winning last-wicket
        partnership to help India win by 6 runs.
      </>,

      <>
        Consistent International Presence: Represented India across Tests, ODIs,
        and T20Is.
      </>,

      <>
        Famous West Indies T20 Performances: Played crucial roles in T20Is with
        economical bowling and handy batting.
      </>,

      <>
        Tamil Nadu Domestic Hero: Star performer in Tamil Nadu cricket,
        excelling in both batting and bowling in domestic tournaments.
      </>,

      <>
        Young All-Rounder Recognition: Considered one of India’s most promising
        all-rounders due to his ability to contribute with both bat and ball.
      </>,
    ],

    category: "Cricketers",
  },
  {
    id: 14,
    image: "/images/pride-of-chennai/gukesh-dommaraju-chess.jpg",
    name: "Gukesh Dommaraju",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Chess Grandmaster (India’s youngest GM at the time in 2019, world’s 2nd youngest then)",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Became India’s youngest Grandmaster in 2019 at age 12 years, 7 months.
      </>,

      <>Was the world’s second-youngest GM at the time.</>,

      <>
        Became the youngest-ever undisputed World Chess Champion in 2024 at 18
        years.
      </>,

      <>
        Won individual gold and team bronze at the 44th Chess Olympiad (2022).
      </>,

      <>Won individual and team gold at the 45th Chess Olympiad (2024).</>,

      <>Reached a peak FIDE rating of 2794 (October 2024).</>,

      <>
        Became India’s top-rated player, surpassing Viswanathan Anand’s record.
      </>,
    ],

    category: "Chess",
  },
  {
    id: 15,
    image: "/images/pride-of-chennai/r-praggnanandhaa-chess.jpg",
    name: "R. Praggnanandhaa",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Chess Grandmaster (one of the youngest in history)",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Achieved Grandmaster status in 2018 at the age of 12 years and 10
        months.
      </>,

      <>Was the world’s second-youngest GM at that time.</>,

      <>Won the Under-18 World Youth Chess Championship in 2019.</>,

      <>Became the youngest Indian to surpass a FIDE rating of 2600 in 2019.</>,

      <>
        Defeated top players in major tournaments like the 2025 Norway Chess
        event.
      </>,
    ],

    category: "Chess",
  },
  {
    id: 16,
    image: "/images/pride-of-chennai/vaishali-ramesh-babu-chess.jpg",
    name: "Vaishali Ramesh Babu",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Chess Woman Grandmaster (WGM) & International Master (IM)",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>Achieved Woman International Master (WIM) in 2016.</>,

      <>Achieved Woman Grandmaster (WGM) in 2018.</>,

      <>Achieved International Master (IM) in 2021.</>,

      <>
        Won Girls’ World Youth Chess Championship in U-12 (2012) and U-14
        (2015).
      </>,

      <>Part of gold-winning team at 2020 Online Chess Olympiad.</>,

      <>
        Achieved Grandmaster norms including winning the 8th Fischer Memorial
        (2022).
      </>,

      <>
        Defeated top players like IM Carissa Yip in the 2025 FIDE Women’s World
        Cup.
      </>,
    ],

    category: "Chess",
  },
  {
    id: 17,
    image: "/images/pride-of-chennai/vijay-amritraj-tennis.jpg",
    name: "Vijay Amritraj",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Former professional tennis player & sports commentator",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Vijay Amritraj reached the quarterfinals at Wimbledon, showcasing his
        talent on grass courts.
      </>,

      <>
        He also reached the quarterfinals at the US Open, proving his skills on
        hard courts.
      </>,

      <>
        During his professional career, he won 16 singles titles, demonstrating
        consistency and high-level performance.
      </>,

      <>
        He claimed 13 doubles titles, highlighting his ability to work
        effectively with partners.
      </>,

      <>
        He led the Indian Davis Cup team to two finals, showing leadership and
        national pride.
      </>,

      <>
        After retiring, he became a respected sports commentator and is
        recognized as one of India’s greatest tennis players.
      </>,
    ],

    category: "Tennis",
  },
  {
    image: "/images/pride-of-chennai/anand-amritraj-tennis.jpg",
    name: "Anand Amritraj",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Former professional tennis player & Davis Cup player",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Anand Amritraj's major achievements as a former professional tennis
        player include reaching the Davis Cup finals twice (1974 and 1987) for
        India and achieving a Wimbledon doubles semi-final with his brother,
        Vijay Amritraj, in 1976.
      </>,

      <>
        He was a consistent member of the Indian Davis Cup team for two decades,
        a recipient of the ITF Davis Cup Commitment Award, and reached a singles
        ranking between 60 and 80, with a career-high singles ranking of No. 74
        in 1974.
      </>,
    ],

    category: "Tennis",
  },
  {
    image: "/images/pride-of-chennai/ramesh-krishnan-tennis.jpg",
    name: "Ramesh Krishnan",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Former professional tennis player, junior Grand Slam champion, Davis Cup player",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Ramesh Krishnan reached the fourth round at Wimbledon and the US Open,
        establishing himself on the international tennis stage.
      </>,

      <>
        He won 8 singles titles and 2 doubles titles during his professional
        career.
      </>,

      <>
        He represented India in the Davis Cup, contributing to the team’s
        performance in multiple tournaments.
      </>,

      <>
        Known for his smooth playing style, he became one of India’s most
        respected tennis players.
      </>,

      <>
        After retiring, he remained involved in tennis, coaching and mentoring
        younger players.
      </>,

      <>
        His achievements inspired a generation of Indian tennis players to
        compete globally.
      </>,
    ],

    category: "Tennis",
  },
  {
    image: "/images/pride-of-chennai/ramkumar-ramanathan-tennis.jpg",
    name: "Ramkumar Ramanathan",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      " Professional tennis player, ATP Tour competitor, Davis Cup representative",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Ramkumar Ramanathan has represented India in international tennis
        tournaments, including the Davis Cup.
      </>,

      <>
        He reached the second round at Wimbledon in singles, showcasing his
        skill on the global stage.
      </>,

      <>
        He has won multiple ATP Challenger titles and performed consistently in
        ITF events.
      </>,

      <>
        Known for his aggressive playing style, he has been one of India’s
        top-ranked tennis players.
      </>,

      <>
        He has contributed to India’s success in team events and continues to
        compete internationally.
      </>,

      <>
        His career has inspired young Indian tennis players to pursue
        professional tennis.
      </>,
    ],

    category: "Tennis",
  },
  {
    image: "/images/pride-of-chennai/ashok-amritraj-tennis.jpg",
    name: "Ashok Amritraj",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      " Former professional tennis player, later a Hollywood film producer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Ashok Amritraj was a professional tennis player who represented India in
        international tournaments.
      </>,

      <>
        He competed in Grand Slam events, including Wimbledon and the US Open.
      </>,

      <>
        He reached the later rounds in several international competitions,
        showcasing his talent on the global stage.
      </>,

      <>
        After retiring from professional tennis, he transitioned into a
        successful career as a film producer in Hollywood.
      </>,

      <>
        He has produced numerous films, bridging the worlds of sports and
        entertainment.
      </>,

      <>
        His journey has inspired many Indians to excel both in sports and in
        business ventures.
      </>,
    ],

    category: "Tennis",
  },
  {
    image: "/images/pride-of-chennai/sharath-kamal-table-tennis.jpg",
    name: "Sharath Kamal",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Professional Table Tennis Player, Right-hand attacker",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Sharath Kamal is one of India’s most accomplished table tennis players,
        representing the country in multiple international tournaments.
      </>,

      <>
        He has won several Commonwealth Games gold medals, both in singles and
        team events.
      </>,

      <>
        He has competed in multiple Olympic Games, showcasing his skills on the
        world stage.
      </>,

      <>
        He has claimed multiple Asian Championship medals, establishing himself
        as a top player in the continent.
      </>,

      <>
        Sharath Kamal has been ranked among the top Indian table tennis players
        for over a decade.
      </>,

      <>
        His dedication and performance have inspired a new generation of table
        tennis players in India.
      </>,
    ],

    category: "Table Tennis",
  },
  {
    image: "/images/pride-of-chennai/dipika-pallikal-squash.jpg",
    name: "Dipika Pallikal",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Professional Squash Player, Right-hand attacker",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Dipika Pallikal Karthik became the first Indian woman to enter the top
        10 of the PSA World Rankings in 2012.
      </>,

      <>
        She won three WSA titles in 2011, marking a significant milestone in
        Indian squash.
      </>,

      <>
        She secured India’s first-ever Commonwealth Games squash medal by
        winning gold in women’s doubles with Joshna Chinappa in 2014.
      </>,

      <>
        She has earned multiple medals at the Asian Games, including silver and
        bronze in doubles and team events.
      </>,

      <>
        For her outstanding achievements, she received the Arjuna Award in 2012.
      </>,

      <>
        She was honoured with the Padma Shri in 2014 for her contributions to
        Indian sports
      </>,
    ],

    category: "Squash",
  },
  {
    image: "/images/pride-of-chennai/joshna-chinappa-squash.jpg",
    name: "Joshna Chinappa",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Professional Squash Player, Right-hand attacker",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Joshna Chinappa became the first Indian to win the British Junior Squash
        Championship in 2003.
      </>,

      <>
        She has consistently been ranked among the world’s top squash players.
      </>,

      <>
        Partnering with Dipika Pallikal, she won India’s first-ever Commonwealth
        Games squash gold in women’s doubles in 2014.
      </>,

      <>
        She secured a silver medal in women’s doubles at the 2018 Commonwealth
        Games.
      </>,

      <>She has been a multiple-time national champion in squash.</>,

      <>
        She contributed to India’s success at the Asian Games, winning medals in
        both team and doubles events.
      </>,

      <>
        Her achievements have made her a role model and inspiration for future
        generations of Indian squash players.
      </>,
    ],

    category: "Squash",
  },
  {
    image: "/images/pride-of-chennai/syed-suhail-pasha-football.jpg",
    name: "Syed Suhail Pasha",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Forward",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Developed through the Chennaiyin FC U18 setup, showing early promise in
        football.
      </>,

      <>
        Made his professional debut for Chennai City FC in the I-League on
        December 17, 2019, against Aizawl FC.
      </>,

      <>
        Played for multiple clubs, including Chennaiyin B, Chennai City FC,
        Chennaiyin FC, TRAU FC, and Rajasthan United FC.
      </>,

      <>Currently contracted with Real Kashmir FC in the I-League.</>,

      <>
        Gained valuable experience in the Indian Super League (ISL) with
        Chennaiyin FC during the 2021–2022 season.
      </>,

      <>Recognized as an emerging talent in Indian football.</>,

      <>
        Contributed to team development and performance as a forward, showcasing
        skill and versatility.
      </>,
    ],

    category: "Football",
  },
  {
    image: "/images/pride-of-chennai/rajendran-mani-body-builder.jpg",
    name: "Rajendran Mani",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Bodybuilder; 14× Mr. India, 3× Mr. Asia, 2× Mr. World",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Mr. World Champion in 2013 and 2016, establishing himself as a leading
        figure in global bodybuilding
      </>,

      <>
        Mr. Asia Champion in 2009, 2016, and 2017, showcasing dominance in the
        Asian bodybuilding circuit
      </>,

      <>
        Mr. India Champion of Champions 14 times and Mr. Services Champion 12
        times, demonstrating consistent excellence in national competitions
      </>,

      <>
        Mr. Air Force Champion 15 times, highlighting his dedication and
        exceptional physique
      </>,

      <>
        Retired Indian Air Force Sergeant, serving for 15 years while pursuing
        bodybuilding
      </>,

      <>
        Founder of Slam Fitness Studio in Bengaluru, mentoring and training
        aspiring bodybuilders
      </>,

      <>
        Represented India internationally, recognized as one of India’s top
        bodybuilders, and contributed to promoting fitness and bodybuilding
        culture across the country
      </>,
    ],

    category: "Bodybuilding",
  },
  // {
  //   image: "/images/pride-of-chennai/bharat-raj-body-builder.jpg",
  //   name: "Bharat Raj",
  //   profession: "Chennai, Tamil Nadu.",
  //   bornPlace: "Chennai, Tamil Nadu",
  //   natureofWork: " Bodybuilder; Contemporary fitness athlete",
  //   about:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
  //   knowmoreLink: "",
  //   popupContent: [
  //     <>
  //       Chennai’s popular bodybuilder and social media influencer, originally a
  //       basketball player, turned to bodybuilding after injuries and now runs
  //       The Body Studio.{" "}
  //     </>,

  //     <>
  //       With 81,000 Instagram followers, he is recognized among Chennai’s top 25
  //       most desirable men.
  //     </>,
  //   ],

  //   category: "Bodybuilding",
  // },
  {
    image: "/images/pride-of-chennai/aditya-patel-racing-driver.jpg",
    name: "Aditya Patel",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Professional Racing Driver, Formula & GT Cars",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>Won the JK Tyre Junior National Karting Championship in 2001.</>,

      <>
        Made international racing debut in Formula BMW Pacific Championship
        (2008) with a podium finish.
      </>,

      <>
        Competed in Volkswagen Scirocco R-Cup, securing 2 wins and 2 podiums.
      </>,

      <>Won the SP4T category at the 24 Hours of Nürburgring in 2012.</>,

      <>Raced in ADAC GT Masters series in Germany with Team MS Racing.</>,

      <>
        Podium finishes in the International GT Open Series, finishing 6th in
        GT3 Pro-Am category (2014).
      </>,

      <>
        Competed in Audi R8 LMS Cup in Asia, winning the final race of the 2015
        season.
      </>,

      <>
        Achieved multiple podiums in Blancpain GT Series Asia (2017), narrowly
        missing the championship by 1 point.
      </>,

      <>
        Co-founded the Indian Racing League (2019) to promote motorsport in
        India.
      </>,

      <>
        Instrumental in launching Formula Regional Indian Championship and F4
        Indian Championship (2022) for Indian drivers.
      </>,
    ],

    category: "Motorsport and Racing",
  },
  {
    image: "/images/pride-of-chennai/karun-chandhok-f1-driver-commentator.jpg",
    name: "Karun Chandhok",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Formula 1 Driver & Racing Commentator",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Karun Chandhok is an Indian former Formula One driver and current
        commentator/analyst.{" "}
      </>,

      <>
        His achievements include winning the Indian National Championship (2000)
        and the Formula Asia Championship (2001), competing in GP2 with two
        wins, racing in Formula E for Mahindra Racing, participating in the Le
        Mans 24 Hours, and making two Formula One starts for Hispania Racing
        (2010) and Team Lotus (2011).
      </>,
    ],

    category: "Motorsport and Racing",
  },
  // {
  //   image: "/images/pride-of-chennai/rajini-krishnan-motorsport.jpg",
  //   name: "Rajini Krishnan (Motorsport)",
  //   profession: "Chennai, Tamil Nadu.",
  //   bornPlace: "Chennai, Tamil Nadu",
  //   natureofWork: "Professional Motorcycle Racer",
  //   about:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
  //   knowmoreLink: "",
  //   popupContent: [
  //     <>
  //       He became national road racing champion in 2003 and went on to win eight
  //       more National titles till 2011 and, after 10 years he won the 2021
  //       National title again on 05/02/2022, as the championship was delayed due
  //       to COVID-19.
  //     </>,
  //   ],

  //   category: "Motorsport and Racing",
  // },
  // {
  //   image: "/images/pride-of-chennai/mahaveer-raghunathan-racing-driver.jpg",
  //   name: "Mahaveer Raghunathan",
  //   profession: "Chennai, Tamil Nadu.",
  //   bornPlace: "Chennai, Tamil Nadu",
  //   natureofWork: "Professional Racing Driver, Formula Series",
  //   about:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
  //   knowmoreLink: "",
  //   popupContent: [
  //     <>
  //       Raghunathan started his racing career in karting in 2012, where he
  //       remained active until 2013.
  //     </>,

  //     <>
  //       He also made his formula racing debut in 2012 in four races of the JK
  //       Racing Asia Series for the Meco Racing team.
  //     </>,

  //     <>
  //       In 2013, he competed in the MRF Challenge Formula 1600, finishing sixth.
  //     </>,
  //   ],

  //   category: "Motorsport and Racing",
  // },
  {
    image: "/images/pride-of-chennai/alisha-abdullah-motorsport-racing.jpg",
    name: "Alisha Abdullah",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Alisha Abdullah (Motorsport / Racing)",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Alisha Abdullah's achievements include winning the MRF National
        Go-Karting Championship at age 13, becoming India's first woman to
        secure a podium finish at the international Toyota Vios Cup in 2014,
        winning the National Women Racing Championship in 2017, and founding the
        Alisha Abdullah Racing Academy.{" "}
      </>,

      <>
        She was also the first Indian woman to exceed 190 mph on a motorcycle.
      </>,
    ],

    category: "Motorsport and Racing",
  },
  {
    image: "/images/pride-of-chennai/r-k-narayan-writer.jpg",
    name: "R. K. Narayan",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Renowned Indian Novelist & Short Story Writer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      // <>
      //   R.K. Narayan won the Sahitya Akademi Award in 1960 for his novel The
      //   Guide.
      // </>,

      // <>
      //   He received the Filmfare Award for Best Story when The Guide was adapted
      //   into a film.
      // </>,

      // <>
      //   In 1964, he was honoured with the Padma Bhushan during the Republic Day
      //   awards.
      // </>,

      // <>
      //   Throughout his career, he won numerous literary awards recognizing his
      //   contributions to Indian literature.
      // </>,

      // <>
      //   He became one of India’s most celebrated English-language authors,
      //   inspiring generations of readers and writers.
      // </>,

      // <>
      //   His works have been widely translated and adapted, bringing Indian
      //   storytelling to a global audience.
      // </>,

      <>
        Pioneer of Indian English Literature – Among the first writers to
        popularize Indian themes in English.
      </>,

      <>
        Created “Malgudi” – A fictional town that became iconic in Indian
        literature.
      </>,

      <>
        Author of “Swami and Friends” (1935) – His debut novel, praised
        worldwide.
      </>,

      <>
        Padma Bhushan (1964) & Padma Vibhushan (2001) – India’s high civilian
        awards.
      </>,

      <>
        Sahitya Akademi Award (1961) – For his novel The Guide, which was later
        adapted into a famous Hindi film.
      </>,

      <>
        Elected Member of Rajya Sabha (1989–1995) – Contributed to education and
        literature discussions.
      </>,

      <>
        International Recognition – Admired by authors like Graham Greene, and
        nominated for the Nobel Prize in Literature multiple times.
      </>,
    ],

    category: "Writer",
  },
  {
    image: "/images/pride-of-chennai/sundar-pichai-business-tech.jpg",
    name: "Sundar Pichai",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "CEO of Google & Alphabet",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Sundar Pichai worked in engineering and product management at Applied
        Materials.
      </>,

      <>He gained experience in management consulting at McKinsey & Company.</>,

      <>
        He joined Google in 2004 and led product management and innovation for
        several major products.
      </>,

      <>
        He played a key role in the development of Google Chrome and ChromeOS.
      </>,

      <>
        He was largely responsible for the creation and success of Google Drive.
      </>,

      <>
        His contributions helped shape Google’s suite of client software
        products and innovation strategy.
      </>,
    ],

    category: "Tech",
  },
  {
    image: "/images/pride-of-chennai/indra-nooyi-business.jpg",
    name: "Indra Nooyi",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Former Chairperson & CEO of PepsiCo",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Indra Nooyi served as the Chairperson and CEO of PepsiCo from 2006 to
        2018.
      </>,

      <>
        She became the first woman of color and immigrant to lead a Fortune 50
        company.
      </>,

      <>
        She spearheaded the acquisition of Quaker Oats and Tropicana, expanding
        PepsiCo’s portfolio.
      </>,

      <>
        She introduced PepsiCo’s “Performance with Purpose” mission, emphasizing
        healthier products and sustainability.
      </>,

      <>
        Under her leadership, PepsiCo’s revenues and global presence increased
        significantly.
      </>,

      <>
        She has received numerous awards and has been recognized as one of the
        world’s most powerful women by Forbes and Fortune.
      </>,
    ],

    category: "Tech",
  },
  {
    image: "/images/pride-of-chennai/v-l-ethiraj-education.jpg",
    name: "V. L. Ethiraj",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Founder, Ethiraj College for Women",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Vellore Lakshmanaswamy Ethiraj was a prominent Indian lawyer who became
        the first Indian appointed as a Crown Prosecutor by the British Raj.
      </>,

      <>
        He served as the President of the Madras Bar Association, demonstrating
        leadership in the legal community.
      </>,

      <>
        He was a dedicated philanthropist who founded Ethiraj College for Women
        in Chennai, promoting women’s education.
      </>,

      <>
        His contributions helped advance legal practice and education in India.
      </>,

      <>
        He became a respected figure in both law and social service, leaving a
        lasting legacy.
      </>,

      <>
        His initiatives inspired future generations of lawyers and educators in
        the country.
      </>,
    ],

    category: "Research",
  },
  {
    image: "/images/pride-of-chennai/rajalakshmi-parthasarathy-education.jpg",
    name: "Rajalakshmi Parthasarathy",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Founder, Padma Seshadri Bala Bhavan",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>She was the founder and dean of the Padma Seshadri Bala Bhavan. </>,

      <>
        Rajalakshmi was awarded the Padma Shri in 2010, India's fourth highest
        civil honour for her contribution to literature and education.
      </>,
    ],

    category: "Research",
  },
  {
    image: "/images/pride-of-chennai/bala-v-balachandran-education.jpg",
    name: "Bala V. Balachandran",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Founder, Dean & Chairman, Great Lakes Institute of Management",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Academic career. Balachandran founded the Great Lakes Institute of
        Management, an independent business school in Chennai, India.
      </>,

      <>
        He was also a professor emeritus at the Kellogg School of Business at
        Northwestern University, where he has been on the faculty since 1973.
      </>,
    ],

    category: "Research",
  },
  {
    image: "/images/pride-of-chennai/jeppiaar-education.jpg",
    name: "Jeppiaar",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Founder, Jeppiaar Educational Trust & Chancellor, Sathyabama University",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        He was the founder and chairman of Jeppiaar Educational Trust,
        establishing several institutions in Tamil Nadu.
      </>,

      <>
        He founded and served as the Chancellor of Sathyabama University,
        shaping it into a leading institution.
      </>,

      <>
        He held the position of President of the Consortium for Professional,
        Arts and Science Colleges in Tamil Nadu.
      </>,

      <>
        He played a major role as one of the pioneers of privatized engineering
        education in Tamil Nadu.
      </>,

      <>
        His contributions helped expand access to higher education and inspired
        many in the academic field.
      </>,
    ],

    category: "Research",
  },
  {
    image: "/images/pride-of-chennai/subra-suresh-scientist-engineer.jpg",
    name: "Subra Suresh",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "President, Carnegie Mellon University; Former MIT Dean & NSF Director",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        He was the first Asian-born professor to lead any of the five schools at
        MIT and the first Asian-born scientist to lead the NSF.{" "}
      </>,
      <>
        Suresh was awarded the National Medal of Science, the highest honor
        accorded to a US scientist, by President Biden in a ceremony at the
        White House on 24 October 2023.
      </>,
    ],

    category: "Research",
  },
  {
    image: "/images/pride-of-chennai/dhanush-actor-singer-producer.jpg",
    name: "Dhanush",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Actor, Singer, Producer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Dhanush is a celebrated Indian actor, producer, singer, and filmmaker
        known for his versatility in Tamil cinema, with achievements including
        multiple National Film Awards and Filmfare Awards.{" "}
      </>,

      <>
        He rose to fame with films like Aadukalam, Asuran, and Raanjhanaa, and
        his song “Rowdy Baby” achieved massive global success.{" "}
      </>,

      <>
        As a producer under his company Wunderbar Films, he also made his
        directorial debut with Pa Paandi.
      </>,
    ],

    category: "Films",
  },
  {
    image: "/images/pride-of-chennai/a-r-rahman.jpg",
    name: "A. R. Rahman",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Composer, Music Producer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        A. R. Rahman, born January 6, 1967, in Chennai, Tamil Nadu, is a
        globally celebrated Indian composer, singer, songwriter, music producer,
        and philanthropist, known for his fusion of classical Indian music with
        electronic and world music.
      </>,

      <>
        His achievements include two Academy Awards, two Grammy Awards, a Golden
        Globe, a BAFTA Award, and multiple Filmfare Awards, recognized for films
        like Roja and Slumdog Millionaire. Nicknamed "the Mozart of Madras," he
        is a recipient of India's Padma Vibhushan award and is known for his
        humanitarian work.
      </>,
    ],

    category: "Music",
  },
  {
    image: "/images/pride-of-chennai/actor-vijay.jpg",
    name: "Vijay",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Leading Tamil Actor",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>Successful film career with multiple highest-grossing Tamil films.</>,

      <>
        Numerous awards and honors, including Kalaimaamani, Vijay Awards, SIIMA,
        and honorary doctorate.
      </>,

      <>
        Major box-office milestones, like pioneering the 50 Crore and 100 Crore
        Clubs.
      </>,

      <>International recognition for films like Mersal.</>,

      <>
        Massive fan following and influence, with festival-like celebrations of
        his birthday and releases.
      </>,

      <>Entry into politics, founding his own party.</>,
    ],

    category: "Films",
  },
  {
    image: "/images/pride-of-chennai/vikram-actor.jpg",
    name: "Vikram",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Leading Tamil Actor",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        His major achievements include a National Film Award for Pithamagan,
        eight Filmfare Awards South, four Tamil Nadu State Film Awards, and the
        Kalaimamani Award.
      </>,

      <>
        He is known for hit films like Sethu, Anniyan, Saamy, Deiva Thirumagal,
        I, and the Ponniyin Selvan series, and he was also featured on the
        Forbes India Celebrity 100 list in 2016 and 2018
      </>,
    ],

    category: "Films",
  },
  {
    image: "/images/pride-of-chennai/suriya-sivakumar-actor.jpg",
    name: "Suriya Sivakumar",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Leading Tamil Actor",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Suriya Sivakumar is a celebrated Tamil film actor, producer, and
        philanthropist, known for his versatile roles and significant
        contributions to cinema.{" "}
      </>,

      <>
        His notable achievements include winning two National Film Awards, being
        a consistent member of the Forbes India Celebrity 100 list, and
        establishing the Agaram Foundation to support education for
        underprivileged children.{" "}
      </>,

      <>
        He gained recognition with films like Nandha (2001), Kaakha Kaakha
        (2003), Ghajini (2005), Vaaranam Aayiram (2008), Soorarai Pottru (2020),
        and Jai Bhim (2021)
      </>,
    ],

    category: "Films",
  },
  {
    image: "/images/pride-of-chennai/yuvan-shankar-raja-composer-musician.jpg",
    name: "Yuvan Shankar Raja",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Music Composer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Composed music primarily for Tamil films, as well as a few Telugu,
        Kannada, and Hindi films.
      </>,

      <>
        Known for versatility and innovative use of Western music elements in
        film scores.
      </>,

      <>
        Credited with introducing hip hop to Tamil film music and starting the
        “era of remixes” in Tamil Nadu, including EDM and jazz mixes.
      </>,

      <>Frequently called the “BGM King” of Tamil cinema.</>,

      <>
        Won two Filmfare Awards South, five Mirchi Music Awards South, three
        Vijay Awards, and two Tamil Nadu State Film Awards.
      </>,
    ],

    category: "Music1",
  },
  {
    image: "/images/pride-of-chennai/santhanam-actor-comedian.jpg",
    name: "Santhanam",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Actor / Comedian",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Gained popularity with Star Vijay’s Lollu Sabha for comedic spoofs of
        Tamil films.
      </>,

      <>
        Made his film debut in Manmadhan (2004) and delivered acclaimed
        performances in Sachien (2005) and Polladhavan (2007).
      </>,

      <>
        Transitioned successfully to lead roles in films like Arai En 305-il
        Kadavul (2008) and Dhillukku Dhuddu (2016).
      </>,

      <>
        Made a successful comeback to comedy with DD Next Level (2025), blending
        humor with new genres.
      </>,

      <>Earned the title of “Comedy Superstar” in the Tamil film industry.</>,

      <>
        Received the Kalaimamani Award (2018), multiple Vijay Awards, Filmfare
        Awards South, SIIMA Awards, Ananda Vikatan Cinema Awards, and Edison
        Awards for his exceptional comedic performances.
      </>,
    ],

    category: "Music1",
  },
  {
    image: "/images/pride-of-chennai/anirudh-ravichander-composer-musician.jpg",
    name: "Anirudh Ravichander",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Composer, Musician",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Anirudh Ravichander s a prominent Indian music composer, singer, and
        producer known for his work in Tamil and Telugu cinema.{" "}
      </>,

      <>
        He gained global fame with the viral song "Why This Kolaveri Di" from
        his debut film 3. His achievements include numerous accolades, such as
        multiple Filmfare, SIIMA, and Edison Awards, and his music has been
        featured in many hit films like Kaththi, Petta, and Master, with viral
        hits like "Selfie Pulla" and "Kaathalae Kaathalae".
      </>,
    ],

    category: "Music1",
  },
  {
    image: "/images/pride-of-chennai/vijay-yesudas-playback-singer.jpg",
    name: "Vijay Yesudas",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Playback Singer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>Renowned Indian playback singer and actor.</>,

      <>
        His achievements include singing over 1,000 film songs in multiple
        languages, earning accolades such as three Kerala State Film{" "}
      </>,

      <>
        Awards, five Filmfare Awards, and four SIIMA Awards. He also made a mark
        in acting with roles in films like Maari (2015) and Padaiveeran (2018).
      </>,
    ],

    category: "Music1",
  },
  {
    image: "/images/pride-of-chennai/chitra-visweswaran-dancer.jpg",
    name: "Chitra Visweswaran",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Eminent Bharatanatyam exponent and guru; choreographer and cultural ambassador",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>Began learning dance at the age of three, showing early dedication.</>,

      <>Trained extensively in Bharatanatyam, ballet, Manipuri, and Kathak.</>,

      <>Completed her arangetram within ten months under T.A. Rajalakshmi.</>,

      <>
        Continued advanced training for nearly a decade with her guru T.A.
        Rajalakshmi.
      </>,

      <>
        Recognized as a leading Bharatanatyam dancer with performances
        nationally and internationally.
      </>,

      <>
        Received several prestigious awards for her contributions to classical
        dance, including the Padma Bhushan and Sangeet Natak Akademi Award.
      </>,
    ],

    category: "Dance",
  },
  {
    image: "/images/pride-of-chennai/padma-subrahmanyam-dancer.jpg",
    name: "Padma Subrahmanyam",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Famous Bharatanatyam dancer and researcher; known for contributions to classical dance and Natya Shastra",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Renowned Bharatanatyam dancer, choreographer, teacher, and research
        scholar.
      </>,

      <>
        Founded the Bharata Nrithyam dance form, contributing a unique style to
        classical dance.
      </>,

      <>
        Performed internationally, gaining recognition through films and
        documentaries.
      </>,

      <>
        Made significant contributions to research and preservation of classical
        Indian dance.
      </>,

      <>
        Received prestigious awards, including the Padma Bhushan and Sangeet
        Natak Akademi Award, for her exceptional work in dance.
      </>,
    ],

    category: "Dance",
  },
  {
    image:
      "/images/pride-of-chennai/sri-sabhapati-swami-religion-spiritual-leader.jpg",
    name: "Sri Sabhapati Swami",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "19th-century Yogi & Author",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>Renowned 19th-century yogi and spiritual teacher.</>,

      <>
        Authored several influential texts on Raja Yoga and meditation,
        including Siddhanta Darsanam.
      </>,

      <>
        Presented deep insights into yogic philosophy, higher consciousness, and
        unity of all beings.
      </>,

      <>
        Emphasized practices like inner realization, breath control, and the
        path to liberation.
      </>,

      <>
        Inspired both Indian and Western seekers, spreading yogic wisdom beyond
        India.
      </>,

      <>
        Recognized posthumously in spiritual literature for his contributions to
        yoga and meditation teachings.
      </>,
    ],

    category: "Religion",
  },
  {
    image:
      "/images/pride-of-chennai/sri-sabhapati-swami-religion-spiritual-leader.jpg",
    name: "Paruthiyur K. Santhanaraman",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Religious Writer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Respected religious and cultural writer specializing in Hindu spiritual
        literature.
      </>,

      <>
        Authored numerous books and commentaries on the Ramayana, Mahabharata,
        Bhagavad Gita, and Puranas.
      </>,

      <>
        Made complex scriptures accessible to the common reader through clear
        explanations.
      </>,

      <>
        Spread moral and spiritual values via lectures, articles, and
        storytelling.
      </>,

      <>Recognized as a leading voice in Tamil religious writing.</>,

      <>
        Works continue to inspire devotion, cultural pride, and a deeper
        understanding of India’s spiritual heritage.
      </>,
    ],

    category: "Religion",
  },
  {
    image: "/images/pride-of-chennai/subra-suresh-scientist-engineer.jpg",
    name: "Subra Suresh",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "President of Carnegie Mellon University; Former MIT Dean and NSF Director",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Subra Suresh is a distinguished scientist, engineer, and academic
        leader, recognized for his contributions in materials science,
        bioengineering, and higher education.{" "}
      </>,

      <>
        He has served as Dean of MIT’s School of Engineering and Director of the
        National Science Foundation. Suresh’s research spans biomechanics,
        nanotechnology, and materials science, influencing global scientific
        communities.{" "}
      </>,

      <>
        He is actively involved in mentoring, research, and international
        collaborations.{" "}
      </>,

      <>
        His work continues to advance science and education in Chennai and
        worldwide.
      </>,
    ],

    category: "Science",
  },
  {
    image: "/images/pride-of-chennai/kannan-soundararajan-mathematician.jpg",
    name: "Kannan Soundararajan",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Mathematician, Professor",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Kannan Soundararajan is a renowned mathematician specializing in number
        theory and analytic mathematics.
      </>,

      <>
        He has contributed significantly to the understanding of prime numbers,
        L-functions, and mathematical conjectures. Soundararajan has held
        faculty positions at Stanford University and other leading
        institutions.{" "}
      </>,

      <>
        He actively collaborates with researchers globally and mentors young
        mathematicians.
      </>,

      <>
        His work has strengthened Chennai’s presence in the global mathematical
        community. Soundararajan continues to inspire aspiring mathematicians in
        India.
      </>,
    ],

    category: "Science",
  },
  {
    image:
      "/images/pride-of-chennai/kirthi-jayakumar-social-impact-leader-entrepreneur.jpg",
    name: "Kirthi Jayakumar",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Social Entrepreneur, Activist",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Kirthi Jayakumar is a prominent social entrepreneur, activist, and
        founder of The Red Elephant Foundation, focusing on gender equality,
        women’s rights, and social justice.{" "}
      </>,

      <>
        She has worked extensively in Chennai and globally to promote
        peacebuilding, conflict resolution, and youth empowerment. Kirthi is a
        TEDx speaker, author, and policy advocate, recognized for innovative
        initiatives addressing social issues.{" "}
      </>,

      <>
        Her programs emphasize education, awareness, and community participation
        to create meaningful change.{" "}
      </>,

      <>
        She actively mentors young leaders and collaborates with governments,
        NGOs, and civil society. Kirthi’s work has made Chennai a hub for social
        innovation and inclusive development.
      </>,
    ],

    category: "Social",
  },
  {
    image: "/images/pride-of-chennai/ashok-elluswamy-engineer.jpg",
    name: "Ashok Elluswamy",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "AI & Autopilot Engineer, Tesla",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>Ashok Elluswamy is an Indian-origin robotics and software engineer.</>,

      <>
        He earned his Bachelor’s degree in Electronics and Communication from
        the College of Engineering, Guindy (Chennai), and went on to complete a
        Master’s in Robotics Systems Development at Carnegie Mellon
        University.{" "}
      </>,

      <>
        In 2014, he joined Tesla as the first engineer on its Autopilot team and
        has been instrumental in developing the company’s self-driving
        technology.
      </>,

      <>
        Since 2019, he has headed Tesla’s AI and Autopilot team, with Elon Musk
        recognizing him as pivotal to the company’s AI success.{" "}
      </>,

      <>
        Elluswamy’s journey from Chennai to Silicon Valley makes him a global
        tech leader and a true pride of Chennai.
      </>,
    ],

    category: "Tech",
  },
  {
    image: "/images/pride-of-chennai/chef-damodharan-chef.jpg",
    name: "Chef Damodharan",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Celebrity chef, TV host, Guinness record holder, Padma Shri awardee",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Chef Damu (Dr. Damodharan Kothandaraman) is a popular Indian celebrity
        chef, TV host, and judge on Tamil shows like Cooku with Comali.{" "}
      </>,

      <>
        He holds a Guinness World Record for the longest solo cooking marathon
        (2010) and became the first Indian chef to earn a Ph.D. in Hotel
        Management (2004). In 2025, he was honored with the Padma Shri for his
        contributions to culinary arts.
      </>,
    ],

    category: "Chef",
  },

  {
    image: "/images/pride-of-chennai/ilayaraja.jpg",
    name: "Ilaiyaraaja",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork: "Music Composer / Singer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>Composed music for 1,000+ films across multiple Indian languages</>,

      <>Created 7,000+ songs in his career</>,

      <>
        First Asian to compose a full symphony with Royal Philharmonic
        Orchestra, London (1993)
      </>,

      <>
        Won 5 National Film Awards for Best Music Direction & Background Score
      </>,

      <>Honoured with Padma Bhushan (2010) and Padma Vibhushan (2018)</>,

      <>
        Famous for blending Western classical with Indian folk & Carnatic music
      </>,

      <>Known worldwide as “Isaignani” (Musical Genius) & Maestro</>,
    ],

    category: "Music",
  },

  {
    image: "/images/pride-of-chennai/aravind-srinivas.jpg",
    name: "Aravind Srinivas",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Co-founder and CEO of Perplexity AI, a next-generation conversational search platform",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Ranked as India’s youngest billionaire in the Hurun India Rich List 2025
        with an estimated fortune of ₹21,190 crore
      </>,

      <>
        Founded Perplexity AI in 2022, an AI-driven search engine that delivers
        context-rich, human-like answers
      </>,

      <>
        Completed Electrical Engineering at IIT Madras and later pursued a PhD
        in Computer Science at UC Berkeley
      </>,

      <>
        Gained professional experience with leading global AI and technology
        organizations before launching Perplexity
      </>,

      <>
        Under his leadership, Perplexity AI grew rapidly, becoming a strong
        competitor in the global search and AI industry
      </>,

      <>
        Honoured as one of the most promising young leaders in the field of
        technology and innovation
      </>,
    ],

    category: "Tech",
  },

  {
    image: "/images/pride-of-chennai/muthulakshmi-reddy.jpg",
    name: "Muthu Lakshmi Reddy",
    profession: "Pudukottai, Tamil Nadu.",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: "Social Reformer, Doctor, Politician",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        First woman legislator in India – Elected to the Madras Legislative
        Council in 1927.
      </>,

      <>
        Founder of Adyar Cancer Institute (1954) along with Dr. Krishnamurthi.
      </>,

      <>
        Actively worked to abolish the Devadasi system and fought against child
        marriage.
      </>,

      <>Promoted women’s education, health, and empowerment in Tamil Nadu.</>,

      <>
        Received the Padma Bhushan (1956) for social work and contribution to
        medicine.
      </>,

      <>
        Advocated for women’s rights and gender equality through social reforms
        and legislation.
      </>,

      <>
        Mentored several women leaders and healthcare professionals in India.
      </>,
    ],

    category: "Medicine / Oncology",
  },
  {
    image: "/images/pride-of-chennai/v-shantha.jpg",
    name: "V. Santha",
    profession: "Chennai, Tamil Nadu.",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: "Oncologist, Chairperson of Cancer Institute (WIA), Chennai",
    about: "",
    knowmoreLink: "",
    popupContent: [
      <>
        Pioneered cancer care in India by transforming the Cancer Institute
        (WIA), Chennai, from a 12-bed facility in 1955 into a world-class cancer
        center.
      </>,

      <>
        Established the Tamil Nadu Cancer Registry Project, covering 80 million
        people, making it the largest registry globally.
      </>,

      <>
        Served on international health committees, including the WHO Advisory
        Committee on Cancer and the IARC Scientific Council.
      </>,

      <>
        Honored with major awards: Padma Vibhushan (2016), Padma Bhushan (2006),
        Padma Shri (1986), and the Ramon Magsaysay Award (2005).
      </>,

      <>
        Advocated for affordable cancer treatment, ensuring 60% of patients at
        the Cancer Institute received free or subsidized care.
      </>,

      <>
        Mentored future leaders in oncology, contributing to the development of
        specialists and scientists in cancer research and treatment.
      </>,

      <>
        Dedicated her life to service, living within the Cancer Institute and
        exemplifying lifelong commitment to cancer care.
      </>,
    ],

    category: "Medicine / Oncology",
  },

  //#################### NEW DR ADDED  ######################

  {
    image: "/images/pride-of-chennai/prathap-c.-reddy.png",
    name: "Dr. Prathap C. Reddy",
    profession: "Founder, Apollo Hospitals",
    bornPlace: "Tiruttani, Tamil Nadu",
    natureofWork: "Founder & Visionary Leader of Apollo Hospitals",
    about: "",
    knowmoreLink: "",
    popupContent: [
      <>
        Founded Apollo Hospitals, creating one of India’s largest and most
        trusted healthcare networks.
      </>,
      <>
        Pioneered telemedicine initiatives to bring advanced healthcare to
        remote and rural regions.
      </>,
      <>
        Introduced the Master Health Check program, promoting preventive
        healthcare across India.
      </>,
      <>
        Led numerous philanthropic initiatives in child health, cancer care, and
        rural healthcare.
      </>,
      <>
        Honored with prestigious awards such as Padma Bhushan and Padma
        Vibhushan for contributions to medicine.
      </>,
    ],
    category: "Medicine / Oncology",
  },

  {
    image: "/images/pride-of-chennai/badrinath.png",
    name: "Dr. S. S. Badrinath",
    profession: "Founder, Sankara Nethralaya",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Founder & Chairman Emeritus of Sankara Nethralaya.",
    about: "",
    knowmoreLink: "",
    popupContent: [
      <>
        Founded Sankara Nethralaya, establishing a world-class eye hospital
        offering high-quality care.
      </>,
      <>
        Advocated for affordable and accessible treatment, ensuring free or
        subsidized care for thousands of patients.
      </>,
      <>
        Developed ophthalmology training programs and fellowships to nurture
        future specialists.
      </>,
      <>
        Advanced research in ophthalmology, contributing vital knowledge and
        medical innovation.
      </>,
      <>
        Recipient of Padma Shri and Padma Bhushan for outstanding medical
        contributions.
      </>,
    ],
    category: "Medicine / Oncology",
  },

  {
    image: "/images/pride-of-chennai/Dr.-V.-Mohan.png",
    name: "Dr. V. Mohan",
    profession: "Diabetologist & Research Leader",
    bornPlace: "Chennai, Tamil Nadu",
    natureofWork:
      "Leading Diabetologist and Chairman of Mohan’s Diabetes Centre",
    about: "",
    knowmoreLink: "",
    popupContent: [
      <>
        Founded Dr. Mohan’s Diabetes Specialities Centre and the Madras Diabetes
        Research Foundation.
      </>,
      <>
        Conducted pioneering research in diabetes epidemiology, genomics, and
        diagnostic criteria.
      </>,
      <>
        Developed Mohan’s criteria for a type of pancreatic diabetes, improving
        clinical diagnosis.
      </>,
      <>
        Provided free or subsidized treatment for underprivileged diabetic
        patients.
      </>,
      <>
    Awarded prestigious honors such as Padma Shri and Dr. B.C. Roy National Award for excellence in medicine.

      </>,
    ],
    category: "Medicine / Oncology",
  },

  {
    image: "/images/pride-of-chennai/Dr.-T.S.-Chandrasekar.png",
    name: "Dr. T. S. Chandrasekar",
    profession: "Gastroenterology Expert, Founder of MedIndia Hospitals",
    bornPlace: "Tamil Nadu, India",
    natureofWork: "Founder & Chairman, MedIndia Hospitals Gastroenterologist",
    about: "",
    knowmoreLink: "",
    popupContent: [
      <>
        Founded MedIndia Hospitals specializing in gastroenterology and advanced
        GI endoscopy.
      </>,
      <>
        Performed over 23,000 endoscopic procedures, establishing expertise in
        the field.
      </>,
      <>
        Created teaching tools and training material for medical colleges across
        India.
      </>,
      <>
       Held national and international leadership roles, contributing to global gastroenterology standards and research
      </>,
      <>
       Recognized with honors such as Padma Shri and Tamil Nadu Best Doctor Award for outstanding medical service.
      </>,
    ],
    category: "Medicine / Oncology",
  },

  //################### NEW END ############

  {
    image: "/images/pride-of-chennai/ms-subbulakshmi.jpg",
    name: "Ms. Subu Lakshmi",
    profession: "Madurai, Tamil Nadu.",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: "Carnatic Singer, Musician",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>First musician in India to receive the Bharat Ratna (1998).</>,

      <>
        First Indian musician to perform at the United Nations General Assembly
        (1966).
      </>,

      <>
        Awarded Padma Bhushan (1954) and Padma Vibhushan (1975) for her
        contributions to music.
      </>,

      <>
        Won the Ramon Magsaysay Award (1974) for public service through music.
      </>,

      <>
        Known as the “Nightingale of India” for her soulful Carnatic
        performances.
      </>,

      <>
        Performed globally, promoting Indian classical music internationally.
      </>,

      <>
        Recorded numerous devotional albums, popularizing compositions of
        Tyagaraja, Muthuswami Dikshitar, and Papanasam Sivan.
      </>,
    ],

    category: "Singers",
  },

  {
    image: "/images/pride-of-chennai/shobana-photo.jpg",
    name: "Shobana",
    profession: "Thiruvananthapuram, Kerala",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: "Actress, Classical Dancer (Bharatanatyam)",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Renowned actress in Malayalam and Tamil cinema, known for her versatile
        performances.
      </>,

      <>
        Winner of two National Film Awards for Best Actress for her roles in
        Manichitrathazhu (1993) and Mitran (1994).
      </>,

      <>
        Trained Bharatanatyam dancer with international recognition and
        performed worldwide.
      </>,

      <>
        Received the Padma Shri (2006) for her contributions to arts and cinema.
      </>,

      <>
        Founder of Kalarpana School of Arts, promoting classical dance
        education.
      </>,

      <>
        Known for blending classical dance with contemporary storytelling on
        stage.
      </>,

      <>
        Served as a mentor and jury member in several dance competitions and
        film awards.
      </>,
    ],

    category: "Dance",
  },

  {
    image: "/images/pride-of-chennai/sudha-ragunathan-photo.jpg",
    name: "Sudha Ragunadhan",
    profession: "Chennai, Tamil Nadu",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: "Carnatic Vocalist, Composer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Awarded Padma Bhushan (2015) and Padma Shri (2004) for her exceptional
        contributions to Carnatic music.
      </>,

      <>
        Honored with Sangeetha Kalanidhi (2013), the highest title from the
        Madras Music Academy.
      </>,

      <>
        Received multiple prestigious titles including Kalaimamani (1993),
        Sangeetha Choodamani (1997), and Sangeetha Kalasarathy (2000).
      </>,

      <>
        Conferred with Mutthamizh Perarignar (2017) and Living Legend Award
        (2017) for promoting Tamil music and classical arts.
      </>,

      <>
        Released over 200 albums, including devotional, fusion music, and
        playback singing in Tamil cinema.
      </>,

      <>
        Performed internationally at venues like the United Nations, Théâtre de
        la Ville, Paris, and Alice Tully Hall, New York.
      </>,

      <>
        Founded the Sudhaarnava Academy (2017) to train students in Carnatic
        music worldwide.
      </>,

      <>
        Established the Samudhaaya Foundation (1999) to support healthcare and
        underprivileged communities.
      </>,

      <>
        Trained under Dr. M. L. Vasanthakumari and continues to mentor numerous
        students in classical music.
      </>,
    ],

    category: "Singers",
  },

  {
    image: "/images/pride-of-chennai/aruna-sairam.jpg",
    name: "Aruna Sairam",
    profession: "Chennai, Tamil Nadu",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: "Carnatic Vocalist, Composer",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Awarded Padma Shri (2009) for exceptional contribution to Carnatic
        music.
      </>,

      <>Honored with Sangeetha Kalanidhi (2006) by the Madras Music Academy.</>,

      <>First Carnatic musician to perform at BBC Proms (2011), London.</>,

      <>
        Performed internationally at venues like Royal Albert Hall, Théâtre de
        la Ville (Paris), and Alice Tully Hall (New York).
      </>,

      <>
        Founder of Sudhaarnava Academy (2017) to teach Carnatic music worldwide.
      </>,

      <>
        Launched the Samudhaaya Foundation (1999) to support healthcare for
        underprivileged communities.
      </>,

      <>Renowned for playback singing in Tamil cinema and devotional albums.</>,

      <>
        Explored fusion music collaborations, blending Carnatic with global
        music styles.
      </>,

      <>
        Mentored numerous students in the traditional gurukula style, carrying
        forward the Carnatic music legacy.
      </>,
    ],

    category: "Singers",
  },
  {
    image: "/images/pride-of-chennai/Santha-Dhananjayan.jpg",
    name: "Santha Dhananjayan",
    profession: "Chennai, Tamil Nadu",
    bornPlace: "Pudukottai, Tamil Nadu",
    natureofWork: "Bharatanatyam Dancer, Choreographer, Guru",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.   Voluptatibus, debitis.",
    knowmoreLink: "",
    popupContent: [
      <>
        Awarded the Padma Bhushan (2009) by the Government of India for her
        contribution to Bharatanatyam.
      </>,

      <>
        Honored with the Sangeet Natak Akademi Award, the highest recognition
        for performing artists in India.
      </>,

      <>Received the Kalaimamani Award from the Government of Tamil Nadu.</>,

      <>
        Conferred the prestigious Nritya Choodamani title by Krishna Gana Sabha,
        Chennai.
      </>,

      <>
        Co-founded Bharata Kalanjali (1968) in Chennai, a leading academy for
        Bharatanatyam and dance-theatre training.
      </>,

      <>
        Performed globally, presenting Bharatanatyam at prestigious venues
        across the US, UK, Europe, and Southeast Asia.
      </>,

      <>
        Known for innovative choreographies that blended tradition with
        contemporary social and cultural themes.
      </>,

      <>
        Trained and mentored numerous students who went on to become acclaimed
        dancers worldwide.
      </>,

      <>
        Honored with an Honorary Doctorate for her lifelong service in
        preserving and promoting Bharatanatyam.
      </>,
    ],

    category: "Dance",
  },
];
