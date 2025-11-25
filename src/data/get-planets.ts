import { createServerFn } from '@tanstack/react-start'

const BASE_URL = "https://swapi.dev/api/"
const PATH = "planets"

const url = new URL(PATH, BASE_URL)

export const getPlanets = createServerFn({
  method: 'GET',
}).handler(async () => {
  const response = await fetch(url.href)
  const data = await response.json()
  console.log(data)
  return data;
})
