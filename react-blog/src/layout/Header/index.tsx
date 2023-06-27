import { NavPanel } from "../NavPanel";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div>
        <NavPanel />
      </div>
      <div>
        <form>
          <input
            className="header__search"
            type="text"
            placeholder="Serch..."
          />
        </form>
      </div>
    </header>
  );
};
