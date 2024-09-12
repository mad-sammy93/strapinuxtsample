export const useQueryResult = (query, id) => {
  const { data, error, isLoading } = useAsyncQuery(query, id)
  return { data, error, isLoading }
}
