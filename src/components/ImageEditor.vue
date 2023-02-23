<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { nowImage } from "../composable/data";

const props = defineProps<{
  w: number
  h: number
}>();

const context = ref<CanvasRenderingContext2D | null>(null);
const c = ref<HTMLCanvasElement | null>(null);
const draggable = ref(false);

onMounted(() => {
  context.value = c.value!.getContext("2d");
  drawImage();

  c.value?.addEventListener("mousedown", (e: MouseEvent) => {
    draggable.value = true;
  });

  c.value?.addEventListener("mouseup", () => {
    draggable.value = false;
  });

  c.value?.addEventListener("mousemove", (e: MouseEvent) => {
    if (!draggable.value) return;
    if (!nowImage.value?.edit)
      nowImage.value!.edit = true;

    nowImage.value!.position.x += e.movementX;
    nowImage.value!.position.y += e.movementY;
    drawImage();
  });
});

function drawImage() {
  if (!nowImage.value?.url) return;

  console.log("draw");

  const img = new Image();
  img.src = nowImage.value.url;
  img.setAttribute("crossOrigin", "anonymous");
  const widthRate = img.width / (img.height + img.width);
  const heightRate = img.height / (img.height + img.width);

  img.onload = () => {
    context.value!.clearRect(0, 0, props.w, props.h);
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    context.value!.drawImage(img, nowImage.value?.position.x!, nowImage.value?.position?.y!, props.w * widthRate * nowImage.value!.zoom, props.h * heightRate * nowImage.value!.zoom);
  };
}

watch(() => [nowImage.value?.zoom, nowImage.value?.edit], () => {
  drawImage();
  nowImage.value!.edit = true;
});
</script>

<template>
  <canvas ref="c" :width="nowImage?.width" :height="nowImage?.height" :style="{ width: `${nowImage!.width}px`, height: `${nowImage!.height}px` }" />
</template>

<style>
canvas {
  width: 100%;
  height: 100%;
  cursor: grab;
  border: 1px solid #531887;
  box-shadow: 0 0 0 1000px #c4c4c4;
}
</style>
