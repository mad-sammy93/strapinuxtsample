import { useQuery } from '@apollo/client';

export const useQueryResult = (query: any, id: any) => {
  const { data: data, error } = useQuery(query, id)

  console.log(data, error)
  return { data, error }
}
