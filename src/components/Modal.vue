<template>
    <transition name="modal">
      <div v-if="show" class="modal-overlay" @click="closeOnOverlay">
        <div class="modal-content" :class="{ 'no-padding': noPadding }" @click.stop>
          <slot></slot>
          <Button v-if="showCloseButton" class="close-button" @click="$emit('close')">
            ×
          </Button>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup>
import Button from '@/components/Button.vue';

  defineProps({
    show: {
      type: Boolean,
      required: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    closeOnOverlayClick: {
      type: Boolean,
      default: true
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  });
  
  defineEmits(['close']);
  
  function closeOnOverlay(event) {
    if (props.closeOnOverlayClick) {
      emit('close');
    }
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 12px;
    max-width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .no-padding {
    padding: 0;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    padding: 0;
    width: 24px;
    height: 24px;
    line-height: 24px;
  }
  
  .close-button:hover {
    color: #333;
  }
  
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  </style>