import React from "react";
import AI from "../AI";
import { Statements } from "../Statements";
import AR from "./AR";
import BC from "./BC";
import IOT from "./IOT";
import Web from "./Web";



const Table=()=>{
    return (
        <div class="bg-gray-800" id="Table">
            <div className="container p-2 mx-auto sm:p-4  dark:text-gray-100">
                <h2 className="mb-4 text-4xl py-4 font-semibold leading-tight text-slate-300">Problem Statements</h2>
                <div className="overflow-x-auto">
                    <text class="font-bold font-nunito text-3xl text-white ">Ai & ML</text>
                    <table className="min-w-full text-1xl border-4  border-l-slate-500">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />

                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-slate-500 text-teal-700">
                            <tr className="text-left  bg-gray-800">
                                <th className="p-3 font-semibold  text-2xl text-center">S.No</th>
                                <th className="p-3 font-semibold  text-2xl text-center">PS #</th>
                                <th className="p-3 text-center font-semibold text-2xl">Statement</th>
                                <th className="p-3 text-center text-2xl font-semibold">Description</th>
                                <th className="p-3 text-right text-2xl font-semibold">SDG Goals</th>

                            </tr>
                        </thead>
                        <tbody class="border-gray-400 bg-gray-700 font-medium">
                            {
                                AI.map((detail, key) => (
                                    <tr className=" border-gray-700 bg-slate-600">
                                        <td className="py-3 px-8">
                                            <p>{detail["S.no."]}</p>
                                        </td>
                                        <td className="py-3 px-8">
                                            <p>{detail["Problem Id"]}</p>
                                        </td>
                                        <td className="py-3 px-32">
                                            <p class="text-left flex-col items-center">{detail["Problem Statement"]}</p>

                                        </td>
                                        <td className="py-3 px-8 text-right">
                                            <p class="text-left flex-col items-center">{detail["Description"]}</p>
                                        </td>
                                        <td className="py-3 px-8 text-right">
                                            <p>{detail["SDG"]}</p>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    <br/><br/>
                    <text class="font-bold font-nunito text-3xl text-white">AR & VR</text>
                    <table className="min-w-full text-1xl border-4  border-l-slate-500">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />

                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-slate-500 text-teal-700">
                            <tr className="text-left  bg-gray-800">
                                <th className="p-3 font-semibold  text-2xl text-center">S.No</th>
                                <th className="p-3 font-semibold  text-2xl text-center">PS #</th>
                                <th className="p-3 text-center font-semibold text-2xl">Statement</th>
                                <th className="p-3 text-center text-2xl font-semibold">Description</th>
                                <th className="p-3 text-right text-2xl font-semibold">SDG Goals</th>

                            </tr>
                        </thead>
                        <tbody class="border-gray-400 bg-gray-700 font-medium">
                            {
                                AR.map((detail, key) => (
                                    <tr className=" border-gray-700 bg-slate-600">
                                        <td className="py-3 px-8">
                                            <p>{detail["S.no."]}</p>
                                        </td>
                                        <td className="py-3 px-8">
                                            <p>{detail["Problem Id"]}</p>
                                        </td>
                                        <td className="py-3 px-32">
                                            <p class="text-left flex-col items-center">{detail["Problem Statement"]}</p>

                                        </td>
                                        <td className="py-3 px-8 text-right">
                                            <p class="text-left flex-col items-center">{detail["Description"]}</p>
                                        </td>
                                        <td className="py-3 px-8 text-right">
                                            <p>{detail["SDG"]}</p>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table><br/><br/>
                    <text class="font-bold font-nunito text-3xl text-white">IOT</text>
                    <table className="min-w-full text-1xl border-4  border-l-slate-500">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />

                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-slate-500 text-teal-700">
                            <tr className="text-left  bg-gray-800">
                                <th className="p-3 font-semibold  text-2xl text-center">S.No</th>
                                <th className="p-3 font-semibold  text-2xl text-center">PS #</th>
                                <th className="p-3 text-center font-semibold text-2xl">Statement</th>
                                <th className="p-3 text-center text-2xl font-semibold">Description</th>
                                <th className="p-3 text-right text-2xl font-semibold">SDG Goals</th>

                            </tr>
                        </thead>
                        <tbody class="border-gray-400 bg-gray-700 font-medium">
                            {
                                IOT.map((detail, key) => (
                                    <tr className=" border-gray-700 bg-slate-600">
                                        <td className="py-3 px-8">
                                            <p>{detail["S.no."]}</p>
                                        </td>
                                        <td className="py-3 px-8">
                                            <p>{detail["Problem Id"]}</p>
                                        </td>
                                        <td className="py-3 px-32">
                                            <p class="text-left flex-col items-center">{detail["Problem Statement"]}</p>

                                        </td>
                                        <td className="py-3 px-8 text-right">
                                            <p class="text-left flex-col items-center">{detail["Description"]}</p>
                                        </td>
                                        <td className="py-3 px-8 text-right">
                                            <p>{detail["SDG"]}</p>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table><br/>
                    <text class="font-bold font-nunito text-3xl text-white py-24">Blockchain</text>
                    <table className="min-w-full text-1xl border-4 py-12  border-l-slate-500">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />

                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-slate-500 text-teal-700">
                            <tr className="text-left  bg-gray-800">
                                <th className="p-3 font-semibold  text-2xl text-center">S.No</th>
                                <th className="p-3 font-semibold  text-2xl text-center">PS #</th>
                                <th className="p-3 text-center font-semibold text-2xl">Statement</th>
                                <th className="p-3 text-center text-2xl font-semibold">Description</th>
                                <th className="p-3 text-right text-2xl font-semibold">SDG Goals</th>

                            </tr>
                        </thead>
                        
                        <tbody class="border-gray-400 bg-gray-700 font-medium">
                            {
                                BC.map((detail, key) => (
                                    <tr className=" border-gray-700 bg-slate-600">
                                        <td className="py-3 px-8">
                                            <p>{detail["S.no."]}</p>
                                        </td>
                                        <td className="py-3 px-8">
                                            <p>{detail["Problem Id"]}</p>
                                        </td>
                                        <td className="py-3 px-32">
                                            <p class="text-left flex-col items-center">{detail["Problem Statement"]}</p>

                                        </td>
                                        <td className="py-3 px-8 text-right">
                                            <p class="text-left flex-col items-center">{detail["Description"]}</p>
                                        </td>
                                        <td className="py-3 px-8 text-right">
                                            <p>{detail["SDG"]}</p>
                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table><br/>
                    
                    

                    
                                        </div>
                                    </div>
            <br /><br /><br />
        </div>)
}
export default Table;