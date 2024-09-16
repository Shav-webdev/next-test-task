import bcrypt from 'bcryptjs';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 },
      );
    }

    const client = await clientPromise;
    const db = client.db();

    // Check if user already exists
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists' }), {
        status: 400,
      });
    }

    // Hash password using bcryptjs
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
    });

    return new Response(
      JSON.stringify({ message: 'User created successfully', created: true }),
      { status: 201 },
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
}
