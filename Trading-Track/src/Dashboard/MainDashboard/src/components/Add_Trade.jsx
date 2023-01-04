import React from 'react'

const Add_Trade = () => {
    return (
        <div className=" bg-white py-10 px-5 m-auto w-full h-full ">

            <div className="text-3xl mb-20 text-center">
                Add New Trade
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-2xl m-auto">

                <div className="col-span-2 lg:col-span-1 mx-4">
                    <input type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Pair Name" />
                </div>

                <div className="col-span-2 lg:col-span-1 px-3 mx-4 my-4">
                    {/* <input type="text" className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Email Address"/> */}

                    <label for="action" className='px-3 p-3'>Buy/Sell</label>

                    <select name="action" id="cars">
                        <option value="volvo">Buy</option>
                        <option value="saab">Sell</option>
                    </select>

                </div>

                <div className="col-span-2 lg:col-span-1 mx-4 my-4">
                    <input type="number" className=" border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Open Price" />
                </div>

                <div className="col-span-2 lg:col-span-1 mx-4 my-4">
                    <input type="number" className=" border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Lot Size" />
                </div>

                <div className="col-span-2 lg:col-span-1 mx-4 my-4">
                    <input type="number" className=" border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Close Price" />
                </div>

                <div className="col-span-2 lg:col-span-1 mx-4 my-4">
                    <input type="number" className=" border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Timeframe" />
                </div>

                <div className="col-span-2 lg:col-span-1 mx-4 my-4">
                    <input type="number" className=" border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="$ P/L" />
                </div>

                <div className="col-span-2 text-right">
                    <button className="py-3 px-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold w-full sm:w-32">
                        Submit
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Add_Trade