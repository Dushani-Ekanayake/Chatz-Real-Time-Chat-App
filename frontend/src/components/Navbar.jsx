import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="fixed inset-x-0 top-0 z-40"
      style={{
        background: "rgba(10, 10, 20, 0.75)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="mx-auto flex h-15 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" style={{ height: "60px" }}>
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-75"
        >
          <div
            className="flex size-9 items-center justify-center rounded-xl"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
          >
            <MessageSquare className="size-4 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-tight text-white">Chatz</h1>
          </div>
        </Link>

        {/* Nav actions */}
        <div className="flex items-center gap-1">
          <Link
            to="/settings"
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors"
            style={{ color: "rgba(255,255,255,0.55)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              e.currentTarget.style.color = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.55)";
            }}
          >
            <Settings className="size-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                <User className="size-4" />
                <span className="hidden sm:inline">Profile</span>
              </Link>

              <button
                onClick={logout}
                className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.55)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239,68,68,0.12)";
                  e.currentTarget.style.color = "rgba(252,165,165,0.9)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                <LogOut className="size-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;