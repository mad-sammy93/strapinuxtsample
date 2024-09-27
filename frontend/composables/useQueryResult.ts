export const useQueryResult = (query: any, id: any) => {
  const { result: data, error } = useQuery(query, id)

  console.log(data, error)
  return { data, error }
}
