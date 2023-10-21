import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

interface gameType {
    id: string;
    title: string;
    bannerUrl: string;
}

async function main() {
    // base de materias e tags, para evitar erros, 
    //use apenas quando as tabelas estiverem limpas e na primeira vez que iniciar o projeto
    const gamesList:gameType[] = [
        {id: "c255af9e-768a-46e9-bf0d-88df4e2446a6", title: "League of Legends", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg"},
        {id: "83a1a5ae-01b3-478f-a03b-794d217699f1", title: "Grand theft auto V", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg"},
        {id: "db73037b-dd1b-4ecd-ae3a-dc7af4989fcd", title: "Fifa 22", bannerUrl: "db73037b-dd1b-4ecd-ae3a-dc7af4989fcd"},
        {id: "e7c313c2-8bf5-4080-8a99-aa1ba10ee61d", title: "Counter Strike", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg"},
        {id: "21eae3f9-d621-45e2-abff-b82ec36ff7d7", title: "Valorant", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg"},
        {id: "ca94d5b8-97b8-40ce-b852-1cec97115e7f", title: "Dota 2", bannerUrl: "https://static-cdn.jtvnw.net/ttv-boxart/29595-285x380.jpg"},
    ]
    let games = [];
	for(const game of gamesList){
        const {id, title, bannerUrl} = game
        const g = await prisma.game.upsert({
            where: { id },
            update:{
                title,
                bannerUrl
            },
            create: {
                id,
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