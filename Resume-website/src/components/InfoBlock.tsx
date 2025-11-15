interface InfoBlockProps {
  title: string;
  children: React.ReactNode;
}

export function InfoBlock({ title, children }: InfoBlockProps) {
  return (
    <section className="w-full md:w-fit p-3 border bg-linear-to-br from-background via-neutral-800 to-green-950 border-accent rounded-2xl shadow-lg relative">
      <div className="absolute bg-[url(/waves2.svg)] opacity-20 inset-0 rounded-2xl" />
      <div className="flex flex-col relative z-10">
        <h2 className="font-heading text-3xl lg:text-4xl text-textDark font-light p-3">
          <span className="text-4xl text-primary font-semibold">
            {title.charAt(0)}
          </span>
          {title.slice(1)}
        </h2>

        {children}
      </div>
    </section>
  );
}
