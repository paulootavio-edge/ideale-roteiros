"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import {
  ArrowUp, MapPin, Target, Clapperboard, Shirt, Info, Repeat, Film, Sparkles,
} from "lucide-react";

/* ================================================================== */
/*  DADOS · Roteiros de gravação · Gran Reserva Ideale                 */
/* ================================================================== */

type LookRef = { look: number; note?: string };
type Roteiro = {
  n: number;
  title: string;
  ambiente: string;
  decorado?: boolean;
  objetivo?: string;
  cenas: { t: string; d: string }[];
  looks: [LookRef, LookRef];
  lookNota: string;
  obs?: string;
};

const roteiros: Roteiro[] = [
  {
    n: 1, title: "Coworking", ambiente: "Coworking",
    objetivo: "Mostrar uma alternativa prática para trabalhar com foco sem sair do empreendimento.",
    cenas: [
      { t: "Saída do apartamento", d: "Larissa sai do apartamento com notebook e bolsa de trabalho." },
      { t: "Chegada ao coworking", d: "Ela entra no coworking e escolhe uma mesa para trabalhar." },
      { t: "Rotina de trabalho", d: "Larissa se concentra no notebook enquanto o espaço aparece ao redor dela." },
      { t: "Encerramento", d: "Plano mais aberto do coworking, reforçando conforto, mobiliário e tranquilidade." },
    ],
    looks: [{ look: 1 }, { look: 2 }],
    lookNota: "A primeira opção deixa o vídeo mais corporativo e premium. A segunda deixa a cena mais leve e próxima de uma rotina real de home office.",
  },
  {
    n: 2, title: "Delivery Center", ambiente: "Delivery Center",
    objetivo: "Mostrar a praticidade de uma rotina em que até as entregas têm um espaço próprio dentro do empreendimento.",
    cenas: [
      { t: "Notificação", d: "Larissa recebe uma notificação no celular informando que sua entrega chegou." },
      { t: "Chegada ao Delivery Center", d: "Ela sai do apartamento e entra no Delivery Center." },
      { t: "Retirada da encomenda", d: "Larissa pega uma sacola ou caixa já posicionada no espaço." },
      { t: "Rotina resolvida", d: "Ela sai do ambiente com a encomenda, em uma ação simples que transmite praticidade no dia a dia." },
    ],
    looks: [{ look: 2 }, { look: 1, note: "sem blazer" }],
    lookNota: "Aqui o visual precisa parecer uma saída rápida e prática, sem ficar sofisticado demais para uma simples retirada de encomenda.",
  },
  {
    n: 3, title: "Piscina / Pausa no meio do dia", ambiente: "Piscina",
    objetivo: "Mostrar a piscina como um espaço para desacelerar, trabalhar com mais leveza ou aproveitar um momento só seu dentro do empreendimento.",
    cenas: [
      { t: "Saída do coworking", d: "Larissa sai do coworking com notebook ou livro nas mãos, como quem decide fazer uma pausa durante o dia." },
      { t: "Chegada à piscina", d: "Ela caminha pelo deck em direção às espreguiçadeiras, enquanto a piscina aparece ao fundo." },
      { t: "Momento de pausa", d: "Larissa se acomoda em uma espreguiçadeira, coloca os óculos escuros e abre um livro ou notebook." },
      { t: "Piscina como cenário", d: "Ela toma uma bebida, lê algumas páginas ou trabalha por alguns instantes, com a água e o ambiente de lazer compondo a cena ao redor." },
    ],
    looks: [{ look: 4 }, { look: 3, note: "versão mais leve, com calça de linho e regata" }],
    lookNota: "A opção com maiô é mais visual e conversa diretamente com a piscina. A opção de casa funciona melhor caso a ideia seja reforçar leitura, notebook e pausa durante o dia, sem parecer que ela foi para nadar.",
  },
  {
    n: 4, title: "Espaço Fitness + Sauna", ambiente: "Fitness · Sauna",
    objetivo: "Mostrar uma rotina de autocuidado sem precisar sair de casa.",
    cenas: [
      { t: "Chegada ao Espaço Fitness", d: "Larissa entra no ambiente com garrafa de água e inicia seu momento de treino." },
      { t: "Exercício", d: "Ela realiza um exercício simples, valorizando o espaço fitness e os equipamentos disponíveis." },
      { t: "Pós-treino", d: "Larissa encerra o treino, pega a toalha e a garrafa de água." },
      { t: "Sauna", d: "Em uma nova cena, Larissa aparece entrando na sauna, fechando o vídeo com a ideia de treino seguido de relaxamento." },
    ],
    looks: [{ look: 5 }, { look: 5, note: "com camisa de linho neutra ou robe leve para a cena da sauna" }],
    lookNota: "Aqui o look-base precisa ser fitness. A segunda opção é apenas uma adaptação para criar uma transição mais elegante no encerramento da sauna.",
    obs: "A cena da sauna pode ser gravada separadamente do treino. O objetivo não é mostrar uma transição contínua entre os ambientes, mas criar a percepção de uma rotina completa de cuidado dentro do Ideale.",
  },
  {
    n: 5, title: "Piazza del Vino", ambiente: "Piazza del Vino",
    objetivo: "Mostrar o Piazza del Vino como um espaço elegante para desacelerar dentro do próprio empreendimento.",
    cenas: [
      { t: "Chegada ao espaço", d: "Larissa entra no Piazza del Vino e percorre o ambiente com calma." },
      { t: "Descoberta do ambiente", d: "Ela se aproxima de um dos espaços de convivência, observa os detalhes e se senta." },
      { t: "Pausa na rotina", d: "Larissa deixa o celular de lado e aproveita alguns instantes no ambiente, apenas contemplando o espaço." },
      { t: "Encerramento", d: "Plano mais aberto do Piazza del Vino, com Larissa integrada ao ambiente e os principais elementos do espaço aparecendo ao redor." },
    ],
    looks: [{ look: 3, note: "versão mais refinada" }, { look: 1, note: "sem bolsa de notebook e com acessórios mais elegantes" }],
    lookNota: "O ideal é não criar um sexto look noturno. Podemos transformar o Look 03 em algo mais sofisticado com cabelo, acessórios e sapato, mantendo a mesma base.",
    obs: "Para reforçar visualmente o conceito, podemos inserir de forma pontual um balde com gelo, uma garrafa de vinho e uma taça sobre a mesa ou próximo ao espaço de convivência. Não é necessário transformar isso em cena de serviço ou consumo. Os elementos entram apenas como composição de cenário.",
  },
  {
    n: 6, title: "Pool Bar + Solarium", ambiente: "Pool Bar · Solarium",
    objetivo: "Mostrar uma pausa leve e sofisticada dentro do próprio condomínio.",
    cenas: [
      { t: "Chegada ao pool bar", d: "Larissa chega com livro, óculos e uma bolsa pequena." },
      { t: "Momento refrescante", d: "Ela pega uma bebida e segue em direção ao solarium." },
      { t: "Descanso", d: "Larissa se acomoda em uma espreguiçadeira, abre o livro ou observa a piscina." },
      { t: "Encerramento", d: "Plano amplo do solarium, da piscina e da atmosfera do ambiente." },
    ],
    looks: [{ look: 4 }, { look: 3, note: "com camisa leve, rasteira e óculos escuros" }],
    lookNota: "A primeira opção valoriza mais a atmosfera de piscina. A segunda deixa o vídeo mais sofisticado e menos “praia”, caso queiram diferenciá-lo do Roteiro 03.",
  },
  {
    n: 7, title: "Salão de Festas", ambiente: "Salão de Festas",
    objetivo: "Mostrar que o salão de festas oferece um ambiente pronto e bem estruturado para receber momentos especiais, sem exigir grandes produções.",
    cenas: [
      { t: "Chegada ao salão", d: "Larissa entra no salão de festas com uma pequena bolsa ou um item simples, como um livro, uma caixa de doces fechada ou uma flor." },
      { t: "Aproveitando o ambiente", d: "Ela caminha pelo espaço, passa pela mesa principal e se aproxima de um dos pontos mais bonitos do salão." },
      { t: "Momento no espaço", d: "Larissa se senta à mesa, apoia o item que trouxe e observa o ambiente, como quem imagina uma ocasião especial acontecendo ali." },
      { t: "Encerramento", d: "Plano mais aberto do salão, valorizando mobiliário, decoração, iluminação e amplitude do ambiente." },
    ],
    looks: [{ look: 3, note: "acessórios mais refinados" }, { look: 1, note: "sem terceira peça ou apenas uma camisa mais elegante" }],
    lookNota: "O salão pede aparência bem cuidada, mas não roupa de festa. Ela precisa parecer alguém indo conhecer ou imaginar uma ocasião especial no espaço.",
    obs: "Não é necessário montar mesa, decoração ou festa. Caso queira inserir um pequeno elemento de contexto, basta usar um bolo pequeno já pronto, uma caixa de doces, uma flor ou uma sacola discreta sobre a mesa. O foco continua sendo o salão pronto para ser utilizado.",
  },
  {
    n: 8, title: "Cozinha em L + Varanda Gourmet", ambiente: "Decorado · Área social", decorado: true,
    objetivo: "Mostrar como cozinha, sala e varanda gourmet funcionam de forma integrada na rotina.",
    cenas: [
      { t: "Chegada ao ambiente integrado", d: "Larissa entra pelo living e caminha até a cozinha, revelando em um mesmo movimento a sala, a cozinha em “L” e a varanda gourmet." },
      { t: "Cozinha em uso", d: "Ela prepara um café ou organiza uma pequena bandeja na bancada, valorizando a cozinha como parte ativa da convivência da casa." },
      { t: "Continuidade entre os espaços", d: "Larissa segue naturalmente da cozinha para a varanda gourmet com a xícara ou bandeja, sem mudança brusca de ambiente." },
      { t: "Momento de pausa", d: "Ela se acomoda na varanda gourmet e aproveita o momento, enquanto o enquadramento mantém a conexão visual com sala e cozinha." },
    ],
    looks: [{ look: 3 }, { look: 2 }],
    lookNota: "O Look 03 é o mais natural para café, bandeja e varanda. O Look 02 funciona caso a cena tenha uma leitura de fim de tarde ou uma rotina mais ativa.",
    obs: "O foco não é mostrar uma “transição” entre ambientes separados, mas evidenciar que a área social funciona como um único espaço amplo, integrado e pronto para acompanhar diferentes momentos da rotina.",
  },
  {
    n: 9, title: "Chegar em Casa", ambiente: "Decorado · Sala", decorado: true,
    objetivo: "Valorizar a sensação de amplitude, conforto e funcionalidade do apartamento decorado, sem colocar Larissa como moradora.",
    cenas: [
      { t: "Entrada no apartamento", d: "Larissa abre a porta do decorado e entra no ambiente, observando os espaços com naturalidade." },
      { t: "Sala e integração", d: "Ela percorre a sala e se aproxima da área social, valorizando a amplitude e a conexão entre os ambientes." },
      { t: "Detalhes da rotina", d: "Larissa se senta no sofá, folheia um livro ou observa a varanda, mostrando a sensação de conforto que o apartamento proporciona." },
      { t: "Encerramento", d: "Plano mais amplo da sala, com Larissa integrada ao ambiente e o decorado aparecendo como um espaço pronto para viver." },
    ],
    looks: [{ look: 3 }, { look: 1, note: "sem blazer" }],
    lookNota: "Como Larissa não deve parecer uma moradora encenando a própria casa, o Look 01 pode ajudar a deixá-la mais institucional. O Look 03 deixa o vídeo mais acolhedor e lifestyle.",
    obs: "Ela não está “chegando em casa” nem representando uma moradora. Funciona como uma presença que ajuda o público a se imaginar no apartamento. A mensagem implícita: “É assim que poderia ser a sua rotina aqui.”",
  },
  {
    n: 10, title: "Espaços que acompanham a sua vida", ambiente: "Decorado · Área íntima", decorado: true,
    objetivo: "Mostrar visualmente que existe espaço para diferentes fases e escolhas de vida, valorizando quartos e suíte.",
    cenas: [
      { t: "Entrada na área íntima", d: "Larissa percorre o corredor dos quartos, abrindo uma das portas e revelando um dos ambientes decorados." },
      { t: "Possibilidades de uso", d: "Ela entra em um dos quartos e interage de forma sutil: observa uma escrivaninha, folheia um livro ou coloca uma bolsa sobre uma cadeira. Sugere que o espaço pode acompanhar diferentes rotinas." },
      { t: "Suíte como ponto de pausa", d: "Larissa segue até a suíte e passa pelo ambiente com calma, valorizando a amplitude, a cama, a iluminação e a sensação de privacidade." },
      { t: "Encerramento", d: "Ela para próxima à porta ou à janela da suíte e observa o ambiente. Fecha com um plano mais amplo da suíte ou do corredor conectando os quartos." },
    ],
    looks: [{ look: 1 }, { look: 3, note: "versão mais sofisticada" }],
    lookNota: "Como o roteiro fala de amplitude, quartos e diferentes fases da vida, ele pede uma imagem mais madura e premium. O Look 01 reforça isso; o Look 03 mantém o vídeo mais leve e residencial.",
    obs: "Não precisa transformar cada quarto em um “personagem” (escritório, quarto de filho, hóspede). A força está em mostrar que existe espaço para diferentes fases e escolhas de vida.",
  },
];

type Look = { n: number; nome: string; itens: string[]; sensacao: string };
const looks: Look[] = [
  { n: 1, nome: "Profissional contemporâneo", sensacao: "Mulher prática, elegante e profissional.",
    itens: ["Calça de alfaiataria bege, areia ou preta", "Regata estruturada ou blusa lisa em off-white", "Camisa de linho aberta ou blazer leve", "Tênis branco discreto, mule ou loafer", "Bolsa estruturada para notebook"] },
  { n: 2, nome: "Casual sofisticado", sensacao: "Rotina leve, mobilidade e praticidade.",
    itens: ["Jeans reto claro ou calça de sarja clara", "Camisa de linho branca, azul-clara ou verde-oliva", "Tênis casual, mule ou rasteira fechada", "Bolsa transversal ou tote bag neutra"] },
  { n: 3, nome: "Casa / decorado", sensacao: "Conforto, sofisticação e vida real dentro do apartamento.",
    itens: ["Calça de linho, pantalona leve ou saia midi", "Regata neutra, body liso ou camisa leve", "Rasteira minimalista, mule neutro ou algumas cenas descalça", "Acessórios discretos"] },
  { n: 4, nome: "Lazer / piscina", sensacao: "Descanso, leveza e bem-estar.",
    itens: ["Maiô elegante em preto, terracota, verde-oliva, marrom ou azul-marinho", "Camisa de linho branca, areia ou bege usada por cima", "Rasteira sofisticada", "Óculos escuros e bolsa de palha ou tote de tecido"] },
  { n: 5, nome: "Fitness / bem-estar", sensacao: "Autocuidado e rotina saudável.",
    itens: ["Conjunto fitness liso: top + legging ou camiseta + legging", "Cores neutras: preto, areia, azul-marinho, verde-oliva ou marrom", "Tênis clean", "Toalha e garrafa térmica"] },
];

// render do ambiente (do book) por roteiro
const roteiroImg: Record<number, string> = {
  1: "coworking", 2: "delivery", 3: "piscina", 4: "fitness", 5: "piazza",
  6: "poolbar", 7: "salao", 8: "gourmet", 9: "sala", 10: "suite",
};

// Sugestão de reutilização prática na gravação (mapeamento oficial do documento):
// distribuição recomendada para chegar à diária com apenas 5 composições reais.
const lookUsage: Record<number, number[]> = {
  1: [1, 5, 9, 10],
  2: [2, 8],
  3: [5, 7, 8, 9, 10],
  4: [3, 6],
  5: [4],
};

/* ================================================================== */
/*  PRIMITIVOS                                                         */
/* ================================================================== */

const theme = {
  "--ink": "#1A223E",
  "--bg": "#ffffff",
  "--surface": "#F4F5F8",
  "--muted": "#5B6478",
  "--border": "#E2E4EB",
  "--gradFrom": "#26314F",
  "--gradTo": "#12172A",
  "--radius": "10px",
} as CSSProperties;

function LookChip({ n, note, onGo }: { n: number; note?: string; onGo?: () => void }) {
  return (
    <button
      onClick={onGo}
      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors hover:bg-[var(--ink)] hover:text-white"
      style={{ borderColor: "var(--ink)", color: "var(--ink)", fontFamily: "var(--font-body)" }}
      title={`Ir para o Look ${String(n).padStart(2, "0")}`}
    >
      <Shirt size={12} /> Look {String(n).padStart(2, "0")}
      {note ? <span className="font-normal opacity-70">· {note}</span> : null}
    </button>
  );
}

/* ================================================================== */
/*  PÁGINA                                                             */
/* ================================================================== */

const navItems = [
  ["indice", "Índice"],
  ["looks", "Looks"],
  ["roteiros", "Roteiros"],
  ["reutilizacao", "Reutilização"],
];

export default function Page() {
  const [showTop, setShowTop] = useState(false);

  function go(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  if (typeof window !== "undefined") {
    window.onscroll = () => setShowTop(window.scrollY > 600);
  }

  return (
    <div style={theme} className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mark.svg" alt="HL" className="h-7 w-auto" />
          <div className="hidden gap-5 sm:flex" style={{ fontFamily: "var(--font-body)" }}>
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => go(id)} className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--ink)]">{label}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--gradFrom), var(--gradTo))" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/renders/fachada.jpg" alt="Fachada do Gran Reserva Ideale" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(18,23,42,0.94) 0%, rgba(18,23,42,0.86) 42%, rgba(26,34,62,0.55) 100%)" }} />
        <div className="relative mx-auto w-full max-w-5xl px-6 py-16 md:py-20 text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/mark-mono.svg" alt="HL Empreendimentos" className="mb-8 h-12 w-auto opacity-95" />
          <p className="text-xs uppercase tracking-[0.35em] opacity-70" style={{ fontFamily: "var(--font-body)" }}>
            <Film size={13} className="mr-1.5 inline" /> Roteiros de Gravação
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Gran Reserva Ideale
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed opacity-85" style={{ fontFamily: "var(--font-body)" }}>
            Diária de captação com a Larissa percorrendo as áreas comuns e o decorado do empreendimento. Cada roteiro traz objetivo, cenas e duas opções de look.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5" style={{ fontFamily: "var(--font-body)" }}>
            {[["10", "roteiros"], ["5", "looks-base"], ["2", "opções por cena"]].map(([num, lbl]) => (
              <span key={lbl} className="inline-flex items-baseline gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm ring-1 ring-white/20">
                <strong className="text-base">{num}</strong> <span className="opacity-80">{lbl}</span>
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-5 md:px-6">
        {/* COMO USAR */}
        <section className="mt-10 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6" style={{ fontFamily: "var(--font-body)" }}>
          <div className="flex items-start gap-3">
            <Sparkles size={20} className="mt-0.5 shrink-0 text-[var(--ink)]" />
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>Como usar na gravação</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">
                São <strong className="text-[var(--ink)]">5 looks totais</strong> para a diária. Cada roteiro recebe <strong className="text-[var(--ink)]">2 opções de look</strong>. Escolha na hora a que conversa melhor com o ambiente. Os mesmos looks se repetem entre roteiros de forma estratégica, evitando levar roupa demais e mantendo variedade visual. Clique em qualquer <em>chip de look</em> para pular direto ao figurino.
              </p>
              <div className="mt-4 flex items-start gap-2.5 rounded-lg border-l-2 bg-white p-3.5" style={{ borderColor: "var(--ink)" }}>
                <Info size={16} className="mt-0.5 shrink-0 text-[var(--ink)]" />
                <p className="text-sm leading-relaxed text-[var(--ink)]">
                  <strong className="font-semibold">Observação.</strong> Os roteiros serão executados conforme a viabilidade no local. Ambientes, cenas e sequência podem ser adaptados no dia da gravação de acordo com as condições e a disponibilidade dos espaços.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ÍNDICE */}
        <SectionHead id="indice" icon={<Clapperboard size={18} />} title="Índice de roteiros" sub="Toque em um roteiro para ir direto até ele." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roteiros.map((r) => (
            <button
              key={r.n}
              onClick={() => go(`r${r.n}`)}
              className="group flex flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-white text-left transition-all hover:border-[var(--ink)] hover:shadow-md"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/renders/${roteiroImg[r.n]}.jpg`} alt={r.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute left-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white shadow-md" style={{ background: "var(--ink)", fontFamily: "var(--font-display)" }}>{String(r.n).padStart(2, "0")}</span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <span className="text-sm font-semibold leading-tight" style={{ fontFamily: "var(--font-display)" }}>{r.title}</span>
                <span className="mt-1.5 inline-flex w-fit items-center gap-1 text-xs text-[var(--muted)]" style={{ fontFamily: "var(--font-body)" }}>
                  <MapPin size={11} /> {r.ambiente}
                </span>
                <span className="mt-2.5 flex flex-wrap gap-1" style={{ fontFamily: "var(--font-body)" }}>
                  {r.looks.map((l, i) => (
                    <span key={i} className="rounded-full bg-[var(--surface)] px-2 py-0.5 text-[11px] font-medium text-[var(--ink)]">Look {String(l.look).padStart(2, "0")}</span>
                  ))}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* LOOKS */}
        <SectionHead id="looks" icon={<Shirt size={18} />} title="Looks-base da diária" sub="As 5 composições que cobrem todos os roteiros." />
        <div className="grid gap-4 sm:grid-cols-2">
          {looks.map((l) => (
            <div key={l.n} id={`look${l.n}`} className="scroll-mt-20 overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-white">
              <div className="flex items-center gap-3 px-5 py-3.5" style={{ background: "linear-gradient(135deg, var(--gradFrom), var(--gradTo))" }}>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 text-sm font-bold text-white ring-1 ring-white/25" style={{ fontFamily: "var(--font-display)" }}>{String(l.n).padStart(2, "0")}</span>
                <div className="text-white">
                  <p className="text-[11px] uppercase tracking-widest opacity-70" style={{ fontFamily: "var(--font-body)" }}>Look {String(l.n).padStart(2, "0")}</p>
                  <p className="text-sm font-semibold leading-tight" style={{ fontFamily: "var(--font-display)" }}>{l.nome}</p>
                </div>
              </div>
              <div className="p-5" style={{ fontFamily: "var(--font-body)" }}>
                <ul className="space-y-1.5">
                  {l.itens.map((it, i) => (
                    <li key={i} className="flex gap-2 text-sm text-[var(--ink)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--ink)" }} />{it}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 border-t border-[var(--border)] pt-3 text-xs italic text-[var(--muted)]">
                  Sensação: {l.sensacao}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--muted)]">Sugerido em:</span>
                  {lookUsage[l.n].map((rn) => (
                    <button key={rn} onClick={() => go(`r${rn}`)} className="rounded-full bg-[var(--surface)] px-2 py-0.5 text-[11px] font-medium text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white">R{String(rn).padStart(2, "0")}</button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROTEIROS DETALHADOS */}
        <SectionHead id="roteiros" icon={<Film size={18} />} title="Roteiros detalhados" sub="Objetivo, cenas e opções de figurino de cada vídeo." />
        <div className="space-y-6">
          {roteiros.map((r) => (
            <article key={r.n} id={`r${r.n}`} className="scroll-mt-20 overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-white shadow-sm">
              {/* header banner com render do ambiente */}
              <div className="relative h-44 overflow-hidden md:h-52">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/renders/${roteiroImg[r.n]}.jpg`} alt={`${r.title} — Gran Reserva Ideale`} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(18,23,42,0.92) 0%, rgba(18,23,42,0.45) 45%, rgba(18,23,42,0.15) 100%)" }} />
                <div className="relative flex h-full flex-col justify-end gap-1.5 p-5 text-white md:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white ring-1 ring-white/30" style={{ background: "rgba(26,34,62,0.65)", fontFamily: "var(--font-display)" }}>{String(r.n).padStart(2, "0")}</span>
                    <h3 className="text-xl font-bold leading-tight md:text-2xl" style={{ fontFamily: "var(--font-display)" }}>{r.title}</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-xs opacity-90" style={{ fontFamily: "var(--font-body)" }}><MapPin size={11} /> {r.ambiente}</span>
                    {r.decorado ? <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-white/25" style={{ fontFamily: "var(--font-body)" }}>Decorado</span> : null}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-5 md:grid-cols-[1.4fr_1fr] md:p-6">
                {/* esquerda: objetivo + cenas */}
                <div>
                  {r.objetivo ? (
                    <div className="mb-4 flex gap-2.5 rounded-lg bg-[var(--surface)] p-3.5" style={{ fontFamily: "var(--font-body)" }}>
                      <Target size={16} className="mt-0.5 shrink-0 text-[var(--ink)]" />
                      <p className="text-sm leading-relaxed text-[var(--ink)]"><strong className="font-semibold">Objetivo.</strong> {r.objetivo}</p>
                    </div>
                  ) : null}
                  <ol className="space-y-3">
                    {r.cenas.map((c, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-xs font-bold text-[var(--ink)]" style={{ fontFamily: "var(--font-display)" }}>{i + 1}</span>
                        <div style={{ fontFamily: "var(--font-body)" }}>
                          <p className="text-sm font-semibold text-[var(--ink)]">{c.t}</p>
                          <p className="text-sm leading-relaxed text-[var(--muted)]">{c.d}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* direita: looks + obs */}
                <div className="space-y-4">
                  <div className="rounded-lg border border-[var(--border)] p-4" style={{ fontFamily: "var(--font-body)" }}>
                    <p className="mb-2.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[var(--muted)]"><Shirt size={13} /> Opções de look</p>
                    <div className="space-y-2">
                      {r.looks.map((l, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="mt-0.5 text-[11px] font-bold text-[var(--muted)]">{i + 1}.</span>
                          <LookChip n={l.look} note={l.note} onGo={() => go(`look${l.look}`)} />
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 border-t border-[var(--border)] pt-2.5 text-xs leading-relaxed text-[var(--muted)]">{r.lookNota}</p>
                  </div>

                  {r.obs ? (
                    <div className="flex gap-2.5 rounded-lg border-l-2 p-3.5" style={{ borderColor: "var(--ink)", background: "var(--surface)", fontFamily: "var(--font-body)" }}>
                      <Info size={15} className="mt-0.5 shrink-0 text-[var(--ink)]" />
                      <p className="text-xs leading-relaxed text-[var(--ink)]"><strong className="font-semibold">Produção.</strong> {r.obs}</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* REUTILIZAÇÃO */}
        <SectionHead id="reutilizacao" icon={<Repeat size={18} />} title="Reutilização de looks" sub="Chegue à gravação com apenas 5 composições reais para organizar." />
        <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)]">
          <table className="w-full text-left text-sm" style={{ fontFamily: "var(--font-body)" }}>
            <thead>
              <tr style={{ background: "var(--ink)" }} className="text-white">
                <th className="px-4 py-3 font-semibold">Look</th>
                <th className="px-4 py-3 font-semibold">Roteiros sugeridos</th>
              </tr>
            </thead>
            <tbody>
              {looks.map((l) => (
                <tr key={l.n} className="border-t border-[var(--border)] bg-white">
                  <td className="px-4 py-3 align-top">
                    <button onClick={() => go(`look${l.n}`)} className="font-semibold text-[var(--ink)] hover:underline">Look {String(l.n).padStart(2, "0")}</button>
                    <p className="text-xs text-[var(--muted)]">{l.nome}</p>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1.5">
                      {lookUsage[l.n].map((rn) => (
                        <button key={rn} onClick={() => go(`r${rn}`)} className="rounded-full bg-[var(--surface)] px-2.5 py-1 text-xs font-medium text-[var(--ink)] transition-colors hover:bg-[var(--ink)] hover:text-white">
                          R{String(rn).padStart(2, "0")}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]" style={{ fontFamily: "var(--font-body)" }}>
          Cada vídeo tem duas possibilidades, mas a produção chega à gravação com apenas cinco composições reais para organizar. Os roteiros finais contemplam coworking, Delivery Center, piscina, fitness, Piazza del Vino, pool bar, salão de festas e decorado.
        </p>
      </main>

      <footer className="mt-16 border-t border-[var(--border)] py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6" style={{ fontFamily: "var(--font-body)" }}>
          <p className="text-sm text-[var(--muted)]">Gran Reserva Ideale · Roteiros de Gravação</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="HL Empreendimentos" className="h-6 w-auto opacity-70" />
        </div>
      </footer>

      {showTop ? (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-105" style={{ background: "var(--ink)" }} aria-label="Voltar ao topo">
          <ArrowUp size={18} />
        </button>
      ) : null}
    </div>
  );
}

function SectionHead({ id, icon, title, sub }: { id: string; icon: ReactNode; title: string; sub: string }) {
  return (
    <div id={id} className="scroll-mt-20 pt-14 pb-5">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ background: "var(--ink)" }}>{icon}</span>
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>{title}</h2>
      </div>
      <p className="mt-1.5 text-sm text-[var(--muted)]" style={{ fontFamily: "var(--font-body)" }}>{sub}</p>
    </div>
  );
}
