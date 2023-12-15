export const isProd = process.env.NODE_ENV === 'production';

export const getEnvConfig = (file: string = process.env.NODE_ENV!) => {
  try {
    return require(`./env/${file}.ts`);
  } catch (error) {
    return {};
  }
};

export const addDefine = (config) => {
  config.define ??= {};
  config.define = {
    ...config.define,
    ...getEnvConfig(),
  };
};

// export const addBuildPath = (config={}) => {
//   if (isProd) {
//     config.base = '/';
//     config.publicPath = './';
//   }
// };

export const addExternals = (config) => {
  config.externals ??= {};
  config.externals['react'] = 'var window.React';
  config.externals['react-dom'] = 'var window.ReactDOM';
  config.externals['antd'] = 'var window.antd';
  config.externals['@ant-design/icons'] = 'var window.icons';
  config.externals['dayjs'] = 'var window.dayjs';
  config.externals['ahooks'] = 'var window.ahooks';
};

export const addAntd = (config) => {
  (config.plugins ??= []).push('@umijs/plugins/dist/antd');
  config.antd = {
    appConfig: {},
    configProvider: {},
  };
};
