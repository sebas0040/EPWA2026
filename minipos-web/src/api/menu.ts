import { http } from "./http";

export type MenuOption = {
  name: string;
  content: string;
};

export const menuApi = {
  list: (role: string) => http<MenuOption[]>(`/api/menu/${encodeURIComponent(role)}`),
};
