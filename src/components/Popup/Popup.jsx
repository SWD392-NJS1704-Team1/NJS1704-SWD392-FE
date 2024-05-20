import { closePopup, openPopup } from "@/store/reducers/popupReducer";
import { CloseCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Popup = ({ children, content, title }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popup[title]);

  return (
    <>
      <div onClick={() => dispatch(openPopup(title))}>{children}</div>
      <Modal
        centered
        open={isOpen}
        onOk={() => dispatch(closePopup(title))}
        onCancel={() => dispatch(closePopup(title))}
        styles={{ content: { padding: 0 } }}
        title={
          <div className="p-3 rounded-t-md bg-black text-white">
            <div className="flex">
              <div className="mx-auto">
                <h1 className="text-xl">
                  {title}
                </h1>
              </div>
              <CloseCircleOutlined
                className="text-foreground"
                onClick={() => dispatch(closePopup(title))}
              />
            </div>
          </div>
        }
        footer={null}
        closeIcon={null}
      >
        <div>{content}</div>
      </Modal>
    </>
  );
};

export default Popup;
