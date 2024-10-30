export class Exit extends Error {}

const exit = () => {
  throw new Exit();
};

export default exit;
