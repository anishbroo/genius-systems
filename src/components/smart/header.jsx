import { useState } from "react";
import HeaderView from "../dumb/headerView";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return <HeaderView isOpen={isOpen} setIsOpen={setIsOpen} />;
}

export default Header;
