export const chooseRandomName = (names: string[]) => {
  const rand = Math.abs(Math.random() * names.length - 1);
  return names[Math.round(rand)];
}