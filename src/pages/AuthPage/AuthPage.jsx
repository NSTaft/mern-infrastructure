import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>AuthPage</h1>
            <div>
                <SignUpForm setUser={setUser} />
            </div>
            <div>
                <LoginForm setUser={setUser} />
            </div>
        </main>
    )
}