var fs = require('fs');
var str = 'a/b/c/d';

function creatFile(str) {
    var ary = str.split('/');
    var ary1 = [];
    function make(index) {
        if (!index) {
            index = 0;
        }
        if (index >= ary.length) {
            return;
        }
        ary1.push(ary[index]);
        var str1 = ary1.join('/');
        fs.exists(str1, function (flag) {
            if (!flag) {
                fs.mkdir(str1, function () {
                    make(index + 1);
                });
            }
        })
    }
    make();
}
creatFile(str);
