export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig().public;
  return {
    provide: {
      getImageUrl: (url: string): string => {
        // Ensure URL is valid before attempting replacements or concatenation
        if (!url) {
          return ''; // Return empty string or handle error as needed
        }

        // Check if we should use S3 or a custom API endpoint
        if (config.useS3) {
          return url.replace('.digitaloceanspaces.com', '.cdn.digitaloceanspaces.com');
        }

        return `${config.apiEndpoint}${url}`;
      }
    }
  }
})