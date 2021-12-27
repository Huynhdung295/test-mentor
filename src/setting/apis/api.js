import { fetchJSON, postJSON } from "./method";

const API = "https://movienew.cybersoft.edu.vn/api";
export const login = (data) =>
  postJSON(`${API}/QuanLyNguoiDung/DangNhap`, data);
export const getListUser = (data) =>
  fetchJSON(
    `${API}/QuanLyNguoiDung/LayDanhSachNguoiDung?maNhom=${data?.maNhom}`
  );
export const createUser = (data) =>
  postJSON(`${API}/QuanLyNguoiDung/ThemNguoiDung`, data);
