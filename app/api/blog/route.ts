import { adminDB } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

interface RequestInterface {
  id?: string;
  page: number;
  filters: {
    CurrentAffairs: boolean;
    Education: boolean;
    Music: boolean;
    Philosophy: boolean;
    PoliticalScience: boolean;
    Science: boolean;
    History: boolean;
    Law: boolean;
    Games: boolean;
    Books: boolean;
    FoodandDrink: boolean;
    DataSource: boolean;
    WebTech: boolean;
    Economics: boolean;
    Medicine: boolean;
  };
  search?: string; // New property for search search
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { page, filters, search }: RequestInterface = await req.json();

    const startTime = Date.now(); // Capture start time

    // Construct filter object for Prisma query
    const prismaFilters = Object.entries(filters).reduce(
      (acc: any, [key, value]) => {
        if (value) {
          acc[key] = { equals: 1 };
        }
        return acc;
      },
      {}
    );

    // Construct query for keyword search
    const keywordQuery = search
      ? {
          OR: [
            { title: { contains: search, mode: "insensitive" } },
            { author: { contains: search.trim(), mode: "insensitive" } },
          ],
        }
      : {};

    const collections = await adminDB.blogs.findMany({
      where: {
        AND: [prismaFilters, keywordQuery], // Combine filter and keyword search
      },
      skip: 0,
      take: page,
    });

    const endTime = Date.now(); // Capture end time

    const responseTime = endTime - startTime; // Calculate response time

    const collectionsCount = await adminDB.blogs.count();

    return NextResponse.json(
      {
        status: true,
        data: { blogs: collections, total: collectionsCount },
        message: "success",
        responseTime: responseTime + "ms", // Include response time in the response
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("[POST SITE SETTING]", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
