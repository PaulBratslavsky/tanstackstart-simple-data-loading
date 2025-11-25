import { createFileRoute } from '@tanstack/react-router'
import { getPlanets } from '@/data/get-planets'
import { Planets } from '@/components/Planets'

export const Route = createFileRoute('/')({
  loader: async () => {
    const planetsData = await getPlanets()
    return { planets: planetsData.results }
  },
  component: App,
})

function App() {
  const { planets } = Route.useLoaderData()
  // return <div>{JSON.stringify(planets)}</div>
  return <Planets planets={planets} />
}
