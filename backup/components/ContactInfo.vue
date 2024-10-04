<template>
  <div class="contact-info">
    <div class="content">
      <NuxtImg
        provider="strapi"
        :src="contactData?.icon?.data?.attributes?.url"
        :alt="contactData?.icon?.data?.attributes?.alternativeText"
        width="24"
        height="24"
      />
      <p>{{ contactData?.content }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  contactData: {
    type: Object as PropType<{
      __typename?: "ComponentContactInfoContactInfo";
      content?: string | null;
      icon?: {
        __typename?: "UploadFileEntityResponse";
        data?: {
          __typename?: "UploadFileEntity";
          attributes?: {
            __typename?: "UploadFile";
            url: string;
            alternativeText?: string | null;
          } | null;
        } | null;
      } | null;
    } | null>,
  },
});
</script>
<style lang="sass" scoped>
.contact-info
  color: $white

  .content
   display: flex
   gap: 10px
   max-width: 300px
   padding-bottom: 10px
</style>
