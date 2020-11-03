const utils =  {
    // 手机号验证
    isPhone(str) {
        let reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
        return reg.test(str)
    },
    // 是否是正整数
    isZNum(str) {
        let reg =  /^\d+$/
        return reg.test(str)
    },
    //格式化时间
    formatDate(date, type) {
        if (typeof (date) !== String) {
            date = new Date(date);
        }
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        month = month >= 10 ? month : '0' + month;
        day = day >= 10 ? day : '0' + day;
        hours = hours >= 10 ? hours : '0' + hours;
        minutes = minutes >= 10 ? minutes : '0' + minutes;

        return type == 1 ? (date.getFullYear() + '-' + month + '-' + day ) : (date.getFullYear() + '-' + month + '-' + day + ' ' + hours + ':' + minutes);
    },
    //数字千分位格式化
	numberFormatQfw(number) {
		var str_n = number.toString();
		var result = "";
		while(str_n.length>3){
		    result = ","+str_n.slice(-3)+result;
		    str_n = str_n.slice(0,str_n.length-3)
		}
		if(str_n){
	  		return str_n+result
		}
    }, 
    //TODO 是否是移动设备
    isMobileDevice() {
        return window.innerWidth < 750 ? true : false;
    },
    // 数组排序根据数组内的某个属性值， 参数: arr:数组, property: 属性, type: 1: 升序， 2：降序
    compareArr(arr, property, type){
        return arr.sort( (a, b) => {
            var value1 = a[property];
            var value2 = b[property];
            return type == 1 ? (value1 - value2) : (value2 -value1);          
        })
    },
    // 前端分页， 针对数据量不大的列表操作 
    fedPageData(data, page, size) {
        return data.slice((page-1) * size, (page-1) * size + size);
    },
    // 拼接24位字符串
    get24String(date) {
        let s = "000000000000000000000000";
        let dateStr = date + '';
        return (s+dateStr).substr(dateStr.length);
    },
}

export default utils 