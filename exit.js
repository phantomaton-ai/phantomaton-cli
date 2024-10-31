export class Exit extends Error {}

const exit = () => {
  throw new Exit('Exiting...');
};

export default exit;
