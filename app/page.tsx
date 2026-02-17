import { Metadata } from "next"
import SlaiterHeader from "components/Header/SlaterHeader"

export const metadata: Metadata = {
  title: "Slaiter",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://slaiter.com/",
    title: "Slaiter",
    description:
      "Slaiter is a family office and merchant bank investing in the foundational systems that enable advanced technology and industrial power.",
    siteName: "Slaiter",
    type: "website",
  },
  description:
    "Slaiter is a family office and merchant bank investing in the foundational systems that enable advanced technology and industrial power.",
  icons: ["/favicon.ico"],
}

export default function Web() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="flex flex-col">
        <SlaiterHeader />

        <section className="mx-auto w-11/12 md:w-10/12 lg:w-8/12 py-14">
          <div className="max-w-3xl text-lg leading-relaxed text-text/90">
            <p>
              We operate from the belief that modern technology is no longer purely digital. It is manufactured
              infrastructure—dependent on energy, materials, industrial capacity, and the systems that coordinate them at
              scale.
            </p>
            <p className="mt-6">
              Our work centers on the foundational inputs that determine long-term economic strength, security, and human
              progress.
            </p>
          </div>

          <hr className="my-14 border-text/10" />

          <h2 className="text-3xl font-bold text-secondary">Our Investment Framework</h2>
          <p className="mt-4 max-w-3xl text-lg text-text/90">
            Slaiter invests across five core pillars that enable advanced technology to be built, scaled, and sustained.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-text/10 bg-primary/30 p-6">
              <h3 className="text-xl font-semibold">Energy</h3>
              <p className="mt-3 text-text/85">
                Energy is the primary constraint on industrial civilization. Slaiter focuses on reliable, scalable energy
                systems that support advanced manufacturing, compute-intensive workloads, and national
                infrastructure—across baseload generation, grid resilience, and next-generation energy technologies.
              </p>
              <p className="mt-3 text-text/85">
                Energy abundance underpins economic growth, defense readiness, and technological leadership.
              </p>
            </div>

            <div className="rounded-xl border border-text/10 bg-primary/30 p-6">
              <h3 className="text-xl font-semibold">Materials &amp; Critical Inputs</h3>
              <p className="mt-3 text-text/85">
                Every technology begins as a physical system. We invest in the materials, resources, and critical inputs
                required to manufacture semiconductors, batteries, aerospace systems, defense platforms, and industrial
                infrastructure.
              </p>
              <p className="mt-3 text-text/85">
                Control over these inputs determines who can build independently and who remains structurally dependent.
              </p>
            </div>

            <div className="rounded-xl border border-text/10 bg-primary/30 p-6">
              <h3 className="text-xl font-semibold">Manufacturing &amp; Industrial Capacity</h3>
              <p className="mt-3 text-text/85">
                Innovation is irrelevant without production. Slaiter backs businesses that expand advanced manufacturing
                capability, precision fabrication, shipbuilding, aerospace production, and the tooling required to convert
                designs into deployed systems.
              </p>
              <p className="mt-3 text-text/85">Industrial capacity is a strategic asset—not a commodity.</p>
            </div>

            <div className="rounded-xl border border-text/10 bg-primary/30 p-6">
              <h3 className="text-xl font-semibold">Supply Chains &amp; Logistics</h3>
              <p className="mt-3 text-text/85">
                Efficiency fails under stress. Resilience endures. We invest in infrastructure, platforms, and
                intelligence that strengthen supply-chain resilience across energy, defense, technology, and strategic
                materials—particularly in environments shaped by geopolitical risk.
              </p>
              <p className="mt-3 text-text/85">Secure supply chains are a prerequisite for sovereignty.</p>
            </div>

            <div className="rounded-xl border border-text/10 bg-primary/30 p-6 md:col-span-2">
              <h3 className="text-xl font-semibold">Systems, Data &amp; Coordination</h3>
              <p className="mt-3 text-text/85">
                Complex systems require orchestration. Slaiter invests in the software, data platforms, and decision
                systems that integrate energy, materials, manufacturing, and logistics into coherent operating
                environments.
              </p>
              <p className="mt-3 text-text/85">
                Coordination—not isolated optimization—is what enables scale, speed, and durability.
              </p>
            </div>
          </div>

          <hr className="my-14 border-text/10" />

          <h2 className="text-3xl font-bold text-secondary">How We Operate</h2>
          <p className="mt-4 max-w-4xl text-lg text-text/90">
            Slaiter operates with a long-term, principal-oriented mindset. We partner closely with founders, operators,
            governments, and institutional capital to build durable platforms rather than transient assets.
          </p>

          <div className="mt-8 rounded-xl border border-text/10 bg-primary/30 p-6">
            <p className="text-lg font-semibold">Our approach blends</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-text/85">
              <li>Capital formation</li>
              <li>Strategic structuring</li>
              <li>Operational insight</li>
              <li>Long-horizon thinking</li>
            </ul>
            <p className="mt-6 text-text/85">
              We prioritize alignment, trust, and asymmetric outcomes over financial engineering alone.
            </p>
          </div>

          <hr className="my-14 border-text/10" />

          <h2 className="text-3xl font-bold text-secondary">Our View</h2>
          <div className="mt-6 max-w-3xl text-lg leading-relaxed text-text/90">
            <p>Technology is becoming infrastructure.</p>
            <p>Infrastructure determines power.</p>
            <p className="mt-6">Slaiter invests where technology, industry, and security converge.</p>
          </div>
        </section>

        <footer className="w-full border-t border-text/10 bg-primary py-10">
          <div className="mx-auto w-11/12 md:w-10/12 lg:w-8/12">
            <p className="max-w-4xl text-sm leading-relaxed text-text/80">
              Slaiter is a family office and merchant bank investing in the foundational systems that enable advanced
              technology and industrial power.
            </p>
            <p className="mt-4 text-sm text-text/60">© {new Date().getFullYear()} Slaiter. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}