var n = 6
var s = "ADAAAA";
var antonPlayedGames = 0;
var danikPlayedGames = 0;
for(var i = 0; i < n; ++i) {
    if(s[i] == "A") {
        ++antonPlayedGames;
    } else {
        ++danikPlayedGames;
    }
}

if(antonPlayedGames > danikPlayedGames) {
    print("Anton");
} else if(danikPlayedGames > antonPlayedGames) {
    print("Danik");
} else {
    print("Friendship");
}