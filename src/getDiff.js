import parse from './parsers.js';
import buildAst from './buildAst.js';
import format from './formatters/index.js';

export default (file1, file2, formatName = 'stylish') => {
  const firstObject = parse([file1, 'JSON']);
  const secondObject = parse([file2, 'YAML']);

  const diff = buildAst(firstObject, secondObject);
  return format(diff, formatName);
};
