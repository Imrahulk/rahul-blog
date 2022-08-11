/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiCopyrightFill } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
      © Copyright, 2022 <a href="/">Rahul K Nair</a>
      
      </p>
    </div>
  </footer>
)

export default Footer
