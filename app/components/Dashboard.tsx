export default function Dashboard() {
  return (
    <div className="absolute right-0 top-1/2 w-full max-w-[760px] -translate-y-1/2 rounded-[36px] border border-white/40 bg-white/60 p-6 shadow-[0_40px_120px_rgba(23,43,54,.12)] backdrop-blur-3xl">

      {/* Top */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            VERUM AI OS
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#172B36]">
            Executive Workspace
          </h2>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-[#F1F6F4] px-4 py-2">

          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"/>

          <span className="text-sm font-medium">
            Live
          </span>

        </div>

      </div>

      {/* Main Layout */}

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">

        {/* Left */}

        <div className="space-y-5">

          {/* Workflow */}

          <div className="rounded-3xl bg-[#F8FBFA] p-6">

            <div className="mb-6 flex items-center justify-between">

              <h3 className="font-semibold">
                Workflow Engine
              </h3>

              <span className="text-xs text-green-600">
                Active
              </span>

            </div>

            <div className="space-y-4">

              {[
                "Customer Onboarding",
                "Invoice Intelligence",
                "Sales Prediction",
                "Email Automation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm"
                >

                  <span>{item}</span>

                  <span className="rounded-full bg-[#FFC801]/20 px-3 py-1 text-xs">
                    Running
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* Bottom */}

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-3xl bg-[#F8FBFA] p-5">

              <p className="text-sm text-slate-500">
                AI Decisions
              </p>

              <h2 className="mt-3 text-5xl font-bold">
                824
              </h2>

            </div>

            <div className="rounded-3xl bg-[#F8FBFA] p-5">

              <p className="text-sm text-slate-500">
                Connected Apps
              </p>

              <h2 className="mt-3 text-5xl font-bold">
                26
              </h2>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-5">

          {/* AI Brain */}

          <div className="rounded-3xl bg-[#172B36] p-6 text-white">

            <p className="text-sm text-white/60">
              AI Core
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              99.2%
            </h2>

            <p className="mt-2 text-sm text-white/60">
              Confidence Score
            </p>

            <div className="mt-8 h-2 rounded-full bg-white/10">

              <div className="h-full w-[99%] rounded-full bg-[#FFC801]"/>

            </div>

          </div>

          {/* Activity */}

          <div className="rounded-3xl bg-[#F8FBFA] p-6">

            <p className="mb-5 font-semibold">
              Recent Activity
            </p>

            <div className="space-y-4">

              {[
                "Forecast Updated",
                "New Workflow Created",
                "ERP Synced",
                "Report Generated",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="h-2 w-2 rounded-full bg-[#FFC801]"/>

                  <span className="text-sm">
                    {item}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}