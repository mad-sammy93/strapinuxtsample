<template>
  <div class="contact-hero">
    <div class="address">
      <h3>{{ data?.heading1 }}</h3>
      <div>
        <p
          v-for="(contact, index) in fetchedData.contactInfo?.data?.attributes
            ?.contactInfo"
          :key="index"
        >
          {{ contact?.content }}
        </p>
      </div>
    </div>
    <div class="opentime">
      <h3>{{ data?.heading2 }}</h3>
      <div>
        <p>{{ fetchedData.openingHour?.data?.attributes?.workingDays }}</p>
        <p>
          {{
            fetchedData?.openingHour?.data?.attributes?.openTimings?.openHour.slice(
              0,
              5
            )
          }}
          -
          {{
            fetchedData?.openingHour?.data?.attributes?.openTimings?.closingHour.slice(
              0,
              5
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getContactData } from "~/gql/getContactdata";
import { ComponentBlocksContactBlock, GetContactDataQuery } from "~/types";

const props = defineProps({
  data: {
    type: Object as PropType<ComponentBlocksContactBlock>,
  },
});

const { data: fetchedData, error } =
  useAsyncQuery<GetContactDataQuery>(getContactData);
</script>

<style lang="sass">
.contact-hero
  display: flex
  justify-content: center
  gap: 50px
  .address,.opentime
    width: 30%
    background: $white
    padding: 20px
    border-radius: 12px
    h3
      margin-bottom: 20px
    p
      margin-bottom: 10px
</style>
