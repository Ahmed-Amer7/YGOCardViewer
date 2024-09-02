import { keepPreviousData, useQuery } from '@tanstack/react-query'

function getCards() {
    const { data, isError, isLoading } = useQuery({
      queryKey: ["cards"],
      queryFn: () => fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php").then((res) => res.json()),
    })
    return data?.data
}

function getSpecificCards(name, page) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["specific-cards", name, page],
    queryFn: () => fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`).then((res) => res.json()),
    placeholderData: keepPreviousData
  })
  return data?.data
}

function getSpecificCard(name) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["specific-card", name],
    queryFn: () => fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`).then((res) => res.json())
  })

  return [data?.data[0], isLoading]
}

export { getCards, getSpecificCards, getSpecificCard }