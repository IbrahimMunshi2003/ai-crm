export default function AppHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-8 flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            AI First CRM
          </h1>

          <p className="text-sm text-gray-500">
            AI Powered Pharmaceutical CRM
          </p>
        </div>

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            AI
          </div>

        </div>

      </div>
    </header>
  );
}