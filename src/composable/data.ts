import { ref } from "vue";

interface Image {
  url: string
  edit: boolean
  width: number
  height: number
  zoom: number
  nowEdit: boolean
}

export const images = ref<Image[]>([]);
