<template>
    
    <div class="page">
        <h2 class="page-title">{{pageTitle}}</h2>
        <demo-show label="基本用法"> 
            <div class="demo">
                <div class="demo-item">
                    第{{page}}页
                </div>
                <div class="demo-item"> 
                    <x-pagination 
                        :page-count="300" :page-size="6" 
                        @current-change="changeCurrentPage"></x-pagination>
                </div>
                <div class="demo-item"> 
                    <x-pagination 
                        background
                        :page-count="30" 
                        :page-size="6" 
                         is-total 
                        @current-change="changeCurrentPage"></x-pagination>
                </div>
            </div>
            <demo-block slot="code"> 
                &lt;x-pagination 
                    :page-count="30" :page-size="6" 
                    @current-change="changeCurrentPage"&gt;&lt;/x-pagination&gt;
                &lt;x-pagination 
                    background
                    :page-count="40" 
                    :page-size="6" 
                    is-total
                    @current-change="changeCurrentPage"&gt;&lt;/x-pagination&gt;          
            </demo-block>
        </demo-show>
    </div>
</template>
<script>
export default {
    data() {
        return {
            page: 1
        }
    },
    methods: {
        changeCurrentPage(data) {
            this.page = data.page
        }
    }
}
</script>
