import parse from './parsers.js';
import buildAst from './buildAst.js';
import format from './formatters/index.js';

const getDiff = (file1, file2, formatName = 'stylish') => {
  const firstObject = parse([file1.data, file1.format]);
  const secondObject = parse([file2.data, file2.format]);

  const diff = buildAst(firstObject, secondObject);
  return format(diff, formatName);
};

export default getDiff;
