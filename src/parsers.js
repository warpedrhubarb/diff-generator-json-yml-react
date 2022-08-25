import yaml from 'js-yaml';

const mapping = {
  'JSON': JSON.parse,
  'YAML': yaml.load,
};

const parse = ([data, format]) => mapping[format](data);

export default parse;
