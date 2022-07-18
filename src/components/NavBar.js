import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const renderLinks = (links) => {
    return links.map(link => <a key={link} href={`#${link}`}>{link}</a>)
  }

  return <nav>{renderLinks(links)}</nav>;
}

export default NavBar;
