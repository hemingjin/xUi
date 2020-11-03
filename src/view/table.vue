<template>
    
    <div class="page">
        <h2 class="page-title">{{pageTitle}}</h2>
        <demo-show label="基本用法"> 
            <div class="demo">
                <x-table :data-source="tableData" :columns="columns1"></x-table>
            </div>
            <demo-block slot="code">  
                &lt;x-table :data-source="tableData" :columns="columns1"&gt;&lt;/x-table&gt;
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                columns1: [  
                    {name: '用户名', key: 'name', width: 180},
                    {name: '注册时间', key: 'date', width: 180},
                    {name: '家庭住址', key: 'address'},
                ],
            </demo-block>
        </demo-show>
        <demo-show label="自定义列模板"> 
            <div class="demo">
                <x-button @click="addUser" size="mini" type="primary" icon="add">新增用户</x-button>  
                <x-table :data-source="tableData" :columns="columns2"  is-border> 
                    <template slot-scope="{row}" slot="name">
                        <x-tag size="mini">{{row.data.name}}</x-tag> 
                    </template> 
                    <template slot-scope="{row}" slot="date"> 
                        <span>{{$utils.formatDate(row.data.date, 1)}}</span>
                    </template> 
                    <template slot-scope="{row}" slot="action"> 
                        <x-tooltip :content="row.data">
                            <x-button @click="getUserInfo(row.data)" size="mini" type="primary">查看用户</x-button>
                        </x-tooltip>
                        
                        <x-button @click="delUser(row.index)" size="mini" type="danger" >删除用户</x-button>
                    </template>
                </x-table>
            </div>
            <demo-block slot="code"> 
                &lt;x-table :data-source="tableData" :columns="columns2"  is-border&gt; 
                    &lt;template slot-scope="{row}" slot="name"&gt;
                        &lt;x-tag size="mini"&gt;{ {row.data.name} }&lt;/x-tag&gt; 
                    &lt;/template&gt; 
                    &lt;template slot-scope="{row}" slot="date"&gt;
                        &lt;span&gt;{ {$utils.formatDate(row.data.date)} }&lt;/span&gt;
                    &lt;/template&gt; 
                    &lt;template slot-scope="{row}" slot="action"&gt; 
                        &lt;x-button @click="getUserInfo(row.data)" size="mini" type="primary"&gt;查看用户&lt;/x-button&gt;
                        &lt;x-button @click="delUser(row.index)" size="mini" type="danger" &gt;删除用户&lt;/x-button&gt;
                    &lt;/template&gt;
                &lt;/x-table&gt;
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }], 
                columns2: [ 
                    {key: 'index', width: 60,  align: 'center'},
                    {name: '用户名', key: 'name', width: 180, slot: 'name'},
                    {name: '注册时间', key: 'date', width: 180, slot: 'date'},
                    {name: '家庭住址', key: 'address', align: 'center', width: 400},
                    {name: '操作', slot: 'action'}
                ],
                getUserInfo(data) {
                    console.log(data)
                },
                addUser() {
                    let user = {
                        name: `用户${new Date().getTime() + Math.random()* 10000}`,
                        date: new Date().getTime(),
                        address: '上海市普陀区金沙江路 1516 弄'
                    };
                    this.tableData.push(user)
                },
                delUser(index) {
                    console.log(index)
                    this.tableData.splice(index, 1)
                }
            </demo-block>
        </demo-show>
        <div class="api-wrap">
            <div class="api-title">组件API</div>
            <div class="api-item-wrap">
                <div class="api-item-title">组件属性/component attributes</div>
                <x-table :columns="apiColumns" :data-source="attributesData"></x-table>
            </div>
            <div class="api-item-wrap">
                <div class="api-item-title">columns列表项配置</div>
                <x-table :columns="apiColumns" :data-source="colsData"></x-table>
            </div>
        </div>
    </div>
</template>
<script>
const colsData = [
    {prop: 'index', type: 'String/Number', description: '索引(可选)'},
    {prop: 'name', type: 'String', description: '自定义的列名'},
    {prop: 'key', type: 'String', description: '对应数据源的key值'},
    {prop: 'width', type: 'String/Number',description: '列的宽度(可选)'},
    {prop: 'align', description: '列的对齐方式(可选)', type: 'String', options: 'center/left/right', default: 'left'},
    {prop: 'slot', description: '自定义列模板', type: 'String', options: '-', default: '-'}
]

export default {
    data() {
        return {
            tableData: [{
                    date: '2016-05-02',
                    name: '王小虎222',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎333',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎4444',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎555',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
            columns1: [  
                {name: '用户名', key: 'name', width: 240},
                {name: '注册时间', key: 'date', width: 180},
                {name: '家庭住址', key: 'address'},
            ],
            columns2: [ 
                {key: 'index', width: 60,  align: 'center'},
                {name: '用户名', key: 'name', width: 180, slot: 'name'},
                {name: '注册时间', key: 'date', width: 180, slot: 'date'},
                {name: '家庭住址', key: 'address', align: 'center', width: 400},
                {name: '操作', slot: 'action'}
            ],

            attributesData: [ {
                    prop: 'dataSource', description: '数据源', type: 'Array', options: '-', default: '-',}, {
                    prop: 'columns', description: '表格的列表项配置', type: 'Array', options: '-', default: '-',},{
                    prop: 'isBorder', description: '是否具有边框', type: 'Boolean', options: 'true/false', default: 'false'
                }
            ],
            colsData: colsData
            
        }
    },
    mounted() {
        console.log(this.$utils)
    },
    methods: {
        getUserInfo(data) {
            console.log(data)
        },
        addUser() {
            let user = {
                name: `用户${new Date().getTime() + Math.random()* 10000}`,
                date: new Date().getTime(),
                address: '上海市普陀区金沙江路 1516 弄'
            };
            this.tableData.push(user)
        },
        delUser(index) { 
            this.tableData.splice(index, 1)
        }
    }
}
</script>
