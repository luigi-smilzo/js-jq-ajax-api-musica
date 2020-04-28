$(document).ready(function() {
    var container = $('.cds-container');
    var source = $('#album-template').html();
    var template = Handlebars.compile(source);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(data) {
            var firstAlbum = data.response[0];
            var infoCd = {
                imgUrl: firstAlbum.poster,
                albumTitle: firstAlbum.title,
                artist: firstAlbum.author,
                year: firstAlbum.year
            }

            var html = template(infoCd);
            container.append(html);

        },
        error: function() {
            console.error('Album non trovato');
        }
    });





























}); // <-- End ready