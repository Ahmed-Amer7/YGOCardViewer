import { useQuery } from "@tanstack/react-query";

function getCards() {
    const { data, isError, isLoading } = useQuery({
      queryKey: ["cards"],
      queryFn: () => fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=blue-eyes").then((res) => res.json()),
      staleTime: Infinity
    })
  
    return data?.data
}

function getSpecificCards(name) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["specific-cards", name],
    queryFn: () => fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`).then((res) => res.json()),

  })

  return data?.data
}

export { getCards, getSpecificCards }