import promoImageOne from "../assets/images/andrej-lisakov-qURnsLMPHrk-unsplash.jpg";
import promoImageTwo from "../assets/images/photo-boards-KZNTEn2r6tw-unsplash.jpg";
import promoImageThree from "../assets/images/meric-dagli-3KJpF86nR4c-unsplash.jpg";

export const permanentPromos = [
  {
    title: "20% Off for First-Time Customers",
    description:
      "Welcome new clients with a 20% discount on their first detailing service.",
    image: promoImageOne,
  },
  {
    title: "Refer a Friend and Save 10%",
    description:
      "Get 10% off your next service when your friend completes their first booking",
    image: promoImageTwo,
  },
  {
    title: "Loyalty Program",
    description: "After every 5 services, get your 6th any service at 50% off.",
    image: promoImageThree,
  },
];

export const temporaryPromos = [
  {
    title: "January: New Year, New Car",
    description: "Start the year fresh with 15% off all detailing services.",
  },
  {
    title: "February: Valentine’s Shine",
    description: "Couples special: Book two cars for a combined 25% off.",
  },
  {
    title: "March: Spring Cleaning Special",
    description: "10% off interior detailing to clear out the winter mess.",
  },
  {
    title: "April: Shine into Spring",
    description: "Get 10% off any detailing with our ceramic service.",
  },
  {
    title: "May: Mother's Day Special",
    description: "10% off all detailing services as a gift for moms.",
  },
  {
    title: "June: Father's Day Detail",
    description: "10% off for all dads, or gift a detailing package.",
  },
  {
    title: "July: Summer Shine",
    description:
      "10% off paint correction services to keep your car looking its best.",
  },
  {
    title: "August: Back-to-School Clean",
    description: "10% off for teachers, students, and parents",
  },
  {
    title: "September: End of Summer Detail",
    description: "10% off for prepping your car for fall.",
  },
  {
    title: "October: Spooky Clean",
    description:
      "Enjoy 10% off any exterior detail package and get a free surprise",
  },
  {
    title: "November: Winter-Ready Special",
    description:
      "Prepare your car for winter with a 10% discount on our Signature Detail Package.",
  },
  {
    title: "December: Holiday Gift Package",
    description: "Buy a gift card and get 15% off your next service",
  },
];

const monthNow = new Date().getMonth();

export const currentTemporaryPromo = temporaryPromos[monthNow];
