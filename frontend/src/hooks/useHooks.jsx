import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await fetch(`
      ${import.meta.env.VITE_API}/food/carts?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      return res.json()
    },
  });
  return [cart, refetch]
}

export const UsersApi = () => {
  const { refetch, data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch(`
      ${import.meta.env.VITE_API}/users`)
      return res.json();
    }
  });
  return [users, refetch]
}

export const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { refetch, data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const res = await axiosSecure.get(`user/admin/${user?.email}`)
      console.log(res.data)
      return res.data?.admin
    },
  });
  return [isAdmin, isAdminLoading]
}