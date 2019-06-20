const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players.join(', ')}`);
};

const team = {
    name: 'Liberty',
    coach: 'Casey Penn',
    players: ['Liberty', 'Casey Penn', 'Marge', 'Ben', 'Herbet', 'Sherry']
};

printTeam(team.name, team.coach, ...team.players);

const cities = ['Barcelona', 'Cape Town', 'Bordeaux'];
const citiesCopy = ['Santiago', ...cities];
console.log(citiesCopy);