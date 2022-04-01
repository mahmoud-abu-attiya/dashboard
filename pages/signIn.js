// import { Sidebar } from "../components/Sidebar"

import SignInFooter from "../components/Signin/SignInFooter"
import SignInForm from "../components/Signin/SignInForm"
import SignInNav from "../components/Signin/SignInNav"

const signIn = () => {
  return (
    <div className="singin">
      <SignInNav />
      <div className="left">
        <h3>INSPIRED BY THE FUTURE:</h3>
        <h1>Nees for websits</h1>
      </div>
      <div className="form-container">
        <SignInForm />
        <SignInFooter />
      </div>
    </div>
  )
}

export default signIn
