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
  // config.externals["react"]="React";
  // config.externals["react-dom"]="ReactDOM"
};

export const addAntd = (config) => {
  (config.plugins ??= []).push('@umijs/plugins/dist/antd');
  config.antd = {
    appConfig: {},
    configProvider: {},
  };
};
