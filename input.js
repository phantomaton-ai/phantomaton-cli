import output from './output.js';

const input = async (prompt) => {
  output(prompt);
  return new Promise((resolve) => {
    const lines = [];
    process.stdin.on('data', (data) => {
      const line = data.toString().trim();
      if (line.endsWith('\\')) {
        lines.push(line.slice(0, line.length - 1));
      } else {
        lines.push(line);
        resolve(lines.join('\n'))
      }
    });
  });
};

export default input;
