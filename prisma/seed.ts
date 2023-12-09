import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

interface gameType {
    title: string;
    bannerUrl: string;
}

async function main() {
    // base de materias e tags, para evitar erros, 
    //use apenas quando as tabelas estiverem limpas e na primeira vez que iniciar o projeto
    const gamesList:gameType[] = [
        {title: "League of Legends", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"},
        {title: "Grand theft auto V", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"},
        {title: "Fifa 22", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/1869092879_IGDB-285x380.jpg"},
        {title: "Counter Strike", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"},
        {title: "Valorant", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"},
        {title: "Dota 2", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"},
    ]
    let games = [];
	for(const game of gamesList){
        const {title, bannerUrl} = game
        const g = await prisma.game.upsert({
            where: { title },
            update:{
                title,
                bannerUrl
            },
            create: {
                title,
                bannerUrl
            }
        });
        games.push(g)
    } 	
    

    console.log(games)
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });