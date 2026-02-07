---
title: How to Run Network Models
---
<!-- ![waterfall](https://tools.riverscapes.net/assets/images/waterfall-74b966570b344ad6af3a29ca5e690ecb.svg) -->

<a href="https://tools.riverscapes.net/"><img
  src="https://tools.riverscapes.net/assets/images/waterfall-74b966570b344ad6af3a29ca5e690ecb.svg"
  alt="waterfall"
  style={{ float: "right", width: "400px", margin: "0 0 1em 1em" }}
/></a>

The [Riverscapes network models](https://tools.riverscapes.net) consist of ten or more geospatial models for analysing different aspects of riverscapes. The models can be chained together into a "waterfall" that starts by collecting together relevant datasets in the [Riverscapes Context](https://tools.riverscapes.net/rscontext/) model and culminates in the [Metric Engine](https://tools.riverscapes.net/rme/) (RME).

You can run one or more of these models for your area of interest using your own data. There are several strategies for doing this that range in complexity. Which one is right for your needs depends on your appetite for confinguring software as well as the scale of your data.

This page describes the various options and provides a brief overview of the tradeoffs between them. If you have questions or want to discuss either running the Riverscapes Consortium's network models or your own code using any of these strategies then contact <strong>support@riverscapes.freshdesk.com</strong>.


| Strategy                                                                             | Description                                                                                                                                                                                                                 | Advantages                                                                                                                                                                                                   | Disadvantages                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Local Install                                                                        | Clone the [model code](https://github.com/Riverscapes/riverscapes-tools) to your own computer and install the [necessary Python dependencies](https://github.com/Riverscapes/riverscapes-tools/blob/master/pyproject.toml). | Maximum control. Good when the data are too large for the other strategies. Good when you need to make changes to the code.                                                                                  | More complex configuration. Running the correct version of python and provisioning a compatible environment can be challenging, especially with IT-restricted machines.                                                   |
| [VSCode Dev containers](https://code.visualstudio.com/docs/devcontainers/containers) | Clone the model code to your local machine and run a docker environment locally.                                                                                                                                            | Sidesteps some of the configuration problems associated with python environment configuration on an individual machine. Will run in linux mode, even on windows machines.                                    | Requires Docker to be installed locally. Initial build can be slow, especially on older hardware. Some graphical or OS-level features may not be available                                                      |
| [GitHub Codespaces](https://github.com/features/codespaces)                          | GitHub's virtual computing environment.                                                                                                                                                                                     | Consistent environment for all contributors. Easy onboarding—just open in VS Code and build. Isolated from host machine, avoiding dependency conflicts. Supports custom tooling and extensions | There are costs associated with Codespaces. Processor and storage limitations. Codespaces are ephemeral and are automatically cleaned up if they are not used. Basic linux and git command-line knowledge is recommended. |
| [Cybercastor](https://docs.riverscapes.net/products/cyber-castor)                    | The Riverscapes Consortium's own cloud computing platform.                                                                                                                                                                  | Designed specifically for this purpose. Tight integration with the [Riverscapes Data Exchange](https://data.riverscapes.net). Good for large numbers of jobs running simultaneously.                         | There are costs associated with Cybercastor.                                                                                                                                                                              |


## Local Install

Installing Python and running the network models on your local computer is likely the most difficult of the three options. The network models [depend on several Python packages](https://github.com/Riverscapes/riverscapes-tools/blob/master/pyproject.toml), some of which involve nuanced install steps that vary based on your Python environment and operating system. Several dependencies include binary files that cannot be installed with `uv` or `pip` and require [wheel files](https://pythonwheels.com/) specific to your OS.

Riverscapes Consortium developers almost never choose to install the models locally. If we do, it’s typically on macOS or Linux. Configuring Windows computers with the dependencies has proven inconsistent, unreliable, and time-consuming.

### Step-by-Step Instructions

1. **Install Python**
   - Use Python 3.12 or newer (check the required version in [pyproject.toml](https://github.com/Riverscapes/riverscapes-tools/blob/master/pyproject.toml)).
   - On macOS/Linux, use `brew`  for installation.
   - On Windows, use the official installer, but expect additional troubleshooting.

2. **Upgrade pip and Install uv**
   - Run:  
     ```
     pip install --upgrade pip
     pip install uv
     ```

4. **Install Python Dependencies**
   - Use `uv` or `pip` to install dependencies from `pyproject.toml`:
     ```
     uv sync
     ```

4. **Manual Steps for Problematic Packages**
   - Some packages (e.g., GDAL, numpy, scipy) may require system-level libraries. Install these using your OS package manager:
     - macOS: `brew install gdal`
     - Ubuntu: `sudo apt-get install libgdal-dev`
   - Then retry installing the Python package.
### Tips

- Always consult the [pyproject.toml](https://github.com/Riverscapes/riverscapes-tools/blob/master/pyproject.toml) for exact package versions.
- If you run into issues, search for pre-built wheels or consult package documentation for OS-specific instructions.
- Consider using Docker or Dev Containers for a more reliable setup.

# VS Code Dev Container

Dev Containers use Docker to create a reproducible development environment inside VS Code. The [Dockerfile](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html) defines all dependencies, tools, and settings, so every developer gets the same setup regardless of their host OS.

### Prerequisites

- Install [Docker](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html)
- Install [Visual Studio Code](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html)
- Install the [Dev Containers extension](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html)

### Steps

1. **Open the Project in VS Code**
    - Launch VS Code.
    - Open the `riverscapes-tools` folder.
2. **Reopen in Container**
    - Press `F1` (or `Cmd+Shift+P`) to open the Command Palette.
    - Search for `Dev Containers: Reopen in Container` and select it.
3. **Wait for Build**
    - VS Code will build the container using [Dockerfile](vscode-file://vscode-app/Applications/Visual%20Studio%20Code.app/Contents/Resources/app/out/vs/code/electron-browser/workbench/workbench.html).
    - The environment will be set up automatically.
4. **Start Developing**
    - Once the container is ready, you can use the integrated terminal and editor as usual.
    - All dependencies and tools will be available inside the container.

## GitHub Codespaces

[GitHub Codespaces](https://github.com/features/codespaces) are virtual computers on which you can run the  network models. Pre-configured Codespaces with all the necessary Python dependencies already exist, making it easy to launch a new virtual machine to run any of the [network models](https://tools.riverscapes.net). 

You pay for the Codespaces through your own GitHub account. See the pricing [here](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces). You are charged for the time that the Codespace is active, as well as the size of the machine that you choose (memory, CPU, disk space etc).

The integration between Codespaces and [Visual Studio Code](https://code.visualstudio.com/) is extremely convenient. If you have Visual Studio Code installed on your local computer (highly recommended) then it connects directly to the Codespace running in the cloud on GitHub. The experience looks and feels like you are developing locally, but the code iteself is running in the cloud. (If you don't have Visual Studio Code then connecting to a Codespace means using a browser-based version of Visual Studio Code, which is surprisingly good experience, but not quite as convenient as using a local version.)

Here are the steps for running Riverscapes network models on Codespaces:

<!-- , followed by a video demonstrating the process. -->

1. Install Visual Studio Code.
2. Visit the [tools.riverscapes.net](https://tools.riverscapes.net) GitHub repository and fork it into your own GitHub account.
3. Click the triangle on the green "Code" button on the GitHub repo page.
4. Switch to the Codespaces tab.
5. Click the green "Create codespace on main" button.

You will be asked if you want to launch Visual Studio Code locally or on the web. We recommend locally, but either option works. The Copespace will take several minutes to build, install all the necessary Python dependencies, and open in Visual Studio Code.

### Workspaces

Pick which network model that you want to run and open the corresponding workspace stored in the `/Workspaces` folder. This will configure Visual Studio Code, set path locations, turn on helpful extensions etc. Not using the correct Workspace will likely make the process extremely frustrating.

### Running Network Models in Codespaces

You should now be ready to run Riverscapes network models. That said, typically you will want to provide input data for the model and we recommend the following:

1. Open a terminal in Visual Studio Code. 
2. Create a folder called `/Workspaces/data`

Place input data in this folder, organized however you want, and then edit the `launch.json` in the network model that you want to run (here's the link to the [BRAT launch.json](https://github.com/Riverscapes/riverscapes-tools/blob/master/packages/brat/.vscode/launch.json)) and point each input dataset to your corresponding data in the `/Workspaces/data` folder.

:::warning
Remember that Codespaces use virtual computers that disappear when you have finished with them. Download any data that you want to keep (e.g. configuration files you have edited or model output data) when you are finished. You do this by right clicking on the folder or file in the Visual Studio Code explorer tree and choosing "Download".
:::

## Cybercastor

The Riverscapes Consortium has developed a batch processing platform for running riverscapes network models. [Cybercastor](https://docs.riverscapes.net/products/cyber-castor) can orchestrate hundreds of model runs in parallel using extremely cost effective virtual computers running in the cloud.

Cybercastor retrieves projects from the [Data Exchange](https://data.riverscapes.net), feeds them into the current model run and then uploads the model output data into the data exchange. Data can be pulled from external sources using API calls etc.

Contact <strong>support@riverscapes.freshdesk.com</strong> for pricing running your data in Cybercastor or how to make your model to be compatible. The compute costs are minimal when compared to the human labour costs to configure either the local install or Codespace options described above. Typically model runs can be completed in a matter of a day or two once the input data are available in the Data Exchange.