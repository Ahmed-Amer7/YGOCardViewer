import { useQuery } from "@tanstack/react-query";

export default function getCards() {
    const { data, isError, isLoading } = useQuery({
      queryKey: ["cards"],
      queryFn: () => fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((res) => res.json()),
      staleTime: Infinity
    })
  
    return data?.data
}