<template lang="html">
    <div class="iconed-info">
        <i class="fas" :class="icon" :style="{ fontSize: computedSize }"></i>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        icon: { required: true },
        size: { type: String, default: '20px' }
    },
    computed: {
        computedSize() {
        // Garante que a unidade está correta
        return /^\d+$/.test(this.size) ? this.size + 'px' : this.size;
        }
    }
}
</script>

<style lang="css" scoped>
.iconed-info {
    margin-bottom: 10px;
}

.iconed-info:last-child,
.repo .iconed-info {
    margin-bottom: 0;
}

.repo .iconed-info {
    margin-right: 20px;
}

.iconed-info i {
    margin-right: 8px;
    width: 22px;
}

.iconed-info span {
    color: #757575;
}
</style>
