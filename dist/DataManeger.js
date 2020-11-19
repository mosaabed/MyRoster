class DataManeger
{
    constructor(){
        this.data = []
        this.playersNum = 0
        this.playeLoaded = 0

    }
    gitData()
    {
        return this.data 
    }
    
    gitPerscent()
    {
        if (this.playersNum == 0)
        {
            return 0;
        }else
        {
            return (this.playeLoaded/this.playersNum)
        }
        
    }

    loadData()
    {
        $.get( "http://data.nba.net/10s/prod/v1/2018/players.json" ,(result) =>
        {   
           
            for (let leag in result.league)
            {
                for(let player of result.league[leag])
                {
                    this.playersNum++
                    $.get(`https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}` ,(result2)=>
                    {
                        
                        let playerInfo = {
                            lastName : player.lastName,
                            firstName : player.firstName,
                            jersey : player.jersey,
                            pos : player.pos,
                            teamId : player.teamId,
                            photo : result
                        }
                        this.data.push(playerInfo)
                        this.playeLoaded++
                    })
                }
            }
        })
        
    }

    
}