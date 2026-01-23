import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/* ================= MOCK DATA (API READY) ================= */
const MOCK_USER = {
  name: "Bharathi",
  email: "bharathi@superchennai.com",
  phone: "+91 98765 43210",
  profileStatus: "Completed",
  savedItems: 12,
  recentActivity: 5,
  activities: [
    { id: 1, title: "Profile updated", date: "2025-01-18" },
    { id: 2, title: "Saved a place", date: "2025-01-17" },
    { id: 3, title: "Viewed event", date: "2025-01-16" },
  ],
};

function QuickCard({ title, desc, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group p-4 rounded-xl border text-left transition
      hover:shadow-md hover:border-[#2b3889] hover:bg-[#2b3889]/5"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h4 className="font-semibold group-hover:text-[#2b3889]">{title}</h4>
      </div>
      <p className="text-sm text-gray-500">{desc}</p>
    </button>
  );
}

/* ================= COMPONENT ================= */
export default function UserDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login-otp", { replace: true });
  }, [navigate]);

  return (
    <>
      {/* ================= BANNER ================= */}
     <section className="accaodomationBannerSection carquizbanner relative w-full h-[20px] sm:h-[320px] md:h-[380px] overflow-hidden">
        <div>
          <img
            className="eventsCalenderIamge hidden sm:block"
            src="/images/events/triva-contest.jpg"
            alt="Super Chennai Quiz"
          />

          {/* Mobile Image */}
          <img
            className=" block sm:hidden"
            src="/images/events/triva-contest-small.jpg"
            alt="Super Chennai Quiz Mobile"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Dashboard</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="">Dashboard</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAYOUT ================= */}
      <section className="bg-[#f4f5f7] py-10">
        <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* ================= SIDEBAR ================= */}
          <aside className="bg-white rounded-xl shadow p-5 space-y-3">
            <h3 className="text-lg font-semibold mb-2">My Account</h3>

            {[
              { key: "dashboard", label: "Dashboard", icon: "📊" },
              { key: "profile", label: "Profile", icon: "👤" },
              { key: "activity", label: "Activity", icon: "📊" },
              { key: "contest", label: "Contest", icon: "📦" },
              { key: "Quiz", label: "Chennai Quiz", icon: "📦" },


              
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition
                  ${
                    activeTab === item.key
                      ? "bg-[#2b3889] text-white"
                      : "hover:bg-gray-100"
                  }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </aside>

          {/* ================= MAIN ================= */}
          <main className="lg:col-span-3 space-y-6">
            {/* ===== DASHBOARD VIEW ===== */}
            {activeTab === "dashboard" && (
              <>
                <div className="bg-gradient-to-r from-[#2b3889] to-[#1f2a6d] text-white rounded-xl p-6 shadow">
                  <h2 className="text-2xl font-semibold">
                    Welcome back, {MOCK_USER.name} 👋
                  </h2>
                  <p className="mt-1 text-sm opacity-90">
                    Manage your account and activities
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <StatCard
                    title="Profile Status"
                    value={MOCK_USER.profileStatus}
                  />
                  <StatCard title="Saved Items" value={MOCK_USER.savedItems} />
                  <StatCard
                    title="Recent Activity"
                    value={MOCK_USER.recentActivity}
                  />
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Quick Actions</h3>
                    <span className="text-sm text-gray-500">
                      Explore Chennai faster 🚀
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <QuickCard
                      title="Chennai Events"
                      desc="Upcoming events & festivals"
                      icon="🎉"
                      onClick={() => setActiveTab("activity")}
                    />

                    <QuickCard
                      title="Hotspots"
                      desc="Trending places in Chennai"
                      icon="🔥"
                      onClick={() => alert("Hotspots module")}
                    />

                    <QuickCard
                      title="Food & Cafes"
                      desc="Best food spots near you"
                      icon="🍔"
                      onClick={() => alert("Food module")}
                    />

                    <QuickCard
                      title="Tourist Places"
                      desc="Must visit locations"
                      icon="📍"
                      onClick={() => alert("Places module")}
                    />

                    <QuickCard
                      title="Saved Items"
                      desc="Your bookmarked places"
                      icon="💾"
                      onClick={() => setActiveTab("profile")}
                    />

                    <QuickCard
                      title="Post Activity"
                      desc="Share events or reviews"
                      icon="✍️"
                      onClick={() => alert("Post activity")}
                    />

                    <QuickCard
                      title="Offers & Deals"
                      desc="Latest Chennai deals"
                      icon="🏷️"
                      onClick={() => alert("Offers")}
                    />

                    <QuickCard
                      title="Support"
                      desc="Need help? Contact us"
                      icon="💬"
                      onClick={() => alert("Support")}
                    />
                  </div>
                </div>
              </>
            )}

            {/* ===== PROFILE VIEW ===== */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow p-6 space-y-4">
                <h3 className="text-xl font-semibold">Profile Details</h3>

                <ProfileRow label="Name" value={MOCK_USER.name} />
                <ProfileRow label="Email" value={MOCK_USER.email} />
                <ProfileRow label="Phone" value={MOCK_USER.phone} />
              </div>
            )}

            {/* ===== ACTIVITY VIEW ===== */}
            {activeTab === "activity" && (
              <div className="bg-white rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>

                <ul className="space-y-3">
                  {MOCK_USER.activities.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between border-b pb-2 text-sm"
                    >
                      <span>{item.title}</span>
                      <span className="text-gray-500">{item.date}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </main>
        </div>
      </section>
    </>
  );
}

/* ================= REUSABLE COMPONENTS ================= */
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
