import React from "react";
import { MainNav } from "@/components/Frame2/components/main-nav";
import Overview from "@/components/Frame2/components/overview";
import { UserNav } from "@/components/Frame2/components/user-nav";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import LineChart from "@/components/Frame2/components/line-chart";
import DonutChart from "@/components/Frame2/components/doughnut";
import Navbar from "../../components/Navbar/Navbar";

const Frame2 = () => {
  return (
    <>
    <Navbar />
      <div className="w-full h-fit flex-col bg-slate-100">
        <div className="m-auto border-b bg-white rounded-xl w-[98%] shadow-lg">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6 hidden sm:flex" />
            <div className="block sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </div>
            <div className="ml-auto flex items-center space-x-4">
              <div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="text-sm sm:text-base rounded-md border-2 sm:w-[80px] md:w-[100px] lg:w-[300px]"
                />
              </div>
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-10 space-y-4 p-1 sm:p-5 w-full ">
          <div className="flex flex-col sm:flex-row w-full justify-evenly items-center gap-3 ">
            <Tabs
              defaultValue="overview"
              className="w-full sm:w-2/5 "
            >
              <TabsContent
                value="overview"
                className="flex flex-wrap gap-3 w-full"
              >
                <div className="w-full md:w-1/2 lg:w-[45%]">
                  <Card className="w-full shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                      

                      <CardTitle className="text-sm font-medium">
                        Customers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">3,812</div>
                      <p className="text-xs text-muted-foreground text-green-500">
                        +15.73%
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className=" h-1/2 w-full md:w-1/2 lg:w-[45%]">
                  <Card className="w-full shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                      

                      <CardTitle className="text-sm font-medium">
                        Orders
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">1658</div>
                      <p className="text-xs text-muted-foreground text-green-500">
                        +21.15%
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full md:w-1/2 lg:w-[45%]">
                  <Card className="w-full shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                     


                      <CardTitle className="text-sm font-medium">
                        Revenue
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">12000</div>
                      <p className="text-xs text-muted-foreground text-green-500">
                        +12.76%
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-full md:w-1/2 lg:w-[45%]">
                  <Card className="w-full shadow-lg">
                    <CardHeader className="flex flex-row items-center gap-2 space-y-0 pb-2">
                     

                      <CardTitle className="text-sm font-medium">
                        Growth
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-lg font-bold">2000</div>
                      <p className="text-xs text-muted-foreground text-green-500">
                        +32.56%
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            <div className="w-full sm:w-1/2 flex items-center justify-center py-8">
              <Overview />
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 h-fit px-4 sm:px-8">
            <div className="w-full lg:w-3/5 p-2">
              <LineChart />
            </div>
            <div className="w-full lg:w-2/5">
              <DonutChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame2;
