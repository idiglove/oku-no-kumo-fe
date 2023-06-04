import type {Config} from 'jest';

const config: Config = {
  verbose: true,
};
module.exports = {
    "testEnvironment": "jsdom"
}
export default config;

