import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  let disposable

  // @command - git-q.qommit
  disposable = vscode.commands.registerCommand('git-q.qommit', () => {
    vscode.window.showInformationMessage('Hello World from Git Q!')
  })

  // @command - git-q.taq
  context.subscriptions.push(disposable)
  disposable = vscode.commands.registerCommand('git-q.taq', () => {
    vscode.window.showInformationMessage('Hello World from Git Q!')
  })
  context.subscriptions.push(disposable)

  // @command - git-q.qash
  disposable = vscode.commands.registerCommand('git-q.qash', () => {
    vscode.window.showInformationMessage('Hello World from Git Q!')
  })
  context.subscriptions.push(disposable)
}

export function deactivate() {}
