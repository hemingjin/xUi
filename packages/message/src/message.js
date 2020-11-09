import Message from './message.vue'
import Vue from 'vue'

let messageInstance = Vue.extend(Message) 

let instance;
let instances = [];
let seed = 1;

const message = function(options) {  
  options = options || {};
  if(typeof options === 'string') {
    options = {
      message: options
    }
  }
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;
  options.onClose = function() {
    message.close(id, userOnClose)
  }
  instance = new messageInstance({
    data: options
  })
  instance.id = id; 
  instance.vm = instance.$mount(); // 手动地挂载一个未挂载的实例。
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = 9999;
  instances.push(instance); 

  return instance.vm;
};

['info', 'success', 'warning', 'error'].forEach(type => {
  message[type] = options => {
    if(typeof options === 'string') {
      options = {
        message: options
      }
    }

    options.type = type;
    return message(options)
  }
})

message.close = function(id, closeCallback) {
  for(let i = 0, len = instances.length; i < len; i++) {
    if(id === instances[i].id) {
      if(typeof closeCallback == 'function') {
        closeCallback(instances[i])
      }
      instances.splice(i, 1);
      return;
    }
  }
}

message.closeAll = function() {
  for(let i = 0, len = instances.length; i < len; i++) { 
    instances[i].close();
  }
}

export default message;