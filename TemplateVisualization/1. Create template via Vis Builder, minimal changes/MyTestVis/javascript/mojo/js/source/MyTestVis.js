(function () { 
    if (!mstrmojo.plugins.MyTestVis) {
        mstrmojo.plugins.MyTestVis = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface",
        "mstrmojo.vi.models.editors.CustomVisEditorModel"
    );

    mstrmojo.plugins.MyTestVis.MyTestVis = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null,
        {
            scriptClass: "mstrmojo.plugins.MyTestVis.MyTestVis",
            cssClass: "mytestvis",
            errorMessage: "There is either not enough data to display the visualization or an error occurred while executing the visualization.",
            errorDetails: "This visualization requires one or more attributes and one metric.",
            externalLibraries: [{url:"http://myserver.com/someresource.min.js"}],
            useRichTooltip: false,
            supportNEE: true,
            reuseDOMNode: false,
            plot:function(){




console.log("plot code");




}})}());
//@ sourceURL=MyTestVis.js