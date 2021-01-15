import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('vscode-extension-mysql.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from vscode-extension-mysql!');
	});

	context.subscriptions.push(disposable);
}
export function deactivate() {}
