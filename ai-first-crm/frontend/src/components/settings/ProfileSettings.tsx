import { useState } from "react";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: "Sales Representative",
    email: "rep@aifirstcrm.com",
    phone: "+91 9876543210",
    company: "Medico",
    designation: "Medical Representative",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profile Saved Successfully");
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold">
            Profile Settings
          </h2>

          <p className="text-gray-500 mt-1">
            Update your CRM profile information.
          </p>
        </div>

        <div className="mt-4 md:mt-0 flex items-center gap-4">

          <img
            src="https://ui-avatars.com/api/?name=Sales+Rep"
            alt="avatar"
            className="w-20 h-20 rounded-full border"
          />

          <button
            className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-900"
          >
            Change Photo
          </button>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>

          <label className="block text-sm font-medium mb-2">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            Designation
          </label>

          <input
            type="text"
            name="designation"
            value={profile.designation}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

        <div className="md:col-span-2">

          <label className="block text-sm font-medium mb-2">
            Company
          </label>

          <input
            type="text"
            name="company"
            value={profile.company}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

        </div>

      </div>

      <div className="flex justify-end gap-4 mt-8">

        <button
          onClick={handleReset}
          className="px-6 py-3 rounded-lg border hover:bg-gray-100"
        >
          Reset
        </button>

        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Save Changes
        </button>

      </div>

    </div>
  );
}