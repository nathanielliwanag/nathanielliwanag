import React from "react";
import { personal } from "../data";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-center text-gray-400 text-sm">
      <p>
        © {new Date().getFullYear()} {personal.name}. All rights reserved.
      </p>
    </footer>
  );
}
