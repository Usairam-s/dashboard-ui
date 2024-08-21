import Image from "next/image";

function UserCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl shadow odd:bg-myPurple even:bg-myYellow p-4 flex-1 min-w-[130px]">
      <div className="flex items-center justify-between">
        <span className="bg-white text-xs px-2 py-1 rounded-2xl text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="more" width={20} height={20} />
      </div>
      <h1 className="text-xl my-4 font-semibold">1,254</h1>
      <h2 className="text-gray-500 capitalize">{type}</h2>
    </div>
  );
}

export default UserCard;
