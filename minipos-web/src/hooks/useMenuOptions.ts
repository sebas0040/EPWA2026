import { useQuery } from "@tanstack/react-query";
import { menuApi, type MenuOption } from "../api/menu";

export function useMenuOptions(role: string) {
  return useQuery<MenuOption[]>({
    queryKey: ["menuOptions", role],
    queryFn: () => menuApi.list(role),
    enabled: Boolean(role),
    staleTime: 1000 * 60 * 5,
  });
}
