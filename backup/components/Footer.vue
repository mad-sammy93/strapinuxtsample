<template>
  <div class="footer-wrapper">
    <div class="footer container">
      <div
        class="contact-info-wrapper"
        v-if="footerData?.contactInfo?.data?.attributes"
      >
        <h3>{{ footerData?.contactInfo?.data?.attributes.heading }}</h3>
        <ContactInfo
          v-for="(contactData, index) in footerData?.contactInfo?.data
            ?.attributes.contactInfo"
          :contactData="contactData"
          :key="index"
        />
      </div>

      <div class="navlinks">
        <h3>All Pages</h3>
        <ul>
          <li
            v-for="(item, index) in footerData?.navigation?.data?.attributes
              ?.navItems"
            :key="index"
          >
            <NavSubItem
              v-if="item"
              :name="item.title"
              :url="item.url"
            ></NavSubItem>
          </li>
        </ul>
      </div>

      <div v-if="footerData?.openingHour?.data?.attributes" class="openingtime">
        <h3>{{ footerData?.openingHour?.data.attributes.heading }}</h3>
        <p>{{ footerData?.openingHour.data.attributes.workingDays }}</p>
        <p>
          {{
            footerData?.openingHour.data.attributes.openTimings?.openHour.slice(
              0,
              5
            )
          }}
          -
          {{
            footerData?.openingHour.data.attributes.openTimings?.closingHour.slice(
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
import type { GetFooterQuery } from "../types";

const props = defineProps({
  footerData: {
    type: Object as PropType<GetFooterQuery>,
  },
});
</script>
<style lang="sass" scoped>

.footer-wrapper
  position: relative
  bottom: 0
  z-index: 50
  background: $blueVoilet
  color: $white
  width: 100%

  .footer
    display: flex
    justify-content: space-between
    align-items: flex-start
    padding: 40px 0px
    ul
      list-style: none
      gap: 20px
      li
        padding-bottom: 10px
    h3
      padding-bottom: 20px
      color: $vividOrange

    .navlinks,.openingtime
      max-width: 300px
      width: 100%

    .navlinks
      :deep(.nav)
        color: $white
      :deep(.router-link-active)
        color: $vividOrange

    .openingtime
      p
        padding-bottom: 10px
</style>
