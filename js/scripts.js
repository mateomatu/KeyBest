// -----------------------------
// Data de los servicios
// -----------------------------

// TODO: CHEQUEAR TODO

const services = [
  {
    id: 1,
    show: true,
    title: "Snorkeling & Dolphin Watching",
    imageClass: "card__picture--1",
    slogan: "Dive into the adventure",
    description: `
      You'll board a 45ft Corinthian power catamaran, equipped with shaded seating and 
      plenty of room to relax.
      As the boat cruises into the calm backcountry waters, 
      the crew will share fascinating insights about the marine life and ecosystems 
      of the Florida Keys.
      The tour begins with snorkeling at one of the area's top spots – either the beautiful 
      Great Florida Reef or a nearby artificial reef, depending on the day's conditions. 
      You might spot colorful tropical fish, sea turtles, rays, starfish, and more. 
      Don't worry if it's your first time snorkeling – gear and instruction are included!

      Back on board, rinse off with fresh water, grab a cold drink, and get ready to search 
      for wild dolphins. This part of the cruise takes you through quiet waters near remote 
      islands where dolphins are often seen swimming, jumping, and socializing in the wild. 
    `,
    items: [
      "45ft Corinthian catamaran with shaded seating",
      "Snorkel at Great Florida Reef or an artificial reef (gear & instruction included)",
      "Spot tropical fish, turtles, rays & more",
      "Snacks, water, soda & beer (after snorkeling)",
      "Freshwater rinse & onboard bathroom",
      "Shuttle service available",
    ],
    link: "https://fareharbor.com/embeds/book/barefootbillyskw/items/273057/?ref=ASN-keybest&schedule-uuid=d5703a7d-be90-46bd-b5b0-09398c0b16eb&asn=keybest&full-items=yes&flow=no",
  },
  {
    id: 2,
    show: true,
    title: "Key West Sunset & Sushi Cruise",
    imageClass: "card__picture--2",
    slogan: "Unforgettable sunset",
    description: `Departing from Garrison Bight Marina, this peaceful cruise avoids the busy downtown routes and takes you through calm waters past famous local landmarks like the Southernmost Point, Fort Zachary Taylor, and the channel once used to navigate toward Cuba.
You’ll be cruising aboard a 42ft Corinthian power catamaran, with plenty of shaded seating and space to unwind. It’s the ideal way to kick off your evening plans or close out your trip in style.
The highlight? A carefully selected menu of elevated appetizers – think fresh sushi, Thai bites, artisan meats and cheeses, and French-inspired desserts. Everything is catered locally and included with your cruise, along with a great selection of complimentary drinks like wine, Prosecco, beer, and soft drinks.
This experience is run at limited capacity for a more intimate vibe – and it’s a favorite among couples, small groups, and travelers looking for a relaxed, upscale evening on the water.

Please note that departure times change with the seasons, so we’ll confirm the exact time when you book. Availability is limited, so don’t wait to reserve your seat!
`,
    items: [
      "42ft Corinthian catamaran with plenty of space",
      "Fresh sushi, Thai bites, artisan meats & desserts",
      "Wine, Prosecco, beer & soft drinks included",
      "Scenic route past Southernmost Point & Fort Zachary Taylor",
      "Small-group intimate vibe",
    ],
    link: "https://fareharbor.com/embeds/book/barefootbillyskw/items/273058/?ref=ASN-keybest&schedule-uuid=d5703a7d-be90-46bd-b5b0-09398c0b16eb&asn=keybest&full-items=yes&flow=no",
  },
  {
    id: 3,
    show: true,
    title: "Jet Ski Island Adventure",
    imageClass: "card__picture--3",
    slogan: "KEY WEST’S #1 THRILL RIDE",
    description: `Get ready for one of the most thrilling ways to explore Key West! This 90-minute guided Jet Ski tour circles the entire island—about 26–28 miles—offering a mix of high-speed excitement and scenic discovery. You’ll cruise past landmarks like the Navy base, cruise ship docks, sandbars, and remote mangroves while soaking up the sun and sea spray. 
`,
    items: [
      "Five scenic stops to catch your breath, snap photos, and learn fun local history",
      `20’ of free ride time to go full throttle or float in paradise`,
      "Experienced local guides who lead the way and ensure safety",
      "All equipment included, plus safety briefing and orientation",
      "Freshwater showers available after the ride",
    ],
    link: "https://fareharbor.com/embeds/book/barefootbillyskw/items/102691/?ref=ASN-keybest&schedule-uuid=d5703a7d-be90-46bd-b5b0-09398c0b16eb&asn=keybest&full-items=yes&flow=no",
  },
  {
    id: 4,
    show: true,
    title: "Private Tiki Boat Charter",
    imageClass: "card__picture--4",
    slogan: "Nature at its best",
    description: `Welcome to Key West Tiki Boat! Located in the Beachside Resort & Residences Key West. Come and explore the Florida Keys and all the famous sandbars in a fully decorated Tiki Boat with an upper sundeck, a cooler for your drinks and food, a 20-foot lily pad, paddle board, all while playing your own music on our Bluetooth stereo system.
Sit back and relax while your experienced hired driver helps you choose the perfect sandbar for you and your loved ones. You can choose from Snipes Key point, Mud Keys, Jewfish basin, Marvin Key, Boca Chica, or simply a nice boat ride to go and watch a breathtaking Sunset across from Mallory Square. So now you just have to pack your bags and come down to enjoy the Florida Keys' beautiful turquoise waters and make this day the adventure of a lifetime!
If you're ready to enjoy the best of Key West, this is one of the best bachelor party ideas available.
`,
    items: [
      `It’s the ultimate Key West party backdrop (Cruising the blue waters on a private tiki boat sets the perfect scene for unforgettable celebrations)`,
      "Sunsets, sea breezes, and squad time (Celebrate the end of single life with chilled vibes and breathtaking views)",
      "Bring your own drinks and snacks (Our coolers are iced down and ready so you can toast your way through the trip)",
      "Pick your adventure pace (Whether you’re snorkeling with marine life or just soaking up the sun, it’s totally your call)",
      "Roomy, relaxed, and totally customizable (Our tiki boats fit your group’s style—laid-back, lively, or somewhere in between)",
      "Make waves your way (From mellow moments to high-energy fun, we’ve got a charter that fits your celebration perfectly)",
    ],
  },
  {
    id: 5,
    show: true,
    title: "Double Scooter Rentals",
    imageClass: "card__picture--5",
    slogan: "Have fun!",
    description:
      "Double scooter rentals are perfect for beautiful memories with your loved ones! On the Island with a friend or a family member? A double scooter from Bone Island Rentals kindles long-lasting memories for you and your company. This package comes with a minimum amount of $65 to $225. Like the single scooter, this rental is not suitable for inexperienced individuals and individuals younger than 18.",
    link: "https://fareharbor.com/embeds/script/calendar/boneislandrentals/?fallback=simple&ref=Key%20Best%20-%20Affiliate&sheet-uuid=366ae0bc-fb58-4fc2-a31c-855790dc24f4&asn=keybest&full-items=yes&flow=698755",
  },
  {
    id: 6,
    show: true,
    title: "Cruiser Bike Rentals",
    imageClass: "card__picture--6",
    slogan: "For those who like adventure",
    description:
      "Our cruiser bike is probably what you will call a one size fits all. Unlike scooters, you do not need professional knowledge to ride a cruiser bike. It is ideal for an average biker seeking to explore the possibilities available in the home of sunset so all average bike riders are welcome to rent it. The rental rate for this bike ranges from $18 to a maximum of $120.",
    link: "https://fareharbor.com/embeds/book/islandsafarirentals/?sheet-uuid=66d2b0f5-1111-40c7-82c8-9ab0b6b002c1&asn=keybest&full-items=yes&flow=127347",
  },
  {
    id: 7,
    show: true,
    title: "Golf Carts",
    imageClass: "card__picture--7",
    slogan: "Chill & Play",
    description: `Experience the island’s stunning scenery and landmarks like never before in our comfortable and stylish golf carts, designed for groups of up to four or six passengers. Our tour takes you on an unforgettable journey through the streets of Key West, allowing you to fully immerse yourself in the island’s rich culture and history.`,
    items: ["Ages +21 - Explore Key West at your leisure!"],
    link: "https://fareharbor.com/embeds/script/calendar/boneislandrentals/?fallback=simple&ref=Key%20Best%20-%20Affiliate&sheet-uuid=366ae0bc-fb58-4fc2-a31c-855790dc24f4&asn=keybest&full-items=yes&flow=1012728",
  },
  {
    id: 8,
    show: true,
    title: "Private Charter Adventure",
    imageClass: "card__picture--8",
    slogan: "Your Day, Your Way",
    description: `Looking for a more personal, flexible way to experience the natural beauty of the Florida Keys? We’ll help you book a fully private charter for up to 6 guests – ideal for couples, families, or small groups wanting to get off the beaten path and explore at their own pace.
Departing from Garrison Bight Marina, this tour takes you into the calm, shallow backcountry waters that make the Keys so unique. Whether you want to snorkel over quiet reef patches, lounge on a floating mat at a secluded sandbar, or simply soak up the sun with a cold drink in hand – this trip is completely customizable to your vibe.
You'll be riding in comfort aboard one of the Barefoot tritoons – spacious 26-foot boats designed for relaxing days on the water. With cushioned bench seating, full upholstery, 360° open views, a large cooler with ice, and shaded areas under the bimini, it's the perfect setting for a laid-back tropical day. There’s even a lounge area at the back and a ladder for easy water access.`,
    items: [
      "Bottled water & coolers with ice (bring your own drinks and snacks!)",
      "Floating lily pad",
      "Sanitized snorkel gear",
      "Professional snorkeling instruction (if you need it!)",
    ],
    link: "https://fareharbor.com/embeds/book/barefootbillyskw/items/?ref=ASN-keybest&schedule-uuid=d5703a7d-be90-46bd-b5b0-09398c0b16eb&asn=keybest&flow=813823&full-items=yes",
  },
  {
    id: 9,
    show: true,
    title: "KEY WEST KAYAK RENTAL",
    imageClass: "card__picture--9",
    slogan: "Enjoy the ride",
    description: `Explore Key West by kayak, when you rent a kayak from Barefoot Billy’s Casa Marina location, you’ll push off right from the beach and begin your journey through some of the most gorgeous scenery and waters in Florida! Barefoot Billy’s kayak rentals include kayak, paddle, and personal flotation devices so you have everything you need to spend an unforgettable day on the water.`,
    items: [
      "Duration: 1 to 8 hours",
      "Location: Casa Marina Resort, 720 Seminole Street Key West, Florida 33040",
    ],
    link: "https://fareharbor.com/embeds/book/barefootbillyskw/items/102704/?ref=ASN-keybest&schedule-uuid=d5703a7d-be90-46bd-b5b0-09398c0b16eb&asn=keybest&full-items=yes&flow=no",
  },
  {
    id: 10,
    show: true,
    title: "KEY WEST PADDLE BOARD RENTAL",
    imageClass: "card__picture--10",
    slogan: "Play some time!",
    description: `Walk on the water on Key West, paddle boarding is the perfect way to see what this stunning island has to offer. You might even spot some local wildlife during your paddle as well. Hop in the water for a refreshing dip along the way.`,
    items: [
      "Duration: 1 to 8 hours",
      "Location: Casa Marina Resort, 720 Seminole Street Key West, Florida 33040",
    ],
    link: "https://fareharbor.com/embeds/book/barefootbillyskw/items/102700/?ref=ASN-keybest&schedule-uuid=d5703a7d-be90-46bd-b5b0-09398c0b16eb&asn=keybest&full-items=yes&flow=no",
  },
  {
    id: 11,
    show: true,
    title: "BOAT RACE VIEWING CRUISE",
    imageClass: "card__picture--11",
    slogan: "Watch out for the race!",
    description: `Feel the speed with front row seats for Race World Offshore's World Championships in Key West!
Our Seabreeze catamaran features comfortable seating and plenty of room to move around the deck, so you can get the best vantage point!`,
    items: [],
    link: "https://fareharbor.com/embeds/book/barefootbillyskw/items/273062/?ref=ASN-keybest&schedule-uuid=d5703a7d-be90-46bd-b5b0-09398c0b16eb&asn=keybest&full-items=yes&flow=no",
  },
]

// -----------------------------
// Filtrar servicios visibles
// -----------------------------
const visibleServices = services.filter((s) => s.show !== false)

// -----------------------------
// Render dinámico de tarjetas
// -----------------------------
const splideList = document.querySelector("#services-splide .splide__list")
visibleServices.forEach((service, index) => {
  const li = document.createElement("li")
  li.className = "splide__slide"
  li.innerHTML = `
    <div class="card">
      <div class="card__side">
        <div class="card__picture ${service.imageClass}">&nbsp;</div>
        <h4 class="card__heading">
          <span class="card__heading-span ${service.imageClass}">
            ${service.title}
          </span>
        </h4>
        <div class="card__details">
          <a href="#popup-${index}" class="btn btn--cta">More Info</a>
        </div>
      </div>
    </div>
  `
  splideList.appendChild(li)
})

// -----------------------------
// Render dinámico de popups
// -----------------------------
const body = document.querySelector("body")

visibleServices.forEach((service, index) => {
  const popup = document.createElement("div")
  popup.className = "popup"
  popup.id = `popup-${index}`

  const itemsList =
    service.items?.map((item) => `<li>${item}</li>`).join("") ?? ""

  // 👇 Solo renderiza el botón si hay link
  const reservationBtn = service.link
    ? `<a href="${service.link}" class="btn btn--green" target="_blank" rel="noopener noreferrer">Make a reservation</a>`
    : ""

  popup.innerHTML = `
    <div class="popup__content">
      <div class="popup__left popup__left--${service.id} u-hide-tab-down"></div>
      <div class="popup__right">
        <a href="#section-services" class="popup__close">&times;</a>
        <h2 class="heading-secondary u-margin-bottom-small">${service.title}</h2>
        <h3 class="heading-tertiary u-margin-bottom-small">${service.slogan}</h3>
        <p class="popup__text">${service.description}</p>
        <ul class="popup__list">${itemsList}</ul>
        ${reservationBtn}
      </div>
    </div>
  `

  document.body.appendChild(popup)
})

// -----------------------------
// Splide Config
// -----------------------------
const splide = new Splide("#services-splide", {
  type: "loop",
  perPage: 3,
  pagination: false,
  breakpoints: {
    900: {
      destroy: true, // <-- esto lo elimina en mobile/tablet
    },
  },
})

splide.mount()

// -----------------------------
// Navegación Mobile
// -----------------------------
document.querySelectorAll(".navigation__link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navi-toggle").checked = false
  })
})
