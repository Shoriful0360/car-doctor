
import dbConnect, { collectionNameObj } from "@/server/Connect";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";



async function Service() {

const serviceCollection=dbConnect(collectionNameObj.serviceCollection)
const data=await serviceCollection.find().toArray()




    return (
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-10 px-20 mt-10 ">
             {
                data?.map(daita=><div key={daita._id} className="card border-2 card-compact bg-base-100 py-2  shadow-2xl">
                    <figure className="px-6">
                      <img
                        src={daita?.img}
                        alt="Shoes"  className="h-52 rounded-lg w-full " />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-black text-2xl font-bold">{daita?.title}</h2>
                     
                      <div className="card-actions text-2xl justify-end">
                        <p className="text-red-500">Price: ${daita?.price}</p>
                        <Link href={`/services/${daita?._id}`} className=" text-red-500">
                        <FaArrowRight />
                        </Link >
                      </div>
                    </div>
                  </div>)
             }  
        </div>
    );
}

export default Service;