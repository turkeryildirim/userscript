// ==UserScript==
// @name         teknoseyir
// @namespace    https://github.com/turkeryildirim
// @version      0.1
// @description  tag blacklist
// @author       Türker YILDIRIM
// @require      https://code.jquery.com/jquery-3.1.1.min.js
// @match        https://teknoseyir.com/*
// @grant        none
// ==/UserScript==

// deh
(function($){
    $(document).ready(function(){
        // lowercase
        var blackList = ['#steam', '#adanagetto', '#40sabaherkenkalk'];

        // cleanup
        $("article[id^='post']").find("a.hash_tag").each(function() {
            var text = $(this).text().toLowerCase();
            if ($.inArray(text, blackList) > -1) {
                $(this).parents('article').hide();
            }
        });

        // watch dog
        $('#col-left').on("DOMNodeInserted", "article", function(e){
            var elem = $(e.target);
            var text = elem.text().toLowerCase();

            for (var i = 0; i < blackList.length; i++) {
                if (text.indexOf(blackList[i]) > -1) {
                    elem.hide();
                    break;
                }
            }
        });

    });
})(jQuery);
// to be continued.
