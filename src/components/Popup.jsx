import { CloseCircleOutlined } from "@ant-design/icons"
import { Button, Modal, Typography } from "antd"
import { useState } from "react"


const Popup = ({ children, content, title }) => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div onClick={() => setOpen(true)}>{children}</div>
            <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                styles={{ content: { padding: 0 } }}
                title={
                    <div className="px-3 py-2 rounded-t-md bg-primary">
                        <div className="flex">
                            <div className="mx-auto">
                                <Typography.Title level={5} type="secondary">
                                    {title}
                                </Typography.Title>
                            </div>
                            <CloseCircleOutlined className="text-foreground" onClick={() => setOpen(false)} />
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