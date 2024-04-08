"use client"
import { useState } from "react";
import { BsDiagram3 } from "react-icons/bs";
import TabItem from "./TabItem";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { StaticTab } from "../../utils/distribtutorTabData";

const DistributorTab=()=>{
    const [tabItem,settabItem] = useState(StaticTab[0])
    console.log(tabItem)
    const clickEvent=(tabDetails)=>{
        console.log(tabDetails,"tabDetails")
        settabItem(tabDetails)
      }
    return (
        <Card className="bg-white -ml-5 shadow-md p-2 mt-1 fixed rounded-tr-lg">
            <CardHeader className="flex items-center ">
                <div className="bg-blue-500 rounded-lg mr-2 ">
                    <BsDiagram3 className="bg-blue-500 text-white m-1"/>
                    
                </div>
                <p className="font-bold ">I am a Distributors</p>
            </CardHeader>
            <CardBody >
                <ul className="ml-2 mt-3 p-2 flex flex-col">
                {StaticTab.map((eachTab)=>(
                <TabItem tabDetails={eachTab} key={eachTab.fontText} isActive={eachTab.fontText===tabItem.fontText} clickEvent={clickEvent}/>
                ))}
                 
                </ul>
            </CardBody>
        </Card>
    )
}

export default DistributorTab