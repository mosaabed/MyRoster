class Renderer {
    constructor()
    {}

    render(playersList)
    {
        const source = $('#player-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(playersList);
        $('#playerLayout').empty().append(newHTML);
    }
}