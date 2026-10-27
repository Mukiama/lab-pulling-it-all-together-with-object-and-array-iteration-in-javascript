function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
 
    };
}
const teamInfo = gameObject()
function teamNames (){
    return Object.keys(teamInfo).map(key => teamInfo[key].teamName)
}
console.log (teamNames())

function teamColors(teamName) {
    const team = Object.values(teamInfo).find(team => team.teamName === teamName)
    return team ? team.colors : undefined
}
console.log(teamColors('Brooklyn Nets'))
console.log(teamColors('Charlotte Hornets'))

//numPointScored is similar in approach to shoeSize only that one uses Object.values
function  numPointsScored(playerName) {
    for (const team of Object.values(teamInfo)) {
        const player = team.players[playerName]
        if (player) {
            return player.points
        }
    }
    return undefined
}
console.log(numPointsScored('Alan Anderson'))
console.log(numPointsScored('Ben Gordon'))

function shoeSize(playerName) {
    for (const teamKey in teamInfo) {
        const team = teamInfo[teamKey]

        for (const name in team.players) {
            if (name === playerName) {
                const player = team.players[name]
                return player.shoe
            }
        }
    }
    return undefined 
}
console.log(shoeSize('Alan Anderson'))
console.log(shoeSize('Ben Gordon'))

function playerNumbers (teamName) {
    for (const team of Object.values(teamInfo)) {
        if (team.teamName === teamName) {
            return Object.values(team.players).map(player => player.number)
        }
    }
    return undefined
}   

console.log (playerNumbers('Brooklyn Nets'))
console.log (playerNumbers('Charlotte Hornets'))

function playerStats (playerName) {
    for (const teamKey in teamInfo) {
        const team = teamInfo[teamKey]

        for (const name in team.players) {
            if (name === playerName) {
                const player = team.players[name]
                return player
            }
        }
    }
    return undefined
}
console.log(playerStats('Alan Anderson'))
console.log(playerStats('Ben Gordon'))

function bigShoeRebounds () {
    const shoeSizes = []

    for (const team of Object.values(teamInfo)) {
        const teamShoeSizes = Object.values(team.players).map(player => player.shoe)
        shoeSizes.push(...teamShoeSizes)
    }


    const bigShoe = shoeSizes.reduce((max, size) => Math.max(max, size), 0)

    for (const team of Object.values(teamInfo)) {
        const player = Object.values(team.players).find(player => player.shoe === bigShoe)
        if (player) {
            return player.rebounds
        }
    }

    return undefined
}

console.log(bigShoeRebounds())