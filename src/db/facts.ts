import { PrismaClient } from '@prisma/client';

export async function getMostRecentFact() {
  const prisma = new PrismaClient();

  try {
    return await prisma.factOfTheDay.findFirst({
      where: { date: { lte: new Date() } },
      orderBy: { date: 'desc' },
      include: { fact: true },
    });
  } catch (e) {
    console.error(e);
  }
}
