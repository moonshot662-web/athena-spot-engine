export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Athena Spot Engine
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Automated Binance Spot Trading Software  
          Designed for rule-based execution and risk control
        </p>

        <a
          href="#pricing"
          className="inline-block bg-primary hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
        >
          Activate Your Software License
        </a>
      </section>

      {/* TRUST BAR */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-muted text-center">
        <div>Non-custodial</div>
        <div>Spot trading only</div>
        <div>No leverage</div>
        <div>Telegram control</div>
        <div>API-based execution</div>
      </section>

      {/* WHAT IT DOES */}
      <section className="bg-card rounded-2xl p-10 space-y-6">
        <h2 className="text-2xl font-semibold">What This Software Does</h2>
        <ul className="list-disc list-inside text-muted space-y-2">
          <li>Monitors market conditions automatically</li>
          <li>Executes spot trades via Binance API</li>
          <li>Applies predefined internal risk rules</li>
          <li>Runs continuously without manual input</li>
        </ul>

        <p className="text-muted text-sm">
          This is a technical execution tool — not a signal service, not copy trading,
          and not a managed account.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl">
            <h3 className="font-semibold mb-2">1. License Activation</h3>
            <p className="text-muted text-sm">
              Receive a unique software license and activate via Telegram.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl">
            <h3 className="font-semibold mb-2">2. API Connection</h3>
            <p className="text-muted text-sm">
              Connect Binance API with spot permissions only. Withdrawals disabled.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl">
            <h3 className="font-semibold mb-2">3. Automated Execution</h3>
            <p className="text-muted text-sm">
              Software monitors markets and executes trades automatically.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-card rounded-2xl p-10 space-y-6">
        <h2 className="text-2xl font-semibold">System Demonstration</h2>
        <p className="text-muted text-sm">
          The video below demonstrates real system behavior using internal test environments.
          Results shown are illustrative only and not guaranteed.
        </p>

        <div className="aspect-video bg-black rounded-xl flex items-center justify-center text-muted">
          Video Placeholder (YouTube / Vimeo Unlisted)
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="text-center space-y-6">
        <h2 className="text-3xl font-bold">One-Time Software License</h2>
        <p className="text-muted">No subscriptions. No hidden fees.</p>

        <div className="bg-card inline-block px-10 py-8 rounded-2xl">
          <div className="text-4xl font-bold">$66.99</div>
          <p className="text-muted text-sm mt-2">Lifetime License</p>

          <a
            href="#"
            className="block mt-6 bg-primary hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="text-xs text-muted max-w-4xl mx-auto text-center">
        This software is provided for technical and educational purposes only and does not constitute financial advice.
        Cryptocurrency trading involves risk and may result in loss of capital.
        Past or illustrative performance does not guarantee future results.
      </section>

    </main>
  );
}
