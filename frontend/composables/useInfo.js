export default async () => {
  const query = gql`
    {
      websiteInfo {
        data {
          attributes {
            site_logo {
              data {
                attributes {
                  url
                }
              }
            }
            Site_name
          }
        }
      }
    }
  `;
  // const variables = {};

  const result = useAsyncQuery(query);
  // const { data, error } = await useFetch(`/api/website-info`);
  console.log(result);
  // if (error.value) {
  //   throw createError({
  //     ...error.value,
  //     statusCode: error.value.statusCode,
  //     statusMessage: error.value.statusMessage,
  //   });
  // }
  // debugger;
  return { result };
};
