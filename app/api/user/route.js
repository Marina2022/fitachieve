import connectDB from "@/database";
import User from "@/models/User";


// export const dynamic = 'force-dynamic'

export const dynamic = 'force-dynamic'
export const GET = async () => {

  try {
    await connectDB()
    const user = await User.findById('6634e7d79ec5d549ac393bd6')

    return Response.json(user)


  } catch (err) {
    console.log(err)
    return new Response('Something wrong', {status: 500})
  }
}

export const PUT = async (req) => {
  
  const {user} = await req.json()
 

  try {
    await connectDB()
    await User.findOneAndUpdate({_id: '6634e7d79ec5d549ac393bd6'}, {themes: user.themes})
    return Response.json({success: 'hello'})

  } catch (err) {
    console.log(err)
    return new Response('Something wrong', {status: 500})
  }
}
