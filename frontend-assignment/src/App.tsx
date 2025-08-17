// import { useState, useEffect } from "react";
// import { InputField } from "./components/InputField";
// import { Sun, Moon } from "lucide-react";

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [darkMode, setDarkMode] = useState(false);

//   // Apply/remove dark class on html element
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center p-8 transition-colors"
//       style={{
//         background: darkMode
//           ? "linear-gradient(135deg, #1a1a1a 50%, #333333 50%)"
//           : "linear-gradient(135deg, #42EADD 50%, #CDB599 50%)",
//       }}
//     >
//       <div className="w-full max-w-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-8 relative">
//         {/* 🌗 Dark/Light Toggle */}
//         {/* 🌗 Dark/Light Toggle */}
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="absolute top-4 right-4 p-2 rounded-full shadow-md transition hover:scale-110"
//           style={{
//             backgroundColor: darkMode ? "#42EADD" : "#42EADD", // always aqua
//           }}
//           aria-label="Toggle dark mode"
//         >
//           {darkMode ? (
//             <Sun size={20} className="text-yellow-500" />
//           ) : (
//             <Moon size={20} className="text-white" />
//           )}
//         </button>

//         <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
//           🚀 InputField Component Showcase
//         </h1>

//         {/* ✅ Basic Usage */}
//         <InputField
//           label="Username"
//           placeholder="Enter your username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           helperText="Must be at least 6 characters"
//           clearable
//         />

//         {/* ✅ Password with Toggle & Error */}
//         <InputField
//           label="Password"
//           placeholder="Enter your password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           passwordToggle
//           invalid={!password}
//           errorMessage={!password ? "Password is required" : ""}
//         />

//         {/* ✅ Loading State */}
//         <InputField
//           label="Email"
//           placeholder="Checking availability..."
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           loading
//         />

//         {/* ✅ Disabled Field */}
//         <InputField label="Disabled Input" value="I am disabled" disabled />

//         {/* ✅ Variants */}
//         <div className="space-y-4">
//           <InputField
//             label="Outlined (default)"
//             placeholder="Outlined input"
//             variant="outlined"
//           />
//           <InputField
//             label="Filled"
//             placeholder="Filled input"
//             variant="filled"
//           />
//           <InputField label="Ghost" placeholder="Ghost input" variant="ghost" />
//         </div>

//         {/* ✅ Sizes */}
//         <div className="space-y-4">
//           <InputField label="Small" placeholder="Small input" size="sm" />
//           <InputField label="Medium" placeholder="Medium input" size="md" />
//           <InputField label="Large" placeholder="Large input" size="lg" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import { InputField } from "./components/InputField";
import { DataTable, type Column } from "./components/DataTable";
import { Sun, Moon } from "lucide-react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Table demo data
  const sampleData = [
    { id: 1, name: "Alice", age: 24, role: "Developer" },
    { id: 2, name: "Bob", age: 30, role: "Designer" },
    { id: 3, name: "Charlie", age: 28, role: "Manager" },
  ];

  const columns: Column<{ id: number; name: string; age: number; role: string }>[] = [
    { key: "name", header: "Name", sortable: true },
    { key: "age", header: "Age", sortable: true },
    { key: "role", header: "Role", sortable: false },
  ];

  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState(sampleData);

  // ✅ Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen flex items-center justify-center p-8 transition-colors"
      style={{
        background: darkMode
          ? "linear-gradient(135deg, #1a1a1a 50%, #333333 50%)"
          : "linear-gradient(135deg, #42EADD 50%, #CDB599 50%)",
      }}
    >
      <div className="w-full max-w-6xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 space-y-16 relative">
        {/* 🌗 Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="absolute top-4 right-4 p-2 rounded-full shadow-md transition hover:scale-110"
          style={{ backgroundColor: "#42EADD" }}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-500" />
          ) : (
            <Moon size={20} className="text-white" />
          )}
        </button>

        {/* ================= INPUT FIELD SHOWCASE ================= */}
        <section>
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
            🚀 InputField Component Showcase
          </h1>

          <div className="space-y-6">
            <InputField
              label="Username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              helperText="Must be at least 6 characters"
              clearable
            />

            <InputField
              label="Password"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              passwordToggle
              invalid={!password}
              errorMessage={!password ? "Password is required" : ""}
            />

            <InputField
              label="Email"
              placeholder="Checking availability..."
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              loading
            />

            <InputField label="Disabled Input" value="I am disabled" disabled />

            {/* Variants */}
            <div className="space-y-4">
              <InputField label="Outlined (default)" placeholder="Outlined input" variant="outlined" />
              <InputField label="Filled" placeholder="Filled input" variant="filled" />
              <InputField label="Ghost" placeholder="Ghost input" variant="ghost" />
            </div>

            {/* Sizes */}
            <div className="space-y-4">
              <InputField label="Small" placeholder="Small input" size="sm" />
              <InputField label="Medium" placeholder="Medium input" size="md" />
              <InputField label="Large" placeholder="Large input" size="lg" />
            </div>
          </div>
        </section>

        {/* ================= DATATABLE SHOWCASE ================= */}
        <section>
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
            📊 DataTable Component Demo
          </h1>

          <div className="flex gap-4 mb-4">
            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setTableData([]);
                  setLoading(false);
                }, 1500);
              }}
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Show Empty State
            </button>
            <button
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setTableData(sampleData);
                  setLoading(false);
                }, 1500);
              }}
              className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              Reload Data
            </button>
          </div>

          <DataTable
            data={tableData}
            columns={columns}
            loading={loading}
            selectable
            onRowSelect={(rows) => console.log("Selected rows:", rows)}
          />
        </section>
      </div>
      
    </div>
  );
}

export default App;

