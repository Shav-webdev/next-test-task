import bcrypt from 'bcryptjs';
import clientPromise from '@/lib/mongodb';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(
        JSON.stringify({ message: 'All fields are required' }),
        { status: 400 },
      );
    }

    const client = await clientPromise;
    const db = client.db();

    // Check if user exists
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 400 },
      );
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ message: 'Invalid email or password' }),
        { status: 400 },
      );
    }

    const token = jwt.sign(user, process.env.JWT_SECRET!, {
      expiresIn: 3600,
    });

    const response = NextResponse.json({
      message: 'Login successful',
      success: true,
      email: user.email,
      name: user.name,
    });

    response.cookies.set('accessToken', token, { httpOnly: true });
    response.cookies.set('email', user.email, {
      httpOnly: true,
    });
    response.cookies.set('name', user.name, {
      httpOnly: true,
    });

    // If credentials are valid, you can generate a session, token, or just send a success response
    return response;
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong' }), {
      status: 500,
    });
  }
}
