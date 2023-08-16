import { resolve } from "path";

const pages = [
  { name: "main", path: resolve(__dirname, "../index.html") },
  { name: "users", path: resolve(__dirname, "../html/policy.html") },
];

export default pages;
