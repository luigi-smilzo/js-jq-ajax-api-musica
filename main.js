$(document).ready(function() {
    var container = $('.cds-container');
    var select = $('#genre');
    var source = $('#album-template').html();
    var template = Handlebars.compile(source);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(data) {
            var albumInfos = data.response;

            for (var i = 0; i < albumInfos.length; i++) {
                
                var item = albumInfos[i];

                var infoCd = {
                    imgUrl: item.poster,
                    albumTitle: item.title,
                    artist: item.author,
                    year: item.year,
                    genre: item.genre
                }
        
                var html = template(infoCd);
                container.append(html);

            }
        },
        error: function() {
            console.error('Album non trovato');
        }
    });

    select.change(function() {
        var actual = select.val();
        
        if (actual != '') {
            $('.cds-container .cd').each(function() {
                var actualCard = $(this);
                if ( actualCard.data('genre') == actual ) {
                    actualCard.show();
                } else {
                    actualCard.hide();
                }
            });
        } else {
            $('.cds-container .cd').show();
        }
    });

}); // <-- End ready