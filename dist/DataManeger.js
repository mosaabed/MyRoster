class DataManeger
{
    constructor(){
        this.data = {}
    }
    gitData()
    {
        return this.data 
    }

    loadData()
    {
        $.get( "http://data.nba.net/10s/prod/v1/2018/players.json" ,(result) =>
        {
            this.data = result.league
        })
    }


} 