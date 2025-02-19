import { useNavigate } from "react-router-dom"
import "./dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        // Perform any logout logic here (e.g., clearing tokens, etc.)
        navigate("/")
    }

    return (
        <div className="dashboard">
            <nav className="navbar">
                <h1>Dashboard</h1>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </nav>
            <div className="dashboard-content">
                <h2>Welcome to your dashboard!</h2>
                <p>This is a simple dashboard page.</p>
            </div>
        </div>
    )
}

export default Dashboard

