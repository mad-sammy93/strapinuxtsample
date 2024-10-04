<template>
  <div>
    <div class="tabs">
      <p
        :class="[{ active: selectedTab === 'All' }]"
        @click="updateSelectedTab('All')"
      >
        All
      </p>
      <p
        v-for="(tab, index) in dishesCategories?.dishesCategories.data"
        :key="tab.id || index"
        @click="updateSelectedTab(tab.attributes?.name || '')"
        :class="[{ active: selectedTab === tab.attributes?.name }]"
      >
        {{ tab.attributes?.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getDishCategories } from "~/gql/getDishCategories";
import { DishesCategoryEntityResponseCollection } from "~/types";

const props = defineProps({
  selectedTab: {
    type: String,
  },
});

const emits = defineEmits(["changeTab"]);

type categoryRes = {
  dishesCategories: DishesCategoryEntityResponseCollection;
};

const { result: dishesCategories, error } =
  useQuery<categoryRes>(getDishCategories);

const updateSelectedTab = (tab: String) => {
  emits("changeTab", tab);
};
</script>

<style lang="sass" scoped>
.tabs
  display: flex
  border-radius: 40px
  color: $white
  background: $blueVoilet
  width: max-content
  p
    padding: 10px 40px
    cursor: pointer
  .active
    background: $white
    color: $vividOrange
    border-radius: 40px
</style>
