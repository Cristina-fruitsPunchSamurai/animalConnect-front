import React from 'react'

export default function TeamMemberCard( {img ,name, status, description}) {
    return (
        <section>
            <div className="w-full mb-5">
                <div className="rounded-[20px] bg-white shadow-xl p-4">
                    <div className="relative w-full">
                    <img src={img} className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt="" />
                    </div>
                    <div className="mb-3 text-center">
                    <div className="mb-2">
                        <p className="text-lg font-bold text-navy-700"> {name}</p>
                        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2"> {status} </p>
                    </div>
                    </div>
                    <div className="mb-3 text-center">
                    <div className="mb-2">
                        <p className="!mb-0 text-sm font-bold text-brand-500"> {description} </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
