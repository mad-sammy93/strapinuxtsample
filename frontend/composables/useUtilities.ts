export const useUtilities = () => {
  function toTitleCase(str: String) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  const useSizeFormat = (size: string) => {
    return size.replace('size_', '');
  }

  return { toTitleCase, useSizeFormat };
};
