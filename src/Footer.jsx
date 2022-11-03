import FooterLogo from "./FooterLogo";
import FooterMenu from './FooterMenu';
function Footer(){
  return(
    <div className="footer">
      <FooterLogo/>
      <FooterMenu/>
      <div className="copyring">
      Все права защищены.
      </div>
    </div>
  )
};
export default Footer;