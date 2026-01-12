export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24 space-y-28">

      {/* HERO */}
      <section className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl font-extrabold leading-tight">
            Athena Spot Engine
          </h1>

          <p className="text-muted text-lg max-w-xl">
            Automated Binance spot trading software built for
            rule-based execution, capital protection, and operational discipline.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#pricing"
              className="bg-primary hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
            >
              Activate Your Software License
            </a>

            <a
              href="#how"
              className="border border-gray-700 hover:border-gray-500 transition px-8 py-4 rounded-xl font-semibold"
            >
              See How It Works
            </a>
          </div>

          <p className="text-xs text-muted max-w-xl">
            Non-custodial. Spot only. No leverage. No managed accounts.
          </p>
        </div>

        {/* TRUST PANEL */}
        <div className="bg-card rounded-3xl p-10 space-y-6">
          <div className="grid grid-cols-2 gap-4 text-sm text-muted">
            <div>✔ Non-custodial execution</div>
            <div>✔ Binance API only</div>
            <div>✔ Spot trading only</div>
            <div>✔ No leverage exposure</div>
            <div>✔ Telegram control</div>
            <div>✔ User-controlled execution</div>
          </div>
        </div>
      </section>

      {/* WHAT IT IS / IS NOT */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-card rounded-2xl p-8 space-y-4">
          <h2 className="text-xl font-semibold">What Athena Is</h2>
          <ul className="text-muted space-y-2 text-sm">
            <li>• Automated execution software</li>
            <li>• Rule-based spot trade engine</li>
            <li>• Runs via your own Binance account</li>
            <li>• Designed for continuous operation</li>
          </ul>
        </div>

        <div className="bg-card rounded-2xl p-8 space-y-4">
          <h2 className="text-xl font-semibold">What Athena Is Not</h2>
          <ul className="text-muted space-y-2 text-sm">
            <li>• Not a signal service</li>
            <li>• Not copy trading</li>
            <li>• Not a managed account</li>
            <li>• Not a profit guarantee system</li>
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="space-y-10">
        <h2 className="text-3xl font-bold text-center">
          How the Software Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-2xl space-y-3">
            <h3 className="font-semibold">1. License Activation</h3>
            <p className="text-muted text-sm">
              After purchase, activate your unique software license directly via Telegram.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl space-y-3">
            <h3 className="font-semibold">2. Binance API Connection</h3>
            <p className="text-muted text-sm">
              Connect API keys with spot permissions only. Withdrawals remain disabled.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl space-y-3">
            <h3 className="font-semibold">3. Automated Execution</h3>
            <p className="text-muted text-sm">
              The engine monitors market conditions and executes trades automatically.
            </p>
          </div>
        </div>
      </section>

      {/* PROOF / DEMO */}
      <section className="bg-card rounded-3xl p-12 space-y-6">
        <h2 className="text-2xl font-semibold">
          System Demonstration & Execution Proof
        </h2>

        <p className="text-muted text-sm max-w-3xl">
          The demonstration below shows real software behavior, including execution
          notifications and system controls. Results shown are illustrative only and
          do not represent guaranteed performance.
        </p>

        <div className="aspect-video bg-black rounded-xl flex items-center justify-center text-muted">
          Demo Video Placeholder
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="text-center space-y-8">
        <h2 className="text-4xl font-bold">
          One-Time Software License
        </h2>

        <p className="text-muted">
          No subscriptions. No recurring fees. One payment.
        </p>

        <div className="inline-block bg-card rounded-3xl px-14 py-10 space-y-6">
          <div className="text-5xl font-extrabold">$66.99</div>

          <ul className="text-sm text-muted space-y-1">
            <li>• Lifetime license access</li>
            <li>• Telegram-based control</li>
            <li>• Non-custodial execution</li>
          </ul>

          <a
            href="#"
            className="block bg-primary hover:bg-blue-700 transition px-10 py-5 rounded-xl font-semibold text-lg"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      {/* FINAL DISCLAIMER */}
      <section className="text-xs text-muted max-w-5xl mx-auto text-center leading-relaxed">
        This software is a technical execution tool provided for educational and
        operational purposes only. It does not constitute financial advice.
        Cryptocurrency trading involves risk and may result in capital loss.
        Past or illustrative performance does not guarantee future results.
      </section>

    </main>
  );
}

