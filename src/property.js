// Local images keep the listing independent of the expiring iCloud link.
export const photos = [
  [
    8,
    "Private deck",
    "Private deck with outdoor dining, Adirondack chairs, and white railings",
  ],
  [
    10,
    "Updated kitchen",
    "Kitchen with white cabinetry, granite countertops, and stainless steel appliances",
  ],
  [
    13,
    "Room to gather",
    "Dining area with a table, ceiling fan, and sliding doors to the deck",
  ],
  [
    1,
    "A restful retreat",
    "Furnished bedroom with a ceiling fan, television, and blue bedding",
  ],
  [
    4,
    "Renovated bathroom",
    "Renovated bathroom with patterned tile and a tub with shower curtain",
  ],
  [9, "Outdoor living", "Covered deck with outdoor seating and white railings"],
  [
    11,
    "Kitchen details",
    "Kitchen showing the dishwasher, stove, microwave, and granite worktops",
  ],
  [12, "Dining area", "Dining area beside the kitchen and entry door"],
  [7, "Connected living", "Sitting area beside the interior spiral staircase"],
  [2, "Two-level layout", "Hallway leading to the interior spiral staircase"],
  [5, "Bathroom details", "Bathroom vanity, mirror, and patterned wall tile"],
  [
    6,
    "Space to settle in",
    "Additional interior space with a desk and seating",
  ],
  [
    3,
    "Welcome home",
    "Entry door with decorative glass and an adjacent window",
  ],
  [14, "A shore welcome", "Decorative glass entry door with a coastal wreath"],
].map(([number, label, alt]) => ({
  src: `${import.meta.env.BASE_URL}photos/property-${number}.jpg`,
  label,
  alt,
}));
