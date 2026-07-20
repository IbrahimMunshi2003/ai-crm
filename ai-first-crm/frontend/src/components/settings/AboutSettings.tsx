export default function AboutSettings() {
  const technologies = [
    "React 19",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "SQLAlchemy",
    "LangGraph",
    "LangChain",
    "Groq LLM",
    "Axios",
  ];

  return (
    <div className="space-y-8">

      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white p-8 shadow-lg">

        <h1 className="text-4xl font-bold">
          Medico
        </h1>

        <p className="mt-3 text-blue-100">
          Intelligent Pharmaceutical Customer Relationship Management
        </p>

        <div className="mt-6 flex flex-wrap gap-4">

          <span className="bg-white/20 px-4 py-2 rounded-full">
            Version 1.0.0
          </span>

          <span className="bg-green-500 px-4 py-2 rounded-full">
            Production Ready
          </span>

        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-2xl font-bold mb-4">
            Application Information
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-gray-500">Application</span>
              <span>Medico</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Version</span>
              <span>1.0.0</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Release</span>
              <span>July 2026</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">License</span>
              <span>MIT</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Environment</span>
              <span>Development</span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-2xl font-bold mb-4">
            Developer
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-gray-500">Developer</span>
              <span>Your Name</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Role</span>
              <span>Full Stack Developer</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Backend</span>
              <span>FastAPI</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Frontend</span>
              <span>React + TypeScript</span>
            </div>

          </div>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Technology Stack
        </h2>

        <div className="flex flex-wrap gap-3">

          {technologies.map((tech) => (

            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-2xl font-bold mb-4">
            System Status
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Frontend</span>
              <span className="text-green-600 font-semibold">
                Online
              </span>
            </div>

            <div className="flex justify-between">
              <span>Backend</span>
              <span className="text-green-600 font-semibold">
                Online
              </span>
            </div>

            <div className="flex justify-between">
              <span>Database</span>
              <span className="text-green-600 font-semibold">
                Connected
              </span>
            </div>

            <div className="flex justify-between">
              <span>AI Service</span>
              <span className="text-green-600 font-semibold">
                Active
              </span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-2xl font-bold mb-4">
            Useful Links
          </h2>

          <div className="space-y-3">

            <a
              href="#"
              className="block text-blue-600 hover:underline"
            >
              Documentation
            </a>

            <a
              href="#"
              className="block text-blue-600 hover:underline"
            >
              GitHub Repository
            </a>

            <a
              href="#"
              className="block text-blue-600 hover:underline"
            >
              Report an Issue
            </a>

            <a
              href="#"
              className="block text-blue-600 hover:underline"
            >
              Contact Support
            </a>

          </div>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">

        <p className="text-gray-500">
          © 2026 Medico
        </p>

        <p className="text-sm text-gray-400 mt-2">
          Built with ❤️ using React, FastAPI, PostgreSQL and LangGraph
        </p>

      </div>

    </div>
  );
}