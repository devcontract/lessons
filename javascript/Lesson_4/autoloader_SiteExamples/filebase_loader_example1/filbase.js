<script type="text/javascript" src="http://images.filebase.ws/media/autocomplete.js"></script>
    <script>
    jQuery(document).ready(function($) {
        $('#livesearch').autocomplete({
            paramName: 'q',
            serviceUrl: '/livesearch',
            //width: 300,
            formatResult: function (suggestion, currentValue) {
                var value = currentValue.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                var pattern = '(' + value + ')';
                var f = suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
                var search_url = "/torrents/search/?search="+suggestion.value+"&c=0&t=liveonly";
                var url = "/torrents/"+suggestion.cat+"/"+suggestion.fid+"/";
                return '<a class="autocomplete-search-url" href="' + url + '">' + f + '</a>' +
                    ' - <a href="' + url + '">\u041f\u0435\u0440\u0435\u0439\u0442\u0438</a>';
            }
        });
    });
</script>