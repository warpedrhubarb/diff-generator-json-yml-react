import parse from './parsers.js';
import buildAst from './buildAst.js';
import format from './formatters/index.js';

export default (file1, file2, fileFormat1, fileFormat2, formatName = 'stylish') => {
  const firstObject = parse([file1, fileFormat1]);
  const secondObject = parse([file2, fileFormat2]);

  const diff = buildAst(firstObject, secondObject);
  return format(diff, formatName);
};
