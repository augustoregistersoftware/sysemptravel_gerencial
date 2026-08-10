"use client";

import {
  Plane,
  LayoutDashboard,
  Wallet,
  Receipt,
  Users,
  Settings,
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  Hotel,
  Utensils,
  Car,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <div className="flex min-h-screen">

        {/* SIDEBAR */}
        <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white px-5 py-6 lg:flex">

          {/* Logo */}
          <div className="mb-10 flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#315da8] text-white shadow-md">
              <Plane size={21} />
            </div>

            <div>
              <h1 className="font-bold text-slate-800">SYSEMP</h1>
              <p className="text-xs text-slate-400">Travel</p>
            </div>
          </div>

          {/* Menu */}
          <nav className="flex flex-1 flex-col gap-2">

            <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Principal
            </p>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl bg-[#315da8] px-4 py-3 text-sm font-semibold text-white shadow-md"
            >
              <LayoutDashboard size={19} />
              Dashboard
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100"
            >
              <Plane size={19} />
              Viagens
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100"
            >
              <Receipt size={19} />
              Despesas
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100"
            >
              <Wallet size={19} />
              Financeiro
            </a>

            <p className="mb-2 mt-7 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Administração
            </p>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100"
            >
              <Users size={19} />
              Usuários
            </a>

            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-100"
            >
              <Settings size={19} />
              Configurações
            </a>
          </nav>

          {/* User */}
          <div className="rounded-2xl bg-slate-50 p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#315da8] font-bold text-white">
                AR
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  Augusto Register
                </p>
                <p className="text-xs text-slate-400">
                  Administrador
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <section className="flex-1">

          {/* HEADER */}
          <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6 lg:px-10">

            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Dashboard
              </h2>
              <p className="text-sm text-slate-400">
                Visão geral das suas viagens
              </p>
            </div>

            <div className="flex items-center gap-4">

              <div className="hidden items-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 md:flex">
                <Search size={18} className="text-slate-400" />
                <input
                  className="w-40 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  placeholder="Pesquisar..."
                />
              </div>

              <button className="relative rounded-xl p-2.5 transition hover:bg-slate-100">
                <Bell size={20} className="text-slate-500" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
              </button>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#315da8] text-sm font-bold text-white lg:hidden">
                AR
              </div>
            </div>
          </header>

          {/* DASHBOARD */}
          <div className="p-6 lg:p-10">

            {/* Welcome */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold">
                Olá, Augusto 👋
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Aqui está o resumo financeiro das suas viagens.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-blue-50 p-3 text-[#315da8]">
                    <Wallet size={21} />
                  </div>

                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
                    <TrendingUp size={14} />
                    12,5%
                  </span>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Total gasto
                </p>

                <h4 className="mt-1 text-2xl font-bold">
                  R$ 48.650,00
                </h4>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                    <Plane size={21} />
                  </div>

                  <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-600">
                    +4
                  </span>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Viagens realizadas
                </p>

                <h4 className="mt-1 text-2xl font-bold">
                  24
                </h4>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                    <TrendingUp size={21} />
                  </div>

                  <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
                    +8,2%
                  </span>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Orçamento disponível
                </p>

                <h4 className="mt-1 text-2xl font-bold">
                  R$ 11.350,00
                </h4>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
                    <Receipt size={21} />
                  </div>

                  <span className="flex items-center gap-1 text-xs font-semibold text-red-500">
                    <TrendingDown size={14} />
                    3,4%
                  </span>
                </div>

                <p className="mt-5 text-sm text-slate-400">
                  Despesas pendentes
                </p>

                <h4 className="mt-1 text-2xl font-bold">
                  R$ 4.280,00
                </h4>
              </div>

            </div>

            {/* CHART + CATEGORIES */}
            <div className="mt-6 grid gap-6 xl:grid-cols-3">

              {/* CHART */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-2">

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold">
                      Gastos por período
                    </h4>
                    <p className="mt-1 text-xs text-slate-400">
                      Comparativo dos últimos 6 meses
                    </p>
                  </div>

                  <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs outline-none">
                    <option>2026</option>
                    <option>2025</option>
                  </select>
                </div>

                <div className="mt-8 flex h-64 items-end gap-5 border-b border-slate-100 px-2">

                  {[45, 62, 48, 78, 65, 88].map((height, index) => (
                    <div
                      key={index}
                      className="group flex flex-1 flex-col items-center justify-end gap-2"
                    >
                      <div
                        style={{ height: `${height}%` }}
                        className="w-full max-w-12 rounded-t-lg bg-[#315da8] opacity-80 transition group-hover:opacity-100"
                      />

                      <span className="text-xs text-slate-400">
                        {["Mar", "Abr", "Mai", "Jun", "Jul", "Ago"][index]}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

              {/* CATEGORIES */}
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold">
                      Despesas
                    </h4>
                    <p className="mt-1 text-xs text-slate-400">
                      Por categoria
                    </p>
                  </div>

                  <button className="text-xs font-semibold text-[#315da8]">
                    Ver tudo
                  </button>
                </div>

                <div className="mt-7 space-y-6">

                  <Category
                    icon={<Plane size={18} />}
                    name="Passagens"
                    value="R$ 18.450"
                    percent="38%"
                    width="38%"
                    bg="bg-blue-500"
                  />

                  <Category
                    icon={<Hotel size={18} />}
                    name="Hospedagem"
                    value="R$ 14.200"
                    percent="29%"
                    width="29%"
                    bg="bg-purple-500"
                  />

                  <Category
                    icon={<Utensils size={18} />}
                    name="Alimentação"
                    value="R$ 9.100"
                    percent="19%"
                    width="19%"
                    bg="bg-orange-500"
                  />

                  <Category
                    icon={<Car size={18} />}
                    name="Transporte"
                    value="R$ 6.900"
                    percent="14%"
                    width="14%"
                    bg="bg-emerald-500"
                  />

                </div>
              </div>
            </div>

            {/* TRIPS */}
            <div className="mt-6 rounded-2xl border border-slate-100 bg-white shadow-sm">

              <div className="flex items-center justify-between border-b border-slate-100 p-6">
                <div>
                  <h4 className="font-bold">
                    Viagens recentes
                  </h4>

                  <p className="mt-1 text-xs text-slate-400">
                    Últimas viagens cadastradas
                  </p>
                </div>

                <button className="flex items-center gap-1 text-sm font-semibold text-[#315da8]">
                  Ver todas
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">

                  <thead className="bg-slate-50 text-xs uppercase text-slate-400">
                    <tr>
                      <th className="px-6 py-4">Viagem</th>
                      <th className="px-6 py-4">Período</th>
                      <th className="px-6 py-4">Responsável</th>
                      <th className="px-6 py-4">Valor</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">

                    <Trip
                      destination="São Paulo → Manaus"
                      period="05 Ago - 09 Ago"
                      responsible="Carlos Silva"
                      value="R$ 4.850,00"
                      status="Concluída"
                    />

                    <Trip
                      destination="São Paulo → Recife"
                      period="12 Ago - 16 Ago"
                      responsible="Mariana Costa"
                      value="R$ 2.340,00"
                      status="Em andamento"
                    />

                    <Trip
                      destination="Campinas → Brasília"
                      period="20 Ago - 23 Ago"
                      responsible="João Mendes"
                      value="R$ 3.120,00"
                      status="Planejada"
                    />

                  </tbody>

                </table>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}


/* COMPONENTE DE CATEGORIA */

function Category({
  icon,
  name,
  value,
  percent,
  width,
  bg,
}: {
  icon: React.ReactNode;
  name: string;
  value: string;
  percent: string;
  width: string;
  bg: string;
}) {
  return (
    <div>

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-lg bg-slate-100 p-2 text-slate-600">
            {icon}
          </div>

          <div>
            <p className="text-sm font-semibold">
              {name}
            </p>

            <p className="text-xs text-slate-400">
              {percent}
            </p>
          </div>

        </div>

        <span className="text-sm font-semibold">
          {value}
        </span>

      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          style={{ width }}
          className={`h-full rounded-full ${bg}`}
        />
      </div>

    </div>
  );
}


/* COMPONENTE DE VIAGEM */

function Trip({
  destination,
  period,
  responsible,
  value,
  status,
}: {
  destination: string;
  period: string;
  responsible: string;
  value: string;
  status: string;
}) {
  return (
    <tr className="transition hover:bg-slate-50">

      <td className="px-6 py-5">
        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-50 p-2.5 text-[#315da8]">
            <Plane size={18} />
          </div>

          <span className="font-semibold">
            {destination}
          </span>

        </div>
      </td>

      <td className="px-6 py-5 text-slate-500">
        {period}
      </td>

      <td className="px-6 py-5 text-slate-500">
        {responsible}
      </td>

      <td className="px-6 py-5 font-semibold">
        {value}
      </td>

      <td className="px-6 py-5">

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "Concluída"
              ? "bg-emerald-50 text-emerald-600"
              : status === "Em andamento"
              ? "bg-blue-50 text-blue-600"
              : "bg-orange-50 text-orange-600"
          }`}
        >
          {status}
        </span>

      </td>

      <td className="px-6 py-5">

        <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
          <ArrowUpRight size={17} />
        </button>

      </td>

    </tr>
  );
}