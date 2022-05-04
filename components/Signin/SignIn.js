import SignInFooter from "./SignInFooter"
import SignInForm from "./SignInForm"
import SignInNav from "./SignInNav"

const signIn = () => {
  return (
    <div className="singin">
      <div id='loading'>Loading</div>
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