import React from 'react';

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Top Trades</h2>
      </header>
      <div className="p-3">

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Instrument</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Open Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Units</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Close Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Return</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Timeframe</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                    <div className="text-slate-800">GBPUSD</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">0.1220</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">0.01</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.1233</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$3</div>
                </td>
                <td className="p-2">
                  <div className="text-center">30m</div>
                </td>
              </tr>
              {/* Row */}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                    <div className="text-slate-800">XAUUSD</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.1210</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">0.01</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.1213</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$2.8</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1H</div>
                </td>
              </tr>
              {/* Row */}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                    <div className="text-slate-800">EURUSD</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">0.99920</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">0.01</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.00923</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$10</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1H</div>
                </td>
              </tr>
              {/* Row */}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                    <div className="text-slate-800">EURUSD</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">0.99920</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">0.01</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.00923</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$10</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1H</div>
                </td>
              </tr>
              {/* Row */}
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">

                    <div className="text-slate-800">EURUSD</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">0.99920</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">0.01</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.00923</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$10</div>
                </td>
                <td className="p-2">
                  <div className="text-center">1H</div>
                </td>
              </tr>
              {/* Row */}

            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
