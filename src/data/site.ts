import { images, type ImageKey } from "../lib/images";

export const company = {
  name: "Compassionate Care Companions",
  tagline: "Care that feels like family",
  phone: "(703) 930-9030",
  phoneHref: "tel:+17039309030",
  email: "bless3c@gmail.com",
  address: ["Compassionate Care Companions", "P.O. Box 15", "Waterford, VA 20197"],
  hours: "Care available 24 hours a day, 7 days a week",
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: ImageKey;
  description: string;
  includes: string[];
};

export const services: Service[] = [
  {
    slug: "personal-care",
    title: "Personal Care",
    summary:
      "Respectful, hands-on help with the daily routines that keep life comfortable and dignified.",
    image: "personalCare",
    description:
      "Our caregivers assist with the personal tasks that can become harder with age, illness, or injury. We take the time to learn how each client likes things done, and we help in a way that protects privacy and independence.",
    includes: [
      "Bathing, grooming, and dressing",
      "Mobility, transfers, and fall prevention",
      "Toileting and incontinence care",
      "Medication reminders",
      "Feeding assistance and hydration support",
    ],
  },
  {
    slug: "companion-care",
    title: "Companion Care",
    summary:
      "A friendly, familiar presence for conversation, activities, errands, and a safer day at home.",
    image: "companionship",
    description:
      "Companionship is at the heart of what we do. A regular caregiver becomes a trusted friend who shares meals, hobbies, and outings, and who keeps an eye on wellbeing so small changes are caught early.",
    includes: [
      "Conversation and shared activities",
      "Meal planning and preparation",
      "Light housekeeping and laundry",
      "Grocery shopping and errands",
      "Transportation to appointments and social events",
    ],
  },
  {
    slug: "memory-care",
    title: "Memory Care",
    summary:
      "Specialized support for people living with Alzheimer's disease and other forms of dementia.",
    image: "memoryCare",
    description:
      "Caring for someone with memory loss calls for patience, routine, and training. Our caregivers use approaches that reduce anxiety and confusion, keep familiar routines in place, and give families reliable relief.",
    includes: [
      "Consistent daily routines and gentle redirection",
      "Safety monitoring and wandering prevention",
      "Engaging, memory-friendly activities",
      "Support with eating, sleeping, and personal care",
      "Guidance and updates for family members",
    ],
  },
  {
    slug: "respite-care",
    title: "Respite Care",
    summary:
      "Short-term coverage so family caregivers can rest, travel, or simply take a breath.",
    image: "respiteCare",
    description:
      "Family caregivers need care too. Whether you need a few hours each week or coverage for a longer trip, we step in with the same consistency and attention you would give yourself.",
    includes: [
      "Scheduled weekly breaks",
      "Overnight and 24-hour coverage",
      "Vacation and travel coverage",
      "Post-hospitalization support",
      "Flexible scheduling that adjusts as needs change",
    ],
  },
];

export const values = [
  {
    title: "The right caregiver, matched with care",
    body: "We introduce clients to caregivers chosen for personality and skills, not just availability, and we keep that match consistent.",
  },
  {
    title: "A plan built around one person",
    body: "Every care plan starts with an in-home visit and is reviewed regularly as needs change.",
  },
  {
    title: "Trained, screened, and supported",
    body: "Caregivers are employees, background-checked, insured, and backed by a care team that is reachable around the clock.",
  },
  {
    title: "Families kept in the loop",
    body: "You get regular updates and a direct line to a care coordinator who knows your family.",
  },
];

export const steps = [
  {
    step: "01",
    title: "Free in-home consultation",
    body: "We visit to understand the person, the home, the routines, and what would make daily life easier.",
  },
  {
    step: "02",
    title: "A personalized care plan",
    body: "We build a written plan covering tasks, schedule, goals, and safety, and we adjust it as things change.",
  },
  {
    step: "03",
    title: "Meet your caregiver",
    body: "We match a caregiver to the plan and personality, introduce them in person, and confirm the fit.",
  },
  {
    step: "04",
    title: "Ongoing support",
    body: "A care coordinator checks in, supervises care, and is available any time you have a question.",
  },
];


export const faqs = [
  {
    q: "How quickly can care start?",
    a: "In most cases we can begin within 24 to 48 hours of your consultation. Urgent situations, such as a hospital discharge, are often handled the same day.",
  },
  {
    q: "Is there a minimum number of hours?",
    a: "Our standard minimum is four hours per visit, which lets a caregiver do meaningful work rather than rush. We also offer overnight and live-in schedules.",
  },
  {
    q: "Are your caregivers employees or contractors?",
    a: "Every caregiver is a W-2 employee. They are background-checked, bonded, insured, trained, and covered by workers' compensation, so families are never the employer of record.",
  },
  {
    q: "Do you accept long-term care insurance?",
    a: "Yes. We work with most long-term care insurance carriers and can bill them directly. We also accept private pay and certain Medicaid waiver programs.",
  },
  {
    q: "What if we do not click with our caregiver?",
    a: "Tell your care coordinator. We will make a change promptly and without any awkwardness. A good match is the whole point.",
  },
];

export const locations = [
  { city: "Riverton", region: "Central County", phone: "(703) 930-9030" },
  { city: "Oakmont", region: "Central County", phone: "(703) 930-9030" },
  { city: "Fairhaven", region: "North County", phone: "(703) 930-9030" },
  { city: "Lakeside", region: "North County", phone: "(703) 930-9030" },
  { city: "Cedar Springs", region: "South County", phone: "(703) 930-9030" },
  { city: "Brookfield", region: "South County", phone: "(703) 930-9030" },
];

export type NavItem = { label: string; to: string };
export type NavMenu = { label: string; to: string; items?: NavItem[] };

// Navigation modeled on comforcare.com. Items without a real page in this app
// resolve to a shared placeholder route (see App.tsx / StubPage).
//
// `navMenus` is the primary service navigation. `utilityMenus` sits in a slim
// bar above it for lower-traffic, company-level links.
export const navMenus: NavMenu[] = [
  {
    label: "In-Home Care Services",
    to: "/services",
    items: [
      { label: "24-Hour Care Service", to: "/in-home-care/24-hour-care-service" },
      { label: "Dementia Care", to: "/dementia-care" },
      { label: "Disability Management", to: "/in-home-care/disability-management" },
      { label: "Light Housekeeping", to: "/in-home-care/light-housekeeping" },
      { label: "Long-Term Care Insurance", to: "/in-home-care/long-term-care-insurance" },
      { label: "Patient-Centered Care", to: "/in-home-care/patient-centered-care" },
      { label: "Personal In-Home Care", to: "/in-home-care/personal-in-home-care" },
      { label: "Respite and Short-Term Care", to: "/in-home-care/respite-and-short-term-care" },
      { label: "Supporting a Recent Hospitalization", to: "/in-home-care/transitions-of-care" },
      { label: "Senior and Elder Care Management", to: "/in-home-care/senior-and-elder-care-management" },
    ],
  },
  {
    label: "Dementia Care",
    to: "/dementia-care",
    items: [
      { label: "In-Home Care for Alzheimer's/Dementia", to: "/dementia-care/in-home-care-for-alzheimers" },
    ],
  },
  {
    label: "For Professionals",
    to: "/for-professionals",
    items: [
      { label: "Reducing Hospital Readmission", to: "/for-professionals/reducing-hospital-readmission" },
    ],
  },
];

export const utilityMenus: NavMenu[] = [
  {
    label: "About",
    to: "/about",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Home Health Care vs In-Home Care", to: "/resources/home-health-care-vs-in-home-care" },
    ],
  },
  {
    label: "Careers",
    to: "/careers",
    items: [
      { label: "Caregiver Positions", to: "/careers/caregiver-positions" },
      { label: "Apply", to: "/careers/apply" },
    ],
  },
];

export const caregiverPerks = [
  "Competitive pay with weekly direct deposit",
  "Health, dental, and vision benefits for eligible employees",
  "Paid training and continuing education",
  "Flexible schedules that fit your life",
  "Consistent clients close to home",
  "A care team that answers when you call",
];

export { images };
