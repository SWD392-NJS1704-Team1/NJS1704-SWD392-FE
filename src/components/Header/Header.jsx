import Logo from "@/assets/logo.png";
import avatar from "@/assets/avatar.svg";
import { Header as AntHeader } from "antd/es/layout/layout";
import { Avatar, Typography } from "antd";

export default function Header() {
  return (
    <AntHeader className="bg-black flex justify-between items-center">
      <img src={Logo} alt="Logo" className="w-28" />
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Avatar
            src={avatar}
            size={46}
            className="border-white border-2 cursor-pointer"
          />
          <div className="flex flex-col">
            <Typography.Text className="text-white">Admin</Typography.Text>
            <Typography.Text className="text-white cursor-pointer">
              Log out
            </Typography.Text>
          </div>
        </div>
      </div>
    </AntHeader>
  );
}
