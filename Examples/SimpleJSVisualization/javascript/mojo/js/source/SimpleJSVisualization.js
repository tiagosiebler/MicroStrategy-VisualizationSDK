(function() {
  var isEmptyFn = function() {
    console.log('isEmptyFn()');
    debugger;
    return false;
  }

  var nl = "<br />";

  var myVisualizationObject = {
    scriptClass: "mstrmojo.plugins.SimpleJSVisualization.SimpleJSVisualization",
    cssClass: "simplejsvisualization",
    externalLibraries: [],
    // excludeData: true,
    useRichTooltip: false,
    reuseDOMNode: false,

    // this function is called to determine if the visualization returned any data.
    // You can override this to handle your own "no data" situations your own way, or to render regardless of whether data was returned
    isEmpty: isEmptyFn,

    // this is a static & default error message, when something goes wrong.
    errorMessage: 'Static/default error message here',
    plot: function() {
      console.log("plot()");

      // The error message can be dynamically changed depending on conditions caught by your logic.
      // if (true != false) {
      //   this.errorMessage = 'Custom error because true does not equal false';
      //   return false;
      // }

      var domNode = this.domNode;
      var dataInterface = this.dataInterface;
      var data;
      var me = this;

      this.errorMessage = 'error1';

      domNode.style.width = this.width + "px";
      domNode.style.height = this.height + "px";

      var mainDiv = document.createElement('div');
      mainDiv.setAttribute('id', 'mainWrapper');
      domNode.appendChild(mainDiv);

      var innerHTML = "Starting tests..." + nl;
      try {
        innerHTML += "Rows, Columns:" + dataInterface.getTotalRows() + "," + dataInterface.getTotalCols() + nl + nl;

        innerHTML += "Attempting getRawData ENUM_RAW_DATA_FORMAT..." + nl;
        var data = dataInterface.getRawData(mstrmojo.models.template.DataInterface.ENUM_RAW_DATA_FORMAT.TREE, {
          hasSelection: true
        });
        innerHTML += "Attempting getRawData succeeded<br /> ";

      } catch (e) {
        innerHTML += "Attempting getRawData failed due to exception: " + e + nl;
        this.errorMessage = 'Exception during getRawData call: ' + e.message;
      }

      var div_debugout = document.createElement('div');
      div_debugout.setAttribute('id', 'debug_output');
      div_debugout.innerHTML = innerHTML;

      mainDiv.appendChild(div_debugout);

      // ready to render data
      var div_data_list = document.createElement('div');
      div_data_list.setAttribute('id', 'data_list');

      this.addUseAsFilterMenuItem();
      this.handleClick = function(e) {
        console.log('Selected: ' + e.target.innerText);

        var self = e.target.self;
        self.applySelection(e.target.selector);

        e.preventDefault();
      };
      var list = renderList(data, this);
      div_data_list.appendChild(list);
      mainDiv.appendChild(div_data_list);

      // custom properties debugging
      var div_prop_list = document.createElement('div');
      div_prop_list.setAttribute('id', 'custom_property_list');
      div_prop_list.appendChild(document.createTextNode('Custom properties:'));

      var list = document.createElement('ul');

      var custom_properties = this.getProperties();
      for (var i in custom_properties) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode('property: ' + i + ' value: ' + custom_properties[i]));
        list.appendChild(item);
      }

      div_prop_list.appendChild(list);
      mainDiv.appendChild(div_prop_list);

      var div_buttons = document.createElement('div');
      div_buttons.setAttribute('id', 'custom_buttons');

      var writePropertyButton = document.createElement('button');
      writePropertyButton.innerHTML = "Write property";

      var myCustomProperty = this.getProperty("myPropertyName");
      if (!myCustomProperty || typeof myCustomProperty === 'undefined') myCustomProperty = '';
      writePropertyButton.onclick = function() {
        var newCustomPropertyValue = prompt("Enter a value for custom property 'myPropertyName':", myCustomProperty);
        if (!newCustomPropertyValue) return;
        try {
          me.setProperty("myPropertyName", newCustomPropertyValue, {});
          console.log("Set property 'myPropertyName' to " + newCustomPropertyValue);
        } catch (e) {
          console.log("Writing custom property failed:" + e);
        }
      };
      div_buttons.appendChild(writePropertyButton);
      mainDiv.appendChild(writePropertyButton);
    }
  };

  var renderList = function(data) {
    var list = document.createElement('ul');

    for (var i = 0; i < data.children.length; i++) {
      var item = document.createElement('li');
      var anchor = document.createElement('a');
      var node = data.children[i];

      anchor.setAttribute('onclick', 'this.handleClick(event)');
      anchor.appendChild(document.createTextNode(node.name));
      anchor.handleClick = this.handleClick;
      anchor.self = this;

      item.appendChild(anchor);

      if (node.hasOwnProperty("formattedValue")) {
        anchor.setAttribute('title', node.formattedValue);
        item.appendChild(
          renderValue(node.formattedValue)
        );
      }
      if (node.hasOwnProperty("attributeSelector")) {
        anchor.selector = node.attributeSelector;
      }

      if (node.hasOwnProperty("children"))
        item.appendChild(renderList(node));

      list.appendChild(item);
    }

    return list;
  };

  var renderValue = function(value) {
    var list = document.createElement('ul');
    var item = document.createElement('li');
    item.appendChild(document.createTextNode(value));
    list.appendChild(item);

    return list;
  }

  // Create this visualization via the MSTR API
  if (!mstrmojo.plugins.SimpleJSVisualization) {
    mstrmojo.plugins.SimpleJSVisualization = {};
  }

  mstrmojo.requiresCls(
    "mstrmojo.CustomVisBase",
    "mstrmojo.models.template.DataInterface",
    "mstrmojo.vi.models.editors.CustomVisEditorModel"
  );

  mstrmojo.plugins.SimpleJSVisualization.SimpleJSVisualization = mstrmojo.declare(
    mstrmojo.CustomVisBase,
    null,
    myVisualizationObject
  );
}());
//@ sourceURL=SimpleJSVisualization.js
