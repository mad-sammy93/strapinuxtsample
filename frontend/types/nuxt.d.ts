// types/nuxt.d.ts

// Extending the NuxtApp interface to declare $getImageUrl
declare module '#app' {
  interface NuxtApp {
    $getImageUrl(url: string): string;
  }
}
export { };