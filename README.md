# Organizing code by logical concern in Vue 3

When Vue 3 launched, the Vue team made us a promise: Vue 3 will make it easier to **organize your code by logical concern**, rather than by Vue component options.

That sounds great, and it looks even better—I loved the Vue team's eye-catching animations of color-coded lines of code zooming into perfect organization. But how do we actually achieve this in practice? How do we identify logical concerns, and how do we start organizing our code around them? More importantly, why would we do that?

To answer all those questions, I'll be giving a talk at VueConf Toronto. We'll refactor an [Options API component](/AlexVipond/organizing-code-by-logical-concern-in-vue-3/blob/main/src/components/ListboxOptionsApi.vue) to its Composition API equivalent. We'll explore new patterns, push the limits, and learn practical advice on how to unlock the best part of Vue 3's developer experience: **organized code**.

Here are the four listboxes referenced in the talk:
- Options API - [ListboxOptionsApi.vue](https://github.com/AlexVipond/organizing-code-by-logical-concern-in-vue-3/blob/main/src/components/ListboxOptionsApi.vue)
- Composition API, organized by options: [ListboxCompositionApiOrganizedByOptions.vue](https://github.com/AlexVipond/organizing-code-by-logical-concern-in-vue-3/blob/main/src/components/ListboxCompositionApiOrganizedByOptions.vue)
- Composition API, organized by logical concern: [ListboxCompositionApiOrganizedByLogicalConcern.vue](https://github.com/AlexVipond/organizing-code-by-logical-concern-in-vue-3/blob/main/src/components/ListboxCompositionApiOrganizedByLogicalConcern.vue)
- Bonus listbox: [ListboxBonus.vue](https://github.com/AlexVipond/organizing-code-by-logical-concern-in-vue-3/blob/main/src/components/ListboxBonus.vue)


