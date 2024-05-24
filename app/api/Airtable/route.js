import { NextResponse } from "next/server";
import Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_TOKEN,
});

const base = Airtable.base("apppHwN9wBVfxLCuG");

export async function POST(req) {
  try {
    const { email } = await req.json();
    const records = await base("Email_Table")
      .select({
        fields: ["Email"],
      })
      .all();

    const emails = await records
      .filter((record) => record.fields.Email)
      .map((record) => record.fields.Email);

    const emailExists = emails.includes(email);

    return NextResponse.json({ emailExists });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error });
  }
}
