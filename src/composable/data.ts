import { computed, ref } from "vue";

interface Position {
  x: number
  y: number
}

export interface Image {
  url: string
  edit: boolean
  width: number
  height: number
  zoom: number
  nowEdit: boolean
  position: Position
}

export const images = ref<Image[]>([{
  url: "https://plus.unsplash.com/premium_photo-1676231418217-647b67b57665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  edit: false,
  width: 100,
  height: 100,
  zoom: 1,
  nowEdit: true,
  position: {
    x: 0,
    y: 0,
  },
},
{
  url: "https://images.unsplash.com/photo-1676376327236-cd743ef57c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  edit: false,
  width: 100,
  height: 100,
  zoom: 1,
  nowEdit: false,
  position: {
    x: 0,
    y: 0,
  },
}]);

export const nowImage = computed(() => {
  return images.value.find(image => image.nowEdit);
});

export const waitImage = computed(() => {
  return images.value.filter(image => !image.nowEdit);
});
