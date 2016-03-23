/**
 * Created by xmc1993 on 2016/3/23.
 */
var request = require('superagent');

module.exports = function search (query, fn){
    request.get('http://cn.bing.com/')
        .end(function(res){
            //fn(null, "")
            //if (res.ok) {
            //    alert('yay got ' + JSON.stringify(res.body));
            //} else {
            //    alert('Oh no! error ' + res.text);
            //}
            if(res.body && Array.isArray(res.body.results)){
                return fn(null, res.body.results);
            }
            //fn(new Error('Bad response'));
        });
};