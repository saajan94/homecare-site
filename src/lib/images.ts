// Central place for all imagery. Swap these URLs for the client's photos
// when they arrive — nothing else in the app needs to change.
//
// These are Unsplash stock photos depicting caregiving for older adults.
// The <Img> component degrades to a labelled placeholder if any URL fails,
// so the layout stays intact while photos are being replaced.

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  heroCaregiver: u("1584515933487-779824d29309"),
  heroSecondary: u("1516307365426-bea591f05011"),
  companionship: u("1447452001602-7090c7ab2db3"),
  personalCare: u("1559839734-2b71ea197ec2"),
  memoryCare: u("1573497019940-1c28c88b4f3e"),
  respiteCare: u("1573496359142-b8d87734a5a2"),
  aboutTeam: u("1582750433449-648ed127bb54"),
  aboutStory: u("1512678089665-cff0e37b1fc1"),
  caregiverJoin: u("1594824476967-48c8b964273f"),
  caregiverPortrait: u("1607990281513-2c110a25bd8c"),
  locationsMap: u("1524661135-423995f22d0b"),
  ctaFamily: u("1454875392665-2ccf606b0c9e"),
} as const;

export type ImageKey = keyof typeof images;
