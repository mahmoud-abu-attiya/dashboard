import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Navbar = () => {
  const viewSideBar = ()=> {
    let aside = document.querySelector(".sidebar")
    let overlay = document.querySelector(".overlay")
    aside.style.left = 0
    overlay.style.display = "block"
    overlay.addEventListener('click',()=>{
      aside.style.left = ''
      overlay.style.display = 'none'
    })
  }
  return (
    <nav>
      <button className="bars" onClick={viewSideBar}>
        <MenuRoundedIcon />
      </button>
      <div className="logo">&gt;_Nees</div>
    </nav>
  )
}

export default Navbar