import "./Theme.css";
const Theme = () => {
  const themeChange = (e) => {
    if (e.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "light");
    } else {
      document.querySelector("body").setAttribute("data-theme", "dark");
    }
  };

  return (
    <div>
      <label className="switch">
        <input type="checkbox" onChange={themeChange} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Theme;
