const strengths = [
  {
    label: "Design vision",
    title: "Interfaces con personalidad",
    description:
      "Pantallas limpias, elegantes y faciles de entender desde el primer vistazo.",
  },
  {
    label: "Development",
    title: "Codigo con intencion",
    description:
      "Estructuras pensadas para crecer sin perder claridad ni velocidad.",
  },
  {
    label: "Experience",
    title: "Uso simple y fluido",
    description:
      "Cada interaccion busca sentirse natural, rapida y profesional.",
  },
];

const highlights = [
  "Construccion de interfaces modernas para web",
  "Enfoque en orden visual, legibilidad y ritmo",
  "Experiencias listas para seguir creciendo",
];

export default function AboutsPage() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-[#f7f7f3] text-slate-900 shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.22),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),_transparent_30%)]" />

      <div className="relative grid gap-8 p-6 md:p-10 xl:grid-cols-[1.35fr_0.9fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-300/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            About Deivid Armero
          </div>

          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-500">
              Creative profile
            </p>
            <h1 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-slate-950 md:text-6xl">
              Deivid Armero
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Soy un desarrollador que disfruta crear productos web con una
              mezcla de orden, estilo y funcionalidad. Me interesa que cada
              pantalla no solo resuelva una necesidad, sino que tambien se vea
              actual, clara y bien cuidada.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white/85 p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {item.label}
                </p>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="rounded-[30px] bg-slate-950 p-6 text-white md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  Work philosophy
                </p>
                <h2 className="text-3xl font-black tracking-tight">
                  Hacer que lo funcional tambien se sienta memorable.
                </h2>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950">
                MiniPOS builder
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-cyan-300 text-sm font-black text-slate-950">
                    +
                  </span>
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="grid gap-4">
          <div className="rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                  Profile card
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                  Developer with taste for modern UI
                </h2>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
                DA
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-3xl bg-orange-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-700">
                  Focus
                </p>
                <p className="mt-3 text-2xl font-black text-slate-950">
                  UI/UX
                </p>
              </div>
              <div className="rounded-3xl bg-cyan-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  Style
                </p>
                <p className="mt-3 text-2xl font-black text-slate-950">
                  Clean
                </p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Energy
                </p>
                <p className="mt-3 text-2xl font-black text-slate-950">
                  High
                </p>
              </div>
              <div className="rounded-3xl bg-emerald-100 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Mindset
                </p>
                <p className="mt-3 text-2xl font-black text-slate-950">
                  Build
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-orange-500 via-amber-400 to-cyan-400 p-[1px] shadow-sm">
            <div className="rounded-[31px] bg-[#fffdf8] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                Personal statement
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Me gusta desarrollar proyectos que transmitan confianza desde la
                interfaz, con detalles visuales que eleven la experiencia sin
                perder simplicidad.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
