
export const permanentPromos = [
  {
    title: "10% Off for First-Time Customers",
    description:
      "Welcome new clients with a 10% discount on their first detailing service.",
    image:
      "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/josep-martins-nAsdr5DC2Ss-unsplash.jpg",
  },
  {
    title: "Refer a Friend and Save 5%",
    description:
      "Get 5% off your next service when your friend completes their first booking",
    image:
      "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/photo-boards-KZNTEn2r6tw-unsplash.jpg",
  },
  {
    title: "Loyalty Program",
    description: "After every 6 services, get your 6th any service at 50% off.",
    image:
      "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/meric-dagli-3KJpF86nR4c-unsplash.jpg",
  },
];

export const temporaryPromos = [
  {
    title: "January: New Year, New Car",
    description: "Start the year fresh with 10% off all detailing services.",
  },
  {
    title: "February: Valentine’s Shine",
    description: "Couples special: Book two cars for a combined 15% off.",
  },
  {
    title: "March: Spring Cleaning Special",
    description: "10% off full detailing to clear out the winter mess.",
  },
  {
    title: "April: Shine into Spring",
    description: "Get 5% off any exterior detailing service.",
  },
  {
    title: "May: Mother's Day Special",
    description: "5% off all detailing services as a gift for moms.",
  },
  {
    title: "June: Father's Day Detail",
    description: "5% off for all dads, or gift a detailing package.",
  },
  {
    title: "July: Summer Shine",
    description:
      "5% off paint correction services to keep your car looking its best.",
  },
  {
    title: "August: Back-to-School Clean",
    description: "10% off for teachers, students, and parents",
  },
  {
    title: "September: End of Summer Detail",
    description: "10% off for full detailing to prepare your car for fall.",
  },
  {
    title: "October: Spooky Clean",
    description:
      "Enjoy 5% off any exterior detail service and get a free surprise",
  },
  {
    title: "November: Winter-Ready Special",
    description:
      "Prepare your car for winter with a 10% discount on our Full Detailing.",
  },
  {
    title: "December: Holiday Gift Package",
    description: "Buy a gift card and get 10% off your next service",
  },
];

const monthNow = new Date().getMonth();

export const currentTemporaryPromo = temporaryPromos[monthNow];
