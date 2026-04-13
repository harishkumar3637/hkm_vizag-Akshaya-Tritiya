import type { LucideIcon } from "lucide-react";
import {
  Flower2,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  Soup,
  Sparkles,
} from "lucide-react";

export const donationAmounts = [1100, 2100, 5100];

export const donorBenefits: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Soup,
    title: "Maha Prasadam Delivery",
    description: "Receive sanctified prasadam as a remembrance of your Akshaya Tritiya seva.",
  },
  {
    icon: ShieldCheck,
    title: "Narasimha Kavach Sutra",
    description: "A sacred kavach sutra blessed for protection, auspiciousness, and inner strength.",
  },
  {
    icon: HeartHandshake,
    title: "Temple Blessings",
    description: "Your name is offered in prayers before Sri Sri Krishna-Balaram for divine grace.",
  },
];

export const sevaItems = [
  {
    title: "Gau Seva",
    description:
      "Support nourishing fodder, shelter care, and loving protection for the temple cows.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80",
    icon: Flower2,
  },
  {
    title: "Annadan",
    description:
      "Help serve nourishing prasadam to devotees and visiting families on this sacred day.",
    image:
      "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1200&q=80",
    icon: Soup,
  },
  {
    title: "Temple Seva",
    description:
      "Contribute toward temple upkeep, floral decoration, lamps, and festive arrangements.",
    image:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=80",
    icon: Landmark,
  },
  {
    title: "Ritual Offerings",
    description:
      "Offer vastra, bhoga, flowers, and worship ingredients for the Akshaya Tritiya celebrations.",
    image:
      "https://images.unsplash.com/photo-1604608672516-f1b60fa11fcb?auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles,
  },
];

export const recentDonors = [
  { name: "Rajesh Sharma", amount: 5100, time: "2 min ago" },
  { name: "Meera Agrawal", amount: 2100, time: "7 min ago" },
  { name: "Aman Gupta", amount: 1100, time: "14 min ago" },
  { name: "Suman Devi", amount: 10000, time: "19 min ago" },
  { name: "Nitin Jain", amount: 2100, time: "24 min ago" },
  { name: "Kavita Joshi", amount: 3100, time: "28 min ago" },
  { name: "Vandana Mittal", amount: 5100, time: "35 min ago" },
  { name: "Rahul Bansal", amount: 501, time: "42 min ago" },
  { name: "Ritu Maheshwari", amount: 1100, time: "49 min ago" },
  { name: "Ankit Goyal", amount: 2100, time: "58 min ago" },
];

export const templeInfo = {
  title: "Gupt Vrindavan Dham",
  phone: "+91-97999 99881",
  email: "info@guptvrindavandham.org",
  address: "Hare Krishna Marg, Jagatpura, Jaipur-302017",
  heroImage: "https://guptvrindavandham.org/media/landingpage/Akshaya_Tritiya3.webp",
};
