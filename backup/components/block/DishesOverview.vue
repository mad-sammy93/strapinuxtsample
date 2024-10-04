<template>
  <div class="dishes-overview">
    <h2>{{ heading }}</h2>
    <div class="dishes-components">
      <DishesTabs :selectedTab="selectedTab" @changeTab="changeTab" />
      <DishesServed v-if="dishes?.dishes.data" :dishes="dishes?.dishes.data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getDishes } from "~/gql/getDishes";
import { DishEntityResponseCollection, DishFiltersInput } from "~/types";

const props = defineProps({
  heading: {
    type: String,
  },
});

type res = {
  dishes: DishEntityResponseCollection;
};

const filters = useState<DishFiltersInput>(() => ({}));
const selectedTab = useState<string>(() => "All");
// filters.value = { dishes_categories: { name: { eq: "" } } };

const { result: dishes, error } = useQuery<res>(getDishes, {
  filters: filters,
});

const changeTab = (tab: string) => {
  selectedTab.value = tab;
  if (tab !== "All") {
    filters.value = { dishes_categories: { name: { eq: tab.toLowerCase() } } };
  } else {
    filters.value = {};
  }
};
</script>

<style lang="sass">
.dishes-overview
  margin-bottom: 60px
  h2
    margin-bottom: 20px
</style>
