define(['jquery'], function(jQuery){
 (function($) {
    
     quantize_map = {
     'person': ['people', 'person', 'people'],
     'was': ['were', 'was', 'were'],
     'has': ['have', 'has', 'have'],
     'space': ['spaces', 'space', 'spaces'],
     'them': ['them', 'it', 'them'],      
     'friend': ['friends', 'friend', 'friends'],
     'friends': ['no friends', 'a friend', 'friends'],
     'yourspace': ['one of your spaces', 'your space', 'one of your spaces']     
     }
    var capitalize = function(str){
         return str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
             return letter.toUpperCase();
         });
     }
    var quantize = function(key, val, join_str) {
        //if keys is an array, quantize each
         if(typeof(key) === 'object'){
            if(typeof(join_str) === 'undefined'){
                join_str = ' ';
            }
            var str = [];
            for(var i in key){
                str.push(quantize(key[i], val));
            }
            return str.join(join_str);
        }
        
        //if keys is a string, just quantize it
        if(val < 1){
            val = 0;
        }
        if(val > 1){
            val = 2;
        }
        var lcKey = key.toLowerCase();
        if(typeof(quantize_map[lcKey]) !== "undefined"){
            var quantized = quantize_map[lcKey][val];
            if(key[0] !== lcKey[0]){
               return capitalize(quantized)
            }
            return quantized;
        }
        if(val !== 1){
            return key + "s";
        }else{
            return key;
        }
         
    };
    
     
    $.extend({
        quantize: quantize
    });
    
    
    
    })(jQuery);
});
