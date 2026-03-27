import React from 'react'

function Card({ username, btnText = "Kya click kiya be", image }) {
  console.log(username);
  return (

    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] md:w-80 mx-auto">
      <div>
        <img
          src={image}
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between text-white">
          <h1 className="font-bold ">{username}</h1>
          <h1>{btnText}</h1>
        </div>
        <div className="flex  justify-between">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  )
}

export default Card
