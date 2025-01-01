// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './components/auth/PrivateRoute';
// import Navigation from './components/Navigation';
// import Dashboard from './pages/Dashboard';
// import Backtesting from './pages/Backtesting';
// import Education from './pages/Education';
// import Settings from './pages/Settings';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="min-h-screen bg-gray-50">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
            
//             {/* Protected Routes */}
//             <Route
//               path="/"
//               element={
//                 <PrivateRoute>
//                   <>
//                     <Navigation />
//                     <main className="pt-16">
//                       <Routes>
//                         <Route path="/" element={<Dashboard />} />
//                         <Route path="/backtest" element={<Backtesting />} />
//                         <Route path="/learn" element={<Education />} />
//                         <Route path="/settings" element={<Settings />} />
//                       </Routes>
//                     </main>
//                   </>
//                 </PrivateRoute>
//               }
//             />

//             {/* Redirect all other routes to login */}
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </Routes>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Backtesting from './pages/Backtesting';
import Education from './pages/Education';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/backtest" element={<Backtesting />} />
            <Route path="/learn" element={<Education />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;