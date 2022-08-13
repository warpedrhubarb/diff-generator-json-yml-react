import yaml from 'js-yaml';

const mapping = {
  'JSON': JSON.parse,
  'YAML': yaml.load,
};

export default ([data, format]) => mapping[format](data);
