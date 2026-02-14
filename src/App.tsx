import { useState } from "react";

const benefits = [
  "Espaço Coca-Cola (Área VIP)",
  "Bar exclusivo",
  "Massagem desportiva",
  "Desconto para assessoria esportiva",
];

const UNIT_PRICE = 40;
const sizes = ["P", "M", "G", "GG"];

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    size: "",
    quantity: 1,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleBuy() {
    setError("");
    if (!form.name || !form.phone || !form.size || form.quantity < 1) {
      setError("Preencha nome, telefone, tamanho e quantidade.");
      return;
    }

    const endpoint = process.env.REACT_APP_WEB_APP_URL;
    if (!endpoint) {
      setError("Configure a variável REACT_APP_WEB_APP_URL.");
      return;
    }

    setIsSubmitting(true);

    const formEl = document.createElement("form");
    formEl.method = "POST";
    formEl.action = endpoint;
    formEl.style.display = "none";

    const payload: Record<string, string> = {
      action: "create_preference",
      name: form.name.trim(),
      phone: form.phone.trim(),
      size: form.size.trim(),
      quantity: String(form.quantity),
      price: String(UNIT_PRICE),
      redirect: "1",
    };

    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      formEl.appendChild(input);
    });

    document.body.appendChild(formEl);
    formEl.submit();
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.16),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 noise opacity-15" />

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 sm:py-8">
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
        <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 pt-2 sm:px-6 sm:pb-16 sm:pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
              21/02 · 15h
            </span>
            <h1 className="mt-6 font-display text-4xl tracking-wide sm:text-5xl lg:text-7xl">
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
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-md transition hover:bg-amber-300 sm:w-auto"
              >
                GARANTA JÁ O SEU
              </button>
              <a
                href="#beneficios"
                className="w-full rounded-full border border-amber-300/40 px-8 py-4 text-base font-semibold text-amber-200 transition hover:border-amber-200 hover:text-amber-100 sm:w-auto"
              >
                Veja os benefícios
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em] text-amber-100 sm:text-xs">
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

        <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-3">
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

        <section id="beneficios" className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-amber-400/10 p-6 shadow-xl sm:p-8 lg:p-12">
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

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full rounded-full bg-amber-400 px-10 py-4 text-base font-semibold text-slate-950 shadow-md transition hover:bg-amber-300 sm:w-auto"
              >
                GARANTA JÁ O SEU
              </button>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-6 sm:items-center sm:py-10">
          <button
            type="button"
            aria-label="Fechar modal"
            className="absolute inset-0 bg-slate-950/80"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/10 bg-slate-950/95 p-5 shadow-2xl sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                  Garanta já o seu
                </p>
                <h3 className="mt-2 font-display text-3xl tracking-wide text-amber-400">
                  Abadá Corre Folia
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition hover:border-white/30"
              >
                Fechar
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-start">
              <div className="relative overflow-hidden rounded-3xl bg-slate-900/60 p-4 shadow-xl">
                <img
                  src="/ABADA VENDA.png"
                  alt="Abadá oficial do Corre Folia"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>

              <form
                className="grid gap-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  handleBuy();
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                      Abadá oficial
                    </p>
                    <h4 className="mt-2 text-2xl font-semibold text-white">
                      R$ {UNIT_PRICE.toFixed(2).replace(".", ",")}
                    </h4>
                  </div>
                  <div className="rounded-full border border-amber-300/40 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-amber-100">
                    Pré-venda
                  </div>
                </div>

                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Nome completo
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, name: event.target.value }))
                    }
                    className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
                    placeholder="Seu nome"
                  />
                </label>

                <label className="flex flex-col gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                  Telefone
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      setForm((prev) => ({ ...prev, phone: event.target.value }))
                    }
                    className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-amber-300"
                    placeholder="(00) 00000-0000"
                  />
                </label>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Tamanho
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sizes.map((size) => {
                      const isActive = form.size === size;
                      return (
                        <button
                          key={size}
                          type="button"
                          onClick={() =>
                            setForm((prev) => ({ ...prev, size }))
                          }
                          className={`h-10 w-12 rounded-lg border text-sm font-semibold uppercase transition ${
                            isActive
                              ? "border-amber-300 bg-amber-400/20 text-amber-100"
                              : "border-white/10 bg-slate-900/60 text-slate-300 hover:border-amber-300/50"
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    Quantidade
                  </p>
                  <div className="mt-3 flex w-full items-center justify-between rounded-xl border border-white/10 bg-slate-900/60 sm:inline-flex sm:w-auto sm:justify-start">
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          quantity: Math.max(1, prev.quantity - 1),
                        }))
                      }
                      className="px-4 py-2 text-lg text-slate-300 transition hover:text-white"
                    >
                      -
                    </button>
                    <span className="min-w-[48px] text-center text-sm font-semibold text-white">
                      {form.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          quantity: prev.quantity + 1,
                        }))
                      }
                      className="px-4 py-2 text-lg text-slate-300 transition hover:text-white"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    Total: R${" "}
                    {(UNIT_PRICE * form.quantity)
                      .toFixed(2)
                      .replace(".", ",")}
                  </p>
                </div>

                {error && (
                  <p className="text-sm font-semibold text-amber-200">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-full bg-amber-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-md transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "GERANDO LINK..." : "GARANTA JÁ O SEU"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
