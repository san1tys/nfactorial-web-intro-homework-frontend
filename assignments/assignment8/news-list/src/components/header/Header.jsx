import './Header.css'

export default function Header({ children }) {
    return (
        <div className="container">
            <header className="header">
                <h1 className="header-title">medium alike</h1>
                {children}
            </header>
        </div>
    )
}