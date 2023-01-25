import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.factOfTheDay.create({
    data: {
      fact: {
        create: {
          text: 'Rosé originated in the 6th century B.C. The Greeks created the original pink (light red) wines, but these first attempts were off-dry and tannic due to prolonged contact between grape and skin during fermentation.',
        },
      },
      date: new Date('1/1/2023'),
    },
  });
  await prisma.factOfTheDay.create({
    data: {
      fact: {
        create: {
          text: 'Pigs are members of the Suidae family, which includes eight genera and 16 species. Among those species are wild boars, warthogs, pygmy hogs, and domestic pigs.',
          // text: 'The first recorded use of the word “wine” was in 4000 B.C. in the ancient Sumerian city of Uruk.',
        },
      },
      date: new Date('1/2/2023'),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
