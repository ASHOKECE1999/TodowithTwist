const tailwindBgColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-400",
  "bg-purple-600",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-orange-400",
  "bg-teal-500",
  "bg-cyan-500",
  "bg-rose-500",
  "bg-lime-500",
];

export const getRandomTailwindBg = () => {
  const index = Math.floor(Math.random() * tailwindBgColors.length);
  return tailwindBgColors[index];
};
