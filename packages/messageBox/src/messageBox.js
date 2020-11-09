import MessageBox from './MessageBox.vue'
import Vue from 'vue'

let messageBoxConstrucor = Vue.extend(MessageBox);
let messageBoxInstance;
let currentMsgBox;

window.addEventListener('popstate', () => {
  console.log(2222)
  if (messageBoxInstance) {
    document.body.removeChild(messageBoxInstance.vm.$el);
    currentMsgBox = null;
  }
});

const messageBox = function (options) {
  options = options || {};
  if (typeof options == 'string') {
    options = {
      message: options
    }
  }

  messageBoxInstance = new messageBoxConstrucor({
    data: options
  })

  messageBoxInstance.vm = messageBoxInstance.$mount();
  document.body.appendChild(messageBoxInstance.vm.$el);
  messageBoxInstance.vm.visible = true;
  messageBoxInstance.dom = messageBoxInstance.vm.$el;
  messageBoxInstance.dom.style.zIndex = 9999;

  messageBoxConstrucor.prototype.callback = defaultCallback;

  return new Promise((resolve, reject) => {
    currentMsgBox = {
      resolve,
      reject
    }
  })
}

const defaultCallback = action => {
  if (action === 'confirm') {
    currentMsgBox.resolve('confirm')
  }
  currentMsgBox.reject('cancel')
  document.body.removeChild(messageBoxInstance.vm.$el);
}

export default messageBox