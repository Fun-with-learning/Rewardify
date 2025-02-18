import React from "react";
import Quickaction from "../../Componenets/Quickaction";
import MyOrder from "../../Componenets/MyOrder";
import Transaction from "../../Componenets/Transaction";

const MainContent = () => {
  return (
    <div className="mt-[110px] ml-[20px] md:ml-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
       
        <div className="space-y-4">
          <Quickaction/>
          <Transaction />
        </div>

        {/* Right Column: MyOrder */}
        <div className="flex flex-col space-y-4">
          <MyOrder />
         
        </div>
      </div>
    </div>
  );
};

export default MainContent;