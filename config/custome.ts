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
    DEPLOY_CONFIG: {
      ...getEnvConfig(),
    },
  };
};

export const addBuildPath = (config) => {
  if (isProd) {
    config.base = '/';
    config.publicPath = './';
  }
};

export const addExternals = (config) => {
  config.externals ??= {};
  config.externals['react'] = 'var window.React';
  config.externals['react-dom'] = 'var window.ReactDOM';
};

// mf
const libraryName = 'Demo';
export const addMF = (config) => {
  (config.plugins ??= []).push('@umijs/plugins/dist/mf');
  config.mf = {
    name: libraryName,
    remoteHash: false,
    library: { name: libraryName, type: 'window' },
    shared: {
      react: { singleton: true, eager: true },
      'react-dom': { singleton: true, eager: true },
    },
  };
};
