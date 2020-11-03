<template>
    <div class="menu-side">
        <ul class="nav">
            <li v-for="(item, index) in menuList" :key="index"> 
                <router-link :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import routes from '@/router/config'
export default {
    data() {
        return { 
        }
    },
    mounted() { 
    },
    computed: {
        menuList() {
            let navs = [];
            routes.map((item) => {
                navs.push({path: `/${item.path}`, name: item.name})
            })
            return navs
        }
    }
}
</script>
<style lang="less" scoped>
.menu-side{ 
    width: 100%;  
    padding-top: 60px;
    // background-color: #fff; 
    color: #333;
}

.menu_logo{ 
    padding: 5px 20px;
    color: #007fff;
    font-weight: bold;
    font-size: 24px;
}
.menu_logo img{
    width: 40px;
    height: 40px;
    border-radius: 5px;
}
.nav{
    // border-top: 1px solid #eee;
    li {
        position: relative;
        cursor: pointer;
        line-height: 46px;
        a { 
            display: block;
            color: #333;
            font-size: 14px;
            padding-left: 10px; 
            font-family: Consolas;
            &.active{
                color: #007fff;
                background-color: rgba(186, 231, 255, 0.4); 
                &:after{   
                    transform: scaleY(1);
                    -moz-transform: scaleY(1);
                    -webkit-transform: scaleY(1); 
                }
            }
            &:after{
                position: absolute;
                width: 3px;
                height: 100%;
                content: '';
                display: block;
                top: 0;
                right: 0; 
                background-color: #007fff; 
                transform: scaleY(0);
                -webkit-transform: scaleY(0);
                -moz-transform: scaleY(0);
                transition: all .1s linear;
                -moz-transition: all .1s linear;
                -webkit-transition: all .1s linear;
            }
        }
    }
} 
</style>
