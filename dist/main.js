const maneger = new DataManeger()
const rendererObj = new Renderer()
const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}
const filterTeam = new teamFilter(teamToIDs)
maneger.loadData()
$("#buttonMain").click(function()
{
    let teamName = $("#teamName").val() 
    $("#teamName").val("")
    $("#titleOfTeamName").empty().append(`<div> ${teamName} </div>`)
    rendererObj.render(filterTeam.filter(maneger.gitData() ,teamName ))
})