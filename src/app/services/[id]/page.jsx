import dbConnect, { collectionNameObj } from '@/server/Connect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';
import banner from "../../../../public/assets/images/checkout/checkout.png"

async function page({params}) {
const d=await params
    const serviceCollection=dbConnect(collectionNameObj.serviceCollection)
    const data=await serviceCollection.findOne({_id:new ObjectId(d)})

    return (
        <div>
          <section className=' flex  justify-center '>
          
       <figure className='w-full relative'>
       <Image src={banner} className='w-full  h-96 object-cover'  alt='banner'/>
      <div className='absolute w-full h-full bg-gradient-to-r from-[#151515]  transparent-layer px-10 top-0 flex items-center '>

    <h1 className='text-3xl font-bold '>Service Details</h1>

      </div>
       </figure>
          </section>
 <div className='flex justify-center mt-4 '>
 <h1 className='text-white rounded-bl-[150px] rounded-tr-[150px] -mt-10 z-10 px-10 py-3 bd w-fit bg-red-600  '>Home/Service Details</h1>
 </div>
 <section className='sm:grid grid-cols-3 mx-10'>
 {/* left start side */}
 <div className='col-span-2'>
  <img src={data.img} alt="automatic service image" className='rounded-md' />
  <h1 className='text-4xl font-bold mt-12'>{data.title}</h1>
  <p className='mt-8'>{data.description}</p>

 </div>
 {/* left end side */}

  {/* right start side */}
  <div className='col-span-1'>

  </div>
 {/* right end side */}
 </section>



          <h1 className='text-black'>{JSON.stringify(data)}</h1>
        </div>
    );
}

export default page;