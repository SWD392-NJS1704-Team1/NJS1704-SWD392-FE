import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Navigator from "@/components/Menu/Menu"
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'

export default function DefaultLayout({ children }) {
  return (
    
      <Layout className="min-h-screen">
       <Header />
        <Layout>
          <div className="bg-white">
           <Navigator />
          </div>
          <Content className="flex flex-col">{children}</Content>
        </Layout>
        <Footer />
      </Layout>
    
  )
}
