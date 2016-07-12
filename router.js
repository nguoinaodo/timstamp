var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/home.html'); 
});
router.use(function(req, res, next) {
    var str = req.path.substr(1).split('%20').join('');
    var unix, date, natural;
    var month = [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ];
    
    if (isUnix(str)) {
        unix = Number(str);
        date = new Date(unix*1000);
        natural = month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    } else if (isNatural(str)) {
        date = new Date(str);
        unix = Date.parse(date)/1000;
        natural = month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    } else {
        unix = natural = null;
    }
    
    res.json({
        unix: unix,
        natural: natural
    });
});
//
function isNatural(str) {
    return !isNaN(new Date(str));
}
function isUnix(str) {
    return !isNaN(Number(str));
}

