import Image from "next/image";
import profile from "../../../assets/profile.jpg";

export function UserNav() {
  return (
          <Image
          src={profile}
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
       
  );
}
