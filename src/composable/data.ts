import { computed, ref } from "vue";

export interface Image {
  url: string
  edit: boolean
  width: number
  height: number
  zoom: number
  nowEdit: boolean
}

export const images = ref<Image[]>([{
  url: "https://plus.unsplash.com/premium_photo-1676231418217-647b67b57665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  edit: false,
  width: 100,
  height: 100,
  zoom: 1,
  nowEdit: true,
}]);

export const nowImage = computed(() => {
  return images.value.find(image => image.nowEdit);
});

export const waitImage = computed(() => {
  return images.value.filter(image => !image.nowEdit);
});
