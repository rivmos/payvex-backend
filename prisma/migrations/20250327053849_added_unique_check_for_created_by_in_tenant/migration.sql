/*
  Warnings:

  - A unique constraint covering the columns `[created_by]` on the table `tenants` will be added. If there are existing duplicate values, this will fail.
  - Made the column `tenant_id` on table `roles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "tenant_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "DefaultRoles" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "DefaultRoles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DefaultRoles_name_key" ON "DefaultRoles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tenants_created_by_key" ON "tenants"("created_by");
