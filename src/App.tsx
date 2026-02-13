const benefits = [
  "Espaço Coca-Cola (Área VIP)",
  "Bar exclusivo",
  "Massagem desportiva",
  "Desconto para assessoria esportiva",
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 noise opacity-15" />

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 p-2">
              <img
                src="/LOGO carnava.png"
                alt="Logo Carnava"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Corre Folia
              </p>
              <p className="font-display text-2xl tracking-wide">
                Ressaca de Carnaval
              </p>
            </div>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
              21/02 · 15h
            </span>
            <h1 className="mt-6 font-display text-5xl tracking-wide sm:text-6xl lg:text-7xl">
              Corre Folia – Ressaca de Carnaval
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-200 sm:text-xl">
              A corrida termina, mas o carnaval continua em um sunset com clima
              de baile.
            </p>

            <div className="mt-8 lg:hidden">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-400/20 via-transparent to-amber-500/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl bg-slate-900/50 p-3 shadow-xl">
                  <img
                    src="/ABADA VENDA.png"
                    alt="Abadá oficial do Corre Folia"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#beneficios"
                className="rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-md transition hover:bg-amber-300"
              >
                GARANTA JÁ O SEU
              </a>
              <a
                href="#beneficios"
                className="rounded-full border border-amber-300/40 px-8 py-4 text-base font-semibold text-amber-200 transition hover:border-amber-200 hover:text-amber-100"
              >
                Veja os benefícios
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-amber-100">
              {[
                "Corrida 5 km",
                "Bloco no Raízes do Mar",
                "Sunset",
              ].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-amber-300/30 bg-amber-400/10 px-5 py-2.5 shadow-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-400/20 via-transparent to-amber-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-slate-900/50 p-3 shadow-xl">
              <img
                src="/ABADA VENDA.png"
                alt="Abadá oficial do Corre Folia"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 shadow-lg">
            <h3 className="font-display text-2xl tracking-wide text-amber-400">
              Data e horário
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              21/02 · Encontro às 15h · Largada às 15h30.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 shadow-lg">
            <h3 className="font-display text-2xl tracking-wide text-amber-400">
              Ponto de encontro
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              Tombowl · R. José Saúda, 201 - Jardim Guaiuba, Guarujá - SP,
              11421-070.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 shadow-lg">
            <h3 className="font-display text-2xl tracking-wide text-amber-400">
              Chegada
            </h3>
            <p className="mt-3 text-sm text-slate-200">
              Raízes do Mar Hotel · R. Estrela do Mar, 1110 - Jardim Guaiuba,
              Guarujá - SP, 11421-240.
            </p>
          </div>
        </section>

        <section id="beneficios" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-amber-400/10 p-8 shadow-xl lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="font-display text-4xl tracking-wide text-amber-400">
                  Garanta já o seu abadá!
                </h2>
                <p className="mt-3 max-w-xl text-sm text-slate-200">
                  O Corre Folia termina em um bloco de carnaval no Raízes do Mar.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/5 bg-slate-950/30 px-5 py-4 text-sm text-slate-200"
                >
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="#beneficios"
                className="rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-md transition hover:bg-amber-300"
              >
                GARANTA JÁ O SEU
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
