-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('CONTACT', 'COMPANY');

-- CreateTable
CREATE TABLE "Entity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "industry" TEXT,
    "contactEmail" TEXT,
    "entityType" "EntityType" NOT NULL DEFAULT 'CONTACT',

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);
