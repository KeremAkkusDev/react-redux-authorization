import { useDispatch, useSelector } from "react-redux";
import { languageChange, themeChange } from "../stores/site";

function Footer() {
  const { language } = useSelector((state) => state.site);
  const { dark } = useSelector((state) => state.site);
  const theme = dark ? "dark" : "light";
  const dispatch = useDispatch();
  return (
    <div className={dark ? "dark" : "light"}>
      <h3>Active Theme = {theme}</h3>
      <button onClick={() => {dispatch(themeChange());}}>
        Theme Change
      </button>

      <br />
      
      <h3>Active Language = {language}</h3>
      <button onClick={() => {dispatch(languageChange(language === "TR" ? "US" : "TR"));}}>
        Language Change
      </button>
    </div>
  );
}

export default Footer;
