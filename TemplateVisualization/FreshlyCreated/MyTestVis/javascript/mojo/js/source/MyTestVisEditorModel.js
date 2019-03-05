(function () { 
    if (!mstrmojo.plugins.MyTestVis) {
        mstrmojo.plugins.MyTestVis = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.editors.CustomVisEditorModel",
        "mstrmojo.array"
    );

    mstrmojo.plugins.MyTestVis.MyTestVisEditorModel = mstrmojo.declare(
        mstrmojo.vi.models.editors.CustomVisEditorModel,
        null,
        {
            scriptClass: "mstrmojo.plugins.MyTestVis.MyTestVisEditorModel",
            cssClass: "mytestviseditormodel",
            getCustomProperty: function getCustomProperty(){




console.log("property code");




}
})}());
//@ sourceURL=MyTestVisEditorModel.js