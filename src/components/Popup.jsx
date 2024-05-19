import { useAppDispatch, useAppSelector } from "@/lib/redux-toolkit/Hook"
import { closePopup, openPopup } from "@/lib/redux-toolkit/slices/PopupSlice"
import { CloseCircleOutlined } from "@ant-design/icons"
import { Modal, Typography } from "antd"


const Popup = ({ children, content, title }) => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector((state) => state.popup[title])

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
                    <div className="px-3 py-2 rounded-t-md bg-primary">
                        <div className="flex">
                            <div className="mx-auto">
                                <Typography.Title level={3} type="secondary">
                                    {title}
                                </Typography.Title>
                            </div>
                            <CloseCircleOutlined className="text-foreground" onClick={() => dispatch(closePopup(title))} />
                        </div>
                    </div>
                }
                footer={null}
                closeIcon={null}
            >
                <div className="p-4">{content}</div>
            </Modal>
        </>
    )
}

export default Popup