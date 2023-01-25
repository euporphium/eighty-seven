-- CreateTable
CREATE TABLE "Fact" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FactOfTheDay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL,
    "factId" INTEGER NOT NULL,
    CONSTRAINT "FactOfTheDay_factId_fkey" FOREIGN KEY ("factId") REFERENCES "Fact" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "FactOfTheDay_date_key" ON "FactOfTheDay"("date");
