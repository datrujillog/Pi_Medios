-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "document" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rolesId" TEXT NOT NULL,
    CONSTRAINT "User_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productsId" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "saleAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usersId" TEXT NOT NULL,
    CONSTRAINT "Sale_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
