/* eslint-env node */

const basePackages = [
  { name: 'active-model-adapter', target: '^2.2.0' },
  { name: 'ember-cli-dotenv', target: '^2.2.1' },
  { name: 'ember-cli-flash', target: '^1.6.6' },
  { name: 'ember-cli-mirage', target: '^0.4.9' },
  { name: 'ember-cli-sass', target: '^8.0.1' },
  { name: 'ember-data-has-many-query', target: '^0.2.0' },
  { name: 'ember-get-config', target: '^0.2.4' },
  { name: 'ember-lodash', target: '^4.18.0' },
  { name: 'ember-moment', target: '^7.8.0' },
  { name: 'ember-simple-auth', target: '^1.7.0' },
  { name: 'ember-truth-helpers', target: '^2.1.0' }
];

const bootstrapPackage = {
  name: 'ember-bootstrap', target: '^2.1.2'
};

const cloudinaryPackage = {
  name: 'ember-cli-cloudinary', target: '0.2.0'
};

const getCloudinaryENV = (enabled) => {
  if (enabled) {
    return 'CLOUDINARY_CLOUD_NAME=cloudname\nCLOUDINARY_API_KEY=12345\nCLOUDINARY_BASE_URL=http://res.cloudinary.com/cloudname';
  }

  return '';
};

const getAllowedKeys = (cloudinary) => {
  let keys = ['"API_HOST"', '      "API_NAMESPACE"'];

  if (cloudinary) {
    keys.push('      "CLOUDINARY_CLOUD_NAME"');
    keys.push('      "CLOUDINARY_API_KEY"');
    keys.push('      "CLOUDINARY_BASE_URL"');
  }

  return keys.join(',\n');
};

const promptToBool = (data, key) => {
  return data[key] && data[key].toLowerCase() === 'y';
};

module.exports = {
  description: '',

  normalizeEntityName() {},

  locals: async function(options) {
    const bootstrapPrompt = await this.ui.prompt({
      type: 'input',
      name: 'bootstrap',
      message: 'Do you want to install ember-bootstrap? (y/n)'
    });

    const cloudinaryPrompt = await this.ui.prompt({
      type: 'input',
      name: 'cloudinary',
      message: 'Do you want to install ember-cli-cloudinary? (y/n)'
    });

    options.entity.bootstrap = promptToBool(bootstrapPrompt, 'bootstrap');
    options.entity.cloudinary = promptToBool(cloudinaryPrompt, 'cloudinary');
    options.cloudinaryENV = getCloudinaryENV(options.entity.cloudinary);
    options.allowedKeys = getAllowedKeys(options.entity.cloudinary);

    return options;
  },

  afterInstall: async function(options) {
    let packages = basePackages;

    if (options.entity.bootstrap) {
      packages.push(bootstrapPackage);
    }

    if (options.entity.cloudinary) {
      packages.push(cloudinaryPackage);
    }

    return this.addAddonsToProject({ packages });
  }
};
