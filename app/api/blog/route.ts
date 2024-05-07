import { adminDB } from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

interface RequestInterface {
  id?: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { id }: RequestInterface = (await req.json()) as RequestInterface;

    const startTime = Date.now(); // Capture start time

    const collections = await adminDB.blogs.findMany({
      skip: 0,
      take: 4000,
    });

    const endTime = Date.now(); // Capture end time

    const responseTime = endTime - startTime; // Calculate response time

    const collectionsCount = await adminDB.blogs.count();

    if (collections) {
      return NextResponse.json(
        {
          status: true,
          data: { blogs: collections, total: collectionsCount },
          message: "success",
          responseTime: responseTime + "ms", // Include response time in the response
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { status: false, message: "Failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.log("[POST SITE SETTING]", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Handle errors
  }
}
