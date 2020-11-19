class teamFilter{
    constructor(teamToID)
    {
        this.teamToID = teamToID;
        this.tempFilterdData = []
    }
    filter(data , teamName){
        this.tempFilterdData = []
        const teamId = this.teamToID[teamName]
        if (teamId == undefined)
        {
            return [];
        }

        for (let leag in data)
        {
            for(let player of data[leag])
            {
                if (player.teamId == teamId)
                {
                    this.tempFilterdData.push(player)
                }
            }
        }
        return this.tempFilterdData
    }
}