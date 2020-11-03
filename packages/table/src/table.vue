<template>
    <div class="x-table" :class="{'x-table-border': isBorder}">
        <div class="x-table-header-wrapper">
            <table class="x-table-header" cellspacing="0" border="0" cellpadding="0">
                <colgroup>
                    <col v-for="(col, index) in columns" :key="index" :width="col.width" :align="col.align" />
                </colgroup>
                <thead>
                    <tr>
                        <th v-for="(col, index) in columns" :key="index"> 
                            <div class="cell" :style="{'text-align': col.align}">
                                {{col.name ? col.name : '#'}}
                            </div>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
        <div class="x-table-body-wrapper">
            <table class="x-table-body" cellspacing="0" border="0" cellpadding="0">
                <colgroup>
                    <col v-for="(col, index) in columns" :key="index" :width="col.width" :align="col.align">
                </colgroup>
                <tbody>
                    <tr v-for="(data, index) in dataSource" :key="index"> 
                        <td v-for="(col, colIndex) in columns" :key="colIndex">
                            <div class="cell" :style="{'text-align': col.align}" v-if="!col.slot">
                                {{col.key !== 'index' ? data[col.key] : index + 1}}
                            </div>  
                            <div class="cell" :style="{'text-align': col.align}" v-else> 
                                <slot :row="{data, index}" :name="col.slot"></slot>
                            </div>  
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'xTable',
    props: {
        // 表格数据源
        dataSource: {
            type: Array,
        },
        // 表格的列表项配置
        // {index: '索引(可选)', name: '列名', key: '对应的数据源key', width: '列宽(可选)', align: '对齐方式（可选）', 
        // slot: '自定义列模板，插槽方式'} 
        columns: {
            type: Array
        },
        // 是否具有边框
        isBorder: {
            type: Boolean,
            default: false
        }, 
        
    }
}
</script>
