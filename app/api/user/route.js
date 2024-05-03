import connectDB from "@/database";
import User from "@/models/User";

// export const dynamic = 'force-dynamic'

export const dynamic = 'force-dynamic'
export const GET = async () => {

  try {
    await connectDB()
    const user = await User.findById('6634a5cb9ec5d549ac393bd2')

    return Response.json(user)


  } catch (err) {
    console.log(err)
    return new Response('Something wrong', {status: 500})
  }
}

export const PUT = async (req) => {

  const updatedUser = await req.json()

  const workouts = updatedUser.user.workouts

  try {
    await connectDB()
//    let user = await User.findById('6634a5cb9ec5d549ac393bd2')

    await User.findOneAndUpdate({_id: '6634a5cb9ec5d549ac393bd2'}, {workouts: workouts})

    return Response.json({success: 'hello'})


  } catch (err) {
    console.log(err)
    return new Response('Something wrong', {status: 500})
  }
}
