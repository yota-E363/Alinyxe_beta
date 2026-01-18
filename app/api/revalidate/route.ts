import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const { path } = await req.json();
    if (path) {
      revalidatePath(path);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }
    return NextResponse.json({ message: "Path is required" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}