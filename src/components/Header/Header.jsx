import Logo from "@/assets/logo.png";
import avatar from "@/assets/avatar.svg";
import { Header as AntHeader } from "antd/es/layout/layout";
import { Avatar, Typography } from "antd";
import { PATHS } from "@/constant/path";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { handleLogout } from "@/store/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const LinkStyled = styled.a`
  color: #fff !important;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: rgb(225 29 72) !important;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _onLogout = (e) => {
    e?.preventDefault();
    dispatch(handleLogout())
    navigate(PATHS.LOGIN);
  };
  
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
            <Typography.Text>
              <LinkStyled href="#" onClick={_onLogout}>
                Log out
              </LinkStyled>
            </Typography.Text>
          </div>
        </div>
      </div>
    </AntHeader>
  );
};
export default Header;
