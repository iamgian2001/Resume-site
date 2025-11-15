import "../index.css";

type RepoLinkProps = {
  name: string;
  link: string;
};

export default function RepoLink(props: RepoLinkProps) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="font-body border-b w-fit text-sm lg:text-md 2xl:text-lg opacity-70 hover:text-primary hover:opacity-100 z-50 "
      rel="noopener noreferrer"
    >
      {props.name}
    </a>
  );
}
