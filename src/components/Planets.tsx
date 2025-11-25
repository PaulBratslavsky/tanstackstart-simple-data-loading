type Planet = {
  name: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  terrain: string;
  population: string;
}

interface PlanetsProps {
  planets: Array<Planet>;
}

const styles = {
  container: "p-8 bg-gray-900 min-h-screen",
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  card: "bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow",
  title: "text-xl font-semibold text-yellow-400 mb-4",
  content: "space-y-2 text-gray-300",
  label: "text-gray-500",
};

export function Planets({ planets }: PlanetsProps) {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {planets.map((planet) => (
          <div key={planet.name} className={styles.card}>
            <h2 className={styles.title}>{planet.name}</h2>
            <div className={styles.content}>
              <p><span className={styles.label}>Climate:</span> {planet.climate}</p>
              <p><span className={styles.label}>Terrain:</span> {planet.terrain}</p>
              <p><span className={styles.label}>Population:</span> {planet.population}</p>
              <p><span className={styles.label}>Diameter:</span> {planet.diameter} km</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




