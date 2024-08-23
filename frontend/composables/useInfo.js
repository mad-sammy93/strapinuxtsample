export default async (id) => {
  const { data, error } = await useFetch(`/api/website-info`);

  if (error.value) {
    throw createError({
      ...error.value,
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage,
    });
  }
  return { data };
};
