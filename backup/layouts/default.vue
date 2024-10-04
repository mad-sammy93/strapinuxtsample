<template>
  <div>
    <TopHeader
      v-if="topHeaderData?.topHeader.data?.attributes"
      :topHeader="topHeaderData.topHeader.data.attributes"
    />
    <div class="container">
      <slot />
    </div>
    <Footer
      v-if="
        footerData.navigation?.data?.attributes &&
        footerData.openingHour?.data?.attributes
      "
      :footer-data="footerData"
    />
  </div>
</template>

<script lang="ts" setup>
import { getFooter } from "../gql/getFooter";
import { getTopHeader } from "../gql/getTopHeader";
import { GetFooterQuery, TopHeaderEntityResponse } from "../types";

const { data: footerData, error: navError } =
  await useAsyncQuery<GetFooterQuery>(getFooter);

type resTopHeader = { topHeader: TopHeaderEntityResponse };
const { data: topHeaderData, error: topHeaderError } =
  await useAsyncQuery<resTopHeader>(getTopHeader);
</script>
<style lang="sass"></style>
