export const useQueryResult = (query) => {
  const { data, error, isLoading } = useAsyncQuery(query)
  return { data, error, isLoading }
}
