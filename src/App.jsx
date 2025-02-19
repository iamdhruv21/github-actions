import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import LoginForm from "./Login-form.jsx"
import Dashboard from "./Dashboard.jsx"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    )
}

export default App

