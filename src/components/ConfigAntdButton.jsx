import { ConfigProvider } from "antd"
import { TinyColor } from '@ctrl/tinycolor';

const colors1 = ['#000', '#ccc'];
const colors2 = ['#f83600', '#f9d423'];
const colors3 = ['#2bb673', '#abecd6'];

const ConfigAntdButton = ({ children, type }) => {

    let color = colors1
    if (type === 'danger') {
        color = colors2
    }
    if (type === 'ok') {
        color = colors3
    }

    const getHoverColors = (colors) =>
        colors.map((color) => new TinyColor(color).lighten(5).toString());
    const getActiveColors = (colors) =>
        colors.map((color) => new TinyColor(color).darken(5).toString());

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: `linear-gradient(135deg, ${(color).join(', ')})`,
                        colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors((color)).join(', ')})`,
                        colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors((color)).join(', ')})`,
                        lineWidth: 0,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}

export default ConfigAntdButton