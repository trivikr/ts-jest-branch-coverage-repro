import { compile } from "handlebars";
const template = compile(`The number is {{result}}!`);

const oddOrEven = async (num: number) => {
  const result = num % 2 === 0 ? "even" : "odd";
  return template({ result });
};

export { oddOrEven };
