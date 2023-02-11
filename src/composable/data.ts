import { ref } from "vue";

interface Image {
  url: string
  edit: boolean
}

export const images = ref<Image[]>([]);
