# Phantomaton CLI 💻

The Phantomaton CLI is a command-line interface plugin for the [Phantomaton](https://github.com/phantomaton-ai/phantomaton#readme) AI assistant framework. It provides a simple, text-based interface for interacting with Phantomaton applications.

## Usage 🛠️

To use the Phantomaton CLI, you'll need to install it as a plugin in your Phantomaton application. For more information on installing plugins, please refer to the [Phantomaton project documentation](https://github.com/phantomaton-ai/phantomaton#readme).

Once the Phantomaton CLI plugin is installed, you can start the command-line interface by running:

```
node cli.js
```

The CLI will prompt you for input, and you can interact with the Phantomaton assistant by typing messages and pressing Enter. To exit the CLI, type "exit" and press Enter.

## Extensibility 🔧

The Phantomaton CLI is designed to be extensible. You can create custom `user` and `input` implementations by registering new providers for the corresponding extension points. This allows you to customize the behavior of the command-line interface to suit your specific needs.

## Contributing 🦄

We welcome contributions to the Phantomaton CLI project! If you have any ideas, bug reports, or pull requests, please feel free to submit them on the [Phantomaton CLI GitHub repository](https://github.com/phantomaton-ai/phantomaton-cli).

## License 🔒

The Phantomaton CLI is licensed under the [MIT License](LICENSE).