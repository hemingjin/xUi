import TimelineItem from './src/timelineItem'

TimelineItem.install = function(Vue) {
    Vue.component(TimelineItem.name, TimelineItem)
}

export default TimelineItem;