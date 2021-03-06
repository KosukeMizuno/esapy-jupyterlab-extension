const KEY = 'esapy-jupyterlab-extension';
const PLUGIN_NAME = `@KosukeMizuno/${KEY}`;

import { IDisposable, DisposableDelegate } from '@lumino/disposable';
import { JupyterFrontEnd, JupyterFrontEndPlugin } from '@jupyterlab/application';
import { NotebookPanel, INotebookModel, NotebookActions } from '@jupyterlab/notebook';
import { DocumentRegistry } from '@jupyterlab/docregistry';
//import { ToolbarButton, sessionContextDialogs } from '@jupyterlab/apputils';
import { ToolbarButton } from '@jupyterlab/apputils';


/**
 * Notebook panel extension
 */
class EsapyButtons implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {
    createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable {
        // Callback of btnRunAll
        let cbEsaUp = () => {
            NotebookActions.runAll(panel.content, context.sessionContext);
        }

        // Create a toolbar button
        let btnEsaUp = new ToolbarButton({
            className: 'btnEsaUp',
            iconClass: 'wll-EsaupIcon',
            onClick: cbEsaUp,
            tooltip: 'Esa up'
        });

        // Insert after run
        panel.toolbar.insertAfter('run', 'btnEsaUp', btnEsaUp);

        // Return a delegate which can dispose our created button
        return new DisposableDelegate(() => {
            btnEsaUp.dispose();
        });
    }
}


/**
 * Initialization data for the @wallneradam/run_all_buttons extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
    id: PLUGIN_NAME,
    autoStart: true,
    activate: (app: JupyterFrontEnd) => {
        console.log(`JupyterLab extension ${PLUGIN_NAME} is activated!`);
        // Register our extension
        app.docRegistry.addWidgetExtension('notebook', new EsapyButtons);
        app.contextMenu.addItem({
            selector: '.jp-Notebook',
            command: 'esa: up',
            rank: -0.5
        });
    }
};


export default extension;
