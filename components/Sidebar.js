import Link from 'next/link';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PostAddRoundedIcon from '@material-ui/icons/PostAddRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { useRouter } from "next/router";


export const Sidebar = () => {
  const router = useRouter();

  const handelDashClick = (e)=>{
    document.querySelectorAll(".sidebar ul li").forEach((li) => {
      li.classList.remove("dash-active")
    })
    e.target.classList.add("dash-active")
  }
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        &gt;_ Nees
      </div>
      <hr className="css-n4yg98"/>
      <ul>
          <Link href="/dashboard" passHref>
            <li onClick={handelDashClick} className={router.pathname == "/dashboard" ? "dash-active" : ""}>
              <HomeRoundedIcon />
              Dashboard
            </li>
          </Link>
          <Link href="/tables" passHref>
            <li onClick={handelDashClick} className={router.pathname == "/tables" ? "dash-active" : ""}>
              <StorageRoundedIcon />
              Table
            </li>
          </Link>
          <Link href="/billing" passHref>
            <li onClick={handelDashClick} className={router.pathname == "/billing" ? "dash-active" : ""}>
              <PaymentRoundedIcon />
              Billing
            </li>
          </Link>
          <h4>ACCOUNT PAGES</h4>
          <Link href="/" passHref>
            <li onClick={handelDashClick}>
              <PersonRoundedIcon />
              Sign in
            </li>
          </Link>
          <Link href="/" passHref>
            <li onClick={handelDashClick}>
              <PostAddRoundedIcon />
              Sign up
            </li>
          </Link>
        </ul>
        <div className="doc">
          <div className="s-icon">
            <StarRoundedIcon />
          </div>
          <h4>Need help?</h4>
          <p>Please check our docs</p>
          <button>DOCUMENTATION</button>
        </div>
    </aside>
  )
}
