import RepoLink from "./RepoLink";

interface ProjectCardProps {
  title: string;
  tech: string[];
  desc: string;
  repo: string;
}

export default function ProjectCard({
  title,
  tech,
  desc,
  repo,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col text-accent bg-background/80 w-fit  2xl:max-w-2xl  h-fit p-5 border rounded-xl">
      <p className="font-body text-md md:text-lg lg:text-xl 2xl:text-2xl my-3 font-semibold">
        {title}
      </p>

      <div className="flex flex-wrap gap-2 my-2 text-sm md:text-md 2xl:text-lg">
        {tech.map((t) => (
          <span
            key={t}
            className="border border-accent px-2 py-1 lg:text-md rounded-2xl font-body font-light"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="font-body my-3 text-sm md:text-md 2xl:text-xl font-light">
        {desc}
      </p>

      <RepoLink name="Go to repo" link={repo} />
    </div>
  );
}
