import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";

export default function Header() {
  return (
    <nav className="header">
      <div className="container">
        <p>
          <AiOutlineGlobal /> my travel journal.
        </p>
      </div>
    </nav>
  );
}
