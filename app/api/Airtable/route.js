import { NextResponse } from "next/server";
import Airtable from "airtable";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_TOKEN,
});

const base = Airtable.base("apppHwN9wBVfxLCuG");

export async function GET(req) {
  try {
    // You can perform operations on the base here
    // For example, let's fetch all records from a table named 'Table 1'
    const records = await base("Email_Table")
      .select({
        fields: ["Email"], // Replace "Email" with the name of your first column
      })
      .all();

    const emails = records
      .filter((record) => record.fields.Email) // Filter out records without an email
      .map((record) => record.fields.Email); // Extract the email from each record

    console.log(emails);

    return NextResponse.json(emails);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error });
  }
}
