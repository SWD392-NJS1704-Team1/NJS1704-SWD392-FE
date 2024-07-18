import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="flex justify-center h-full items-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={handleBack}>Back</Button>}
      />
    </div>
  )
}

export default PageNotFound