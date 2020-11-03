<template>
    <div class="x-pagination" :class="{'x-pagination-bg': background}">
        <span class="x-pagination-total" v-if="isTotal">共{{total}}页</span>
        <button class="button-prev" 
            @click="handlePrevClick" 
            :class="{'button-disabled': currentPageNumber == 1}">
            <i class="x-icon icon-return"></i>
            <!-- <span >上一页</span> -->
        </button>
        <ul class="x-pagination-ul" v-if="total <= 6">
            <li v-for="item in total" 
                :key="item" 
                :class="{'active': item == currentPageNumber}"
                @click="handlePageClick(item)">
                <span>{{item}}</span>
            </li>
        </ul> 
        <!-- 多于六页  显示前三 -->
        <ul class="x-pagination-ul" v-else-if="total > 6 && (currentPageNumber - 2 < 1 && currentPageNumber >= 1)"> 
            <li @click="handlePageClick(1)" :class="{'active': currentPageNumber == 1}"><span>1</span></li>
            <li @click="handlePageClick(2)" :class="{'active': currentPageNumber == 2}"><span>2</span></li>
            <li @click="handlePageClick(3)" :class="{'active': currentPageNumber == 3}"><span>3</span></li>
            <li><span>...</span></li>
            <li @click="handlePageClick(total)" :class="{'active': currentPageNumber == total}"><span>{{total}}</span></li>
        </ul> 
        <!-- 多于六页  显示后三 -->
        <ul class="x-pagination-ul" v-else-if="total > 6 && (currentPageNumber + 2 >= total && currentPageNumber <= total)">
            <li @click="handlePageClick(1)" :class="{'active': currentPageNumber == 1}"><span>1</span></li> 
            <li><span>...</span></li>
            <li @click="handlePageClick(total - 2)" :class="{'active': currentPageNumber == total-2}"><span>{{total - 2}}</span></li>
            <li @click="handlePageClick(total - 1)" :class="{'active': currentPageNumber == total-1}"><span>{{total - 1 }}</span></li>
            <li @click="handlePageClick(total)" :class="{'active': currentPageNumber == total}"><span>{{total}}</span></li>
        </ul>
        <!-- 多于六页  显示中间三页 -->
        <ul class="x-pagination-ul" v-else>
            <li @click="handlePageClick(1)" :class="{'active': currentPageNumber == 1}"><span>1</span></li> 
            <li><span>...</span></li>
            <li @click="handlePageClick(currentPageNumber - 1)" :class="{'active': currentPageNumber == currentPageNumber -1}"><span>{{currentPageNumber - 1}}</span></li>
            <li @click="handlePageClick(currentPageNumber)" :class="{'active': currentPageNumber == currentPageNumber}"><span>{{currentPageNumber}}</span></li>
            <li @click="handlePageClick(currentPageNumber + 1)" :class="{'active': currentPageNumber == currentPageNumber + 1}"><span>{{currentPageNumber + 1 }}</span></li>
             <li><span>...</span></li>
            <li @click="handlePageClick(total)" :class="{'active': currentPageNumber == total}"><span>{{total}}</span></li>
        </ul>
        <button 
            class="button-next" 
            @click="handleNextClick"
            :class="{'button-disabled': currentPageNumber == total}">
            <!-- <span >下一页</span> -->
            <i class="x-icon icon-enter"></i>
        </button>
    </div>
</template>
<script>
export default {
    name: 'xPagination',
    props: {
        // 总页数
        pageCount: Number,
        // 每页数据量
        pageSize: Number,
        // 当前页码
        currentPage: {
            type: Number,
            default: 1
        }, 
        // 是否有背景
        background: {
            type: Boolean,
            default: false
        },
        // 是否显示总页数
        isTotal: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentPageNumber: 1,
            currentPageArray: []
        }
    },
    computed: {
        total() {
            return Math.ceil(this.pageCount / this.pageSize)
        },
        
    },
    watch: {
        // 观察当前页码是否变化， 发生变化向父组件进行传值
        currentPageNumber(to, from) { 
            if(to !== from) {
                // 页码切换，向父组件传值,
                this.$emit('current-change', {page: to})
            }
        }
    },
    created() {
        // 不能直接在子组件中 修改props中的值， 数据单向流动性
        this.currentPageNumber = this.currentPage;
    },
    methods: {
        // 格式化页码数组
        formatPageArray(pageCount) {

        },
        // 页码切换监听
        handlePageClick(page) {
            this.currentPageNumber = page
        },
        // 上一页监听
        handlePrevClick() {
            if(this.currentPageNumber > 1) {
                this.currentPageNumber -= 1
            } 
        },
        // 下一页监听
        handleNextClick() {
            if(this.currentPageNumber < this.total) {
                this.currentPageNumber += 1
            }
        }
    }
}
</script>
