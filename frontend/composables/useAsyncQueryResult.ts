export const useAsyncQueryResult = (query: any, id: any) => {
  const { data, error } = useAsyncQuery(query, id)
  return { data, error }
}
