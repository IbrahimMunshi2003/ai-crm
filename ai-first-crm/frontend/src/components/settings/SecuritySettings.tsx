import { useState } from "react";

export default function SecuritySettings() {
  const [security, setSecurity] = useState({
    twoFactor: false,
    biometric: false,
    loginAlerts: true,
    apiAccess: true,
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirmPassword: "",
  });

  const toggle = (key: keyof typeof security) => {
    setSecurity((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const updatePassword = () => {
    if (
      password.newPassword !== password.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    alert("Password Updated Successfully");
  };

  const logoutAllDevices = () => {
    alert("Logged out from all devices");
  };

  return (
    <div className="space-y-8">

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-2">
          Security Settings
        </h2>

        <p className="text-gray-500 mb-8">
          Protect your AI CRM account.
        </p>

        <div className="space-y-5">

          {[
            {
              key: "twoFactor",
              title: "Two-Factor Authentication",
              desc: "Extra security during login",
            },
            {
              key: "biometric",
              title: "Biometric Login",
              desc: "Fingerprint / Face ID",
            },
            {
              key: "loginAlerts",
              title: "Login Alerts",
              desc: "Receive email when a new login occurs",
            },
            {
              key: "apiAccess",
              title: "API Access",
              desc: "Allow external API integrations",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex justify-between items-center border rounded-xl p-5"
            >
              <div>

                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm">
                  {item.desc}
                </p>

              </div>

              <button
                onClick={() =>
                  toggle(item.key as keyof typeof security)
                }
                className={`w-14 h-8 rounded-full transition ${
                  security[item.key as keyof typeof security]
                    ? "bg-green-600"
                    : "bg-gray-300"
                }`}
              >
                <div
                  className={`h-7 w-7 rounded-full bg-white transition ${
                    security[item.key as keyof typeof security]
                      ? "translate-x-7"
                      : ""
                  }`}
                />
              </button>

            </div>
          ))}

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-xl font-bold mb-6">
          Change Password
        </h2>

        <div className="grid gap-5">

          <input
            type="password"
            placeholder="Current Password"
            className="border rounded-lg p-3"
            value={password.current}
            onChange={(e) =>
              setPassword({
                ...password,
                current: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="New Password"
            className="border rounded-lg p-3"
            value={password.newPassword}
            onChange={(e) =>
              setPassword({
                ...password,
                newPassword: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="border rounded-lg p-3"
            value={password.confirmPassword}
            onChange={(e) =>
              setPassword({
                ...password,
                confirmPassword: e.target.value,
              })
            }
          />

          <button
            onClick={updatePassword}
            className="bg-blue-600 text-white rounded-lg py-3 hover:bg-blue-700"
          >
            Update Password
          </button>

        </div>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-xl font-bold mb-6">
          Active Sessions
        </h2>

        <div className="space-y-4">

          <div className="border rounded-lg p-4 flex justify-between">

            <div>

              <h3 className="font-semibold">
                Windows • Chrome
              </h3>

              <p className="text-gray-500 text-sm">
                Chennai, India
              </p>

            </div>

            <span className="text-green-600 font-semibold">
              Current
            </span>

          </div>

          <div className="border rounded-lg p-4 flex justify-between">

            <div>

              <h3 className="font-semibold">
                Android • Chrome
              </h3>

              <p className="text-gray-500 text-sm">
                Last Active: Yesterday
              </p>

            </div>

          </div>

        </div>

        <button
          onClick={logoutAllDevices}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white rounded-lg px-6 py-3"
        >
          Logout All Devices
        </button>

      </div>

    </div>
  );
}