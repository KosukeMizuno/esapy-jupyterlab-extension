**This package has been incompleted. Just copied from a tutorial.**


# @kosukemizuno/esapy-jupyterlab-extension

Add 'Run all' and 'Restart kernel and run all' buttons into the toolbar


## Prerequisites

* JupyterLab
* esapy

## Installation

```bash
jupyter labextension install @KosukeMizuno/esapy-jupyterlab-extension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

