const chooseRandomName = (names: string[]) => {
  const rand = Math.abs(Math.random() * names.length - 1)
  return names[Math.round(rand)]
}

const slugify = (text: string) => {
  return text
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('-')
}

export { chooseRandomName, slugify }
