(function() {
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
    null, {
      scriptClass: "mstrmojo.plugins.MyTestVis.MyTestVis",
      cssClass: "mytestvis",
      errorMessage: "There is either not enough data to display the visualization or an error occurred while executing the visualization.",
      errorDetails: "This visualization requires one or more attributes and one metric.",
      externalLibraries: [],
      useRichTooltip: false,
      supportNEE: true,
      reuseDOMNode: false,
      plot: function() {
        console.log("plot()");

        var domNode = this.domNode;
        var dataInterface = this.dataInterface;
        var data;

        var me = this;

        domNode.style.width = this.width + "px";
        domNode.style.height = this.height + "px";

        // make a new div
        var mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'mainWrapper');

        // add it
        domNode.appendChild(mainDiv);

        // another div
        var div_debugout = document.createElement('div');
        div_debugout.setAttribute('id', 'debug_output');
        div_debugout.innerHTML = "Starting tests... <br />";

        // add it
        mainDiv.appendChild(div_debugout);

        // etc...
      }
    })
}());
//@ sourceURL=MyTestVis.js
