import { resolve } from "path";

const pages = [
  { name: "main", path: resolve(__dirname, "../index.html") },
  { name: "policy", path: resolve(__dirname, "../html/policy.html") },
  {
    name: "metrik",
    path: resolve(__dirname, "../html/yandex_4bcf7c858d70177e.html"),
  },
];

export default pages;
