const utils = {
    //格式化日期, datetime: 可以是时间戳也可以是Tue Apr 10 2018 15:43:55 GMT+0800 (中国标准时间)字符串； 格式化结果为： yyyy-mm-dd h:m:s
    getFormatDate: function(datetime) {
        var time = (typeof datetime == 'string' && datetime.constructor == String) ? datetime.getTime() : datetime;
        var date = new Date(time);
        var yy = date.getFullYear(),
            mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
            dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
            h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
            m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
            s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return yy + '-' + mm + '-' + dd + ' ' + h + ':' + m + ':' + s;
    },
    //格式化日期 返回结果为： 刚刚， XX秒前， 多少分钟前，多少小时前，多少天前的格式
    getDiffDate: function(datetime) {
        var time = (typeof datetime == 'string' && datetime.constructor == String) ? datetime.getTime() : datetime;
        var date = new Date(time);
        var seconds, minutes, hours, days,
            diff, //当前时间和传入时间的差值
            timeNow = parseInt(new Date().getTime() / 1000),
            yy = date.getFullYear(),
            mm = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
            dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
            h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
            m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
            s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

        diff = timeNow - time / 1000;
        days = parseInt(diff / (60 * 60 * 24));
        hours = parseInt(diff / (60 * 60));
        minutes = parseInt(diff / 60);
        seconds = parseInt(diff);

        if (days > 0 && days < 3) {
            return days + '天前';
        } else if (days <= 0 && hours > 0) {
            return hours + '小时前';
        } else if (hours <= 0 && minutes > 0) {
            return minutes + '分钟前';
        } else if (seconds < 60) {
            return '刚刚';
        } else if (days >= 3 && days < 30) {
            return mm + '-' + dd + ' ' + h + ':' + m + ':' + s;
        } else if (days > 30) {
            return yy + '-' + mm + '-' + dd + ' ' + h + ':' + m + ':' + s;
        }
    },
}

// export default utils;