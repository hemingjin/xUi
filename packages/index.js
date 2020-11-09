import utils from './utils'

import XButton from './button/index'
import XButtonGroup from './buttonGroup/index'
import XRow from './row/index'
import XCol from './col/index'
import XTag from './tag/index'
import XProgress from './progress/index'
import XPagination from './pagination/index'
import XTooltip from './tooltip/index'
import XInput from './input/index'
import XCheckboxGroup from './checkboxGroup/index'  
import XCheckbox from './checkbox/index'    // tofixed
import XCheckList from './checkList/index'
import XSelect from './select/index' 
import XOption from './option/index'
import XCard from './card/index'
import XBadge from './badge/index'
import XInputNumber from './inputNumber/index'
import XTable from './table/index' 
import XAlert from './alert/index' 
import XTimeline from './timeline/index'
import XTimelineItem from './timeline/timelineItem'
import XCarousel from './carousel/index'
import XCarouselItem from './carousel/carouselItem'
import XQuickInput from './quickInput/index'
import XMessage from './message/index'
import XMessageBox from './messageBox/index'

const components = [
    XButton,
    XButtonGroup,
    XRow,
    XCol,
    XTag,
    XProgress,
    XPagination,
    XTooltip,
    XInput,
    XCheckboxGroup,
    XCheckbox,
    XCheckList,
    XSelect,
    XOption,
    XCard,
    XBadge,
    XInputNumber,
    XTable, 
    XAlert,
    XTimeline,
    XTimelineItem,
    XCarousel,
    XCarouselItem,
    XQuickInput
]

const install = function(Vue) {
    if (install.installed) return;
    Vue.prototype.$utils = utils
    components.map( component => Vue.component(component.name, component)) 
    
    Vue.prototype.$message = XMessage;
    Vue.prototype.$messageBox = XMessageBox;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.vue)
}

export default {
    install,
    XButton,
    XButtonGroup,
    XRow,
    XCol,
    XTag,
    XProgress,
    XPagination,
    XTooltip,
    XInput,
    XCheckboxGroup,
    XCheckbox,
    XCheckList,
    XSelect,
    XOption,
    XCard,
    XBadge,
    XInputNumber,
    XTable, 
    XAlert,
    XTimeline,
    XTimelineItem,
    XCarousel,
    XCarouselItem,
    XQuickInput,
    XMessage,
    XMessageBox
}