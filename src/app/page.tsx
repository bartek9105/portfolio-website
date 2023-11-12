import { getProjects } from "./api/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
      <ul>
        {projects.map((project, id) => (
          <li key={id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
