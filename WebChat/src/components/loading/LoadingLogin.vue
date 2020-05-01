<template>
    <div class="widget">
        <div class="loader" :style="{width: 20 + 'px', height: 20 + 'px'}"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.widget {margin: 0;height: 30px;text-align: center;}
.loader {animation: spin 1s linear infinite;-webkit-animation: spin 1s linear infinite;margin: auto;border-radius: 50%;background: transparent;border: 5px solid #ddd;border-top: 5px solid #3490dc;}
@-webkit-keyframes spin {
to {
    border-top-color: #e3342f;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
@keyframes spin {
to {
    border-top-color: #e3342f;
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
}
}
</style>