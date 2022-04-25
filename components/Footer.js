import CopyrightTwoToneIcon from "@material-ui/icons/CopyrightTwoTone";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div>
        <CopyrightTwoToneIcon />
        {new Date().getFullYear()}, Made with ❤️, by 
        <Link href="https://www.linkedin.com/in/mahmoud-abu-attiya-978496210/" target="_blank"> Mahmoud Abu-Attiya</Link>
      </div>
      <div>
        <Link href="/">Marketplace</Link>
        <Link href="/">Blog</Link>
        <Link href="/">License</Link>
      </div>
    </footer>
  );
};

export default Footer;
