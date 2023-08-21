import { resolve } from "path";

const pages = [
  { name: "main", path: resolve(__dirname, "../index.html") },
  { name: "users", path: resolve(__dirname, "../html/policy.html") },
  {
    name: "users",
    path: resolve(__dirname, "../html/yandex_4bcf7c858d70177e.html"),
  },
];

export default pages;
