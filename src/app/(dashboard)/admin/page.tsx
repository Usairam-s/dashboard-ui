import UserCard from "@/components/UserCard";
import React from "react";

function AdminPage() {
  return (
    <div className="flex p-4 gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 items-center justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle chart */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3"></div>
          {/* attendance chart */}
          <div className="w-full lg:w-2/3"></div>
        </div>
        {/* bottom chart */}
        <div></div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
}

export default AdminPage;
