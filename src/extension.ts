// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "react-add-new-vscode-extension" is now active!'
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'react-add-new-vscode-extension.newComponentWithStyles',
      () => {
        vscode.window.showInformationMessage(`New component with styles`);
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'react-add-new-vscode-extension.newComponent',
      () => {
        vscode.window.showInformationMessage(`New component`);
      }
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      'react-add-new-vscode-extension.newContext',
      () => {
        vscode.window.showInformationMessage(`New context`);
      }
    )
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
